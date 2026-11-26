/* ============================================================
   FILE: assets/js/modules/stage-experience.js
   PURPOSE:
   This module builds and controls the final Experience stage of
   the wine cinematic journey.

   WHY THIS FILE EXISTS:
   - This is the emotional climax of the entire experience
   - It transitions from production → human enjoyment
   - It represents taste, connection, and brand identity

   ROLE IN SYSTEM:
   three-engine.js → stage-experience.js → final cinematic moment
   ============================================================ */


/* ============================================================
   IMPORT THREE
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createExperienceStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: ROOT GROUP
       WHY:
       - Isolates final emotional scene for transitions
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-experience";


    /* ------------------------------------------------------------
       SECTION: TASTING TABLE PLATFORM
       WHY:
       - Represents human-centered experience space
       - Focus shifts from industrial → intimate
       ------------------------------------------------------------ */
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshStandardMaterial({
            color: 0x1a1410,
            roughness: 1
        })
    );

    floor.rotation.x = -Math.PI / 2;
    group.add(floor);


    /* ------------------------------------------------------------
       SECTION: TABLE SETUP (SIMPLIFIED EXPERIENCE METAPHOR)
       WHY:
       - Represents wine tasting / restaurant setting
       - Central focus point for emotional storytelling
       ------------------------------------------------------------ */
    const table = new THREE.Mesh(
        new THREE.BoxGeometry(6, 0.3, 2),
        new THREE.MeshStandardMaterial({
            color: 0x4a2f1c,
            roughness: 0.8
        })
    );

    table.position.set(0, 0.8, 0);
    group.add(table);


    /* ------------------------------------------------------------
       SECTION: WINE GLASS OBJECTS (ABSTRACT REPRESENTATION)
       WHY:
       - Represents final consumption moment
       - Simplified geometry for performance
       ------------------------------------------------------------ */
    const glassGeometry = new THREE.CylinderGeometry(0.2, 0.15, 0.6, 16);
    const glassMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.25
    });

    const glasses = [];

    for (let i = 0; i < 4; i++) {

        const glass = new THREE.Mesh(glassGeometry, glassMaterial);

        glass.position.set(
            (i - 1.5) * 1.2,
            1.1,
            0
        );

        glasses.push(glass);
        group.add(glass);
    }


    /* ------------------------------------------------------------
       SECTION: WARM AMBIENT LIGHTING
       WHY:
       - Emotional warmth = human experience
       - Final tone shift from industrial → intimate
       ------------------------------------------------------------ */
    const ambient = new THREE.AmbientLight(0x4a3322, 0.8);
    group.add(ambient);

    const warmLight = new THREE.PointLight(0xffc28a, 1.5, 40);
    warmLight.position.set(0, 5, 3);
    group.add(warmLight);


    /* ------------------------------------------------------------
       SECTION: SUBTLE GLASS MOTION
       WHY:
       - Slight movement = living, breathing moment
       - Prevents static final scene feel
       ------------------------------------------------------------ */
    function update(delta) {

        glasses.forEach((g, i) => {
            g.position.y = 1.1 + Math.sin(Date.now() * 0.001 + i) * 0.01;
        });
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Final emotional entry point of journey
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Experience] Enter stage");
        group.visible = true;

        // Future:
        // - camera slow push-in to table
        // - soft vignette overlay
        // - ambient wine glass sound
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION (RARE / END STATE)
       WHY:
       - Usually not used unless looping experience
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Experience] Exit stage");
        group.visible = false;
    }


    /* ------------------------------------------------------------
       ADD TO SCENE
       ============================================================ */
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