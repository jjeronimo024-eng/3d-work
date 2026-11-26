/* ============================================================
   FILE: assets/js/scroll-engine.js
   PURPOSE:
   This file converts user scrolling into cinematic progression
   using GSAP ScrollTrigger.

   WHY THIS FILE EXISTS:
   - Scroll is the “remote control” of the entire experience
   - It drives stage transitions in the 3D world
   - It synchronises UI + 3D + storytelling

   ROLE IN SYSTEM:
   GSAP ScrollTrigger → scroll-engine.js → three-engine.js + UI
   ============================================================ */


/* ============================================================
   IMPORT GSAP + SCROLLTRIGGER
   NOTE:
   - In production this can be bundled or CDN-loaded
   ============================================================ */
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import ScrollTrigger from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);


/* ============================================================
   MAIN SCROLL ENGINE
   ============================================================ */

export function initScrollEngine({ stages = [], onStageChange, onProgress }) {

    /* ------------------------------------------------------------
       SECTION: INTERNAL STATE
       WHY:
       - Tracks last stage so we only trigger changes when needed
       ------------------------------------------------------------ */
    let currentStageIndex = 0;


    /* ------------------------------------------------------------
       SECTION: SCROLL SOURCE
       WHY:
       - Use the existing semantic scroll track in index.php.
       - Prevents double-scroll length / conflicting ScrollTrigger triggers.
       ------------------------------------------------------------ */
    const scrollTrack = document.getElementById("scroll-story") || document.body;



    /* ------------------------------------------------------------
       SECTION: MASTER SCROLL TWEEN
       WHAT THIS DOES:
       - Converts scroll position into progress (0 → 1)
       - Drives the entire cinematic timeline
       ------------------------------------------------------------ */
    const scrollTween = gsap.to({}, {
        scrollTrigger: {
            trigger: scrollTrack,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {

                const progress = self.progress; // 0 → 1
                const rawIndex = progress * (stages.length - 1);
                const index = Math.round(rawIndex);

                /* ----------------------------------------------------
                   PROGRESS CALLBACK
                   Sends smooth scroll progress to UI + engine
                   ---------------------------------------------------- */
                if (onProgress) {
                    onProgress(progress);
                }

                /* ----------------------------------------------------
                   STAGE CHANGE DETECTION
                   Only fires when stage index changes
                   ---------------------------------------------------- */
                if (index !== currentStageIndex) {
                    currentStageIndex = index;

                    if (onStageChange) {
                        onStageChange(stages[index], index);
                    }
                }
            }
        }
    });


    /* ------------------------------------------------------------
       SECTION: PUBLIC API
       WHAT THIS DOES:
       - Allows Three.js engine or UI to listen to scroll updates
       ------------------------------------------------------------ */
    const listeners = [];

    function onUpdate(callback) {
        listeners.push(callback);
    }

    function emit(data) {
        listeners.forEach((cb) => cb(data));
    }


    /* ------------------------------------------------------------
       SECTION: FRAME SYNC LOOP
       WHY:
       - Ensures Three.js can receive continuous updates if needed
       - Future use: camera smoothing, physics, transitions
       ------------------------------------------------------------ */
    gsap.ticker.add(() => {
        emit({
            progress: scrollTween.scrollTrigger ? scrollTween.scrollTrigger.progress : 0,
            index: currentStageIndex
        });
    });


    /* ------------------------------------------------------------
       SECTION: RETURN ENGINE INTERFACE
       ============================================================ */
    return {
        onUpdate,
        getStage: () => stages[currentStageIndex],
        getProgress: () => scrollTween.scrollTrigger?.progress || 0
    };
}