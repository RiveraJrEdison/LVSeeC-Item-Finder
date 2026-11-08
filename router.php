<?php
// router.php — used only by PHP's built-in server:   php -S 127.0.0.1:8000 router.php
// It stops the browser from downloading the database, the schema or the PHP helper files.
// (On Apache/XAMPP the .htaccess file does the same job.)
$path = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH) ?: '/');

if (preg_match('#^/(data|docs)(/|$)#i', $path)
    || preg_match('/\.(db|sqlite|sql|md)(-wal|-shm)?$/i', $path)
    || preg_match('#^/(database|setup|adduser|router)\.php$#i', $path)) {
    http_response_code(403);
    exit('Forbidden');
}
return false;   // anything else: serve the file normally
