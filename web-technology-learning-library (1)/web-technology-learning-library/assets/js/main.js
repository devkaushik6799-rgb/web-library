/* ==========================================================================
   Main Application Coordinator
   Handles Theme Toggle (Dark/Light), Code Copy Buttons, and Module Init.
   ========================================================================== */

(function () {
  const THEME_KEY = "wt_library_theme";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      const isLight = theme === "light";
      btn.setAttribute("aria-label", isLight ? "Switch to dark theme" : "Switch to light theme");
      btn.innerHTML = isLight
        ? `<span aria-hidden="true">🌙</span> <span class="theme-toggle-text">Dark</span>`
        : `<span aria-hidden="true">☀️</span> <span class="theme-toggle-text">Light</span>`;
    }
  }

  function initTheme() {
    let saved = "dark";
    try {
      saved = localStorage.getItem(THEME_KEY) || "dark";
    } catch (e) {
      saved = "dark";
    }
    applyTheme(saved);

    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        try {
          localStorage.setItem(THEME_KEY, next);
        } catch (e) {
          // Ignore storage errors
        }
      });
    }
  }

  function initCodeCopyButtons() {
    document.querySelectorAll(".copy-code-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const wrap = btn.closest(".code-block-wrap");
        const codeEl = wrap ? wrap.querySelector("pre code") : null;
        if (!codeEl) return;

        const text = codeEl.textContent;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(() => {
            const orig = btn.textContent;
            btn.textContent = "Copied!";
            setTimeout(() => {
              btn.textContent = orig;
            }, 1500);
          });
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initCodeCopyButtons();
    if (window.WTNavigation) window.WTNavigation.init();
    if (window.WTSearch) window.WTSearch.init();
    if (window.WTProgress) window.WTProgress.init();
  });
})();
