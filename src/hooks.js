/**
 * useLocalStorage — React hook for persisted state via localStorage.
 *
 * Usage:
 *   const [theme, setTheme] = useLocalStorage("theme", "dark");
 */
import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (e) {
      console.warn(`useLocalStorage: failed to set "${key}"`, e);
    }
  };

  return [storedValue, setValue];
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * useDebounce — Debounce a rapidly-changing value.
 *
 * Usage:
 *   const debouncedSearch = useDebounce(searchTerm, 300);
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * useMediaQuery — Reactive CSS media-query hook.
 *
 * Usage:
 *   const isMobile = useMediaQuery("(max-width: 768px)");
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * useToggle — Simple boolean toggle hook.
 *
 * Usage:
 *   const [isOpen, toggle, setOpen] = useToggle(false);
 */
import { useCallback } from "react";

export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * useScrollToTop — Scroll to top when a dependency changes.
 *
 * Usage:
 *   useScrollToTop(currentPage);
 */
export function useScrollToTop(dep) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [dep]);
}

// ─────────────────────────────────────────────────────────────────────────────

/**
 * useWindowSize — Reactive window dimensions.
 *
 * Usage:
 *   const { width, height } = useWindowSize();
 */
export function useWindowSize() {
  const [size, setSize] = useState({
    width:  typeof window !== "undefined" ? window.innerWidth  : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handler = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return size;
}
