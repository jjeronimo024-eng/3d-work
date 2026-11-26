<?php
/* ============================================================
   FILE: includes/footer.php
   PURPOSE:
   Shared footer include for the front-end site.

   WHY THIS FILE EXISTS:
   - Keeps JavaScript includes in one place
   - Loads scripts at the bottom of the page for better performance
   - Makes the main entry page cleaner and easier to read

   HOW IT FITS INTO THE SYSTEM:
   - Included at the bottom of index.php
   - Loads third-party libraries first, then the main app entry file
   ============================================================ */
?>

<!-- ============================================================
     SECTION: Third-Party Libraries
     WHAT THIS DOES:
     - Loads GSAP for animation control
     - Loads ScrollTrigger for scroll-driven cinematic timelines
     - Loads Three.js for the 3D rendering engine

     WHY WE NEED IT:
     - GSAP + ScrollTrigger drive the cinematic story progression
     - Three.js renders the interactive 3D world

     NOTE:
     - These are loaded from CDN for now to keep initial setup simple
     - If you want, later we can switch these to locally hosted files
       inside /assets/vendor/ for tighter production control
     ============================================================ -->
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three@0.165.0/build/three.min.js"></script>

<script type="importmap">
{
  "imports": {
    "three": "https://unpkg.com/three@0.165.0/build/three.module.js"
  }
}
</script>

<!-- ============================================================
     SECTION: Main App Entry Script
     WHAT THIS DOES:
     - Boots the modular cinematic wine experience
     - Imports the internal JS module architecture
     - Starts Three.js, scroll logic, UI updates, and scene loading

     WHY WE NEED IT:
     - app.js is the front-end control centre for the experience
     - Keeping it as a module allows us to split the system into
       clean reusable files instead of one massive script
     ============================================================ -->
<script type="module" src="assets/js/app.js"></script>

<footer class="site-footer" aria-label="Site footer"></footer>

</body>
</html>

