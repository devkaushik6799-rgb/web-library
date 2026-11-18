/* ==========================================================================
   Progress Tracking Module (LocalStorage)
   Manages topic completion, recently studied topics, and UI synchronization.
   ========================================================================== */

(function () {
  const STORAGE_KEYS = {
    COMPLETED: "wt_library_completed_topics",
    RECENT: "wt_library_recent_topics",
    LAST_VISITED: "wt_library_last_visited"
  };

  function getCompletedTopics() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.COMPLETED);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function saveCompletedTopics(list) {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED, JSON.stringify(list));
    } catch (e) {
      // Ignore storage quota errors gracefully
    }
  }

  function getRecentTopics() {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.RECENT);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function recordTopicVisit(topicId) {
    if (!topicId || !window.SYLLABUS_DATA) return;
    const topicExists = window.SYLLABUS_DATA.topics.some((t) => t.id === topicId);
    if (!topicExists) return;

    const recent = getRecentTopics().filter((id) => id !== topicId);
    recent.unshift(topicId);
    try {
      localStorage.setItem(STORAGE_KEYS.RECENT, JSON.stringify(recent.slice(0, 6)));
      localStorage.setItem(STORAGE_KEYS.LAST_VISITED, topicId);
    } catch (e) {
      // Ignore storage errors
    }
  }

  function getLastVisitedTopic() {
    try {
      return localStorage.getItem(STORAGE_KEYS.LAST_VISITED);
    } catch (e) {
      return null;
    }
  }

  function isTopicCompleted(topicId) {
    return getCompletedTopics().includes(topicId);
  }

  function toggleTopicCompletion(topicId) {
    const completed = getCompletedTopics();
    const index = completed.indexOf(topicId);
    if (index === -1) {
      completed.push(topicId);
      recordTopicVisit(topicId);
    } else {
      completed.splice(index, 1);
    }
    saveCompletedTopics(completed);
    syncAllProgressUI();
    return index === -1;
  }

  function getUnitStats(unitId) {
    const topics = window.SYLLABUS_DATA
      ? window.SYLLABUS_DATA.topics.filter((t) => t.unit === unitId)
      : [];
    const completedSet = new Set(getCompletedTopics());
    const completedCount = topics.filter((t) => completedSet.has(t.id)).length;
    const totalCount = topics.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    return { completedCount, totalCount, percentage };
  }

  function getOverallStats() {
    const topics = window.SYLLABUS_DATA ? window.SYLLABUS_DATA.topics : [];
    const completedSet = new Set(getCompletedTopics());
    const completedCount = topics.filter((t) => completedSet.has(t.id)).length;
    const totalCount = topics.length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    return { completedCount, totalCount, percentage };
  }

  function syncHeaderProgress() {
    const overall = getOverallStats();
    const headerPercent = document.getElementById("header-progress-percent");
    if (headerPercent) {
      headerPercent.textContent = `${overall.percentage}%`;
    }
  }

  function syncDashboardUI() {
    const overall = getOverallStats();
    const totalTopicsEl = document.getElementById("stat-total-topics");
    const completedTopicsEl = document.getElementById("stat-completed-topics");
    const overallProgressEl = document.getElementById("stat-overall-progress");
    const overallBarEl = document.getElementById("overall-progress-bar");
    const overallMetaEl = document.getElementById("overall-progress-meta");

    if (totalTopicsEl) totalTopicsEl.textContent = overall.totalCount;
    if (completedTopicsEl) completedTopicsEl.textContent = overall.completedCount;
    if (overallProgressEl) overallProgressEl.textContent = `${overall.percentage}%`;
    if (overallBarEl) overallBarEl.style.width = `${overall.percentage}%`;
    if (overallMetaEl) {
      overallMetaEl.textContent = `${overall.completedCount} of ${overall.totalCount} topics completed`;
    }

    // Update Unit Cards on Dashboard
    if (window.SYLLABUS_DATA) {
      window.SYLLABUS_DATA.units.forEach((unit) => {
        const stats = getUnitStats(unit.id);
        const pctEl = document.getElementById(`unit-${unit.id}-percent`);
        const countEl = document.getElementById(`unit-${unit.id}-count`);
        const barEl = document.getElementById(`unit-${unit.id}-bar`);
        if (pctEl) pctEl.textContent = `${stats.percentage}%`;
        if (countEl) countEl.textContent = `${stats.completedCount}/${stats.totalCount} topics`;
        if (barEl) barEl.style.width = `${stats.percentage}%`;
      });
    }

    // Update Continue Learning Button
    const continueBtn = document.getElementById("continue-learning-btn");
    const continueDesc = document.getElementById("continue-learning-desc");
    if (continueBtn && window.SYLLABUS_DATA) {
      const lastId = getLastVisitedTopic();
      const lastTopic = window.SYLLABUS_DATA.topics.find((t) => t.id === lastId);
      if (lastTopic) {
        continueBtn.href = `unit-${lastTopic.unit}.html#${lastTopic.id}`;
        continueBtn.textContent = `Resume: ${lastTopic.title}`;
        if (continueDesc) {
          continueDesc.textContent = `Pick up where you left off in Unit ${lastTopic.unit}.`;
        }
      } else {
        continueBtn.href = "unit-1.html";
        continueBtn.textContent = "Start Unit 1: Internet Fundamentals";
      }
    }

    // Update Recently Studied List
    const recentListEl = document.getElementById("recent-topics-list");
    if (recentListEl && window.SYLLABUS_DATA) {
      const recentIds = getRecentTopics();
      if (recentIds.length === 0) {
        recentListEl.innerHTML = `<li class="text-muted" style="font-size:0.84rem;color:var(--text-muted);">No topics studied yet. Open any unit to begin tracking your progress.</li>`;
      } else {
        recentListEl.innerHTML = recentIds
          .map((id) => {
            const topic = window.SYLLABUS_DATA.topics.find((t) => t.id === id);
            if (!topic) return "";
            const done = isTopicCompleted(id) ? "✓ " : "";
            return `<li><a href="unit-${topic.unit}.html#${topic.id}"><span>${done}${topic.title}</span><span class="unit-duration-badge">Unit ${topic.unit}</span></a></li>`;
          })
          .join("");
      }
    }
  }

  function syncUnitPageUI() {
    const unitIdAttr = document.body.getAttribute("data-unit-id");
    if (!unitIdAttr) return;
    const unitId = parseInt(unitIdAttr, 10);
    const stats = getUnitStats(unitId);

    const unitPctEl = document.getElementById("unit-progress-percent");
    const unitCountEl = document.getElementById("unit-progress-count");
    const unitBarEl = document.getElementById("unit-progress-bar");

    if (unitPctEl) unitPctEl.textContent = `${stats.percentage}%`;
    if (unitCountEl) unitCountEl.textContent = `${stats.completedCount} / ${stats.totalCount} Topics Completed`;
    if (unitBarEl) unitBarEl.style.width = `${stats.percentage}%`;

    const completedSet = new Set(getCompletedTopics());

    // Sync topic cards & buttons
    document.querySelectorAll(".topic-section[data-topic-id]").forEach((section) => {
      const topicId = section.getAttribute("data-topic-id");
      const isDone = completedSet.has(topicId);
      section.classList.toggle("is-completed", isDone);
      const btn = section.querySelector(".complete-btn");
      if (btn) {
        btn.classList.toggle("completed", isDone);
        btn.setAttribute("aria-pressed", isDone ? "true" : "false");
        btn.innerHTML = isDone
          ? `<span aria-hidden="true">✓</span> Completed`
          : `<span aria-hidden="true">○</span> Mark as Completed`;
      }
    });

    // Sync sidebar topic dots
    document.querySelectorAll(".sidebar-topic-link[data-topic-id]").forEach((link) => {
      const topicId = link.getAttribute("data-topic-id");
      link.classList.toggle("completed", completedSet.has(topicId));
    });
  }

  function syncAllProgressUI() {
    syncHeaderProgress();
    syncDashboardUI();
    syncUnitPageUI();
  }

  function initProgressTracking() {
    syncAllProgressUI();

    // Attach click handlers for "Mark as Completed" buttons
    document.querySelectorAll(".complete-btn[data-topic-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const topicId = btn.getAttribute("data-topic-id");
        toggleTopicCompletion(topicId);
      });
    });

    // Record visit when clicking topic links or scrolling to hash
    if (window.location.hash) {
      const hashId = window.location.hash.slice(1);
      recordTopicVisit(hashId);
      syncDashboardUI();
    }

    document.querySelectorAll(".sidebar-topic-link[data-topic-id], .topic-pill[data-topic-id]").forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.getAttribute("data-topic-id");
        recordTopicVisit(id);
      });
    });
  }

  window.WTProgress = {
    init: initProgressTracking,
    toggleTopicCompletion,
    getUnitStats,
    getOverallStats,
    recordTopicVisit,
    syncAllProgressUI
  };
})();
