import HeaderWrapper from '@/components/shared/HeaderWrapper';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import Footer from '@/components/shared/footer/Footer';
import { defaultLocale, type Locale } from '@/app/i18n/messages';
import { AppContextProvider } from '@/context/AppContext';
import { LocaleProvider } from '@/context/LocaleContext';
import { interTight, tajawal } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { cookies, headers } from 'next/headers';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

const defaultAppState = {
  showTopNav: true,
  showTopNavDescription: true,
  showTopNavMarquee: true,
} as const;

const getInitialAppState = (rawState: string | undefined) => {
  if (!rawState) {
    return defaultAppState;
  }

  try {
    const parsed = JSON.parse(rawState) as Partial<Record<keyof typeof defaultAppState, unknown>>;

    return {
      showTopNav: typeof parsed.showTopNav === 'boolean' ? parsed.showTopNav : defaultAppState.showTopNav,
      showTopNavDescription:
        typeof parsed.showTopNavDescription === 'boolean'
          ? parsed.showTopNavDescription
          : defaultAppState.showTopNavDescription,
      // Marquee close is temporary and should not survive refresh.
      showTopNavMarquee: true,
    };
  } catch {
    // Ignore malformed cookie value and use defaults.
  }

  return defaultAppState;
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const requestHeaders = await headers();
  const cookieStore = await cookies();

  const localeFromHeader = requestHeaders.get('x-path-locale');
  const localeFromCookie = cookieStore.get('app-locale')?.value;
  const appStateCookie = cookieStore.get('app-state')?.value;

  const initialLocale: Locale =
    localeFromHeader === 'ar' || localeFromHeader === 'en'
      ? localeFromHeader
      : localeFromCookie === 'ar' || localeFromCookie === 'en'
        ? localeFromCookie
        : defaultLocale;

  const initialAppState = getInitialAppState(
    appStateCookie ? decodeURIComponent(appStateCookie) : undefined,
  );

  return (
    <html lang={initialLocale} dir={initialLocale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${interTight.variable} ${tajawal.variable} antialiased`} suppressHydrationWarning>
        <LocaleProvider initialLocale={initialLocale}>
          <AppContextProvider initialState={initialAppState}>
            <Suspense>
              <SmoothScrollProvider>
                <HeaderWrapper />

                {children}
                <Footer />
              </SmoothScrollProvider>
            </Suspense>
          </AppContextProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
