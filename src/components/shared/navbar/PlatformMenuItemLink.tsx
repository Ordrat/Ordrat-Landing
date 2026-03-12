import Link from 'next/link';
import HoverBgTransform from '../hover-bg-transform';
import { PlatformMenuItem } from './PlatformMenu';

const PlatformMenuItemLink = ({
  href,
  title,
  description,
  Icon,
  setMenuDropdownId,
}: PlatformMenuItem & { setMenuDropdownId: (id: string | null) => void }) => {
  return (
    <Link
      href={href}
      onClick={() => setMenuDropdownId(null)}
      className="group/platform-menu-item relative flex items-start gap-2 rounded-xl p-3 transition-all duration-300">
      <HoverBgTransform className="rounded-xl border border-transparent group-hover/platform-menu-item:bg-[var(--color-ordrat-red-main)] group-hover/platform-menu-item:border-transparent group-hover/platform-menu-item:opacity-100" />
      <div className="border-stroke-10 shadow-14 relative z-10 mt-1 flex size-9 shrink-0 items-center justify-center rounded-lg border bg-white p-2 transition-all duration-300">
        <Icon className="transition-all duration-300 ease-in-out group-hover/platform-menu-item:stroke-[var(--color-ordrat-red-main)]" />
      </div>
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2">
          <p className="text-tagline-1 text-secondary font-normal group-hover/platform-menu-item:text-white">
            {title}
          </p>
          {/* hover arrow icon  */}
          <div className="-translate-x-2 opacity-0 transition-all delay-200 duration-300 group-hover/platform-menu-item:translate-x-0 group-hover/platform-menu-item:opacity-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 24 24" fill="none">
              <path d="M8 5H10V7H8V5Z" className="fill-secondary group-hover/platform-menu-item:fill-white" />
              <path d="M11 8H13V10H11V8Z" className="fill-secondary group-hover/platform-menu-item:fill-white" />
              <path d="M14 11H16V13H14V11Z" className="fill-secondary group-hover/platform-menu-item:fill-white" />
              <path d="M11 14H13V16H11V14Z" className="fill-secondary group-hover/platform-menu-item:fill-white" />
              <path d="M8 17H10V19H8V17Z" className="fill-secondary group-hover/platform-menu-item:fill-white" />
            </svg>
          </div>
        </div>
        <p className="text-tagline-2 text-secondary/60 font-normal group-hover/platform-menu-item:text-white/80">
          {description}
        </p>
      </div>
    </Link>
  );
};

PlatformMenuItemLink.displayName = 'PlatformMenuItemLink';
export default PlatformMenuItemLink;
