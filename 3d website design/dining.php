<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Restaurant / Dining';
    $subtitle = 'Local cuisine, elegant pairings, estate hospitality.';
    $kicker = 'Visit';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Restaurant story</h2>
            <p>Placeholder: cuisine style + philosophy + wine pairing focus.</p>
        </section>

        <section class="editorial-block">
            <h2>Menu highlights (placeholder)</h2>
            <p>Sample dishes + downloadable menu PDF later.</p>
        </section>

        <section class="editorial-block">
            <h2>Pairing experience (placeholder)</h2>
            <p>Describe pairing approach and service style.</p>
        </section>

        <section class="editorial-block">
            <h2>Reservation</h2>
            <a class="btn btn--gold" href="/book.php">Reserve Dining</a>
        </section>
    </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

