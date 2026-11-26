<?php
include __DIR__ . '/includes/header.php';
?>



<main class="wine-editorial">
    <?php
    $title = 'Gallery';
    $subtitle = 'A luxury visual proof—vineyard light, barrel rooms, and estate moments.';
    $kicker = 'Visual Proof';
    include __DIR__ . '/includes/page-hero.php';
    ?>

    <div class="editorial-container">
        <section class="editorial-block">
            <h2>Gallery grid (placeholder)</h2>
            <p>Implement categories + lightbox later. For now render a static grid.</p>
            <div class="gallery-grid">
                <?php for ($i=1;$i<=12;$i++): ?>
                    <div class="gallery-tile" aria-label="Gallery image <?php echo $i; ?>">Image <?php echo $i; ?></div>
                <?php endfor; ?>
            </div>
        </section>
    </div>
</main>

<?php include __DIR__ . '/includes/footer.php'; ?>

