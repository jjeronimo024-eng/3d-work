/* ============================================================
   FILE: assets/js/modules/stage-crush.js
   PURPOSE:
   Placeholder 3D stage module for the CRUSH stage.

   WHY THIS EXISTS:
   - Ensure the 12-stage story can progress without missing-module failures.
   - Provides the required stage interface: enter/exit/update.

   NOTE:
   - Visuals are intentionally minimal placeholders until we add
     dedicated 3D assets and camera/lighting profiles.
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createCrushStage({ scene, loader, camera, config }) {

    let group;
    let active = false;

    function enter() {
        active = true;
        if (!group) createVisuals();
        if (group) group.visible = true;
    }

    function exit() {
        active = false;
        if (group) group.visible = false;
    }

    function createVisuals() {
        group = new THREE.Group();
        group.name = "stage-crush";

        // Minimal placeholder environment
        const geometry = new THREE.DodecahedronGeometry(0.9, 0);
        const material = new THREE.MeshStandardMaterial({
            color: 0x6b4a2f,
            roughness: 0.9,
            metalness: 0.05
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0, 0, 0);
        group.add(mesh);

        // Slightly elevated accent
        const accent = new THREE.Mesh(
            new THREE.SphereGeometry(0.22, 24, 24),
            new THREE.MeshStandardMaterial({ color: 0xd7b77a, roughness: 0.6, metalness: 0.2 })
        );
        accent.position.set(-1.1, 0.8, -0.3);
        group.add(accent);

        group.visible = false;
        scene.add(group);
    }

    function update(delta) {
        if (!active || !group) return;

        // Cinematic subtle motion
        group.rotation.y += delta * 0.15;
        group.rotation.x += delta * 0.05;

        group.position.y = Math.sin(Date.now() * 0.001) * 0.05;
    }

    return {
        index: -1,
        data: config,
        enter,
        exit,
        update
    };
}

