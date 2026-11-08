<?php
// adduser.php — create a guard account, or reset the password of an existing one.
//   php adduser.php guard.santos "Guard Santos" "a-long-password"
//   php adduser.php guard.santos "Guard Santos"            (a random password is generated and printed)

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    exit('Run this from the terminal.');
}
if ($argc < 3) {
    fwrite(STDERR, "Usage: php adduser.php <username> \"<Display Name>\" [password]\n");
    exit(1);
}

require __DIR__ . '/database.php';

$username = strtolower(trim($argv[1]));
$display  = trim($argv[2]);
$plain    = $argv[3] ?? rtrim(strtr(base64_encode(random_bytes(9)), '+/', 'Ax'), '=');

if (!preg_match('/^[a-z0-9._-]{3,40}$/', $username)) {
    fwrite(STDERR, "Username must be 3-40 characters: letters, numbers, dot, dash or underscore.\n");
    exit(1);
}
if (strlen($plain) < 8) {
    fwrite(STDERR, "Password must be at least 8 characters.\n");
    exit(1);
}

$stmt = $pdo->prepare('INSERT INTO users (username, display_name, password, role)
                       VALUES (:u, :n, :p, \'SecurityGuard\')
                       ON CONFLICT(username) DO UPDATE SET display_name = excluded.display_name, password = excluded.password');
$stmt->execute(['u' => $username, 'n' => $display, 'p' => password_hash($plain, PASSWORD_DEFAULT)]);
echo "Saved $username. Password: $plain\n";
