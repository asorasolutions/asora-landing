'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, type Locale } from './translations';

// Define the translation type based on the structure
type TranslationType = (typeof translations)['en'];

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationType;
}

const I18nContext = createContext<I18nContextType | null>(null);

/**
 * I18n Provider - Wraps app to provide translation context
 */
export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Start with 'en' for SSR consistency
  const [locale, setLocaleState] = useState<Locale>('en');
  const [mounted, setMounted] = useState(false);

  // Sync with DOM attribute (set by blocking script) after mount
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      // Read from DOM attribute which was set by blocking script in layout.tsx
      const domLocale = document.documentElement.lang as Locale;
      if (domLocale === 'en' || domLocale === 'es') {
        setLocaleState(domLocale);
      } else {
        // Fallback: check localStorage or browser language
        const saved = localStorage.getItem('locale') as Locale;
        if (saved === 'en' || saved === 'es') {
          setLocaleState(saved);
          document.documentElement.lang = saved;
        } else {
          const browserLang = navigator.language.toLowerCase();
          const detectedLocale = browserLang.startsWith('es') ? 'es' : 'en';
          setLocaleState(detectedLocale);
          document.documentElement.lang = detectedLocale;
        }
      }
      setMounted(true);
    });
    return () => cancelAnimationFrame(frameId);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
    document.documentElement.lang = newLocale;
  }, []);

  // Return 'en' translations until mounted to prevent hydration mismatch
  const effectiveLocale = mounted ? locale : 'en';
  const t = translations[effectiveLocale] as TranslationType;

  return (
    <I18nContext.Provider value={{ locale: effectiveLocale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

/**
 * Hook to access translations
 */
export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useTranslation must be used within I18nProvider');
  }
  return context;
}
