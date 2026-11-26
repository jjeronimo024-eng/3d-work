/* ============================================================
   FILE: assets/js/modules/stage-stabilisation.js
   PURPOSE:
   Placeholder 3D stage module for the STABILISATION stage.

   Provides enter/exit/update interface.
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createStabilisationStage({ scene, loader, camera, config }) {

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
        group.name = "stage-stabilisation";

        const floor = new THREE.Mesh(
            new THREE.RingGeometry(0.2, 1.05, 64),
            new THREE.MeshStandardMaterial({ color: 0x2b2b4a, roughness: 0.95 })
        );
        floor.rotation.x = -Math.PI / 2;
        group.add(floor);

        const pillar = new THREE.Mesh(
            new THREE.CylinderGeometry(0.18, 0.18, 1.2, 24),
            new THREE.MeshStandardMaterial({ color: 0xd7b77a, roughness: 0.5, metalness: 0.2 })
        );
        pillar.position.y = 0.6;
        group.add(pillar);

        // Light "mist" balls
        for (let i = 0; i < 20; i++) {
            const p = new THREE.Mesh(
                new THREE.SphereGeometry(0.04, 12, 12),
                new THREE.MeshStandardMaterial({ color: 0x6f6f6f, roughness: 0.9 })
            );
            p.position.set(
                (Math.random() - 0.5) * 1.4,
                0.35 + Math.random() * 0.8,
                (Math.random() - 0.5) * 1.2
            );
            group.add(p);
        }

        group.visible = false;
        scene.add(group);
    }

    function update(delta) {
        if (!active || !group) return;

        group.rotation.y += delta * 0.08;
        // subtle pillar breathing
        const pillar = group.children.find((c) => c.geometry?.type === "CylinderGeometry");
        if (pillar) {
            pillar.position.y = 0.6 + Math.sin(Date.now() * 0.001) * 0.02;
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

