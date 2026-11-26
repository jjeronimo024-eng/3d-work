<?php
/* ============================================================
   FILE: includes/nav.php
   PURPOSE:
   Primary site navigation (desktop).

   WHY THIS FILE EXISTS:
   - Keeps navigation markup consistent across pages
   - Makes future updates (links/labels) centralized
   ============================================================ */
?>

<nav class="site-nav" aria-label="Primary">
    <div class="site-nav__inner">
        <a class="site-nav__brand" href="/index.php" aria-label="Wine Experience Home">
            <span class="site-nav__brand-mark">W</span>
            <span class="site-nav__brand-text">Wine Farm</span>
        </a>

        <ul class="site-nav__links">
            <li><a href="/index.php">Home</a></li>

            <li class="site-nav__dropdown">
                <a href="/estate.php" class="site-nav__dropdown-toggle">Estate</a>
                <ul class="site-nav__dropdown-menu">
                    <li><a href="/estate.php#our-story">Our Story</a></li>
                    <li><a href="/vineyard.php">Vineyard &amp; Terroir</a></li>
                    <li><a href="/winemaking.php">Winemaking Process</a></li>
                    <li><a href="/estate.php#team">Team</a></li>
                </ul>
            </li>

            <li class="site-nav__dropdown">
                <a href="/wines.php" class="site-nav__dropdown-toggle">Wines</a>
                <ul class="site-nav__dropdown-menu">
                    <li><a href="/wines.php">Our Wines</a></li>
                    <li><a href="/tasting.php">Wine Tasting</a></li>
                    <li><a href="/shop.php">Shop</a></li>
                </ul>
            </li>

            <li class="site-nav__dropdown">
                <a href="/dining.php" class="site-nav__dropdown-toggle">Visit</a>
                <ul class="site-nav__dropdown-menu">
                    <li><a href="/dining.php">Restaurant / Dining</a></li>
                    <li><a href="/stay.php">Accommodation / Stay</a></li>
                    <li><a href="/experiences.php">Experiences</a></li>
                    <li><a href="/events.php">Weddings &amp; Events</a></li>
                    <li><a href="/contact.php">Contact / Visit Us</a></li>
                </ul>
            </li>

            <li><a href="/gallery.php">Gallery</a></li>
            <li><a class="site-nav__cta" href="/book.php">Book</a></li>
        </ul>
    </div>
</nav>

