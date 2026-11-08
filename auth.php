<?php
// auth.php — guard sign-in for the Guard Portal.
//
//   GET   auth.php                                   -> {"ok":true,"name":"Guard Ramos"}   or {"ok":false}
//   POST  auth.php {"action":"login","username":"guard.ramos","password":"..."}
//   POST  auth.php {"action":"logout"}
//
// Passwords live in the users table as password_hash() values. A successful login stores the guard in the
// PHP session (an HttpOnly, SameSite=Strict cookie); connector.php reads that to decide who is a guard.

declare(strict_types=1);

ini_set('display_errors', '0');
require __DIR__ . '/database.php';
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

session_set_cookie_params([
    'lifetime' => 0,                                   // gone when the browser closes
    'path'     => '/',
    'secure'   => !empty($_SERVER['HTTPS']),
    'httponly' => true,
    'samesite' => 'Strict',
]);
ini_set('session.gc_maxlifetime', '28800');            // 8 hours
session_start();

function out(int $code, array $body): void
{
    http_response_code($code);
    echo json_encode($body);
    exit;
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $g = $_SESSION['guard'] ?? null;
    out(200, $g ? ['ok' => true, 'name' => $g['name']] : ['ok' => false]);
}

if ($method !== 'POST') {
    out(405, ['error' => 'Method not allowed']);
}
if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'lv') {
    out(403, ['error' => 'Missing X-Requested-With header']);
}
$body   = json_decode(file_get_contents('php://input', false, null, 0, 4096) ?: '', true);
$action = is_array($body) ? ($body['action'] ?? '') : '';

if ($action === 'logout') {
    $_SESSION = [];
    session_destroy();
    out(200, ['ok' => true]);
}

if ($action !== 'login') {
    out(400, ['error' => 'Unknown action']);
}

// Slow down guessing: 5 wrong passwords lock this browser session for a minute.
if (($_SESSION['lock_until'] ?? 0) > time()) {
    out(429, ['error' => 'Too many attempts. Wait a minute and try again.']);
}

$username = strtolower(trim((string) ($body['username'] ?? '')));
$username = preg_replace('/@laverdad\.edu\.ph$/', '', $username);   // the sign-in form also accepts the school email
$password = (string) ($body['password'] ?? '');

try {
    $st = $pdo->prepare('SELECT id, username, display_name, password, role FROM users WHERE username = :u');
    $st->execute(['u' => $username]);
    $user = $st->fetch();
} catch (PDOException $exception) {
    error_log($exception->getMessage());
    out(500, ['error' => 'Database error']);
}

// Always run password_verify (against a throwaway hash when the user is unknown) so timing does not reveal valid usernames.
$hash = $user['password'] ?? '$2y$10$abcdefghijklmnopqrstuuABCDEFGHIJKLMNOPQRSTUVWXYZ01234';
$ok   = password_verify($password, $hash) && $user;

if (!$ok) {
    $_SESSION['fails'] = ($_SESSION['fails'] ?? 0) + 1;
    if ($_SESSION['fails'] >= 5) {
        $_SESSION['fails'] = 0;
        $_SESSION['lock_until'] = time() + 60;
    }
    usleep(300000);
    out(401, ['error' => 'Invalid username or password']);
}

session_regenerate_id(true);                           // new session id after login (prevents session fixation)
$_SESSION = ['guard' => ['id' => (int) $user['id'], 'name' => $user['display_name'], 'role' => $user['role']]];
out(200, ['ok' => true, 'name' => $user['display_name']]);
