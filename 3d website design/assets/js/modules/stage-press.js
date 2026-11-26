/* ============================================================
   FILE: assets/js/modules/stage-press.js
   PURPOSE:
   Placeholder 3D stage module for the PRESS stage (pressing).

   Provides enter/exit/update interface.
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createPressStage({ scene, loader, camera, config }) {

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
        group.name = "stage-press";

        // Placeholder "press" silhouette
        const base = new THREE.Mesh(
            new THREE.BoxGeometry(2.2, 0.25, 1.2),
            new THREE.MeshStandardMaterial({ color: 0x3a2f2a, roughness: 0.95 })
        );
        base.position.set(0, -0.1, 0);
        group.add(base);

        const beam = new THREE.Mesh(
            new THREE.BoxGeometry(1.8, 0.12, 0.6),
            new THREE.MeshStandardMaterial({ color: 0xd7b77a, roughness: 0.6, metalness: 0.2 })
        );
        beam.position.set(0, 1.0, 0);
        group.add(beam);

        group.visible = false;
        scene.add(group);
    }

    function update(delta) {
        if (!active || !group) return;

        // Subtle breathing motion
        group.rotation.y += delta * 0.1;
        group.position.y = Math.sin(Date.now() * 0.0012) * 0.04;
    }

    return {
        index: -1,
        data: config,
        enter,
        exit,
        update
    };
}

