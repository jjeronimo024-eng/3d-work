/* ============================================================
   FILE: assets/js/modules/stage-vineyard.js
   PURPOSE:
   This module builds and controls the Vineyard stage of the
   wine cinematic experience.

   WHY THIS FILE EXISTS:
   - Each wine stage is isolated as its own module
   - Keeps scene logic modular and easy to maintain
   - Allows lazy-loading of heavy assets later

   ROLE IN SYSTEM:
   three-engine.js → stage-vineyard.js → scene objects + animation
   ============================================================ */


/* ============================================================
   IMPORT THREE (shared instance context)
   NOTE:
   In advanced version, we may pass THREE via engine injection.
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createVineyardStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: STAGE ROOT GROUP
       WHY:
       - Everything in this stage is grouped for easy cleanup
       - We can remove or swap entire stage in one operation
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-vineyard";


    /* ------------------------------------------------------------
       SECTION: GROUND / TERRAIN
       WHY:
       - Represents vineyard land base
       - Foundation of entire scene
       ------------------------------------------------------------ */
    const groundGeometry = new THREE.PlaneGeometry(200, 200, 64, 64);

    const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x1b2a1a,
        roughness: 1,
        metalness: 0
    });

    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;

    group.add(ground);


    /* ------------------------------------------------------------
       SECTION: SIMPLE VINE ROWS (PLACEHOLDER ASSETS)
       WHY:
       - Represents vineyard structure before real models load
       - Lightweight placeholder system for performance
       ------------------------------------------------------------ */

    const vineMaterial = new THREE.MeshStandardMaterial({
        color: 0x2f5d3a
    });

    const vineGeometry = new THREE.BoxGeometry(0.2, 1.2, 0.2);

    for (let i = 0; i < 30; i++) {

        const vineLeft = new THREE.Mesh(vineGeometry, vineMaterial);
        const vineRight = new THREE.Mesh(vineGeometry, vineMaterial);

        vineLeft.position.set(-2, 0.6, i * -2);
        vineRight.position.set(2, 0.6, i * -2);

        group.add(vineLeft);
        group.add(vineRight);
    }


    /* ------------------------------------------------------------
       SECTION: LIGHTING FOR VINEYARD
       WHY:
       - Establishes warm natural sunrise tone
       - Differentiates stage visually from cellar scenes
       ------------------------------------------------------------ */
    const sunlight = new THREE.DirectionalLight(0xffd7a3, 1.5);
    sunlight.position.set(10, 20, 5);

    group.add(sunlight);


    const ambient = new THREE.AmbientLight(0x3a4a2a, 0.6);
    group.add(ambient);


    /* ------------------------------------------------------------
       SECTION: ANIMATION UPDATE LOOP
       WHY:
       - Future vineyard wind movement
       - Subtle plant sway or atmospheric motion
       ------------------------------------------------------------ */
    function update(deltaTime) {
        // Placeholder for future motion:
        // vines sway
        // wind particles
        // sunlight shift
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Called when scroll enters vineyard stage
       - Used for cinematic transitions
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Vineyard] Enter stage");

        group.visible = true;
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION
       WHY:
       - Cleanly disables stage when moving forward
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Vineyard] Exit stage");

        group.visible = false;
    }


    /* ------------------------------------------------------------
       SECTION: INIT STAGE INTO SCENE
       WHY:
       - Attach everything to main Three.js scene
       ------------------------------------------------------------ */
    scene.add(group);


    /* ------------------------------------------------------------
       PUBLIC API
       ============================================================ */
    return {
        group,
        update,
        enter,
        exit
    };
}