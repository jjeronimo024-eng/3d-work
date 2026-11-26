<?php
require_once __DIR__ . "/auth.php";
require_once __DIR__ . "/../config/db.php";

checkAuth();

$id = $_POST["id"] ?? null;

$data = [
    $_POST["slug"],
    $_POST["title"],
    $_POST["subtitle"],
    $_POST["camera_x"],
    $_POST["camera_y"],
    $_POST["camera_z"],
    $_POST["bloom"]
];

if ($id) {

    $stmt = $pdo->prepare("
        UPDATE wine_stages
        SET slug=?, title=?, subtitle=?, camera_x=?, camera_y=?, camera_z=?, bloom=?
        WHERE id=?
    ");

    $stmt->execute([...$data, $id]);

} else {

    $stmt = $pdo->prepare("
        INSERT INTO wine_stages
        (slug, title, subtitle, camera_x, camera_y, camera_z, bloom)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    ");

    $stmt->execute($data);
}

header("Location: stages.php");