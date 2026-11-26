<?php
/* ============================================================
   FILE: api/get-scenes.php
   PURPOSE:
   This API serves cinematic scene data to the frontend.

   WHY THIS EXISTS:
   - Enables dynamic content loading
   - Connects future MySQL database
   - Works perfectly on cPanel hosting

   ROLE:
   Frontend → fetch JSON → build scenes dynamically
   ============================================================ */

/* ------------------------------------------------------------
   LOAD JSON FILE (TEMP STORAGE LAYER)
   ------------------------------------------------------------ */
header('Content-Type: application/json');

$json = file_get_contents("../assets/data/wine-scene.json");

/* ------------------------------------------------------------
   RETURN DATA TO FRONTEND
   ------------------------------------------------------------ */
echo $json;
?>