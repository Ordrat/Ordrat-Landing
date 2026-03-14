'use client';
import { useMobileMenuContext } from '@/context/MobileMenuContext';
import { useLocale } from '@/context/LocaleContext';
import type { Locale } from '@/app/i18n/messages';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuCloseButton from './MenuCloseButton';
import MobileMenuItem from './MobileMenuItem';

export interface MobileMenuItem {
  id: string;
  label: string;
  href: string;
}

export interface MobileMenuGroup {
  id: string;
  title: string;
  submenu: MobileMenuItem[];
}

const localeLabels: Record<Locale, string> = {
  ar: 'عربي',
  en: 'EN',
};

const MobileMenu = ({ menuData }: { menuData: MobileMenuGroup[] }) => {
  const { isOpen } = useMobileMenuContext();
  const { locale, setLocale, isRTL } = useLocale();
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <aside
      className={cn(
        'scroll-bar fixed top-0 right-0 z-9999 h-screen w-full bg-white transition-all duration-300 sm:w-[85%] sm:max-w-sm sm:rounded-l-3xl xl:hidden',
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0',
      )}>
      <div className="flex h-full flex-col p-5 sm:p-8">
        {/* Header: logo + lang switcher + close */}
        <div className="flex items-center justify-between">
          <Link href="/" className="block">
            <span className="sr-only">Home</span>
            <figure className="w-28">
              <Image src={mainLogo} alt="Ordrat" className="w-full" priority />
            </figure>
          </Link>

          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen((prev) => !prev)}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-[#F5F5F5] px-3 py-1.5 text-sm font-medium text-secondary transition-all hover:border-ordrat-red-main hover:bg-white">
                <span
                  style={
                    locale === 'en'
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
                  className={cn(
                    'absolute z-50 mt-2 w-30 overflow-hidden rounded-2xl border border-black/5 bg-white py-1.5 text-sm shadow-[0_14px_35px_rgba(15,23,42,0.14)]',
                    isRTL ? 'left-0' : 'right-0',
                  )}>
                  {(['ar', 'en'] as const).map((lng) => (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => {
                        setLocale(lng);
                        setIsLangOpen(false);
                      }}
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
                        {lng === 'ar' ? 'عربي' : 'English'}
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

            {/* Close button */}
            <MenuCloseButton />
          </div>
        </div>

        {/* Menu items */}
        <div className="scroll-bar mt-6 flex-1 overflow-y-auto overflow-x-hidden pb-10">
          <p className="text-secondary text-tagline-1 before:bg-stroke-10 relative mb-2 block font-normal before:absolute before:top-1/2 before:-right-16 before:h-px before:w-full before:-translate-y-1/2 before:content-[''] rtl:before:-left-16 rtl:before:right-auto">
            Menu
          </p>
          <ul className="space-y-2">
            {menuData.map((item) => (
              <MobileMenuItem key={item.id} id={item.id} title={item.title} hasSubmenu={item.submenu.length > 0}>
                <ul>
                  {item?.submenu?.map((subItem) => (
                    <li key={subItem.id}>
                      <Link
                        href={subItem.href}
                        className="text-tagline-1 text-secondary block py-2.5 font-normal transition-all duration-200 ltr:ml-4 ltr:text-left rtl:mr-4 rtl:text-right">
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileMenuItem>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

MobileMenu.displayName = 'MobileMenu';
export default MobileMenu;
