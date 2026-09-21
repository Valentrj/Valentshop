"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const storageKey = "valent-shop-theme";

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem(storageKey) as Theme | null;
    const initialTheme = savedTheme === "dark" || savedTheme === "light" ? savedTheme : getSystemTheme();
    applyTheme(initialTheme);
    const animationFrame = window.requestAnimationFrame(() => setTheme(initialTheme));

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => {
      if (!window.localStorage.getItem(storageKey)) {
        const systemTheme = getSystemTheme();
        applyTheme(systemTheme);
        setTheme(systemTheme);
      }
    };

    mediaQuery.addEventListener("change", syncSystemTheme);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      mediaQuery.removeEventListener("change", syncSystemTheme);
    };
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, nextTheme);
    applyTheme(nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Alternar tema. Tema atual: ${isDark ? "escuro" : "claro"}`}
      aria-pressed={isDark}
      className="grid size-11 place-items-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--ink)] transition-colors duration-200 hover:bg-[#ffe772] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5c35]"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.5 15.4A8.5 8.5 0 0 1 8.6 3.5 8.5 8.5 0 1 0 20.5 15.4Z" /></svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3.5" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
      )}
      <span className="sr-only">Tema atual: {isDark ? "escuro" : "claro"}</span>
    </button>
  );
}
