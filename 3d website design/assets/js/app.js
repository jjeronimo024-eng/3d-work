/* ============================================================
   FILE: assets/js/app.js
   PURPOSE:
   This is the ENTRY POINT of the entire cinematic website.

   WHY THIS FILE EXISTS:
   - Ensures DOM is fully loaded before starting 3D engine
   - Prevents race conditions between UI and WebGL
   - Acts as the safe launch layer for bootstrap system

   ROLE IN SYSTEM:
   browser → app.js → bootstrap.js → full cinematic engine
   ============================================================ */


/* ============================================================
   IMPORT BOOTSTRAP SYSTEM
   ============================================================ */
import { bootstrap } from "./bootstrap.js";


/* ============================================================
   SAFE INITIALISATION WRAPPER
   WHY:
   - Ensures system only starts when DOM is ready
   - Prevents null element errors in UI or canvas
   ============================================================ */

function initApp() {

    console.log("[App] Initialising cinematic wine experience...");

    /* ------------------------------------------------------------
       SECTION: LAUNCH BOOTSTRAP
       WHY:
       - Bootstraps entire 3D + UI + scroll system
       ------------------------------------------------------------ */
    bootstrap()
        .then((system) => {

            console.log("[App] System successfully launched", system);

            /* ----------------------------------------------------
               FUTURE HOOK:
               - hide loading screen
               - start intro animation
               - trigger ambient sound fade-in
               ---------------------------------------------------- */

        })
        .catch((err) => {
            console.error("[App] Failed to initialise system:", err);
        });
}


/* ============================================================
   DOM READY CHECK
   WHY:
   - Ensures HTML elements exist before JS runs
   ============================================================ */

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
} else {
    initApp();
}