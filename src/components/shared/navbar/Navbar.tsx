// crypto marketing navbar
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useLocale } from '@/context/LocaleContext';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import type { Locale } from '@/app/i18n/messages';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import CompanyMenu from './CompanyMenu';
import PlanAndSupportMenu from './PlanAndSupportMenu';
import ResourcesMenu from './ResourcesMenu';
import { mobileMenuData } from './data';

interface DropdownNavItem {
  key: 'features' | 'blog' | 'pricing' | 'partnership' | 'resources';
  href: string;
  dataMenu?: string;
  MenuComponent?: ComponentType<{
    menuDropdownId: string | null;
    setMenuDropdownId: (dropdownId: string | null) => void;
  }>;
}

const navItems: DropdownNavItem[] = [
  { key: 'features', href: '/features', dataMenu: 'company-mega-menu', MenuComponent: CompanyMenu },
  { key: 'blog', href: '/blog' },
  { key: 'pricing', href: '/pricing' },
  {
    key: 'partnership',
    href: '/partnership',
    dataMenu: 'plan-and-support-mega-menu',
    MenuComponent: PlanAndSupportMenu,
  },
  { key: 'resources', href: '/documentation', dataMenu: 'resources-dropdown-menu', MenuComponent: ResourcesMenu },
];

const localeLabels: Record<Locale, string> = {
  ar: 'عربي',
  en: 'English',
};

const Navbar = ({ showTopNav }: { showTopNav: boolean }) => {
  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale, t } = useLocale();

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  useEffect(() => {
    const onOutsideClick = (event: MouseEvent) => {
      if (!languageMenuRef.current) {
        return;
      }

      if (event.target instanceof Node && !languageMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLangOpen(false);
      }
    };

    document.addEventListener('mousedown', onOutsideClick);
    document.addEventListener('keydown', onEscape);

    return () => {
      document.removeEventListener('mousedown', onOutsideClick);
      document.removeEventListener('keydown', onEscape);
    };
  }, []);

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:max-w-322.5! fixed top-5 left-1/2 z-50 mx-auto w-full max-w-87.5 -translate-x-1/2 rounded-full transition-all duration-500 min-[425px]:max-w-93.75 min-[500px]:max-w-112.5 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285',
          showTopNav ? 'top-13 md:top-12 lg:top-15' : 'top-5',
          isScrolled && 'top-3!',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div
            className={cn(
              'rounded-full transition-all duration-500',
              isScrolled && 'backdrop-blur-[15px]',
            )}>
            <div
              className={cn(
                'mx-auto flex items-center justify-between rounded-full bg-white px-3 py-2.5 text-secondary transition-all duration-500 xl:py-0',
                isScrolled
                  ? 'border border-black/5 shadow-[0_10px_30px_rgba(15,23,42,0.08)]'
                  : 'border border-transparent shadow-none',
              )}>
              <div className="flex items-center justify-center">
                <Link href="/" className="inline-flex items-center">
                  <span className="sr-only">{t('navbar.home')}</span>
                  <figure className="max-w-28 lg:max-w-45.5">
                    <Image src={mainLogo} alt="Ordrat" className="h-auto w-full" priority />
                  </figure>
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  {navItems.map(({ key, href, dataMenu, MenuComponent }) => {
                    const label = t(`navbar.${key}`);

                    if (!dataMenu || !MenuComponent) {
                      return (
                        <li key={key} className="relative cursor-pointer py-2.5">
                          <Link
                            href={href}
                            className="text-tagline-1 inline-flex items-center gap-1 rounded-full px-4 py-2 font-normal text-secondary transition-all duration-400 hover:bg-ordrat-red-main hover:text-white">
                            <span>{label}</span>
                          </Link>
                        </li>
                      );
                    }

                    return (
                      <li
                        key={key}
                        className="group relative cursor-pointer py-2.5"
                        data-menu={dataMenu}
                        onMouseEnter={() => handleMenuHover(dataMenu)}>
                        <button
                          type="button"
                          className="text-tagline-1 flex items-center gap-1 rounded-full px-4 py-2 font-normal text-secondary transition-all duration-400 hover:bg-ordrat-red-main hover:text-white">
                          <span>{label}</span>
                          <span className="block translate-y-px origin-center transition-all duration-300 group-hover:rotate-180">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                          </span>
                        </button>
                        <MenuComponent menuDropdownId={menuDropdownId} setMenuDropdownId={setMenuDropdownId} />
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="hidden items-center justify-center gap-5 xl:flex">
                <div className="relative ml-1" ref={languageMenuRef}>
                  <button
                    type="button"
                    onClick={() => setIsLangOpen((prev) => !prev)}
                    aria-haspopup="menu"
                    aria-expanded={isLangOpen}
                    aria-label={t('navbar.localeMenuLabel')}
                    className="flex min-w-21 items-center justify-between gap-1.5 rounded-full border border-transparent bg-[#F5F5F5] px-2.5 py-1.5 text-tagline-3 font-medium text-secondary shadow-[0_6px_20px_rgba(2,6,23,0.06)] transition-all hover:border-ordrat-red-main hover:bg-white">
                    <span
                      style={
                        locale === 'ar'
                          ? { fontFamily: 'var(--font-tajawal), sans-serif' }
                          : undefined
                      }>
                      {localeLabels[locale]}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className={cn('size-3 transition-transform duration-300', isLangOpen && 'rotate-180')}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isLangOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 z-50 mt-2 w-30 overflow-hidden rounded-2xl border border-black/5 bg-white py-1.5 text-tagline-3 shadow-[0_14px_35px_rgba(15,23,42,0.14)]">
                      {(['ar', 'en'] as const).map((lng) => (
                        <button
                          key={lng}
                          type="button"
                          onClick={() => {
                            setLocale(lng);
                            setIsLangOpen(false);
                          }}
                          role="menuitem"
                          className={cn(
                            'flex w-full items-center justify-between px-3 py-2 text-secondary transition-colors hover:bg-[#FFF1F3]',
                            lng === locale && 'font-semibold text-ordrat-red-main',
                          )}>
                          <span
                            style={
                              lng === 'ar'
                                ? { fontFamily: 'var(--font-tajawal), sans-serif' }
                                : undefined
                            }>
                            {localeLabels[lng]}
                          </span>
                          {lng === locale && (
                            <span className="inline-flex size-5 items-center justify-center rounded-full bg-ordrat-red-main text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-3">
                                <path
                                  d="M5 13l4 4L19 7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  aria-label={t('navbar.search')}
                  className="flex size-11 items-center justify-center rounded-full border border-transparent bg-[#F5F5F5] text-secondary transition-colors hover:border-ordrat-red-main hover:bg-white hover:text-ordrat-red-main">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-5">
                    <path
                      d="M15.5 15.5L20 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="11"
                      cy="11"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <Link
                  href="/signin"
                  className="rounded-full bg-ordrat-blue-main px-4 py-2 text-tagline-2 font-medium text-white transition-colors hover:bg-ordrat-red-main">
                  {t('navbar.signIn')}
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-ordrat-red-main px-4 py-2 text-tagline-2 font-medium text-white hover:bg-ordrat-red-main/90">
                  {t('navbar.startFree')}
                </Link>
              </div>

              {/* mobile menu ham burger icon  */}
              <MobileMenuButton />
            </div>
          </div>
        </RevealAnimation>
        {/* mobile menu component */}
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
