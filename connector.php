<?php
// connector.php — the ONE file that connects the front end (js/app.js) and the database (PDO + SQLite).
//
//   app.js --fetch--> connector.php?c=<collection> --PDO--> data/la_verdad_found.db
//
//   GET    connector.php?c=tickets            list the records (optionally &id=SUR-1 for one record)
//   POST   connector.php?c=tickets            create or update one record (JSON body)
//   DELETE connector.php?c=tickets&id=SUR-1   delete one record            (guards only)
//
// <collection> is one of: tickets, claims, chats, notifs, logs
//
// WHO MAY DO WHAT  (a "guard" is someone who signed in through auth.php)
//
//   collection   read                  write
//   tickets      everyone              everyone may CREATE (always as "Pending Verification"); only guards may change
//   claims       everyone*             everyone may CREATE (always as "Pending Review", item must be Stored and free); only guards may change
//   chats        everyone              everyone (visitors need it to send messages)
//   notifs       guards only           everyone may CREATE; only guards may change
//   logs         guards only           guards only
//   (* the ID number, evidence text and proof photo of a claim are hidden from non-guards)

declare(strict_types=1);

ini_set('display_errors', '0');                       // never print PHP warnings into the JSON
require __DIR__ . '/database.php';                    // gives us $pdo
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

session_start(['read_and_close' => true, 'cookie_httponly' => true, 'cookie_samesite' => 'Strict']);
$isGuard = !empty($_SESSION['guard']);

const TICKET_STATUS = ['Pending Verification', 'Verified', 'Stored', 'Returned', 'Rejected'];
const CLAIM_STATUS  = ['Pending Review', 'Approved', 'Rejected', 'Released'];
const REPORTERS     = ['Student', 'Faculty & Staff', 'Guest'];
const MAX_BODY      = 6 * 1024 * 1024;                // a shrunk photo is ~30 KB; this is generous
const MAX_FIELD     = 2000;                           // longest text any single column may hold
const MAX_EXTRA     = 200000;                         // longest JSON blob kept in the "extra" column

// ---------------------------------------------------------------------------
// 1. What each collection is: its table, which front-end field goes in which column
//    (front-end field => database column), and who may read / write it.
//    Any field not listed in 'map' is kept as JSON in the table's "extra" column.
// ---------------------------------------------------------------------------
$COLLECTIONS = [
    'tickets' => [
        'table' => 'surrender_tickets', 'required' => ['item'],
        'map' => [
            'who' => 'reporter_type', 'name' => 'reporter_name', 'email' => 'reporter_email',
            'item' => 'item_name', 'cat' => 'category', 'where' => 'location_found',
            'when' => 'date_found', 'time' => 'time_found', 'more' => 'other_info',
            'photo' => 'photo_path', 'status' => 'status',
        ],
        'enums' => ['status' => TICKET_STATUS, 'who' => REPORTERS],
        'shape' => ['when' => '/^(\d{4}-\d{2}-\d{2})?$/', 'time' => '/^(\d{1,2}:\d{2}( ?[AaPp][Mm])?)?$/'],
        'ints' => [], 'hide' => [],
        'read' => 'public', 'write' => 'create-only', 'force' => ['status' => 'Pending Verification'],
    ],
    'claims' => [
        'table' => 'claim_requests', 'required' => ['tid'],
        'map' => [
            'tid' => 'ticket_id', 'who' => 'claimant_type', 'name' => 'claimant_name',
            'idno' => 'claimant_id_number', 'email' => 'lv_email', 'ev' => 'evidence_details',
            'photo' => 'proof_photo_path', 'status' => 'claim_status', 'time' => 'time_label',
        ],
        'enums' => ['status' => CLAIM_STATUS],
        'shape' => ['time' => '/^[\p{L}\p{N}\p{Zs} :,.\-\/]{0,40}$/u'],
        'ints' => [], 'hide' => ['idno', 'ev', 'photo'],
        'read' => 'public', 'write' => 'create-only', 'force' => ['status' => 'Pending Review'],
    ],
    'chats' => [
        'table' => 'chats', 'required' => [],
        'map' => ['name' => 'name', 'email' => 'email'],
        'enums' => [], 'shape' => [], 'ints' => [], 'hide' => [],
        'read' => 'public', 'write' => 'public', 'force' => [],
    ],
    'notifs' => [
        'table' => 'notifications', 'required' => [],
        'map' => ['k' => 'kind', 'ref' => 'ref', 't' => 'message', 'time' => 'time_label', 'u' => 'unread', 'ts' => 'ts'],
        'enums' => [], 'shape' => ['time' => '/^[\p{L}\p{N}\p{Zs} :,.\-\/]{0,40}$/u'], 'ints' => ['u', 'ts'], 'hide' => [],
        'read' => 'guard', 'write' => 'create-only', 'force' => [],
    ],
    'logs' => [
        'table' => 'activity_log', 'required' => [],
        'map' => ['ts' => 'ts', 'who' => 'who', 'act' => 'act', 'ref' => 'ref', 'time' => 'time_label'],
        'enums' => [], 'shape' => ['time' => '/^[\p{L}\p{N}\p{Zs} :,.\-\/]{0,40}$/u'], 'ints' => ['ts'], 'hide' => [],
        'read' => 'guard', 'write' => 'guard', 'force' => [],
    ],
];

