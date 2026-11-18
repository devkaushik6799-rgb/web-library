/* ==========================================================================
   Navigation Module
   Handles responsive mobile sidebar drawer, active states, and topic links.
   ========================================================================== */

(function () {
  function initNavigation() {
    const menuToggle = document.getElementById("menu-toggle-btn");
    const sidebar = document.getElementById("site-sidebar");
    const overlay = document.getElementById("sidebar-overlay");

    function closeSidebar() {
      if (sidebar) sidebar.classList.remove("open");
      if (overlay) overlay.classList.remove("open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "false");
    }

    function openSidebar() {
      if (sidebar) sidebar.classList.add("open");
      if (overlay) overlay.classList.add("open");
      if (menuToggle) menuToggle.setAttribute("aria-expanded", "true");
    }

    if (menuToggle && sidebar) {
      menuToggle.addEventListener("click", () => {
        const isOpen = sidebar.classList.contains("open");
        if (isOpen) closeSidebar();
        else openSidebar();
      });
    }

    if (overlay) {
      overlay.addEventListener("click", closeSidebar);
    }

    // Close mobile sidebar when clicking a topic anchor link
    document.querySelectorAll(".sidebar-topic-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 960) {
          closeSidebar();
        }
      });
    });

    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeSidebar();
      }
    });
  }

  window.WTNavigation = {
    init: initNavigation
  };
})();
