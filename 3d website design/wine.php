<?php
include __DIR__ . '/includes/header.php';

$slug = $_GET['slug'] ?? '';

?>

<main class="wine-editorial">
    <?php
    $title = 'Wine Detail';
    $subtitle = $slug ? ('Details for ' . $slug) : 'A closer look at the bottle';
    $kicker = 'Our Wines';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Wine hero (placeholder)</h2>
            <p>Render bottle image, price, varietal, vintage, and CTAs from JSON/DB later.</p>
        </section>

        <section class="editorial-block">
            <h2>Tasting notes (placeholder)</h2>
            <p>Nose • Palate • Finish • Style</p>
        </section>

        <section class="editorial-block">
            <h2>Technical details (placeholder)</h2>
            <p>Cultivar • Region/Block • Alcohol • RS • Acidity • Harvest date</p>
        </section>

        <section class="editorial-block">
            <h2>Food pairing (placeholder)</h2>
            <p>Suggested pairings later.</p>
        </section>

        <section class="editorial-block">
            <h2>Winemaking notes (placeholder)</h2>
            <p>Fermentation + élevage notes later.</p>
        </section>

        <section class="editorial-block">
            <h2>Related wines (placeholder)</h2>
            <p>Show 3 related bottles later.</p>
        </section>
    </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

