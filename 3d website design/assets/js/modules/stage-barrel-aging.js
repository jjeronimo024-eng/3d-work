/* ============================================================
   FILE: assets/js/modules/stage-barrel-aging.js
   PURPOSE:
   This module builds and controls the Barrel Aging stage.

   WHY THIS FILE EXISTS:
   - Barrel aging represents time, patience, and craftsmanship
   - It is the emotional “depth” stage of winemaking
   - Visual tone shifts to warm, dark, and premium atmosphere

   ROLE IN SYSTEM:
   three-engine.js → stage-barrel-aging.js → luxury cellar world
   ============================================================ */


/* ============================================================
   IMPORT THREE
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createBarrelAgingStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: ROOT GROUP
       WHY:
       - Keeps entire cellar isolated for transitions
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-barrel-aging";


    /* ------------------------------------------------------------
       SECTION: CELLAR FLOOR
       WHY:
       - Establishes grounded, warm underground tone
       ------------------------------------------------------------ */
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshStandardMaterial({
            color: 0x1a120d,
            roughness: 1
        })
    );

    floor.rotation.x = -Math.PI / 2;
    group.add(floor);


    /* ------------------------------------------------------------
       SECTION: WOODEN BARRELS GRID
       WHY:
       - Repetition creates visual luxury rhythm
       - Represents aging wine storage system
       ------------------------------------------------------------ */
    const barrelGeometry = new THREE.CylinderGeometry(0.5, 0.6, 1.2, 18);

    const barrelMaterial = new THREE.MeshStandardMaterial({
        color: 0x6b3f22,
        roughness: 0.9,
        metalness: 0.1
    });

    const barrels = [];

    for (let x = 0; x < 6; x++) {
        for (let z = 0; z < 10; z++) {

            const barrel = new THREE.Mesh(barrelGeometry, barrelMaterial);

            barrel.position.set(
                x * 1.4 - 4,
                0.6,
                z * -1.6
            );

            barrel.rotation.y = Math.random() * 0.2;

            barrels.push(barrel);
            group.add(barrel);
        }
    }


    /* ------------------------------------------------------------
       SECTION: SUBTLE PARTICLE DUST (ATMOSPHERE)
       WHY:
       - Adds cinematic depth and realism
       - Suggests aged cellar environment
       ------------------------------------------------------------ */
    const dustGeometry = new THREE.SphereGeometry(0.03, 6, 6);
    const dustMaterial = new THREE.MeshStandardMaterial({
        color: 0xc2a57a,
        transparent: true,
        opacity: 0.4
    });

    const dustParticles = [];

    for (let i = 0; i < 80; i++) {

        const dust = new THREE.Mesh(dustGeometry, dustMaterial);

        dust.position.set(
            (Math.random() - 0.5) * 10,
            Math.random() * 3,
            (Math.random() - 0.5) * 20
        );

        dust.userData.speed = 0.1 + Math.random() * 0.2;

        dustParticles.push(dust);
        group.add(dust);
    }


    /* ------------------------------------------------------------
       SECTION: LIGHTING (WARM, LOW, CINEMATIC)
       WHY:
       - Barrel aging must feel intimate and premium
       - Low light = depth + luxury perception
       ------------------------------------------------------------ */
    const ambient = new THREE.AmbientLight(0x3a2a1a, 0.5);
    group.add(ambient);

    const warmLight = new THREE.PointLight(0xffb36b, 1.2, 30);
    warmLight.position.set(0, 4, 0);
    group.add(warmLight);


    /* ------------------------------------------------------------
       SECTION: UPDATE LOOP
       WHY:
       - Dust motion adds subtle life
       - Barrels remain mostly static (intentional stillness)
       ------------------------------------------------------------ */
    function update(delta) {

        /* --------------------------------------------------------
           DUST FLOAT MOTION
           WHY:
           - Represents aging environment particles
           -------------------------------------------------------- */
        dustParticles.forEach((d) => {
            d.position.y += d.userData.speed * 0.01;

            if (d.position.y > 3) {
                d.position.y = 0;
                d.position.x = (Math.random() - 0.5) * 10;
                d.position.z = (Math.random() - 0.5) * 20;
            }
        });

        /* --------------------------------------------------------
           SUBTLE BARREL AMBIENT MOTION
           WHY:
           - Almost imperceptible movement = living environment feel
           -------------------------------------------------------- */
        barrels.forEach((b) => {
            b.rotation.y += 0.0002;
        });
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Triggered when entering barrel aging stage
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Barrel Aging] Enter stage");
        group.visible = true;

        // Future cinematic upgrade hooks:
        // - camera slow dolly in
        // - light flicker (candle effect)
        // - deep bass audio layer
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION
       WHY:
       - Clean exit before bottling stage
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Barrel Aging] Exit stage");
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