import { NextResponse, type NextRequest } from 'next/server';

const locales = ['en', 'ar'];
const PUBLIC_FILE = /\.(.*)$/;

function getLocaleFromPath(pathname: string): string | undefined {
  const segment = pathname.split('/').filter(Boolean)[0];
  if (segment && locales.includes(segment)) {
    return segment;
  }

  return undefined;
}

function getLocale(request: NextRequest): string {
  // Check for saved locale in cookie (set by client when user switches language)
  const savedLocale = request.cookies.get('app-locale')?.value;
  if (savedLocale && locales.includes(savedLocale)) {
    return savedLocale;
  }

  // Fall back to Accept-Language header
  const acceptLang = request.headers.get('Accept-Language') ?? '';
  if (acceptLang.includes('ar')) {
    return 'ar';
  }

  return 'en';
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files (anything with a file extension: .svg, .png, .ico, etc.)
  if (PUBLIC_FILE.test(pathname)) {
    return;
  }

  const localeFromPath = getLocaleFromPath(pathname);
  if (localeFromPath) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-path-locale', localeFromPath);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set('app-locale', localeFromPath, {
      path: '/',
      maxAge: 31536000,
      sameSite: 'lax',
    });

    return response;
  }

  // Check if path already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) {
    return;
  }

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  const response = NextResponse.redirect(request.nextUrl);

  response.cookies.set('app-locale', locale, {
    path: '/',
    maxAge: 31536000,
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    // Skip _next internals and api routes
    '/((?!_next|api).*)',
  ],
};
