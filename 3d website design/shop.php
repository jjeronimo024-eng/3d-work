<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Shop Wine';
    $subtitle = 'Phase 2 e-commerce placeholder—bottles, bundles, and gifts.';
    $kicker = 'Buy Online';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Products (placeholder)</h2>
            <p>Add JSON-driven product catalog later.</p>
            <div class="wine-grid">
                <?php for ($i=1;$i<=6;$i++): ?>
                    <div class="wine-card">
                        <div class="wine-card__img">Bottle Image</div>
                        <div class="wine-card__body">
                            <div class="wine-card__name">Wine Product <?php echo $i; ?></div>
                            <div class="wine-card__meta">Varietal • Vintage</div>
                            <div class="wine-card__note">$<?php echo 38 + $i * 6; ?></div>
                            <a class="btn btn--gold" href="/book.php">Enquire / Reserve</a>
                        </div>
                    </div>
                <?php endfor; ?>
            </div>
        </section>
    </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

