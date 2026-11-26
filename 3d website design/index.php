<?php
/* ============================================================
   FILE: index.php
   PURPOSE:
   Main front-end entry point for the cinematic 3D wine website.

   WHY THIS FILE EXISTS:
   - It acts as the single landing page for the wine experience
   - It includes the reusable header/footer layout files
   - It provides the root HTML structure needed by the 3D app
   - It gives us one controlled place to mount the UI overlay,
     scroll sections, loading screen, and the Three.js canvas

   HOW IT FITS INTO THE SYSTEM:
   - includes/header.php loads meta tags, CSS, and top-level HTML shell
   - includes/footer.php loads JavaScript files at the bottom of the page
   - assets/js/app.js will target the IDs/classes defined in this file
   ============================================================ */
?>

<?php include __DIR__ . '/includes/header.php'; ?>

<!-- Note: Cinematic homepage keeps its 3D structure; the editorial nav/footer is included by header/footer. -->


<main id="app" class="site-shell">

    <!-- ============================================================
         SECTION: Loading Screen
         WHAT THIS DOES:
         - Displays a branded loading overlay while assets initialize
         - Gives users immediate feedback before the 3D scene is ready

         WHY WE NEED IT:
         - Three.js scenes, textures, and modules can take a moment to load
         - Without a loading layer the page can look broken/blank at first
         - This also gives us a place later to show loading progress

         SAFE TO EDIT:
         - The loading title text
         - The loading subtitle text
         ============================================================ -->
    <div id="loading-screen" class="loading-screen">
        <div class="loading-screen__inner">
            <div class="loading-screen__brand">WINE EXPERIENCE</div>
            <div class="loading-screen__text">Preparing the journey from vineyard to bottle...</div>
        </div>
    </div>

    <!-- ============================================================
         SECTION: Three.js Canvas Mount
         WHAT THIS DOES:
         - Provides the container where the Three.js renderer will insert
           the WebGL canvas
         - This is the visual stage for the 3D cinematic experience

         WHY WE NEED IT:
         - Keeping the 3D renderer in its own dedicated wrapper makes the
           layout easier to manage
         - Lets us layer UI, overlays, and scroll sections above the canvas
         - Gives JS a stable DOM target for the renderer

         IMPORTANT:
         - app.js / three-engine.js will mount the renderer inside #three-stage
         ============================================================ -->
    <section id="three-stage" class="three-stage" aria-label="3D wine experience canvas"></section>

    <!-- ============================================================
         SECTION: Cinematic UI Overlay
         WHAT THIS DOES:
         - Holds the stage title, subtitle, progress indicator, and any
           future luxury overlay UI elements
         - Sits above the 3D scene visually, but does not block the scene

         WHY WE NEED IT:
         - Users need context while scrolling through the wine journey
         - This is how we turn the site into a guided storytelling experience
         - Keeps all overlay UI in one consistent layer

         IMPORTANT:
         - JS will update the title/subtitle/progress dynamically
         ============================================================ -->
    <div class="ui-overlay" id="ui-overlay" aria-hidden="true">

        <div class="ui-overlay__content">
            <div class="ui-copy">
                <p class="ui-kicker">Wine Production Journey</p>
                <h1 class="ui-title" id="ui-title">VINEYARD</h1>
                <p class="ui-subtitle" id="ui-subtitle">
                    Where terroir, climate, and cultivation shape the final wine.
                </p>
            </div>

            <div class="ui-progress" aria-hidden="true">
                <span class="ui-progress__label">Progress</span>
                <div class="ui-progress__track">
                    <div class="ui-progress__bar" id="ui-progress-bar"></div>
                </div>
            </div>
        </div>

    </div>

    <!-- ============================================================
         SECTION: Scroll Story Track
         WHAT THIS DOES:
         - Creates the vertical scroll length used by GSAP ScrollTrigger
         - Each stage block represents a wine-production chapter in the story
         - The 3D experience will react to the user's scroll position

         WHY WE NEED IT:
         - The site is scroll-driven, so we need actual scrollable content
         - ScrollTrigger needs a track/trigger area to map animation progress
         - Each stage item gives us semantic anchors for the 12 wine steps

         IMPORTANT:
         - The visible design can stay minimal because the 3D scene is the
           main visual experience
         - These sections are still useful for accessibility and structure

         SAFE TO EDIT:
         - Stage labels and descriptions
         - The order should only be changed if you also update the stage map
           in JavaScript and JSON data files
         ============================================================ -->
    <section id="scroll-story" class="scroll-story" aria-label="Wine production story stages">

        <article class="story-stage" data-stage="vineyard">
            <div class="story-stage__inner">
                <span class="story-stage__number">01</span>
                <h2 class="story-stage__title">Vineyard</h2>
                <p class="story-stage__text">Viticulture, terroir, sunlight, soil and the foundations of flavour.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="harvest">
            <div class="story-stage__inner">
                <span class="story-stage__number">02</span>
                <h2 class="story-stage__title">Harvest</h2>
                <p class="story-stage__text">Picking grapes at peak ripeness for the style of wine being made.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="crush">
            <div class="story-stage__inner">
                <span class="story-stage__number">03</span>
                <h2 class="story-stage__title">Crushing &amp; Destemming</h2>
                <p class="story-stage__text">Separating stems, breaking skins, and preparing fruit for fermentation.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="fermentation">
            <div class="story-stage__inner">
                <span class="story-stage__number">04</span>
                <h2 class="story-stage__title">Fermentation</h2>
                <p class="story-stage__text">Yeast transforms sugar into alcohol, heat, and the first true expression of wine.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="press">
            <div class="story-stage__inner">
                <span class="story-stage__number">05</span>
                <h2 class="story-stage__title">Pressing</h2>
                <p class="story-stage__text">Extracting the remaining juice and defining structure, texture, and style.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="barrels">
            <div class="story-stage__inner">
                <span class="story-stage__number">06</span>
                <h2 class="story-stage__title">Aging / Maturation</h2>
                <p class="story-stage__text">Barrels and tanks shape tannins, complexity, aroma, and refinement over time.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="blending">
            <div class="story-stage__inner">
                <span class="story-stage__number">07</span>
                <h2 class="story-stage__title">Blending</h2>
                <p class="story-stage__text">Combining lots, varietals, and barrel expressions into a signature house style.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="stabilisation">
            <div class="story-stage__inner">
                <span class="story-stage__number">08</span>
                <h2 class="story-stage__title">Stabilisation &amp; Filtration</h2>
                <p class="story-stage__text">Clarifying and protecting the wine before bottling and release.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="bottling">
            <div class="story-stage__inner">
                <span class="story-stage__number">09</span>
                <h2 class="story-stage__title">Bottling</h2>
                <p class="story-stage__text">Filling, sealing, labelling, and preparing each bottle for its next journey.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="bottle-aging">
            <div class="story-stage__inner">
                <span class="story-stage__number">10</span>
                <h2 class="story-stage__title">Bottle Aging</h2>
                <p class="story-stage__text">Some wines continue to evolve, soften, and deepen long after bottling.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="distribution">
            <div class="story-stage__inner">
                <span class="story-stage__number">11</span>
                <h2 class="story-stage__title">Distribution</h2>
                <p class="story-stage__text">From cellar to restaurant, retailer, export market, and direct customer experience.</p>
            </div>
        </article>

        <article class="story-stage" data-stage="experience">
            <div class="story-stage__inner">
                <span class="story-stage__number">12</span>
                <h2 class="story-stage__title">The Experience</h2>
                <p class="story-stage__text">The final moment where craft, place, and storytelling are poured into the glass.</p>
            </div>
        </article>

    </section>

    <!-- ============================================================
         SECTION: No-JavaScript Fallback
         WHAT THIS DOES:
         - Displays a simple message if JavaScript is disabled

         WHY WE NEED IT:
         - The site relies heavily on JavaScript for the 3D experience
         - This provides graceful fallback messaging instead of a broken page
         ============================================================ -->
    <noscript>
        <div class="no-js-message">
            This wine experience requires JavaScript to load the cinematic 3D journey.
        </div>
    </noscript>

</main>

<?php include __DIR__ . '/includes/footer.php'; ?>