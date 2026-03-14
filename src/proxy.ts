import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ar'];
const PUBLIC_FILE = /\.(.*)$/;

function getLocale(request: NextRequest): string {
  // Check for saved locale in cookie (set by client when user switches language)
  const savedLocale = request.cookies.get('app-locale')?.value;
  if (savedLocale && locales.includes(savedLocale)) return savedLocale;

  // Fall back to Accept-Language header
  const acceptLang = request.headers.get('Accept-Language') ?? '';
  if (acceptLang.includes('ar')) return 'ar';

  return 'en';
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files (anything with a file extension: .svg, .png, .ico, etc.)
  if (PUBLIC_FILE.test(pathname)) return;

  // Check if path already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect to locale-prefixed path
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip _next internals and api routes
    '/((?!_next|api).*)',
  ],
};
