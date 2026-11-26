/* ============================================================
   FILE: assets/js/camera-controller.js
   PURPOSE:
   This file controls ALL cinematic camera movement.

   WHY THIS FILE EXISTS:
   - Default Three.js camera movement feels robotic
   - We need smooth, film-like motion curves
   - Scroll must feel like “guiding a camera”, not scrolling a page

   ROLE IN SYSTEM:
   scroll-engine → camera-controller → three.js camera
   ============================================================ */


/* ============================================================
   IMPORT GSAP
   ============================================================ */
import gsap from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js/+esm";


/* ============================================================
   MAIN CONTROLLER
   ============================================================ */

export function initCameraController(camera) {

    /* ------------------------------------------------------------
       SECTION: CAMERA STATE MEMORY
       WHY:
       - Keeps track of current target position/rotation
       ------------------------------------------------------------ */
    const state = {
        x: 0,
        y: 2,
        z: 6,
        rotX: 0,
        rotY: 0
    };


    /* ------------------------------------------------------------
       FUNCTION: MOVE CAMERA TO STAGE
       WHY:
       - Each wine stage gets its own cinematic framing
       ------------------------------------------------------------ */

    function moveToStage(stageIndex) {

        /* --------------------------------------------------------
           CAMERA POSITIONS PER STAGE
           WHY:
           - Defines storytelling composition per scene
           -------------------------------------------------------- */
        const presets = [
            { x: 0, y: 2, z: 6 },   // Vineyard - wide natural shot
            { x: 2, y: 2, z: 5 },   // Harvest - dynamic angle
            { x: -1, y: 2.5, z: 4 }, // Fermentation - closer inspection
            { x: 0, y: 3, z: 7 },   // Barrel - slow depth shot
            { x: 0, y: 2, z: 5 },   // Bottling - structured framing
            { x: 3, y: 2, z: 6 },   // Distribution - wide motion feel
            { x: 0, y: 1.8, z: 3 }  // Experience - intimate close-up
        ];

        const target = presets[stageIndex] || presets[0];

        /* --------------------------------------------------------
           GSAP SMOOTH CAMERA ANIMATION
           WHY:
           - Creates cinematic easing instead of linear movement
           -------------------------------------------------------- */
        gsap.to(state, {
            x: target.x,
            y: target.y,
            z: target.z,
            duration: 1.5,
            ease: "power3.inOut"
        });
    }


    /* ------------------------------------------------------------
       FUNCTION: APPLY CAMERA UPDATE LOOP
       WHY:
       - Syncs GSAP state → actual Three.js camera every frame
       ------------------------------------------------------------ */

    function update() {

        camera.position.x = state.x;
        camera.position.y = state.y;
        camera.position.z = state.z;

        camera.rotation.x = state.rotX;
        camera.rotation.y = state.rotY;
    }


    /* ------------------------------------------------------------
       FUNCTION: INTRO PUSH-IN (OPTIONAL CINEMATIC START)
       ------------------------------------------------------------ */

    function intro() {

        gsap.fromTo(state,
            { z: 10, y: 5 },
            {
                z: 6,
                y: 2,
                duration: 2.5,
                ease: "power4.out"
            }
        );
    }


    /* ------------------------------------------------------------
       PUBLIC API
       ============================================================ */
    return {
        moveToStage,
        update,
        intro
    };
}