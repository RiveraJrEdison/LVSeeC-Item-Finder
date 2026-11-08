<?php
// setup.php — creates the tables, the categories, demo data and the guard accounts.
//
//   php setup.php              tables + categories + demo data + guard accounts with RANDOM passwords (printed once)
//   php setup.php --demo       same, but the guard accounts use the documented demo passwords (class demo only!)
//   php setup.php --no-demo    tables + categories + guard accounts, but no sample tickets/claims/chats
//
// Safe to run again: existing data is kept.

if (PHP_SAPI !== 'cli') {
    http_response_code(403);
    exit('Run this from the terminal: php setup.php');
}

require __DIR__ . '/database.php';

$useDemoPasswords = in_array('--demo', $argv, true);
$loadDemoData     = !in_array('--no-demo', $argv, true);

// An older layout (first version of the project) has different columns. Do not touch it.
$exists = $pdo->query("SELECT 1 FROM sqlite_master WHERE name = 'surrender_tickets'")->fetchColumn();
$isNew  = $pdo->query("SELECT 1 FROM pragma_table_info('surrender_tickets') WHERE name = 'extra'")->fetchColumn();
if ($exists && !$isNew) {
    fwrite(STDERR, "Old database layout found in data/la_verdad_found.db.\n"
        . "Delete data/la_verdad_found.db and run php setup.php again.\n");
    exit(1);
}

try {
    $pdo->beginTransaction();
    $pdo->exec(file_get_contents(__DIR__ . '/schema.sql'));

    $hasTickets = (int) $pdo->query('SELECT COUNT(*) FROM surrender_tickets')->fetchColumn() > 0;
    if ($loadDemoData && !$hasTickets && is_file(__DIR__ . '/seed.sql')) {
        $pdo->exec(file_get_contents(__DIR__ . '/seed.sql'));
        echo "Demo data loaded.\n";
    }
    $pdo->commit();
} catch (Throwable $exception) {
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    error_log($exception->getMessage());
    fwrite(STDERR, 'Setup failed: ' . $exception->getMessage() . "\n");
    exit(1);
}

// ---- guard accounts ---------------------------------------------------------------------------
if ((int) $pdo->query('SELECT COUNT(*) FROM users')->fetchColumn() === 0) {
    $guards = [
        ['guard.ramos',    'Guard Ramos',    'Ramos@LV2026'],
        ['guard.bautista', 'Guard Bautista', 'Bautista@LV2026'],
    ];
    $insert = $pdo->prepare('INSERT INTO users (username, display_name, password, role)
                             VALUES (:u, :n, :p, \'SecurityGuard\')');
    foreach ($guards as [$username, $display, $demoPassword]) {
        $plain = $useDemoPasswords ? $demoPassword : rtrim(strtr(base64_encode(random_bytes(9)), '+/', 'Ax'), '=');
        $insert->execute(['u' => $username, 'n' => $display, 'p' => password_hash($plain, PASSWORD_DEFAULT)]);
        echo "Guard account: $username   password: $plain\n";
    }
    echo $useDemoPasswords
        ? "WARNING: demo passwords are public in the README. Do not use --demo on a real server.\n"
        : "Write these passwords down now; they are stored hashed and cannot be shown again.\n"
          . "Change one with:  php adduser.php <username> \"<Display Name>\" <new password>\n";
}

echo "Database setup complete.\n";
