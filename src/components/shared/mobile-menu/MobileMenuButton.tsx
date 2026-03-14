'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';

const MobileMenuButton = () => {
  const { openMenu } = useMobileMenuContext();

  return (
    <div className="block xl:hidden">
      <button
        onClick={openMenu}
        className="flex size-10 cursor-pointer flex-col items-center justify-center gap-1 rounded-full bg-ordrat-red-main transition-all duration-200 hover:scale-105 hover:bg-ordrat-red-main/90 sm:size-12 sm:gap-1.25"
        aria-label="Open mobile menu">
        <span className="sr-only">Menu</span>
        <span className="block h-0.5 w-5 bg-white transition-all duration-200 sm:w-6"></span>
        <span className="block h-0.5 w-5 bg-white transition-all duration-200 sm:w-6"></span>
        <span className="block h-0.5 w-5 bg-white transition-all duration-200 sm:w-6"></span>
      </button>
    </div>
  );
};

MobileMenuButton.displayName = 'MobileMenuButton';
export default MobileMenuButton;
