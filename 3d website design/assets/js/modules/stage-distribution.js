/* ============================================================
   FILE: assets/js/modules/stage-distribution.js
   PURPOSE:
   This module builds and controls the Distribution stage of the wine
   cinematic experience.

   WHY THIS FILE EXISTS:
   - Distribution represents global movement of finished wine
   - It shifts focus from production → logistics → reach
   - It introduces motion across space and directionality

   ROLE IN SYSTEM:
   three-engine.js → stage-distribution.js → global movement world
   ============================================================ */


/* ============================================================
   IMPORT THREE
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createDistributionStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: ROOT GROUP
       WHY:
       - Keeps distribution stage isolated for transitions
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-distribution";


    /* ------------------------------------------------------------
       SECTION: GLOBAL PLATFORM (ABSTRACT WORLD MAP SURFACE)
       WHY:
       - Represents global distribution concept
       - Abstract instead of real geography for performance + style
       ------------------------------------------------------------ */
    const ground = new THREE.Mesh(
        new THREE.PlaneGeometry(250, 250),
        new THREE.MeshStandardMaterial({
            color: 0x0b0f14,
            roughness: 1
        })
    );

    ground.rotation.x = -Math.PI / 2;
    group.add(ground);


    /* ------------------------------------------------------------
       SECTION: SHIPPING CRATES (REPRESENTING WINE EXPORTS)
       WHY:
       - Visual metaphor for distribution units
       ------------------------------------------------------------ */
    const crateGeometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);

    const crateMaterial = new THREE.MeshStandardMaterial({
        color: 0x3a2a1f,
        roughness: 0.9
    });

    const crates = [];

    for (let i = 0; i < 60; i++) {

        const crate = new THREE.Mesh(crateGeometry, crateMaterial);

        crate.position.set(
            (Math.random() - 0.5) * 30,
            0.3,
            (Math.random() - 0.5) * 30
        );

        crate.userData.speed = 0.2 + Math.random() * 0.5;

        crates.push(crate);
        group.add(crate);
    }


    /* ------------------------------------------------------------
       SECTION: TRANSPORT PATH LINES (ABSTRACT ROUTES)
       WHY:
       - Represents global shipping routes visually
       - Adds directional movement structure
       ------------------------------------------------------------ */
    const pathMaterial = new THREE.LineBasicMaterial({
        color: 0x4a90e2
    });

    const pathPoints = [];

    for (let i = 0; i < 20; i++) {
        pathPoints.push(
            new THREE.Vector3(
                (Math.random() - 0.5) * 40,
                0.1,
                (Math.random() - 0.5) * 40
            )
        );
    }

    const pathGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    const pathLine = new THREE.Line(pathGeometry, pathMaterial);

    group.add(pathLine);


    /* ------------------------------------------------------------
       SECTION: LIGHTING (COOL GLOBAL TONE)
       WHY:
       - Distribution feels global, modern, digital
       - Cooler palette vs cellar warmth
       ------------------------------------------------------------ */
    const ambient = new THREE.AmbientLight(0x223344, 0.8);
    group.add(ambient);

    const directional = new THREE.DirectionalLight(0x88bbff, 1.2);
    directional.position.set(10, 15, 5);
    group.add(directional);


    /* ------------------------------------------------------------
       SECTION: ANIMATION LOOP
       WHY:
       - Crates subtly drift to simulate global movement
       ------------------------------------------------------------ */
    function update(delta) {

        /* --------------------------------------------------------
           CRATE MOVEMENT SIMULATION
           WHY:
           - Suggests global shipping flow
           -------------------------------------------------------- */
        crates.forEach((c) => {
            c.position.x += Math.sin(Date.now() * 0.001 * c.userData.speed) * 0.002;
            c.position.z += Math.cos(Date.now() * 0.001 * c.userData.speed) * 0.002;
        });

        /* --------------------------------------------------------
           PATH SUBTLE SHIFT (LIVING NETWORK FEEL)
           -------------------------------------------------------- */
        pathLine.rotation.y += 0.0005;
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Activated when entering distribution stage
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Distribution] Enter stage");
        group.visible = true;

        // Future:
        // - map zoom effect
        // - shipping soundscape
        // - UI shifts to “global availability”
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION
       WHY:
       - Clean transition into final consumption stage
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Distribution] Exit stage");
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