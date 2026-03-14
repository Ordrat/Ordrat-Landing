'use client';

import { useMobileMenuContext } from '@/context/MobileMenuContext';

const MenuCloseButton = () => {
  const { closeMenu } = useMobileMenuContext();
  return (
    <button
      onClick={closeMenu}
      className="relative flex size-10 cursor-pointer items-center justify-center rounded-full bg-ordrat-red-main transition-all duration-200 hover:scale-105 hover:bg-ordrat-red-main/90">
      <span className="sr-only">Close Menu</span>
      <span className="absolute block h-0.5 w-6 rotate-45 bg-white" />
      <span className="absolute block h-0.5 w-6 -rotate-45 bg-white" />
    </button>
  );
};

MenuCloseButton.displayName = 'MenuCloseButton';
export default MenuCloseButton;
