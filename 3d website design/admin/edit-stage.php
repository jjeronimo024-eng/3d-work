<?php
require_once __DIR__ . "/auth.php";
require_once __DIR__ . "/../config/db.php";

checkAuth();

$id = $_GET["id"] ?? null;
$stage = null;

if ($id) {
    $stmt = $pdo->prepare("SELECT * FROM wine_stages WHERE id=?");
    $stmt->execute([$id]);
    $stage = $stmt->fetch();
}
?>

<h1><?= $id ? "Edit Stage" : "Create Stage" ?></h1>

<form method="POST" action="save-stage.php">

<input type="hidden" name="id" value="<?= $stage["id"] ?? "" ?>">

<input name="slug" placeholder="Slug" value="<?= $stage["slug"] ?? "" ?>"><br><br>

<input name="title" placeholder="Title" value="<?= $stage["title"] ?? "" ?>"><br><br>

<textarea name="subtitle"><?= $stage["subtitle"] ?? "" ?></textarea><br><br>

<h3>Camera</h3>

<input name="camera_x" value="<?= $stage["camera_x"] ?? 0 ?>"><br>
<input name="camera_y" value="<?= $stage["camera_y"] ?? 2 ?>"><br>
<input name="camera_z" value="<?= $stage["camera_z"] ?? 6 ?>"><br><br>

<h3>Visual</h3>

<input name="bloom" value="<?= $stage["bloom"] ?? 0.5 ?>"><br><br>

<button type="submit">Save Stage</button>

</form>