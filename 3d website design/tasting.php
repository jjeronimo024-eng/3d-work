<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Wine Tasting';
    $subtitle = 'Taste the estate—from vineyard character to final pour.';
    $kicker = 'Plan Your Visit';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Tasting experience overview</h2>
            <p>Placeholder: what’s included, duration, group size, host style.</p>
        </section>

        <section class="editorial-block">
            <h2>Packages (placeholder)</h2>
            <div class="card-grid">
                <div class="info-card">
                    <h3>Signature Tasting</h3>
                    <p>Placeholder duration + inclusions.</p>
                    <a class="btn btn--gold" href="/book.php">Book</a>
                </div>
                <div class="info-card">
                    <h3>Reserve Tasting</h3>
                    <p>Placeholder duration + inclusions.</p>
                    <a class="btn btn--gold" href="/book.php">Book</a>
                </div>
                <div class="info-card">
                    <h3>Food &amp; Wine Pairing</h3>
                    <p>Placeholder duration + inclusions.</p>
                    <a class="btn btn--gold" href="/book.php">Book</a>
                </div>
                <div class="info-card">
                    <h3>Cellar Experience</h3>
                    <p>Placeholder duration + inclusions.</p>
                    <a class="btn btn--gold" href="/book.php">Book</a>
                </div>
            </div>
        </section>

        <section class="editorial-block">
            <h2>Booking information (placeholder)</h2>
            <p>Opening hours, policies, walk-in vs reservation notes, dietary notes.</p>
        </section>

        <section class="editorial-block">
            <h2>Booking CTA</h2>
            <p>Form later; for now route to booking hub.</p>
            <a class="btn btn--ghost" href="/book.php">Open Booking Hub</a>
        </section>
    </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

