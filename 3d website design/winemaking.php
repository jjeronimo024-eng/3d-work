<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Winemaking Process';
    $subtitle = 'From vineyard care to refined bottle craft.';
    $kicker = 'The Journey';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <?php
        $stages = [
            'Vineyard',
            'Harvest',
            'Crushing & Destemming',
            'Fermentation',
            'Pressing',
            'Aging / Barrel Room',
            'Blending',
            'Stabilisation & Filtration',
            'Bottling',
            'Bottle Aging',
            'Distribution',
            'The Experience'
        ];
        foreach ($stages as $stage) {
            echo '<section class="editorial-block"><h2>' . htmlspecialchars($stage) . '</h2>';
            echo '<p>Placeholder detailed description for ' . htmlspecialchars($stage) . '.</p>';
            echo '</section>';
        }
        ?>
    </div>

    <?php
    $primaryCtaText = 'Taste the Results';
    $primaryCtaHref = '/tasting.php';
    $secondaryCtaText = 'Shop Wines';
    $secondaryCtaHref = '/shop.php';
    include __DIR__ . '/includes/cta-strip.php';
    ?>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

