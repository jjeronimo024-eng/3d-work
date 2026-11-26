<?php
require_once __DIR__ . "/auth.php";
require_once __DIR__ . "/../config/db.php";

checkAuth();

/* ------------------------------------------------------------
   FETCH ALL WINE STAGES
   ------------------------------------------------------------ */
$stmt = $pdo->query("SELECT * FROM wine_stages ORDER BY sort_order ASC");
$stages = $stmt->fetchAll();
?>

<h1>Wine Stages</h1>

<a href="edit-stage.php">+ Add Stage</a>

<ul>
<?php foreach ($stages as $stage): ?>
    <li>
        <strong><?= $stage["title"] ?></strong>
        (<?= $stage["slug"] ?>)

        - <a href="edit-stage.php?id=<?= $stage["id"] ?>">Edit</a>
    </li>
<?php endforeach; ?>
</ul>