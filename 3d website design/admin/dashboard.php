/* ============================================================
   FILE: admin/dashboard.php
   PURPOSE:
   Main control hub for Wine Cinematic CMS

   WHY THIS FILE EXISTS:
   - Central navigation point for admin system
   - Provides quick overview of CMS modules
   - Future-ready for analytics + system monitoring

   ROLE IN SYSTEM:
   login → dashboard → stages / CMS tools / API tools
   ============================================================ */

<?php
require_once __DIR__ . "/auth.php";
require_once __DIR__ . "/../config/db.php";

/* ------------------------------------------------------------
   SECURITY CHECK
   WHY:
   - Prevent unauthorized access to CMS
   ------------------------------------------------------------ */
checkAuth();


/* ------------------------------------------------------------
   FETCH BASIC SYSTEM DATA (for future dashboard stats)
   WHY:
   - Placeholder for analytics (stages count, updates, etc.)
   ------------------------------------------------------------ */
try {

    $stmt = $pdo->query("SELECT COUNT(*) as total FROM wine_stages");
    $totalStages = $stmt->fetch()["total"];

} catch (Exception $e) {
    $totalStages = 0;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>Wine CMS Dashboard</title>

    <!-- ========================================================
         BASIC DASHBOARD STYLING
         WHY:
         - Lightweight UI for admin control
         - Will be upgraded later to full UI framework
         ======================================================== -->
    <style>

        body {
            font-family: Arial, sans-serif;
            margin: 0;
            background: #0b0b0b;
            color: #fff;
        }

        .header {
            padding: 20px;
            background: #111;
            border-bottom: 1px solid #222;
        }

        .container {
            padding: 20px;
        }

        .card {
            background: #151515;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 15px;
        }

        a {
            color: #8dffb3;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }

    </style>

</head>

<body>

<!-- ============================================================
     HEADER SECTION
     WHY:
     - Branding + navigation anchor
     ============================================================ -->
<div class="header">
    <h1>🍷 Wine Cinematic CMS</h1>
    <p>Admin Dashboard Control Panel</p>
</div>


<div class="container">

    <!-- ========================================================
         QUICK STATS SECTION
         WHY:
         - Gives immediate system overview
         - Prepares for future analytics expansion
         ======================================================== -->
    <div class="grid">

        <div class="card">
            <h2><?= $totalStages ?></h2>
            <p>Total Wine Stages</p>
        </div>

        <div class="card">
            <h2>Active</h2>
            <p>System Status</p>
        </div>

        <div class="card">
            <h2>3D Engine</h2>
            <p>Connected Pipeline</p>
        </div>

    </div>


    <!-- ========================================================
         NAVIGATION SECTION
         WHY:
         - Central control links to CMS modules
         ======================================================== -->
    <div class="card">
        <h3>CMS Tools</h3>

        <ul>
            <li><a href="stages.php">Manage Wine Stages</a></li>
            <li><a href="edit-stage.php">Create New Stage</a></li>
        </ul>
    </div>


    <!-- ========================================================
         FUTURE MODULE PLACEHOLDER
         WHY:
         - Reserved for API monitoring, logs, analytics
         ======================================================== -->
    <div class="card">
        <h3>System (Future Expansion)</h3>
        <p>
            • API Health Status<br>
            • 3D Scene Debug Tools<br>
            • User Access Logs<br>
            • Performance Metrics
        </p>
    </div>

</div>

</body>
</html>