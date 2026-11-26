/* ============================================================
   FILE: api/get-stages.php
   PURPOSE:
   Live API endpoint that feeds the 3D engine directly from MySQL

   WHY THIS EXISTS:
   - Removes dependency on static JSON files
   - Enables real-time CMS updates
   - Connects admin panel → 3D cinematic engine

   FLOW:
   MySQL → PHP API → JavaScript → 3D Engine
   ============================================================ */

<?php

header("Content-Type: application/json");

require_once __DIR__ . "/../config/db.php";

/* ------------------------------------------------------------
   FETCH ALL WINE STAGES
   ORDERED BY STORY FLOW
   ------------------------------------------------------------ */
try {

    $stmt = $pdo->query("
        SELECT 
            id,
            slug,
            title,
            subtitle,
            camera_x,
            camera_y,
            camera_z,
            bloom,
            sort_order
        FROM wine_stages
        ORDER BY sort_order ASC
    ");

    $stages = $stmt->fetchAll();

    /* --------------------------------------------------------
       RETURN CLEAN JSON STRUCTURE FOR 3D ENGINE
       -------------------------------------------------------- */
    echo json_encode([
        "success" => true,
        "project" => "Wine Cinematic Experience",
        "stages" => $stages
    ]);

} catch (Exception $e) {

    echo json_encode([
        "success" => false,
        "error" => "Failed to load stages"
    ]);
}
?>