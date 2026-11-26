/* ============================================================
   FILE: assets/js/three-engine.js
   PURPOSE:
   Core 3D engine for Wine Cinematic Experience

   WHY THIS FILE EXISTS:
   - Initializes Three.js world (scene, camera, renderer)
   - Acts as SINGLE source of truth for 3D system
   - Prevents module conflicts across stage system

   RULE:
   ONLY THIS FILE IMPORTS THREE.JS DIRECTLY
   ============================================================ */


/* ============================================================
   THREE.JS IMPORT (ONLY HERE)
   ============================================================ */
import * as THREE from "https://unpkg.com/three@0.165.0/build/three.module.js";


/* ============================================================
   MAIN ENGINE INITIALISATION
   ============================================================ */

export async function initThreeEngine({ container }) {

    /* ------------------------------------------------------------
       CORE OBJECTS
       ------------------------------------------------------------ */
    let scene, camera, renderer;

    const clock = new THREE.Clock();


    /* ------------------------------------------------------------
       SCENE SETUP
       ------------------------------------------------------------ */
    scene = new THREE.Scene();

    scene.fog = new THREE.Fog(
        0x050505,
        10,
        120
    );


    /* ------------------------------------------------------------
       CAMERA SETUP
       ------------------------------------------------------------ */
    camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );

    camera.position.set(0, 2, 6);


    /* ------------------------------------------------------------
       RENDERER SETUP
       ------------------------------------------------------------ */
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);


    /* ------------------------------------------------------------
       LIGHTING SYSTEM
       ------------------------------------------------------------ */
    const ambientLight = new THREE.AmbientLight(0x3a2a1a, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xd7b77a, 1.2);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);


    /* ------------------------------------------------------------
       GROUND (PLACEHOLDER ENVIRONMENT)
       ------------------------------------------------------------ */
    const groundGeometry = new THREE.PlaneGeometry(200, 200);

    const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0x0b0b0b,
        roughness: 1
    });

    const ground = new THREE.Mesh(groundGeometry, groundMaterial);

    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;

    scene.add(ground);


    /* ------------------------------------------------------------
       RESIZE HANDLER
       ------------------------------------------------------------ */
    window.addEventListener("resize", () => {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(window.innerWidth, window.innerHeight);
    });


    /* ============================================================
       STAGE SYSTEM (CMS CONTROLLED)
       ============================================================ */

    let currentStageIndex = 0;

    function setStage(index, sceneData) {

        currentStageIndex = index;

        const stage = sceneData?.stages?.[index];

        if (!stage) return;

        console.log("[ThreeEngine] Stage:", stage.title);

        // Future upgrades:
        // - camera animation
        // - lighting transitions
        // - fog changes
        // - environment swaps
    }


    /* ============================================================
       SCROLL CONNECTION
       ============================================================ */

    function connectScroll(scrollEngine, sceneData) {

        scrollEngine.onUpdate?.((data) => {

            if (typeof data.index === "number") {
                setStage(data.index, sceneData);
            }

        });
    }


    /* ============================================================
       UI CONNECTION (FUTURE)
       ============================================================ */

    function connectUI(ui) {
        // reserved for UI interactions
    }


    /* ============================================================
       ANIMATION LOOP
       ============================================================ */

    function animate() {

        requestAnimationFrame(animate);

        clock.getDelta();

        renderer.render(scene, camera);
    }

    animate();


    /* ============================================================
       PUBLIC API
       ============================================================ */

    return {
        scene,
        camera,
        renderer,

        setStage,
        connectScroll,
        connectUI
    };
}