/* ============================================================
   FILE: admin/db.php
   PURPOSE:
   Secure database connection for Wine CMS

   WHY THIS VERSION:
   - Keeps credentials in one controlled place
   - Ready for cPanel hosting (MySQL remote/local)
   - Easy to later migrate to environment variables
   ============================================================ */

<?php

$host = "localhost"; 
$dbname = "thetechi_wine3d";
$user = "thetechi_webmaster";
$pass = "uU23PPpaIuw026zPFSMsxGPVpUyczJ0MObb17oOV"; // <-- paste in cPanel, not in public code

/* ------------------------------------------------------------
   SECURE PDO CONNECTION
   ------------------------------------------------------------ */
try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $user,
        $pass,
        [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        ]
    );

} catch (Exception $e) {
    die("Database connection failed.");
}

?>