<?php
include __DIR__ . '/includes/header.php';
?>


<main class="wine-editorial">

    <?php
    $title = 'Estate';
    $subtitle = 'A place shaped by land, people, and time.';
    $kicker = 'Our Story';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block" id="our-story">
            <h2>Who we are</h2>
            <p>
                Placeholder premium copy: describe the family, heritage, and the estate’s mission—crafting wines with patience and restraint.
            </p>
        </section>

        <section class="editorial-block">
            <h2>Terroir in focus</h2>
            <p>Placeholder premium copy: climate, soil character, altitude, and how the land expresses itself in the glass.</p>
        </section>

        <section class="editorial-block">
            <h2>Craft & philosophy</h2>
            <p>Placeholder premium copy: minimal intervention, careful élevage, barrel selection, and sustainable vineyard values.</p>
        </section>

        <section class="editorial-block" id="team">
            <h2>Meet the team</h2>
            <p>Placeholder premium copy: winemaking team, viticulture leads, cellar crew—add portraits later.</p>
        </section>
    </div>

    <?php
    $primaryCtaText = 'Book a Tasting';
    $primaryCtaHref = '/tasting.php';
    $secondaryCtaText = 'Explore Our Wines';
    $secondaryCtaHref = '/wines.php';
    include __DIR__ . '/includes/cta-strip.php';
    ?>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

