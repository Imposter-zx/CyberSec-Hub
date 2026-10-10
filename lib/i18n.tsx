'use client';

import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Language, Difficulty, Pricing } from '@/types';

// English
import enCommon from '@/locales/en/common.json';
import enNav from '@/locales/en/navigation.json';
import enHome from '@/locales/en/home.json';
import enKnowledge from '@/locales/en/knowledge.json';
import enCerts from '@/locales/en/certifications.json';
import enLabs from '@/locales/en/labs.json';
import enTools from '@/locales/en/tools.json';

// French
import frCommon from '@/locales/fr/common.json';
import frNav from '@/locales/fr/navigation.json';
import frHome from '@/locales/fr/home.json';
import frKnowledge from '@/locales/fr/knowledge.json';
import frCerts from '@/locales/fr/certifications.json';
import frLabs from '@/locales/fr/labs.json';
import frTools from '@/locales/fr/tools.json';

// Arabic
import arCommon from '@/locales/ar/common.json';
import arNav from '@/locales/ar/navigation.json';
import arHome from '@/locales/ar/home.json';
import arKnowledge from '@/locales/ar/knowledge.json';
import arCerts from '@/locales/ar/certifications.json';
import arLabs from '@/locales/ar/labs.json';
import arTools from '@/locales/ar/tools.json';

// Spanish
import esCommon from '@/locales/es/common.json';
import esNav from '@/locales/es/navigation.json';
import esHome from '@/locales/es/home.json';
import esKnowledge from '@/locales/es/knowledge.json';
import esCerts from '@/locales/es/certifications.json';
import esLabs from '@/locales/es/labs.json';
import esTools from '@/locales/es/tools.json';

const translations: Record<Language, Record<string, string>> = {
  en: {
    ...enCommon,
    ...enNav,
    ...enHome,
    ...enKnowledge,
    ...enCerts,
    ...enLabs,
    ...enTools,
  },
  fr: {
    ...frCommon,
    ...frNav,
    ...frHome,
    ...frKnowledge,
    ...frCerts,
    ...frLabs,
    ...frTools,
  },
  ar: {
    ...arCommon,
    ...arNav,
    ...arHome,
    ...arKnowledge,
    ...arCerts,
    ...arLabs,
    ...arTools,
  },
  es: {
    ...esCommon,
    ...esNav,
    ...esHome,
    ...esKnowledge,
    ...esCerts,
    ...esLabs,
    ...esTools,
  },
};

export interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  isRTL: boolean;
  isRtl: boolean;
  dir: 'rtl' | 'ltr';
}

const I18nContext = createContext<I18nContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
  isRTL: false,
  isRtl: false,
  dir: 'ltr',
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Load language from localStorage or detect browser on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cybersec_lang') as Language;
      if (saved && (saved === 'en' || saved === 'fr' || saved === 'ar' || saved === 'es')) {
        setLanguageState(saved);
        return;
      }

      // Browser detection fallback
      if (typeof navigator !== 'undefined') {
        const browserLang = navigator.language.slice(0, 2).toLowerCase();
        if (browserLang === 'fr') setLanguageState('fr');
        else if (browserLang === 'ar') setLanguageState('ar');
        else if (browserLang === 'es') setLanguageState('es');
        else setLanguageState('en');
      }
    } catch {
      // Fallback
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cybersec_lang', lang);
    } catch {}

    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('data-lang', lang);
    }
  }, []);

  // Synchronize document attributes on language change
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.setAttribute('data-lang', language);
    }
  }, [language]);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>): string => {
      let text = translations[language]?.[key] || translations['en']?.[key] || key;

      if (params) {
        Object.entries(params).forEach(([paramKey, paramVal]) => {
          text = text.replace(new RegExp(`\\{${paramKey}\\}`, 'g'), String(paramVal));
        });
      }

      return text;
    },
    [language]
  );

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
      isRTL: language === 'ar',
      isRtl: language === 'ar',
      dir: (language === 'ar' ? 'rtl' : 'ltr') as 'rtl' | 'ltr',
    }),
    [language, setLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  return useContext(I18nContext);
}

// Localized difficulty helper
export function getDifficultyLabel(diff: Difficulty, t: (key: string) => string): string {
  switch (diff) {
    case 'beginner':
      return t('difficulty_beginner');
    case 'intermediate':
      return t('difficulty_intermediate');
    case 'advanced':
      return t('difficulty_advanced');
    default:
      return diff;
  }
}

// Localized pricing helper
export function getPricingLabel(pricing: Pricing, t: (key: string) => string): string {
  switch (pricing) {
    case 'free':
      return t('pricing_free');
    case 'freemium':
      return t('pricing_freemium');
    case 'paid':
      return t('pricing_paid');
    default:
      return pricing;
  }
}
