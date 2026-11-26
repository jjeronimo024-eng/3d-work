/* ============================================================
   FILE: assets/js/modules/stage-fermentation.js
   PURPOSE:
   This module builds and controls the Fermentation stage of the
   wine cinematic experience.

   WHY THIS FILE EXISTS:
   - Fermentation is the transformation phase of wine
   - It introduces subtle motion, particles, and atmosphere shift
   - It slows the pacing to feel more internal and scientific

   ROLE IN SYSTEM:
   three-engine.js → stage-fermentation.js → transformation world
   ============================================================ */


/* ============================================================
   IMPORT THREE
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createFermentationStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: ROOT GROUP
       WHY:
       - Allows full isolation of fermentation environment
       - Enables smooth stage transitions
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-fermentation";


    /* ------------------------------------------------------------
       SECTION: DARK BASE ENVIRONMENT
       WHY:
       - Fermentation happens in controlled, enclosed spaces
       - Visual tone becomes darker and more intimate
       ------------------------------------------------------------ */
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshStandardMaterial({
            color: 0x120b08,
            roughness: 1
        })
    );

    ground.rotation.x = -Math.PI / 2;
    group.add(ground);


    /* ------------------------------------------------------------
       SECTION: FERMENTATION TANKS (ABSTRACT CYLINDERS)
       WHY:
       - Represents stainless steel fermentation tanks
       - Simplified geometry for performance
       ------------------------------------------------------------ */
    const tankGeometry = new THREE.CylinderGeometry(0.6, 0.6, 2.5, 16);
    const tankMaterial = new THREE.MeshStandardMaterial({
        color: 0x2a2a2a,
        metalness: 0.8,
        roughness: 0.4
    });

    const tanks = [];

    for (let i = 0; i < 12; i++) {

        const tank = new THREE.Mesh(tankGeometry, tankMaterial);

        tank.position.set(
            (i % 4) * 2 - 3,
            1.25,
            Math.floor(i / 4) * -3
        );

        tanks.push(tank);
        group.add(tank);
    }


    /* ------------------------------------------------------------
       SECTION: BUBBLE PARTICLES (FERMENTATION EFFECT)
       WHY:
       - Simulates CO₂ release during fermentation
       - Gives life to otherwise static tanks
       ------------------------------------------------------------ */
    const bubbleGeometry = new THREE.SphereGeometry(0.05, 6, 6);
    const bubbleMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.6
    });

    const bubbles = [];

    for (let i = 0; i < 60; i++) {

        const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);

        bubble.position.set(
            (Math.random() - 0.5) * 6,
            Math.random() * 2,
            (Math.random() - 0.5) * 6
        );

        bubble.userData.speed = 0.5 + Math.random();

        bubbles.push(bubble);
        group.add(bubble);
    }


    /* ------------------------------------------------------------
       SECTION: LIGHTING (LOW, CONTROLLED, LAB-LIKE)
       WHY:
       - Fermentation feels like controlled science
       - Cooler tones vs harvest warmth
       ------------------------------------------------------------ */
    const ambient = new THREE.AmbientLight(0x2a1f1a, 0.5);
    group.add(ambient);

    const pointLight = new THREE.PointLight(0xffaa66, 1.2, 20);
    pointLight.position.set(0, 4, 0);
    group.add(pointLight);


    /* ------------------------------------------------------------
       SECTION: ANIMATION LOOP
       WHY:
       - Drives bubbles rising
       - Subtle tank breathing motion later
       ------------------------------------------------------------ */
    function update(delta) {

        /* --------------------------------------------------------
           BUBBLE RISE MOTION
           WHY:
           - Represents CO₂ release from fermentation
           -------------------------------------------------------- */
        bubbles.forEach((b) => {
            b.position.y += b.userData.speed * 0.01;

            if (b.position.y > 3) {
                b.position.y = 0;
                b.position.x = (Math.random() - 0.5) * 6;
                b.position.z = (Math.random() - 0.5) * 6;
            }
        });

        /* --------------------------------------------------------
           TANK SUBTLE MOTION (FUTURE EXPANSION HOOK)
           -------------------------------------------------------- */
        tanks.forEach((t) => {
            t.rotation.y += 0.0005;
        });
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Triggered when scroll enters fermentation stage
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Fermentation] Enter stage");
        group.visible = true;

        // Future upgrade:
        // - fog increase
        // - camera slow zoom
        // - audio hum activation
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION
       WHY:
       - Cleanly disables fermentation scene
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Fermentation] Exit stage");
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