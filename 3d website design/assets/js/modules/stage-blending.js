/* ============================================================
   FILE: assets/js/modules/stage-blending.js
   PURPOSE:
   Placeholder 3D stage module for the BLENDING stage.

   Provides enter/exit/update interface.
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createBlendingStage({ scene, loader, camera, config }) {

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
        group.name = "stage-blending";

        const torus = new THREE.Mesh(
            new THREE.TorusGeometry(0.9, 0.22, 20, 80),
            new THREE.MeshStandardMaterial({ color: 0x5b2f2a, roughness: 0.75, metalness: 0.1 })
        );
        torus.position.set(0, 0.25, 0);
        group.add(torus);

        const swirl = new THREE.Mesh(
            new THREE.SphereGeometry(0.18, 24, 24),
            new THREE.MeshStandardMaterial({ color: 0xd7b77a, roughness: 0.55, metalness: 0.25 })
        );
        swirl.position.set(1.0, 0.65, 0);
        group.add(swirl);

        group.visible = false;
        scene.add(group);
    }

    function update(delta) {
        if (!active || !group) return;

        group.rotation.y += delta * 0.18;
        if (group.children[0]) group.children[0].rotation.x += delta * 0.25;

        // fake "blend" drift
        const swirl = group.children[1];
        if (swirl) {
            const t = Date.now() * 0.001;
            swirl.position.x = Math.cos(t) * 1.0;
            swirl.position.z = Math.sin(t) * 0.6;
        }
    }

    return {
        index: -1,
        data: config,
        enter,
        exit,
        update
    };
}

