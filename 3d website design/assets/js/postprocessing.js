/* ============================================================
   FILE: assets/js/postprocessing.js
   PURPOSE:
   This file adds cinematic visual effects on top of Three.js.

   WHY THIS FILE EXISTS:
   - Raw WebGL rendering looks flat and technical
   - Postprocessing adds depth, glow, and film quality
   - This is what makes the experience feel “premium”

   ROLE IN SYSTEM:
   three.js render → postprocessing → final image on screen
   ============================================================ */


/* ============================================================
   IMPORT THREE POSTPROCESSING STACK
   ============================================================ */
import * as THREE from "three";
import { EffectComposer } from "https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "https://unpkg.com/three@0.165.0/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "https://unpkg.com/three@0.165.0/examples/jsm/shaders/FXAAShader.js";


/* ============================================================
   MAIN POSTPROCESSING SYSTEM
   ============================================================ */

export function initPostProcessing({ renderer, scene, camera }) {

    /* ------------------------------------------------------------
       SECTION: EFFECT COMPOSER
       WHY:
       - Replaces default renderer output pipeline
       ------------------------------------------------------------ */
    const composer = new EffectComposer(renderer);


    /* ------------------------------------------------------------
       SECTION: BASE RENDER PASS
       WHY:
       - Renders the actual 3D scene first
       ------------------------------------------------------------ */
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);


    /* ------------------------------------------------------------
       SECTION: BLOOM EFFECT (LUXURY GLOW)
       WHY:
       - Makes lights feel soft and cinematic
       - Adds “wine luxury glow” aesthetic
       ------------------------------------------------------------ */
    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        0.8,   // strength
        0.6,   // radius
        0.2    // threshold
    );

    composer.addPass(bloomPass);


    /* ------------------------------------------------------------
       SECTION: FXAA (ANTI-ALIASING)
       WHY:
       - Smooths jagged edges
       - Makes scene feel polished
       ------------------------------------------------------------ */
    const fxaaPass = new ShaderPass(FXAAShader);
    fxaaPass.material.uniforms["resolution"].value.x = 1 / window.innerWidth;
    fxaaPass.material.uniforms["resolution"].value.y = 1 / window.innerHeight;

    composer.addPass(fxaaPass);


    /* ------------------------------------------------------------
       FUNCTION: RESIZE HANDLER
       WHY:
       - Keeps visual quality consistent across screen sizes
       ------------------------------------------------------------ */
    function resize() {
        composer.setSize(window.innerWidth, window.innerHeight);
    }


    /* ------------------------------------------------------------
       FUNCTION: RENDER LOOP
       WHY:
       - Replaces renderer.render()
       ------------------------------------------------------------ */
    function render() {
        composer.render();
    }


    /* ------------------------------------------------------------
       FUNCTION: UPDATE BLOOM PER STAGE (OPTIONAL CONTROL HOOK)
       WHY:
       - Each wine stage can have different visual intensity
       ------------------------------------------------------------ */
    function setBloomIntensity(value) {
        bloomPass.strength = value;
    }


    /* ------------------------------------------------------------
       PUBLIC API
       ============================================================ */
    return {
        composer,
        render,
        resize,
        setBloomIntensity
    };
}