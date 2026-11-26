/* ============================================================
   FILE: assets/js/stage-integration.js
   PURPOSE:
   This module connects ALL systems using stage JSON data.

   WHY THIS FILE EXISTS:
   - Previously each system (camera, bloom, UI) was independent
   - This creates a unified data-driven control layer
   - Ensures every stage behaves consistently across systems

   ROLE IN SYSTEM:
   scene-loader → stage-integration → camera/UI/FX systems
   ============================================================ */


/* ============================================================
   FUNCTION: APPLY STAGE SETTINGS
   ============================================================ */

export function applyStageSettings({
    stage,
    cameraController,
    postprocessing,
    uiController
}) {

    /* ------------------------------------------------------------
       SECTION: CAMERA CONTROL
       WHY:
       - Camera position is defined per stage in JSON
       ------------------------------------------------------------ */
    if (stage.camera && cameraController) {
        cameraController.moveToStage(stage.index);
    }


    /* ------------------------------------------------------------
       SECTION: POSTPROCESSING CONTROL (BLOOM)
       WHY:
       - Each stage has unique visual intensity
       ------------------------------------------------------------ */
    if (postprocessing && stage.bloom !== undefined) {
        postprocessing.setBloomIntensity(stage.bloom);
    }


    /* ------------------------------------------------------------
       SECTION: UI UPDATE
       WHY:
       - UI reflects current narrative state
       ------------------------------------------------------------ */
    if (uiController) {
        // ui-controller exposes setStage(stage, index), not separate setStageTitle/Subtitle.
        uiController.setStage(stage, stage.index);
    }
}