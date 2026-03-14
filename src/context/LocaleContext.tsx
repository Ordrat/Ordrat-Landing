'use client';

import { Locale, defaultLocale, messages } from '@/app/i18n/messages';
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react';

interface LocaleContextType {
  locale: Locale;
  isRTL: boolean;
  setLocale: (nextLocale: Locale) => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

const getValueByKey = (obj: unknown, key: string): unknown => {
  if (!key) {
    return obj;
  }

  return key.split('.').reduce<unknown>((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return (acc as Record<string, unknown>)[segment];
    }

    return undefined;
  }, obj);
};

export const LocaleProvider = ({
  children,
  initialLocale = defaultLocale,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  const isRTL = locale === 'ar';

  useEffect(() => {
    const storedLocale = window.localStorage.getItem('app-locale');
    if (storedLocale === 'ar' || storedLocale === 'en') {
      setLocaleState(storedLocale);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('app-locale', locale);
    document.cookie = `app-locale=${locale};path=/;max-age=31536000;SameSite=Lax`;

    const root = document.documentElement;
    const body = document.body;

    root.lang = locale;
    root.dir = isRTL ? 'rtl' : 'ltr';

    body.classList.toggle('locale-ar', isRTL);
    body.classList.toggle('locale-en', !isRTL);
  }, [locale, isRTL]);

  const t = useMemo(
    () => (key: string) => {
      const currentLocaleValue = getValueByKey(messages[locale], key);
      if (typeof currentLocaleValue === 'string') {
        return currentLocaleValue;
      }

      const fallbackValue = getValueByKey(messages.en, key);
      if (typeof fallbackValue === 'string') {
        return fallbackValue;
      }

      return key;
    },
    [locale],
  );

  const tList = useMemo(
    () => (key: string) => {
      const currentLocaleValue = getValueByKey(messages[locale], key);
      if (Array.isArray(currentLocaleValue) && currentLocaleValue.every((item) => typeof item === 'string')) {
        return currentLocaleValue;
      }

      const fallbackValue = getValueByKey(messages.en, key);
      if (Array.isArray(fallbackValue) && fallbackValue.every((item) => typeof item === 'string')) {
        return fallbackValue;
      }

      return [];
    },
    [locale],
  );

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, isRTL, setLocale, t, tList }}>{children}</LocaleContext.Provider>
  );
};

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }

  return context;
};
