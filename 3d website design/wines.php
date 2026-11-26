<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Our Wines';
    $subtitle = 'Explore the range, then taste what speaks most to you.';
    $kicker = 'Collection';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Collection navigation (placeholder)</h2>
            <p>Add filters later: red, white, rosé, sparkling, dessert, reserve range, vintage, varietal, price.</p>
        </section>

        <section class="editorial-block">
            <h2>Wine grid (placeholder)</h2>
            <p>Create 3–6 wine cards from JSON later.</p>
            <div class="wine-grid">
                <?php for ($i=1;$i<=6;$i++): ?>
                    <a class="wine-card" href="/wine.php?slug=wine-<?php echo $i; ?>">
                        <div class="wine-card__img">Bottle Image</div>
                        <div class="wine-card__body">
                            <div class="wine-card__name">Wine Name <?php echo $i; ?></div>
                            <div class="wine-card__meta">Varietal • Vintage</div>
                            <div class="wine-card__note">Short tasting note…</div>
                        </div>
                    </a>
                <?php endfor; ?>
            </div>
        </section>

        <section class="editorial-block">
            <h2>Estate range philosophy (placeholder)</h2>
            <p>Signature vs reserve positioning; consistency, balance, and expression.</p>
        </section>
    </div>

    <?php
    $primaryCtaText = 'Book a Tasting';
    $primaryCtaHref = '/tasting.php';
    $secondaryCtaText = 'Shop Wine';
    $secondaryCtaHref = '/shop.php';
    include __DIR__ . '/includes/cta-strip.php';
    ?>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

