import ar from '../../../messages/ar.json';
import en from '../../../messages/en.json';

export type Locale = 'en' | 'ar';

export const defaultLocale: Locale = 'en';

export const messages = {
  en,
  ar,
} as const;

export type Messages = typeof messages;
export type MessageKey = string;
