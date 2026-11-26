/* ============================================================
   FILE: assets/js/bootstrap.js
   PURPOSE:
   This file is the central orchestration layer of the entire
   cinematic wine experience system.

   WHY THIS FILE EXISTS:
   - It connects all independent systems into one runtime
   - Handles stage creation, lifecycle, and transitions
   - Syncs UI, camera, scroll, and visual effects

   ROLE IN SYSTEM:
   app.js → bootstrap.js → full cinematic engine runtime
   ============================================================ */


/* ============================================================
   CORE SYSTEM IMPORTS
   ============================================================ */
import { initThreeEngine } from "./three-engine.js";
import { initScrollEngine } from "./scroll-engine.js";
import { initUIController } from "./ui-controller.js";

import { loadScenes } from "./scene-loader.js";
import { applyStageSettings } from "./stage-integration.js";

import { initPostProcessing } from "./postprocessing.js";
import { initCameraController } from "./camera-controller.js";
import { initSceneTransitionManager } from "./scene-transition-manager.js";


/* ============================================================
   STAGE MODULES (WORLD BUILDERS)
   NOTE:
   These remain module-based, but are now data-driven via JSON.
   ============================================================ */
import { createVineyardStage } from "./modules/stage-vineyard.js";
import { createHarvestStage } from "./modules/stage-harvest.js";
import { createFermentationStage } from "./modules/stage-fermentation.js";
import { createBarrelAgingStage } from "./modules/stage-barrel-aging.js";
import { createBottlingStage } from "./modules/stage-bottling.js";
import { createDistributionStage } from "./modules/stage-distribution.js";
import { createExperienceStage } from "./modules/stage-experience.js";

// Added missing stages to ensure full 12-stage journey works
import { createCrushStage } from "./modules/stage-crush.js";
import { createPressStage } from "./modules/stage-press.js";
import { createBlendingStage } from "./modules/stage-blending.js";
import { createStabilisationStage } from "./modules/stage-stabilisation.js";
import { createBottleAgingStage } from "./modules/stage-bottle-aging.js";



/* ============================================================
   MAIN BOOTSTRAP FUNCTION
   ============================================================ */

