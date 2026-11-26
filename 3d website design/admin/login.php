<?php
session_start();

require_once __DIR__ . "/../config/db.php";

/* ============================================================
   SIMPLE ADMIN LOGIN (can upgrade to hashed users later)
   ============================================================ */

$error = "";

if ($_POST) {

    $username = $_POST["username"];
    $password = $_POST["password"];

    if ($username === "admin" && $password === "admin123") {
        $_SESSION["logged_in"] = true;
        header("Location: dashboard.php");
        exit;
    } else {
        $error = "Invalid login details";
    }
}
?>

<h2>Wine CMS Login</h2>

<?php if ($error) echo "<p style='color:red;'>$error</p>"; ?>

<form method="POST">
    <input name="username" placeholder="Username"><br><br>
    <input name="password" type="password" placeholder="Password"><br><br>
    <button type="submit">Login</button>
</form>