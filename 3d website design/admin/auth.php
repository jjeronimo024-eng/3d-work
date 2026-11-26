<?php
session_start();

/* ============================================================
   FUNCTION: checkAuth
   PURPOSE:
   Protect admin pages from unauthorized access
   ============================================================ */

function checkAuth() {
    if (!isset($_SESSION["logged_in"])) {
        header("Location: login.php");
        exit;
    }
}
?>