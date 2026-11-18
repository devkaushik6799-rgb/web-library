/* ==========================================================================
   Cross-Unit Search Module
   Searches all 63 syllabus topics across all 5 units and links directly.
   ========================================================================== */

(function () {
  function escapeHtml(str) {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function searchTopics(query) {
    if (!window.SYLLABUS_DATA) return [];
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return window.SYLLABUS_DATA.topics.filter((topic) => {
      const haystack = `${topic.title} ${topic.desc} unit ${topic.unit}`.toLowerCase();
      return haystack.includes(q);
    });
  }

  function renderDropdown(results, dropdownEl) {
    if (!dropdownEl) return;
    if (results.length === 0) {
      dropdownEl.innerHTML = `<div class="search-empty">No matching syllabus topics found. Try keywords like HTTP, DNS, XML, AJAX, RDF, or 5G.</div>`;
      dropdownEl.classList.add("open");
      return;
    }

    const html = results
      .slice(0, 12)
      .map(
        (t) => `
        <a class="search-result-item" href="unit-${t.unit}.html#${t.id}">
          <div class="search-result-meta">
            <span class="search-result-title">${escapeHtml(t.title)}</span>
            <span class="search-result-unit">Unit ${t.unit}</span>
          </div>
          <div class="search-result-desc">${escapeHtml(t.desc)}</div>
        </a>`
      )
      .join("");

    dropdownEl.innerHTML = html;
    dropdownEl.classList.add("open");
  }

  function initSearch() {
    const input = document.getElementById("global-search-input");
    const dropdown = document.getElementById("search-results-dropdown");
    if (!input || !dropdown) return;

    input.addEventListener("input", () => {
      const val = input.value;
      if (!val.trim()) {
        dropdown.classList.remove("open");
        dropdown.innerHTML = "";
        return;
      }
      const results = searchTopics(val);
      renderDropdown(results, dropdown);
    });

    input.addEventListener("focus", () => {
      if (input.value.trim()) {
        renderDropdown(searchTopics(input.value), dropdown);
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".header-search")) {
        dropdown.classList.remove("open");
      }
    });

    // Keyboard shortcut '/' to focus search, 'Escape' to close
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "/" &&
        document.activeElement.tagName !== "INPUT" &&
        document.activeElement.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        input.focus();
      } else if (e.key === "Escape") {
        dropdown.classList.remove("open");
        input.blur();
      }
    });

    // Dashboard "Search Topics" quick button focuses search bar
    const quickSearchBtn = document.getElementById("quick-search-focus-btn");
    if (quickSearchBtn) {
      quickSearchBtn.addEventListener("click", () => {
        input.focus();
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }

  window.WTSearch = {
    init: initSearch,
    searchTopics
  };
})();