function fail(int $code, string $message): void
{
    http_response_code($code);
    echo json_encode(['error' => $message]);
    exit;
}

function valid_id($id): bool                           // ids end up inside HTML attributes in the app, so keep them boring
{
    return is_string($id) && preg_match('/^[A-Za-z0-9_-]{1,40}$/', $id) === 1;
}

// Photos arrive as base64 text from the camera. Save real images as files in uploads/ and keep only the path.
// Anything else (a link, a script, a path outside the two allowed folders) is dropped.
function save_photo(string $id, $value)
{
    if ($value === null || $value === '') {
        return $value;
    }
    if (!is_string($value)) {
        return null;
    }
    if (strpos($value, 'data:image/') === 0) {
        $split = strpos($value, ';base64,');
        if ($split === false) {
            return null;
        }
        $binary = base64_decode(substr($value, $split + 8), true);
        if ($binary === false || $binary === '' || strlen($binary) > 3 * 1024 * 1024) {
            return null;
        }
        $info = @getimagesizefromstring($binary);      // proves it really is an image, whatever the header claims
        $types = [IMAGETYPE_JPEG => 'jpg', IMAGETYPE_PNG => 'png', IMAGETYPE_WEBP => 'webp'];
        if ($info === false || !isset($types[$info[2]])) {
            return null;
        }
        $dir = __DIR__ . '/uploads';
        if (!is_dir($dir)) {
            mkdir($dir, 0755, true);
        }
        $name = preg_replace('/[^A-Za-z0-9_-]/', '', $id) . '-' . substr(sha1($binary), 0, 8) . '.' . $types[$info[2]];
        file_put_contents("$dir/$name", $binary);
        return "uploads/$name";
    }
    return preg_match('#^(assets/images|uploads)/[A-Za-z0-9._-]+\.(jpe?g|png|webp)$#i', $value) === 1 ? $value : null;
}

function to_db($value)                                 // true/false -> 1/0; anything but a plain value is refused
{
    if ($value === null || is_int($value) || is_float($value)) {
        return $value;
    }
    if (is_bool($value)) {
        return (int) $value;
    }
    if (is_string($value) && strlen($value) <= MAX_FIELD) {
        return $value;
    }
    fail(400, 'A field is the wrong type or too long');
}

// ---------------------------------------------------------------------------
// 2. Pick the collection the front end asked for
// ---------------------------------------------------------------------------
$name = $_GET['c'] ?? '';
if (!is_string($name) || !isset($COLLECTIONS[$name])) {
    fail(400, 'Unknown collection. Use ?c=tickets, claims, chats, notifs or logs');
}
$cfg      = $COLLECTIONS[$name];
$table    = $cfg['table'];                             // comes from the list above, never from the request
$map      = $cfg['map'];
$method   = $_SERVER['REQUEST_METHOD'];

// A request that changes data must come from our own pages: a custom header cannot be sent by another
// website (the browser would ask permission first), which blocks cross-site request forgery.
if ($method !== 'GET' && ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'lv') {
    fail(403, 'Missing X-Requested-With header');
}

