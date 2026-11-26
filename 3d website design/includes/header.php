<?php
/* ============================================================
   FILE: includes/header.php
   PURPOSE:
   Shared document head + opening HTML structure for the front-end site.

   WHY THIS FILE EXISTS:
   - Keeps the top of the document reusable and clean
   - Prevents repeating meta tags and CSS links across pages
   - Gives us one place to manage SEO basics, viewport settings,
     fonts, and global front-end assets

   HOW IT FITS INTO THE SYSTEM:
   - Included at the top of index.php
   - Can be reused later if you add more front-end pages
   ============================================================ */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- ============================================================
         SECTION: Basic Document Meta
         WHAT THIS DOES:
         - Defines page character set
         - Sets responsive viewport behaviour
         - Adds a browser title and base description

         WHY WE NEED IT:
         - Required for proper rendering and mobile scaling
         - Gives search engines and browser tabs meaningful page info
         ============================================================ -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wine Experience | From Vineyard to Bottle</title>
    <meta name="description" content="A cinematic 3D wine storytelling website that follows the journey from vineyard to bottle.">

    <!-- ============================================================
         SECTION: Theme / Browser UI Colour
         WHAT THIS DOES:
         - Sets a dark browser theme colour for supported mobile browsers

         WHY WE NEED IT:
         - Helps the site feel polished on mobile browsers
         - Matches the cinematic dark luxury visual style
         ============================================================ -->
    <meta name="theme-color" content="#0a0a0a">

    <!-- ============================================================
         SECTION: Font Preconnect / Optional Font Loading
         WHAT THIS DOES:
         - Preconnects to Google Fonts for faster font loading
         - Loads a refined serif + sans pairing for a premium feel

         WHY WE NEED IT:
         - Typography is a major part of the luxury UI layer
         - Keeping this here centralises the visual brand setup

         NOTE:
         - If you later decide to self-host fonts for performance/privacy,
           this is the section you would replace
         ============================================================ -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
        rel="stylesheet"
    >

    <!-- ============================================================
         SECTION: Global Stylesheets
         WHAT THIS DOES:
         - Loads the main visual styles for the front-end experience
         - Keeps CSS modular instead of putting everything in one file

         WHY WE NEED IT:
         - main.css = layout, sections, shell, base components
         - ui.css   = overlay / cinematic interface styling
         ============================================================ -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/ui.css">
</head>

<body class="wine-site-body">

<header class="site-header">
    <?php include __DIR__ . '/nav.php'; ?>
    <?php include __DIR__ . '/mobile-nav.php'; ?>
</header>
