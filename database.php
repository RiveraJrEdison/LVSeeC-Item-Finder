<?php
// database.php — the one place that opens the SQLite database through PDO.
// Every other PHP file does:  require __DIR__ . '/database.php';   and gets $pdo.
// (File name is lower-case on purpose: Linux servers treat Database.php and database.php as different files.)

$databaseDir  = __DIR__ . '/data';
$databasePath = $databaseDir . '/la_verdad_found.db';

if (!is_dir($databaseDir)) {
    mkdir($databaseDir, 0750, true);
}

try {
    $pdo = new PDO('sqlite:' . $databasePath);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
    $pdo->exec('PRAGMA foreign_keys = ON');     // SQLite ignores foreign keys unless this is set on every connection
    $pdo->exec('PRAGMA busy_timeout = 5000');   // wait up to 5 s if another request is writing
    $pdo->exec('PRAGMA journal_mode = WAL');    // readers do not block the writer
} catch (PDOException $exception) {
    error_log($exception->getMessage());
    if (PHP_SAPI === 'cli') {
        fwrite(STDERR, 'Database connection failed: ' . $exception->getMessage() . "\n");
        exit(1);
    }
    http_response_code(503);
    header('Content-Type: application/json');
    exit(json_encode(['error' => 'Database connection failed']));
}
