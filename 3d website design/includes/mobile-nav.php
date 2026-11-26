<?php
/* ============================================================
   FILE: includes/mobile-nav.php
   PURPOSE:
   Mobile navigation with a simple toggle.
   (JS can be added later; for now this uses an accessible details/summary.)
   ============================================================ */
?>

<nav class="site-mobile-nav" aria-label="Mobile Primary">
    <details class="site-mobile-nav__menu" open="false">
        <summary class="site-mobile-nav__toggle" aria-label="Open navigation">
            <span class="site-mobile-nav__hamburger" aria-hidden="true">☰</span>
            <span>Menu</span>
        </summary>

        <div class="site-mobile-nav__panel">
            <a class="site-mobile-nav__link" href="/index.php">Home</a>

            <div class="site-mobile-nav__section">
                <div class="site-mobile-nav__section-title">Estate</div>
                <a class="site-mobile-nav__link" href="/estate.php#our-story">Our Story</a>
                <a class="site-mobile-nav__link" href="/vineyard.php">Vineyard &amp; Terroir</a>
                <a class="site-mobile-nav__link" href="/winemaking.php">Winemaking Process</a>
                <a class="site-mobile-nav__link" href="/estate.php#team">Team</a>
            </div>

            <div class="site-mobile-nav__section">
                <div class="site-mobile-nav__section-title">Wines</div>
                <a class="site-mobile-nav__link" href="/wines.php">Our Wines</a>
                <a class="site-mobile-nav__link" href="/tasting.php">Wine Tasting</a>
                <a class="site-mobile-nav__link" href="/shop.php">Shop</a>
            </div>

            <div class="site-mobile-nav__section">
                <div class="site-mobile-nav__section-title">Visit</div>
                <a class="site-mobile-nav__link" href="/dining.php">Restaurant / Dining</a>
                <a class="site-mobile-nav__link" href="/stay.php">Accommodation / Stay</a>
                <a class="site-mobile-nav__link" href="/experiences.php">Experiences</a>
                <a class="site-mobile-nav__link" href="/events.php">Weddings &amp; Events</a>
                <a class="site-mobile-nav__link" href="/contact.php">Contact / Visit Us</a>
            </div>

            <a class="site-mobile-nav__link" href="/gallery.php">Gallery</a>
            <a class="site-mobile-nav__cta" href="/book.php">Book</a>
        </div>
    </details>
</nav>

