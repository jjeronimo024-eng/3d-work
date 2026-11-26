/* ============================================================
   FILE: assets/js/modules/stage-bottling.js
   PURPOSE:
   This module builds and controls the Bottling stage of the wine
   cinematic experience.

   WHY THIS FILE EXISTS:
   - Bottling represents final production and quality control
   - It introduces precision, structure, and industrial rhythm
   - It bridges craftsmanship → commercial product

   ROLE IN SYSTEM:
   three-engine.js → stage-bottling.js → production line world
   ============================================================ */


/* ============================================================
   IMPORT THREE
   ============================================================ */



/* ============================================================
   MAIN MODULE EXPORT
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createBottlingStage({ scene, loader }) {

    /* ------------------------------------------------------------
       SECTION: ROOT GROUP
       WHY:
       - Keeps bottling stage fully isolated
       - Allows clean stage switching
       ------------------------------------------------------------ */
    const group = new THREE.Group();
    group.name = "stage-bottling";


    /* ------------------------------------------------------------
       SECTION: FACTORY FLOOR
       WHY:
       - Represents clean industrial production environment
       ------------------------------------------------------------ */
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(200, 200),
        new THREE.MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.8
        })
    );

    floor.rotation.x = -Math.PI / 2;
    group.add(floor);


    /* ------------------------------------------------------------
       SECTION: PRODUCTION LINE (BOTTLES)
       WHY:
       - Visualizes structured bottling workflow
       - Repetition = industrial precision
       ------------------------------------------------------------ */
    const bottleGeometry = new THREE.CylinderGeometry(0.2, 0.25, 1.2, 16);

    const bottleMaterial = new THREE.MeshStandardMaterial({
        color: 0x1b1b2a,
        metalness: 0.3,
        roughness: 0.2
    });

    const bottles = [];

    for (let i = 0; i < 40; i++) {

        const bottle = new THREE.Mesh(bottleGeometry, bottleMaterial);

        bottle.position.set(
            (i % 8) * 1.2 - 4,
            0.6,
            Math.floor(i / 8) * -2
        );

        bottles.push(bottle);
        group.add(bottle);
    }


    /* ------------------------------------------------------------
       SECTION: FILLING LINE BEAM (ABSTRACT MACHINE ELEMENT)
       WHY:
       - Represents bottling machinery without heavy assets
       - Adds industrial structure
       ------------------------------------------------------------ */
    const machineGeometry = new THREE.BoxGeometry(10, 1, 1);
    const machineMaterial = new THREE.MeshStandardMaterial({
        color: 0x333333,
        metalness: 0.6,
        roughness: 0.4
    });

    const machine = new THREE.Mesh(machineGeometry, machineMaterial);
    machine.position.set(0, 1.5, 0);

    group.add(machine);


    /* ------------------------------------------------------------
       SECTION: LIGHTING (CLEAN + CONTROLLED + COOLER TONE)
       WHY:
       - Bottling requires precision visibility
       - Less warmth = more industrial realism
       ------------------------------------------------------------ */
    const ambient = new THREE.AmbientLight(0x2a2a2a, 0.7);
    group.add(ambient);

    const whiteLight = new THREE.PointLight(0xffffff, 1.5, 50);
    whiteLight.position.set(0, 5, 5);
    group.add(whiteLight);


    /* ------------------------------------------------------------
       SECTION: ANIMATION LOOP
       WHY:
       - Simulates production line motion
       ------------------------------------------------------------ */
    function update(delta) {

        /* --------------------------------------------------------
           BOTTLE MICRO MOTION
           WHY:
           - Subtle movement simulates conveyor vibration
           -------------------------------------------------------- */
        bottles.forEach((b, i) => {
            b.position.y = 0.6 + Math.sin(Date.now() * 0.002 + i) * 0.02;
        });

        /* --------------------------------------------------------
           MACHINE HUM MOTION
           WHY:
           - Adds life to industrial environment
           -------------------------------------------------------- */
        machine.position.y = 1.5 + Math.sin(Date.now() * 0.001) * 0.01;
    }


    /* ------------------------------------------------------------
       SECTION: ENTER TRANSITION
       WHY:
       - Activated when scroll enters bottling stage
       ------------------------------------------------------------ */
    function enter() {
        console.log("[Bottling] Enter stage");
        group.visible = true;

        // Future upgrades:
        // - conveyor sound activation
        // - camera stabilization shift
        // - UI becomes more "product-focused"
    }


    /* ------------------------------------------------------------
       SECTION: EXIT TRANSITION
       WHY:
       - Clean transition into final distribution stage
       ------------------------------------------------------------ */
    function exit() {
        console.log("[Bottling] Exit stage");
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