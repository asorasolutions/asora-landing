'use client';

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always start with 'dark' for SSR consistency
  const [theme, setThemeState] = useState<Theme>('dark');
  const [mounted, setMounted] = useState(false);

  // Sync with DOM attribute (set by blocking script) after mount
  useEffect(() => {
    // Use requestAnimationFrame to defer setState and satisfy ESLint rule
    const frameId = requestAnimationFrame(() => {
      // Read from DOM attribute which was set by blocking script in layout.tsx
      const domTheme = document.documentElement.getAttribute('data-theme') as Theme;
      if (domTheme === 'light' || domTheme === 'dark') {
        setThemeState(domTheme);
      }
      setMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Update document and localStorage when theme changes
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((currentTheme) => {
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  }, []);

  // Return consistent 'dark' theme until mounted to prevent hydration mismatch
  const contextValue = {
    theme: mounted ? theme : 'dark',
    setTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
