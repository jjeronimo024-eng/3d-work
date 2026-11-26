/* ============================================================
   FILE: assets/js/modules/stage-harvest.js
   PURPOSE:
   This module builds and controls the Harvest stage of the wine
   cinematic experience.

   WHY THIS FILE EXISTS:
   - Each stage is isolated for modular upgrades
   - Harvest is the first "high motion" cinematic moment
   - It introduces energy and change in visual rhythm

   ROLE IN SYSTEM:
   three-engine.js → stage-harvest.js → animated harvest world
   ============================================================ */


/* ============================================================
   IMPORT THREE
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createHarvestStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: ROOT GROUP
       WHY:
       - Allows full stage isolation
       - Enables clean enter/exit transitions
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-harvest";


    /* ------------------------------------------------------------
       SECTION: GROUND (SHARED STYLE BUT MORE DRAMATIC)
       WHY:
       - Keeps terrain consistent with vineyard
       - Slight tone shift for storytelling progression
       ------------------------------------------------------------ */
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200, 64, 64),
        new THREE.MeshStandardMaterial({
            color: 0x2a1f14,
            roughness: 1
        })
    );

    ground.rotation.x = -Math.PI / 2;
    group.add(ground);


    /* ------------------------------------------------------------
       SECTION: VINE ROWS (BROKEN / HARVESTED FEEL)
       WHY:
       - Visually communicates harvesting activity
       - Slight variation from vineyard layout
       ------------------------------------------------------------ */
    const vineMaterial = new THREE.MeshStandardMaterial({
        color: 0x3f6b2f
    });

    const vineGeometry = new THREE.BoxGeometry(0.25, 1.0, 0.25);

    for (let i = 0; i < 25; i++) {

        const vine = new THREE.Mesh(vineGeometry, vineMaterial);

        vine.position.set(
            (Math.random() > 0.5 ? -2.5 : 2.5),
            0.5,
            i * -2.2
        );

        // Slight random rotation = "human interaction feel"
        vine.rotation.y = (Math.random() - 0.5) * 0.6;

        group.add(vine);
    }


    /* ------------------------------------------------------------
       SECTION: GRAPE CLUSTERS (ABSTRACT PARTICLES)
       WHY:
       - Represents harvested grapes without heavy models
       - Lightweight particle-style cubes
       ------------------------------------------------------------ */
    const grapeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const grapeMaterial = new THREE.MeshStandardMaterial({
        color: 0x5a1f3b
    });

    const grapes = [];

    for (let i = 0; i < 80; i++) {

        const grape = new THREE.Mesh(grapeGeometry, grapeMaterial);

        grape.position.set(
            (Math.random() - 0.5) * 6,
            Math.random() * 2,
            (Math.random() - 0.5) * 40
        );

        grape.userData.floatSpeed = 0.3 + Math.random() * 0.8;

        grapes.push(grape);
        group.add(grape);
    }


    /* ------------------------------------------------------------
       SECTION: LIGHTING (MORE INTENSE, WARMER ENERGY)
       WHY:
       - Harvest should feel active and sun-heavy
       - Higher contrast than vineyard stage
       ------------------------------------------------------------ */
    const sunlight = new THREE.DirectionalLight(0xffc07a, 1.8);
    sunlight.position.set(8, 15, 3);

    group.add(sunlight);

    const ambient = new THREE.AmbientLight(0x3a2a1f, 0.7);
    group.add(ambient);


    /* ------------------------------------------------------------
       SECTION: ANIMATION LOOP
       WHY:
       - Adds life to grapes and environment
       - First real motion-based cinematic stage
       ------------------------------------------------------------ */
    function update(delta) {

        /* --------------------------------------------------------
           GRAPE FLOAT MOTION
           WHY:
           - Simulates harvesting movement / floating particles
           -------------------------------------------------------- */
        grapes.forEach((g) => {
            g.position.y += Math.sin(Date.now() * 0.001 * g.userData.floatSpeed) * 0.002;
        });
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Called when scroll enters Harvest stage
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Harvest] Enter stage");

        group.visible = true;

        // Future: GSAP burst animation, camera push-in
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION
       WHY:
       - Clean transition out of harvest scene
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Harvest] Exit stage");

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