<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Accommodation / Stay';
    $subtitle = 'Sleep inside the landscape—quiet luxury, estate views.';
    $kicker = 'Visit';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Stay experience overview</h2>
            <p>Placeholder: romantic countryside positioning; what guests get.</p>
        </section>

        <section class="editorial-block">
            <h2>Room listing (placeholder)</h2>
            <div class="card-grid">
                <?php for ($i=1;$i<=3;$i++): ?>
                    <div class="info-card">
                        <h3>Room / Lodge <?php echo $i; ?></h3>
                        <p>Sleeps: <?php echo 2 + $i; ?></p>
                        <p>From: $<?php echo 220 + ($i*80); ?></p>
                        <a class="btn btn--gold" href="/book.php">Check Availability</a>
                    </div>
                <?php endfor; ?>
            </div>
        </section>

        <section class="editorial-block">
            <h2>Amenities & inclusions (placeholder)</h2>
            <p>WiFi, breakfast, estate experiences, shuttle, etc.</p>
        </section>
    </div>

    <?php
    $primaryCtaText = 'Book Your Stay';
    $primaryCtaHref = '/book.php';
    $secondaryCtaText = 'Book a Tasting';
    $secondaryCtaHref = '/tasting.php';
    include __DIR__ . '/includes/cta-strip.php';
    ?>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