// ---------------------------------------------------------------------------
// 3. Do what the front end asked: GET / POST / DELETE
// ---------------------------------------------------------------------------
try {
    if ($method === 'GET') {                                       // ---- LIST
        if ($cfg['read'] === 'guard' && !$isGuard) {
            fail(401, 'Guard sign-in required');
        }
        $one = $_GET['id'] ?? null;
        if ($one !== null && !valid_id($one)) {
            fail(400, 'Bad id');
        }
        $st = $pdo->prepare("SELECT * FROM $table" . ($one !== null ? ' WHERE id = :id' : '') . ' ORDER BY upd DESC, rowid DESC');
        $st->execute($one !== null ? ['id' => $one] : []);

        $out = [];
        foreach ($st as $row) {
            $rec = json_decode($row['extra'] ?? '{}', true);
            if (!is_array($rec)) {
                $rec = [];
            }
            foreach ($map as $key => $column) {
                if ($row[$column] !== null) {
                    $rec[$key] = in_array($key, $cfg['ints'], true) ? (int) $row[$column] : $row[$column];
                }
            }
            if (!$isGuard) {
                foreach ($cfg['hide'] as $key) {
                    unset($rec[$key]);
                }
            }
            $rec['id'] = $row['id'];
            if ($row['upd'] !== null) {
                $rec['_u'] = (int) $row['upd'];
            }
            $out[] = $rec;
        }
        echo json_encode($out);

    } elseif ($method === 'POST') {                                // ---- CREATE or UPDATE
        if ($cfg['write'] === 'guard' && !$isGuard) {
            fail(401, 'Guard sign-in required');
        }
        if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') === false) {
            fail(415, 'Send JSON');
        }
        $raw = file_get_contents('php://input', false, null, 0, MAX_BODY + 1);
        if ($raw === false || strlen($raw) > MAX_BODY) {
            fail(413, 'Request too large');
        }
        $d = json_decode($raw, true);
        if (!is_array($d) || !valid_id($d['id'] ?? null)) {
            fail(400, 'A valid id is required (letters, numbers, - and _ only)');
        }
        $id = $d['id'];

        // visitors may only create; if the record already exists they change nothing
        $creatingOnly = $cfg['write'] === 'create-only' && !$isGuard;
        if ($creatingOnly) {
            $has = $pdo->prepare("SELECT 1 FROM $table WHERE id = :id");
            $has->execute(['id' => $id]);
            if ($has->fetchColumn()) {
                echo json_encode(['ok' => true, 'id' => $id, 'unchanged' => true]);
                exit;
            }
            foreach ($cfg['force'] as $key => $value) {
                $d[$key] = $value;
            }
        }

        foreach ($cfg['force'] as $key => $value) {                // a missing status gets its starting value
            if (!isset($d[$key])) {
                $d[$key] = $value;
            }
        }
        foreach ($cfg['required'] as $key) {
            if (!isset($d[$key]) || $d[$key] === '') {
                fail(400, "$key is required");
            }
        }
        foreach ($cfg['enums'] as $key => $allowed) {
            if (isset($d[$key]) && !in_array($d[$key], $allowed, true)) {
                fail(400, "Invalid $key");
            }
        }
        foreach ($cfg['shape'] as $key => $pattern) {              // fields the app prints as HTML must look like what they should be
            if (isset($d[$key]) && (!is_string($d[$key]) || preg_match($pattern, $d[$key]) !== 1)) {
                fail(400, "Invalid $key");
            }
        }
        if (isset($map['photo']) && array_key_exists('photo', $d)) {
            $d['photo'] = save_photo($id, $d['photo']);
        }
        if ($name === 'claims' && !valid_id($d['tid'])) {
            fail(400, 'Invalid tid');
        }
        if ($name === 'tickets' && isset($d['cat'])) {
            if (!is_string($d['cat'])) {
                fail(400, 'Unknown category');
            }
            $cat = $pdo->prepare('SELECT 1 FROM categories WHERE category_name = :c');
            $cat->execute(['c' => $d['cat']]);
            if (!$cat->fetchColumn()) {
                fail(400, 'Unknown category');
            }
        }
        if ($name === 'claims' && $creatingOnly) {                 // the same rule the app shows: only a free, stored item can be claimed
            $item = $pdo->prepare('SELECT status FROM surrender_tickets WHERE id = :t');
            $item->execute(['t' => $d['tid']]);
            if ($item->fetchColumn() !== 'Stored') {
                fail(409, 'That item is not available to claim');
            }
            $taken = $pdo->prepare("SELECT 1 FROM claim_requests WHERE ticket_id = :t AND claim_status <> 'Rejected'");
            $taken->execute(['t' => $d['tid']]);
            if ($taken->fetchColumn()) {
                fail(409, 'That item already has a claim');
            }
        }

        $values = ['id' => $id];
        foreach ($map as $key => $column) {
            $values[$column] = array_key_exists($key, $d) ? to_db($d[$key]) : null;
        }
        $extra = $d;                                               // every field without its own column
        unset($extra['id'], $extra['_u']);
        foreach (array_keys($map) as $key) {
            unset($extra[$key]);
        }
        $extraJson = $extra === [] ? '{}' : json_encode($extra);
        if ($extraJson === false || strlen($extraJson) > MAX_EXTRA) {
            fail(400, 'Record too large');
        }
        $values['extra'] = $extraJson;

        // The server clock decides "newest". It is always at least 1 ms newer than the copy the app sent,
        // so the app adopts the saved version (for example the photo's new file path) on its next refresh.
        $now = (int) (microtime(true) * 1000);
        $sent = isset($d['_u']) ? min((int) $d['_u'], $now + 60000) : 0;
        $values['upd'] = max($now, $sent + 1);

        $columns = array_keys($values);
        $sql = "INSERT INTO $table (" . implode(', ', $columns) . ') VALUES ('
             . implode(', ', array_map(fn($c) => ":$c", $columns)) . ') '
             . 'ON CONFLICT(id) DO UPDATE SET '
             . implode(', ', array_map(fn($c) => "$c = excluded.$c", array_slice($columns, 1)));
        $pdo->prepare($sql)->execute($values);                     // prepared: values never touch the SQL text
        echo json_encode(['ok' => true, 'id' => $id]);

    } elseif ($method === 'DELETE') {                              // ---- REMOVE
        if (!$isGuard) {
            fail(401, 'Guard sign-in required');
        }
        $id = $_GET['id'] ?? null;
        if (!valid_id($id)) {
            fail(400, 'Bad id');
        }
        $st = $pdo->prepare("DELETE FROM $table WHERE id = :id");  // claims of a deleted ticket go with it (ON DELETE CASCADE)
        $st->execute(['id' => $id]);
        echo json_encode(['ok' => true]);

    } else {
        fail(405, 'Method not allowed');
    }
} catch (PDOException $exception) {
    error_log($exception->getMessage());
    fail(500, 'Database error');
}
