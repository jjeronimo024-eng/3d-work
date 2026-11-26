<?php
/* ============================================================
   FILE: includes/page-hero.php
   PURPOSE:
   Reusable editorial hero section.
   ============================================================ */

   $title = $title ?? '';
   $subtitle = $subtitle ?? '';
   $kicker = $kicker ?? '';
?>

<section class="page-hero" aria-label="Page hero">
    <div class="page-hero__bg" aria-hidden="true"></div>
    <div class="page-hero__content">
        <?php if (!empty($kicker)): ?>
            <div class="page-hero__kicker"><?php echo htmlspecialchars($kicker); ?></div>
        <?php endif; ?>
        <h1 class="page-hero__title"><?php echo htmlspecialchars($title); ?></h1>
        <?php if (!empty($subtitle)): ?>
            <p class="page-hero__subtitle"><?php echo htmlspecialchars($subtitle); ?></p>
        <?php endif; ?>
    </div>
</section>

