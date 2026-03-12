// crypto marketing navbar
'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import mainLogo from '@public/images/shared/dark-logo.svg';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from '../mobile-menu/MobileMenuButton';
import CompanyMenu from './CompanyMenu';
import PlanAndSupportMenu from './PlanAndSupportMenu';
import PlatformMenu from './PlatformMenu';
import ResourcesMenu from './ResourcesMenu';
import { mobileMenuData } from './data';

const dropdownNavItems = [
  { label: 'Company', dataMenu: 'company-mega-menu', MenuComponent: CompanyMenu },
  { label: 'Platform', dataMenu: 'platform-mega-menu', MenuComponent: PlatformMenu },
  { label: 'Resources', dataMenu: 'resources-dropdown-menu', MenuComponent: ResourcesMenu },
  { label: 'Plans & Support', dataMenu: 'plan-and-support-mega-menu', MenuComponent: PlanAndSupportMenu },
];

const Navbar = ({ showTopNav }: { showTopNav: boolean }) => {
  const routePathName = usePathname();

  const [menuDropdownId, setMenuDropdownId] = useState<string | null>(null);
  const [language, setLanguage] = useState<'AR' | 'EN'>('AR');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const { isScrolled } = useNavbarScroll(150);

  const handleMenuHover = (dropdownId?: string | null) => {
    setMenuDropdownId(dropdownId || null);
  };

  return (
    <MobileMenuProvider>
      <header
        onMouseLeave={() => handleMenuHover(null)}
        className={cn(
          'lp:max-w-322.5! fixed top-5 left-1/2 z-50 mx-auto w-full max-w-87.5 -translate-x-1/2 rounded-full transition-all duration-500 min-[425px]:max-w-93.75 min-[500px]:max-w-112.5 sm:max-w-135 md:max-w-180 lg:max-w-240 xl:max-w-285',
          showTopNav ? 'top-8 md:top-12 lg:top-15' : 'top-5',
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
                  <span className="sr-only">Home</span>

                  <figure className="hidden lg:block lg:max-w-45.5">
                    <Image src={mainLogo} alt="Ordrat" className="h-auto w-full" priority />
                  </figure>
                  
                </Link>
              </div>
              <nav className="hidden items-center xl:flex">
                <ul className="flex items-center">
                  {dropdownNavItems.map(({ label, dataMenu, MenuComponent }) => (
                    <li
                      key={label}
                      className="group relative cursor-pointer py-2.5"
                      data-menu={dataMenu}
                      onMouseEnter={() => handleMenuHover(dataMenu)}>
                      <button
                        type="button"
                        className="text-tagline-1 flex items-center gap-1 rounded-full px-4 py-2 font-normal text-secondary transition-all duration-400 hover:bg-ordrat-red-main hover:text-white">
                        <span>{label}</span>
                        <span className="block origin-center translate-y-px transition-all duration-300 group-hover:rotate-180">
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
                  ))}
                  <li className="relative cursor-pointer py-2.5">
                    <Link
                      href="/pricing"
                      className="text-tagline-1 flex items-center gap-1 rounded-full px-4 py-2 font-normal text-secondary transition-all duration-400 hover:bg-ordrat-red-main hover:text-white">
                      <span>Pricing</span>
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hidden items-center justify-center gap-5 xl:flex">
                <div className="relative ml-1">
                  <button
                    type="button"
                    onClick={() => setIsLangOpen((prev) => !prev)}
                    className="flex items-center gap-1 rounded-full bg-[#F5F5F5] px-3 py-1 text-tagline-3 font-normal text-secondary transition-colors hover:bg-ordrat-red-main hover:text-white">
                    <span>{language}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  {isLangOpen && (
                    <div className="absolute right-0 z-50 mt-2 w-24 rounded-xl bg-white py-1 text-tagline-3 shadow-14">
                      {(['AR', 'EN'] as const).map((lng) => (
                        <button
                          key={lng}
                          type="button"
                          onClick={() => {
                            setLanguage(lng);
                            setIsLangOpen(false);
                          }}
                          className={cn(
                            'flex w-full items-center justify-between px-3 py-1.5 text-left text-secondary transition-colors',
                            lng === language && 'font-medium',
                            'hover:bg-ordrat-red-main hover:text-white',
                          )}>
                          <span>{lng}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  aria-label="Search"
                  className="flex size-9 items-center justify-center rounded-full bg-[#F5F5F5] text-secondary transition-colors hover:bg-ordrat-red-main hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4">
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
                  Sign in
                </Link>
                <Link
                  href="/signup"
                  className="rounded-full bg-ordrat-red-main px-4 py-2 text-tagline-2 font-medium text-white hover:bg-ordrat-red-main/90">
                  Start for free
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
