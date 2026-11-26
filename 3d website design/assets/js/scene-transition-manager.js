/* ============================================================
   FILE: assets/js/scene-transition-manager.js
   PURPOSE:
   This file controls cinematic transitions between stages.

   WHY THIS FILE EXISTS:
   - Switching scenes instantly feels “game-like” and harsh
   - We need smooth cinematic blending between environments
   - This creates a film-like progression instead of jumps

   ROLE IN SYSTEM:
   stage change → transition manager → visual blending → scene swap
   ============================================================ */


/* ============================================================
   IMPORT GSAP
   ============================================================ */
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";


/* ============================================================
   MAIN TRANSITION MANAGER
   ============================================================ */

export function initSceneTransitionManager({ renderer, scene, camera }) {

    /* ------------------------------------------------------------
       SECTION: TRANSITION STATE
       WHY:
       - Tracks fade progress (0 = visible, 1 = black screen)
       ------------------------------------------------------------ */
    const state = {
        opacity: 0
    };


    /* ------------------------------------------------------------
       SECTION: OVERLAY CREATION
       WHY:
       - A full-screen black overlay creates cinematic fades
       ------------------------------------------------------------ */
    const overlay = document.createElement("div");

    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "black";
    overlay.style.pointerEvents = "none";
    overlay.style.opacity = "0";
    overlay.style.zIndex = "999";

    document.body.appendChild(overlay);


    /* ------------------------------------------------------------
       FUNCTION: FADE OUT (ENTER TRANSITION)
       WHY:
       - Used when leaving a stage
       ------------------------------------------------------------ */
    function fadeOut(duration = 0.8) {

        return gsap.to(state, {
            opacity: 1,
            duration,
            ease: "power2.inOut",
            onUpdate: () => {
                overlay.style.opacity = state.opacity;
            }
        });
    }


    /* ------------------------------------------------------------
       FUNCTION: FADE IN (ENTER NEW STAGE)
       WHY:
       - Used when new stage is ready
       ------------------------------------------------------------ */
    function fadeIn(duration = 0.8) {

        return gsap.to(state, {
            opacity: 0,
            duration,
            ease: "power2.inOut",
            onUpdate: () => {
                overlay.style.opacity = state.opacity;
            }
        });
    }


    /* ------------------------------------------------------------
       FUNCTION: FULL SCENE TRANSITION
       WHY:
       - Orchestrates fade out → swap → fade in
       ------------------------------------------------------------ */
    async function transition(fromStage, toStage) {

        /* --------------------------------------------------------
           STEP 1: FADE OUT CURRENT SCENE
           -------------------------------------------------------- */
        await fadeOut(0.6);

        /* --------------------------------------------------------
           STEP 2: DISABLE OLD STAGE
           -------------------------------------------------------- */
        if (fromStage?.exit) {
            fromStage.exit();
        }

        /* --------------------------------------------------------
           STEP 3: ENABLE NEW STAGE
           -------------------------------------------------------- */
        if (toStage?.enter) {
            toStage.enter();
        }

        /* --------------------------------------------------------
           STEP 4: FADE IN NEW SCENE
           -------------------------------------------------------- */
        await fadeIn(0.8);
    }


    /* ------------------------------------------------------------
       PUBLIC API
       ============================================================ */
    return {
        fadeOut,
        fadeIn,
        transition
    };
}