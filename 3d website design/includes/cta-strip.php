<?php
/* ============================================================
   FILE: includes/cta-strip.php
   PURPOSE:
   Reusable CTA strip (conversion buttons).

   Expected variables (optional):
   - $primaryCtaText, $primaryCtaHref
   - $secondaryCtaText, $secondaryCtaHref
   ============================================================ */

   $primaryCtaText = $primaryCtaText ?? '';
   $primaryCtaHref = $primaryCtaHref ?? '';
   $secondaryCtaText = $secondaryCtaText ?? '';
   $secondaryCtaHref = $secondaryCtaHref ?? '';
?>

<section class="cta-strip" aria-label="Call to action">
    <div class="cta-strip__inner">
        <?php if (!empty($primaryCtaText) && !empty($primaryCtaHref)): ?>
            <a class="btn btn--gold" href="<?php echo htmlspecialchars($primaryCtaHref); ?>">
                <?php echo htmlspecialchars($primaryCtaText); ?>
            </a>
        <?php endif; ?>

        <?php if (!empty($secondaryCtaText) && !empty($secondaryCtaHref)): ?>
            <a class="btn btn--ghost" href="<?php echo htmlspecialchars($secondaryCtaHref); ?>">
                <?php echo htmlspecialchars($secondaryCtaText); ?>
            </a>
        <?php endif; ?>
    </div>
</section>

