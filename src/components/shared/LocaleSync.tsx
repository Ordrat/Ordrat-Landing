'use client';

import { useLocale } from '@/context/LocaleContext';
import type { Locale } from '@/app/i18n/messages';
import { useEffect } from 'react';

export default function LocaleSync({ lang }: { lang: string }) {
  const { setLocale } = useLocale();

  useEffect(() => {
    if (lang === 'ar' || lang === 'en') {
      setLocale(lang as Locale);
    }
  }, [lang, setLocale]);

  return null;
}
