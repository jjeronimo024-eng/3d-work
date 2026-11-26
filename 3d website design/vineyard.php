<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'The Vineyard & Terroir';
    $subtitle = 'Viticulture that translates place into wine.';
    $kicker = 'Estate & Land';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Vineyard overview</h2>
            <p>Placeholder: acreage, varietals, and a future block map image.</p>
        </section>

        <section class="editorial-block">
            <h2>Seasonal cycle</h2>
            <p>Placeholder: pruning → budburst → flowering → veraison → ripening → harvest.</p>
        </section>

        <section class="editorial-block">
            <h2>Soil & climate</h2>
            <p>Placeholder: soil type and microclimates, and how they influence texture, aroma, and structure.</p>
        </section>

        <section class="editorial-block">
            <h2>Farming practices</h2>
            <p>Placeholder: canopy management, water philosophy, sustainability, and care in the vineyard.</p>
        </section>
    </div>

    <?php
    $primaryCtaText = 'Discover the Winemaking Journey';
    $primaryCtaHref = '/winemaking.php';
    $secondaryCtaText = 'Explore Our Wines';
    $secondaryCtaHref = '/wines.php';
    include __DIR__ . '/includes/cta-strip.php';
    ?>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

