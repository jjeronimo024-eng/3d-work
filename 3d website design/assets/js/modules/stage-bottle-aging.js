/* ============================================================
   FILE: assets/js/modules/stage-bottle-aging.js
   PURPOSE:
   Placeholder 3D stage module for the BOTTLE AGING stage.

   Provides enter/exit/update interface.
   ============================================================ */

import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";

export function createBottleAgingStage({ scene, loader, camera, config }) {

    let group;
    let active = false;
    let bottles = [];

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
        group.name = "stage-bottle-aging";

        const rack = new THREE.Mesh(
            new THREE.BoxGeometry(3.2, 0.08, 1.6),
            new THREE.MeshStandardMaterial({ color: 0x1a1a1a, roughness: 0.9 })
        );
        rack.position.set(0, 0.04, 0);
        group.add(rack);

        // Fake "bottle" columns
        const bottleMat = new THREE.MeshStandardMaterial({ color: 0x2b3a4a, roughness: 0.35, metalness: 0.15 });
        const neckMat = new THREE.MeshStandardMaterial({ color: 0x19303f, roughness: 0.4, metalness: 0.1 });

        for (let x = -1.2; x <= 1.2; x += 0.8) {
            for (let z = -0.6; z <= 0.6; z += 0.6) {
                const bottle = new THREE.Group();

                const body = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.18, 0.8, 18), bottleMat);
                body.position.y = 0.45;
                bottle.add(body);

                const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 0.25, 14), neckMat);
                neck.position.y = 0.9;
                bottle.add(neck);

                // label shimmer plane
                const label = new THREE.Mesh(
                    new THREE.PlaneGeometry(0.16, 0.22),
                    new THREE.MeshStandardMaterial({ color: 0xd7b77a, roughness: 0.6, metalness: 0.6 })
                );
                label.position.set(0.12, 0.6, 0.06);
                label.rotation.y = Math.PI / 8;
                bottle.add(label);

                bottle.position.set(x, 0, z);
                group.add(bottle);
                bottles.push(bottle);
            }
        }

        group.visible = false;
        scene.add(group);
    }

    function update(delta) {
        if (!active || !group) return;

        group.rotation.y += delta * 0.06;

        // gentle "ageing" sway and shimmer
        const t = Date.now() * 0.001;
        for (let i = 0; i < bottles.length; i++) {
            const b = bottles[i];
            if (!b) continue;
            b.rotation.x = Math.sin(t + i) * 0.02;
            b.rotation.z = Math.cos(t + i) * 0.02;

            // shimmer label: last child plane (best-effort)
            const label = b.children[2];
            if (label?.material) {
                const glow = 0.55 + 0.45 * Math.sin(t * 1.2 + i * 0.6);
                label.material.emissive = new THREE.Color(0xd7b77a);
                label.material.emissiveIntensity = glow;
            }
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

