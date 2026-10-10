'use client';

import React, { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  setTheme: () => {},
  resolvedTheme: 'dark',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('dark');
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  // Load saved theme on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('cybersec_theme') as Theme;
      if (stored && (stored === 'dark' || stored === 'light' || stored === 'system')) {
        setThemeState(stored);
      }
    } catch {}
  }, []);

  // Apply theme class and handle system preference changes
  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (themeToApply: Theme) => {
      let actual: 'dark' | 'light' = 'dark';

      if (themeToApply === 'system') {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        actual = prefersDark ? 'dark' : 'light';
      } else {
        actual = themeToApply;
      }

      setResolvedTheme(actual);
      root.classList.remove('light', 'dark');
      root.classList.add(actual);
      root.setAttribute('data-theme', actual);
    };

    applyTheme(theme);

    // If theme is system, listen for OS changes
    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const listener = () => applyTheme('system');
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('cybersec_theme', newTheme);
    } catch {}
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
  }, [resolvedTheme, setTheme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      resolvedTheme,
      toggleTheme,
    }),
    [theme, setTheme, resolvedTheme, toggleTheme]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}
