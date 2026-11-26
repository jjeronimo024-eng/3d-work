/* ============================================================
   FILE: assets/js/scene-loader.js
   PURPOSE:
   Fetch live stage data from PHP API instead of static JSON

   WHY THIS CHANGE:
   - Enables real-time CMS updates
   - No more rebuilding frontend for content changes
   ============================================================ */

export async function loadScenes() {

    const response = await fetch("/api/get-stages.php");

    if (!response.ok) {
        throw new Error("Failed to fetch stages from API");
    }

    const data = await response.json();

    if (!data.success) {
        throw new Error("API returned error");
    }

    console.log("[Scene Loader] Live stages loaded:", data.stages);

    return data.stages;
}