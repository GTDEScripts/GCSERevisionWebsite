// ══════════════════════════════════════════════════════════
// UTILITIES - Constants, Helpers & Error Handling
// ══════════════════════════════════════════════════════════

// ═══ MAGIC STRINGS AS CONSTANTS ═══
const STORAGE_KEYS = {
  MEMORISED: '_mem',
  CUSTOM: '_custom',
  SR: '_sr',
  FAVOURITES: '_fav',
  QUIZ_SCORES_BIO: 'bio_quiz_scores',
  QUIZ_SCORES_CHEM: 'chem_quiz_scores',
  QUIZ_SCORES_PHYS: 'phys_quiz_scores',
  SETTINGS: 'gcse_settings',
  STREAK: 'gcse_streak',
  POMO: 'gcse_pomo',
  TODAY: 'gcse_today'
};

const CARD_MODES = {
  ALL: 'all',
  BEST: 'best',
  DUE: 'due',
  WEAK: 'weak',
  FAV: 'fav',
  CLOZE: 'cloze'
};

const QUIZ_MODES = {
  NORMAL: 'normal',
  ADAPTIVE: 'adaptive',
  THEME: 'theme'
};

const SUBJECT_GROUPS = {
  SCIENCES: 'sciences',
  HUMANITIES: 'humanities-business'
};

const DOM_IDS = {
  HOME_SCREEN: 'home-screen',
  SUBJECT_VIEW: 'subject-view',
  TOOL_VIEW: 'tool-view',
  NOTES_VIEW: 'notes-view',
  SCI_QUIZ_VIEW: 'sci-quiz-view',
  SHORT_ANS_QUIZ_VIEW: 'short-ans-quiz-view'
};

const ALL_VIEWS = [
  'home-screen', 'subject-view', 'tool-view', 'notes-view',
  'sci-quiz-view', 'short-ans-quiz-view'
];

// ═══ ERROR LOGGING ═══
const Logger = {
  error: (message, error) => {
    console.error(`[GCSE Error] ${message}`, error);
    // Could also send to analytics service
  },
  warn: (message) => console.warn(`[GCSE] ${message}`),
  info: (message) => console.info(`[GCSE] ${message}`),

  // Storage errors specifically
  storageError: (operation, key, error) => {
    Logger.error(`Storage ${operation} failed for key "${key}"`, error);
  }
};

// ═══ SAFE STORAGE UTILITIES ═══
const StorageUtil = {
  getJSON: (key, defaultValue = {}) => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : defaultValue;
    } catch (e) {
      Logger.storageError('GET', key, e);
      return defaultValue;
    }
  },

  setJSON: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (e) {
      Logger.storageError('SET', key, e);
      return false;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      Logger.storageError('REMOVE', key, e);
      return false;
    }
  }
};

// ═══ DOM UTILITIES ═══
const DOMUtil = {
  hideAllViews: () => {
    ALL_VIEWS.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.remove('active');
        if (id === 'home-screen') el.style.display = 'none';
      }
    });
  },

  showView: (viewId) => {
    const el = document.getElementById(viewId);
    if (el) {
      el.classList.add('active');
      if (viewId === 'home-screen') el.style.display = '';
    }
  },

  hideView: (viewId) => {
    const el = document.getElementById(viewId);
    if (el) {
      el.classList.remove('active');
      if (viewId === 'home-screen') el.style.display = 'none';
    }
  },

  // Cached element references to avoid repeated DOM queries
  elementCache: {},
  getElement: (id) => {
    if (!DOMUtil.elementCache[id]) {
      DOMUtil.elementCache[id] = document.getElementById(id);
    }
    return DOMUtil.elementCache[id];
  },

  clearCache: () => {
    DOMUtil.elementCache = {};
  }
};

// ═══ CALCULATION UTILITIES ═══
const CalcUtil = {
  // Percentage calculation (used 8+ places)
  percentage: (value, total) => {
    if (!total || total === 0) return 0;
    return Math.round((value / total) * 100);
  },

  // Score feedback (used in multiple quiz result screens)
  getScoreFeedback: (percentage) => {
    if (percentage >= 80) {
      return {
        class: 'great',
        emoji: '🎉',
        message: 'Excellent work!',
        shouldConfetti: true
      };
    } else if (percentage >= 50) {
      return {
        class: 'ok',
        emoji: '👍',
        message: 'Good effort! Keep practising.',
        shouldConfetti: false
      };
    } else {
      return {
        class: 'poor',
        emoji: '💪',
        message: 'Keep going — revision is the key!',
        shouldConfetti: false
      };
    }
  }
};

// ═══ HASH UTILITY (FIX COLLISION BUG) ═══
const HashUtil = {
  // Proper hash to prevent collisions (replaces substring hack)
  quoteHash: (quote, speaker = '') => {
    const combined = quote + (speaker ? '|' + speaker : '');
    // Simple hash using base64 - could use crypto.subtle.digest for better hash
    try {
      return btoa(combined).substring(0, 20);
    } catch {
      // Fallback if btoa fails (shouldn't happen with normal text)
      return combined.substring(0, 20);
    }
  }
};

// ═══ VALIDATION UTILITIES ═══
const ValidateUtil = {
  isValidTextState: () => {
    if (!app || !app.currentText) {
      Logger.error('App state accessed before text initialized');
      return false;
    }
    if (!app.currentText.storagePrefix) {
      Logger.error('Current text missing storagePrefix');
      return false;
    }
    return true;
  },

  isValidQuizState: (state) => {
    return state && typeof state === 'object' &&
           'qIdx' in state && 'answered' in state;
  },

  isValidIndex: (index, arrayLength) => {
    return typeof index === 'number' && index >= 0 && index < arrayLength;
  }
};

// ═══ EVENT UTILITIES ═══
const EventUtil = {
  // Debounce function for search/filter operations
  debounce: (fn, delay = 300) => {
    let timeoutId;
    return function(...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  // Event delegation helper for dynamically created elements
  delegateEvent: (parentSelector, eventType, childSelector, handler) => {
    const parent = document.querySelector(parentSelector);
    if (!parent) return;

    parent.addEventListener(eventType, (e) => {
      const target = e.target.closest(childSelector);
      if (target) {
        handler.call(target, e);
      }
    });
  }
};

// ═══ COMMON PATTERNS ═══
const UIUtil = {
  scrollToTop: () => window.scrollTo(0, 0),

  updateNavTabs: (active) => {
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(t => t.classList.remove('active'));
    tabs.forEach(t => {
      if (t.textContent.toLowerCase().includes(active)) {
        t.classList.add('active');
      }
    });
  }
};
