import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  // Sync initial state directly with HTML class or localStorage
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const hasDarkClass = document.documentElement.classList.contains('dark');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    return hasDarkClass || window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Sync on mount
  useEffect(() => {
    const currentIsDark =
      document.documentElement.classList.contains('dark') ||
      localStorage.getItem('theme') === 'dark';

    setIsDark(currentIsDark);
    if (currentIsDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleTheme = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    const currentlyDark = document.documentElement.classList.contains('dark');
    const nextDark = !currentlyDark;

    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      data-cursor="morph"
      className="group pointer-events-auto cursor-pointer relative z-50 inline-flex items-center justify-center gap-2 h-10 px-3.5 border-2 border-ink dark:border-white bg-white dark:bg-charcoalCard text-ink dark:text-white shadow-[3px_3px_0px_0px_#000000] dark:shadow-[3px_3px_0px_0px_#002BFF] transition-all hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:translate-x-[1px] active:translate-y-[1px] select-none"
    >
      {isDark ? (
        <>
          <Sun className="w-4 h-4 text-white group-hover:text-black stroke-[2.2] pointer-events-none transition-colors" />
          <span className="font-mono text-xs font-bold tracking-wider uppercase hidden sm:inline pointer-events-none">
            LIGHT
          </span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-black group-hover:text-white stroke-[2.2] pointer-events-none transition-colors" />
          <span className="font-mono text-xs font-bold tracking-wider uppercase hidden sm:inline pointer-events-none">
            DARK
          </span>
        </>
      )}
    </button>
  );
};
