<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Booking Hub';
    $subtitle = 'One place to book tastings, dining, stays, and events.';
    $kicker = 'Reservations';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Select what you want to book</h2>
            <div class="card-grid">
                <div class="info-card"><h3>Tastings</h3><a class="btn btn--gold" href="/tasting.php">View &amp; Book</a></div>
                <div class="info-card"><h3>Dining</h3><a class="btn btn--gold" href="/dining.php">View &amp; Reserve</a></div>
                <div class="info-card"><h3>Stay</h3><a class="btn btn--gold" href="/stay.php">View &amp; Request</a></div>
                <div class="info-card"><h3>Events</h3><a class="btn btn--gold" href="/events.php">View &amp; Enquire</a></div>
            </div>
        </section>

        <section class="editorial-block">
            <h2>Enquiry form (placeholder)</h2>
            <p>Implementation later (phase 2/3) with API/DB.</p>
        </section>
    </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

