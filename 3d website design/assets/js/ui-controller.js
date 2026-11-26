/* ============================================================
   FILE: assets/js/ui-controller.js
   PURPOSE:
   This file controls all UI updates for the cinematic wine experience.

   WHY THIS FILE EXISTS:
   - Separates UI logic from Three.js and Scroll logic
   - Ensures text transitions are smooth and consistent
   - Centralises all DOM UI updates in one place

   ROLE IN SYSTEM:
   scroll-engine → three-engine → ui-controller → DOM overlay
   ============================================================ */


/* ============================================================
   MAIN UI CONTROLLER
   ============================================================ */

export function initUIController({ dom, state }) {

    /* ------------------------------------------------------------
       SECTION: DOM REFERENCES
       WHY:
       - Keeps frequently used UI elements in memory
       - Avoids repeated DOM queries
       ------------------------------------------------------------ */
    const titleEl = dom.uiTitle;
    const subtitleEl = dom.uiSubtitle;
    const progressBarEl = dom.uiProgressBar;

    // index.php uses #ui-progress-bar, which is inside the ui-progress section.
    // We fade/transition the whole copy block.
    const copyContainer = titleEl?.closest(".ui-copy");


    /* ------------------------------------------------------------
       SECTION: INTERNAL STATE
       WHY:
       - Tracks current UI stage to prevent unnecessary updates
       ------------------------------------------------------------ */
    let currentStage = null;


    /* ============================================================
       FUNCTION: SET STAGE
       PURPOSE:
       Updates all UI text when the wine stage changes
       ============================================================ */

    function setStage(stage, index) {

        if (!stage) return;

        /* --------------------------------------------------------
           AVOID RE-RENDERING SAME STAGE
           WHY:
           - Prevents flicker and unnecessary DOM updates
           -------------------------------------------------------- */
        if (currentStage === stage.slug) return;

        currentStage = stage.slug;


        /* --------------------------------------------------------
           UI TRANSITION START STATE
           WHY:
           - Allows CSS animations to fade/shift content smoothly
           -------------------------------------------------------- */
        if (copyContainer) {
            copyContainer.classList.add("is-transitioning");
        }


        /* --------------------------------------------------------
           SMALL DELAY FOR SMOOTH TEXT TRANSITION
           WHY:
           - Prevents harsh text swapping
           - Creates cinematic pacing
           -------------------------------------------------------- */
        setTimeout(() => {

            /* ----------------------------------------------------
               UPDATE MAIN TITLE
               ---------------------------------------------------- */
            if (titleEl) {
                titleEl.textContent = stage.title || "";
            }

            /* ----------------------------------------------------
               UPDATE SUBTITLE
               ---------------------------------------------------- */
            if (subtitleEl) {
                subtitleEl.textContent = stage.subtitle || "";
            }

            /* ----------------------------------------------------
               REMOVE TRANSITION STATE AFTER UPDATE
               ---------------------------------------------------- */
            if (copyContainer) {
                copyContainer.classList.remove("is-transitioning");
            }

        }, 250);
    }


    /* ============================================================
       FUNCTION: SET PROGRESS
       PURPOSE:
       Updates the scroll progress bar (0 → 1)
       ============================================================ */

    function setProgress(progress) {

        if (!progressBarEl) return;

        const percentage = Math.max(0, Math.min(1, progress)) * 100;

        /* --------------------------------------------------------
           WHY THIS WORKS:
           - Converts scroll progress into visual feedback
           - Keeps user oriented in long cinematic scroll
           -------------------------------------------------------- */
        progressBarEl.style.height = `${percentage}%`;
    }


    /* ============================================================
       FUNCTION: RESET UI
       PURPOSE:
       Resets UI back to initial state (useful for reloads)
       ============================================================ */

    function reset() {

        currentStage = null;

        if (titleEl) titleEl.textContent = "";
        if (subtitleEl) subtitleEl.textContent = "";
        if (progressBarEl) progressBarEl.style.height = "0%";
    }


    /* ============================================================
       OPTIONAL: INTRO ANIMATION HOOK
       PURPOSE:
       Placeholder for future GSAP intro animations
       ============================================================ */

    function playIntro() {
        // Future: GSAP fade-in of UI elements
        console.log("[UI] Intro animation placeholder");
    }


    /* ============================================================
       RETURN PUBLIC API
       ============================================================ */

    // Back-compat helpers for older stage-integration implementations
    function setStageTitle(title) {
        if (titleEl) titleEl.textContent = title || "";
    }

    function setStageSubtitle(subtitle) {
        if (subtitleEl) subtitleEl.textContent = subtitle || "";
    }

    return {
        setStage,
        setProgress,
        reset,
        playIntro,
        setStageTitle,
        setStageSubtitle
    };
}