export async function bootstrap() {

    /* ------------------------------------------------------------
       SECTION: DOM REFERENCES
       WHY:
       - Connects UI layer to JS engine
       ------------------------------------------------------------ */
    const container = document.getElementById("three-stage");

    const ui = {
        uiTitle: document.getElementById("ui-title"),
        uiSubtitle: document.getElementById("ui-subtitle"),
        uiProgressBar: document.getElementById("ui-progress-bar")
    };



    /* ------------------------------------------------------------
       SECTION: THREE ENGINE INITIALISATION
       WHY:
       - Core WebGL renderer + scene + camera
       ------------------------------------------------------------ */
    const three = await initThreeEngine({
        container
    });


    /* ------------------------------------------------------------
       SECTION: POSTPROCESSING PIPELINE
       WHY:
       - Adds bloom, FXAA, cinematic grading
       ------------------------------------------------------------ */
    const postprocessing = initPostProcessing({
        renderer: three.renderer,
        scene: three.scene,
        camera: three.camera
    });


    /* ------------------------------------------------------------
       SECTION: CAMERA CONTROLLER (CINEMATIC MOTION)
       WHY:
       - Replaces rigid camera movement with smooth GSAP motion
       ------------------------------------------------------------ */
    const cameraController = initCameraController(three.camera);


    /* ------------------------------------------------------------
       SECTION: SCENE TRANSITION MANAGER
       WHY:
       - Handles fade in/out between stages
       ------------------------------------------------------------ */
    const transitionManager = initSceneTransitionManager({
        renderer: three.renderer,
        scene: three.scene,
        camera: three.camera
    });


    /* ------------------------------------------------------------
       SECTION: LOAD SCENES FROM BACKEND
       WHY:
       - Makes system fully data-driven (CMS ready)
       ------------------------------------------------------------ */
    const stageData = await loadScenes();


    /* ------------------------------------------------------------
       SECTION: STAGE MODULE MAP
       WHY:
       - Connects JSON stage IDs → actual 3D scene modules
       ------------------------------------------------------------ */
    const stageMap = {
        // 1-3
        vineyard: createVineyardStage,
        harvest: createHarvestStage,
        crush: createCrushStage,

        // 4-6
        fermentation: createFermentationStage,
        press: createPressStage,



        barrels: createBarrelAgingStage,
        barrel: createBarrelAgingStage,

        // 7-9
        blending: createBlendingStage,
        stabilisation: createStabilisationStage,
        stabilization: createStabilisationStage,

        bottling: createBottlingStage,
        bottling_stage: createBottlingStage,

        // 10
        "bottle-aging": createBottleAgingStage,
        "bottle_aging": createBottleAgingStage,

        // 11-12

        distribution: createDistributionStage,
        experience: createExperienceStage
    };



    /* ------------------------------------------------------------
       SECTION: CREATE STAGES DYNAMICALLY
       WHY:
       - Converts JSON into live 3D modules
       ------------------------------------------------------------ */
    const stages = stageData.map((stage, index) => {

        const createFn = stageMap[stage.slug] || stageMap[stage.id];

        if (!createFn) {
            console.warn("[Bootstrap] Missing stage module:", stage.id);
            return null;
        }

        const instance = createFn({
            scene: three.scene,
            loader: three.loader,
            camera: three.camera,
            config: stage
        });

        instance.index = index;
        instance.data = stage;

        return instance;

    }).filter(Boolean);


    /* ------------------------------------------------------------
       SECTION: UI CONTROLLER
       WHY:
       - Handles all DOM text + progress updates
       ------------------------------------------------------------ */
    const uiController = initUIController({
        dom: ui
    });


    /* ------------------------------------------------------------
       SECTION: SCROLL ENGINE
       WHY:
       - Converts scroll position into stage index
       ------------------------------------------------------------ */
    const scrollEngine = initScrollEngine({
        stages,
        onProgress: (progress) => {
            uiController.setProgress(progress);
        },

        onStageChange: async (stage, index) => {

            /* ----------------------------------------------------
               STEP 1: UI UPDATE
               ---------------------------------------------------- */
            uiController.setStage(stage, index);

            /* ----------------------------------------------------
               STEP 2: CAMERA MOVE
               ---------------------------------------------------- */
            cameraController.moveToStage(index);

            /* ----------------------------------------------------
               STEP 3: TRANSITION BETWEEN STAGES
               ---------------------------------------------------- */
            const prevStage = stages[index - 1];
            const nextStage = stages[index];

            await transitionManager.transition(prevStage, nextStage);

            /* ----------------------------------------------------
               STEP 4: ENTER / EXIT LOGIC
               ---------------------------------------------------- */
            stages.forEach((s, i) => {
                if (i === index) s.enter();
                else s.exit();
            });

            /* ----------------------------------------------------
               STEP 5: APPLY GLOBAL STAGE SETTINGS
               ---------------------------------------------------- */
            applyStageSettings({
                stage: {
                    ...stage,
                    index
                },
                cameraController,
                postprocessing,
                uiController
            });
        }
    });


    /* ------------------------------------------------------------
       SECTION: CAMERA UPDATE LOOP
       WHY:
       - Sync GSAP state with Three.js camera every frame
       ------------------------------------------------------------ */
    function animate() {

        requestAnimationFrame(animate);

        const delta = three.clock?.getDelta?.() || 0;

        stages.forEach((stage) => {
            stage.update?.(delta);
        });

        cameraController.update();

        postprocessing.render();
    }

    animate();


    /* ------------------------------------------------------------
       SECTION: INITIAL STATE LOG
       ------------------------------------------------------------ */
    console.log("[Bootstrap] Cinematic wine experience initialized");

    return {
        three,
        stages,
        cameraController,
        postprocessing,
        scrollEngine
    };
}
