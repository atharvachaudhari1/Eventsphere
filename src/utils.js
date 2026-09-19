/**
 * EventSphere Utility Functions
 * Pure helper functions used across the application.
 */

// ─── Currency Formatting ──────────────────────────────────────────────────────
/**
 * Format a number as Indian Rupees (INR).
 * @param {number} amount
 * @param {boolean} compact - Use compact notation (e.g. 1.2L instead of 1,20,000)
 * @returns {string}
 */
export function formatINR(amount, compact = false) {
  if (compact && amount >= 100000) {
    return `₹${(amount / 100000).toFixed(1)}L`;
  }
  if (compact && amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

// ─── Date & Time Helpers ──────────────────────────────────────────────────────
/**
 * Format a Date object to a readable string (e.g. "12 Jan 2026").
 * @param {Date|string} date
 * @returns {string}
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

/**
 * Get the number of days until a future date.
 * @param {Date|string} date
 * @returns {number}
 */
export function daysUntil(date) {
  const diff = new Date(date) - new Date();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

/**
 * Check if a date is in the past.
 * @param {Date|string} date
 * @returns {boolean}
 */
export function isPast(date) {
  return new Date(date) < new Date();
}

// ─── String Helpers ───────────────────────────────────────────────────────────
/**
 * Capitalize first letter of each word.
 * @param {string} str
 * @returns {string}
 */
export function titleCase(str) {
  return str.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
}

/**
 * Truncate a string to a max length with ellipsis.
 * @param {string} str
 * @param {number} maxLen
 * @returns {string}
 */
export function truncate(str, maxLen = 80) {
  if (!str || str.length <= maxLen) return str;
  return str.slice(0, maxLen).trimEnd() + "…";
}

/**
 * Generate a random short ID (not cryptographically secure).
 * @returns {string}
 */
export function genId() {
  return Math.random().toString(36).slice(2, 9);
}

// ─── Array Helpers ────────────────────────────────────────────────────────────
/**
 * Shuffle an array using Fisher-Yates algorithm.
 * @param {Array} arr
 * @returns {Array}
 */
export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * Group an array of objects by a key.
 * @param {Array} arr
 * @param {string} key
 * @returns {Object}
 */
export function groupBy(arr, key) {
  return arr.reduce((acc, item) => {
    const group = item[key];
    if (!acc[group]) acc[group] = [];
    acc[group].push(item);
    return acc;
  }, {});
}

// ─── Storage Helpers ──────────────────────────────────────────────────────────
/**
 * Safe localStorage get with JSON parsing.
 * @param {string} key
 * @param {*} defaultVal
 * @returns {*}
 */
export function localGet(key, defaultVal = null) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : defaultVal;
  } catch {
    return defaultVal;
  }
}

/**
 * Safe localStorage set with JSON serialization.
 * @param {string} key
 * @param {*} value
 */
export function localSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.warn("localStorage write failed:", e);
  }
}

/**
 * Safe localStorage remove.
 * @param {string} key
 */
export function localRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch {}
}

// ─── Validation Helpers ───────────────────────────────────────────────────────
/**
 * Validate an email address.
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate an Indian mobile number (10 digits).
 * @param {string} phone
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  return /^[6-9]\d{9}$/.test(phone.replace(/\s|-/g, ""));
}

// ─── Budget Calculations ──────────────────────────────────────────────────────
/**
 * Calculate the percentage of budget used.
 * @param {number} spent
 * @param {number} total
 * @returns {number} 0-100
 */
export function budgetPercent(spent, total) {
  if (!total) return 0;
  return Math.min(100, Math.round((spent / total) * 100));
}

/**
 * Get a budget status label.
 * @param {number} percent
 * @returns {{ label: string, color: string }}
 */
export function budgetStatus(percent) {
  if (percent >= 100) return { label: "Over Budget",  color: "#E74C3C" };
  if (percent >= 80)  return { label: "Almost Full",  color: "#F39C12" };
  if (percent >= 50)  return { label: "On Track",     color: "#C9A84C" };
  return                     { label: "Plenty Left",  color: "#2ECC71" };
}
