import { useAppContext } from '@/context/AppContext';
import { useLocale } from '@/context/LocaleContext';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

const TopNavHeading = ({ className }: { className?: string }) => {
  const { showTopNavMarquee, setShowTopNavMarquee } = useAppContext();
  const { t } = useLocale();

  if (!showTopNavMarquee) {
    return null;
  }

  return (
    <RevealAnimation delay={0.1} direction="up" instant>
      <div className={cn('bg-[#D63848] absolute top-0 left-0 z-50 w-full px-3 py-2 text-white md:px-5', className)}>
        <div className="relative mx-auto max-w-350 px-1 sm:px-4 md:px-5">
          <div className="flex items-center justify-between gap-2 pr-7 sm:gap-3 sm:pr-9">
            <div className="flex items-center gap-2 sm:gap-3">
              <Image
                src="/logo.png"
                alt="Ordrat logo"
                width={40}
                height={40}
                className="size-7 rounded-xl  bg-white/90 p-0.5 sm:size-8"
              />
              <div className="flex items-center">
                <p
                  suppressHydrationWarning
                  className="text-[11px] leading-tight font-medium text-white sm:text-tagline-3 md:text-tagline-2">
                  {t('topHeading.title')}
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-1 sm:flex sm:gap-1.5 md:gap-2">
              <Link
                href="/signup"
                suppressHydrationWarning
                className="rounded-full bg-white px-2.5 py-1 text-[11px] leading-none font-semibold whitespace-nowrap text-ordrat-blue-main transition-colors hover:bg-white/90 md:px-4 md:py-1.5 md:text-tagline-3">
                {t('topHeading.startNow')}
              </Link>
              <Link
                href="/features"
                suppressHydrationWarning
                className="rounded-full border border-white bg-transparent px-2.5 py-1 text-[11px] leading-none font-semibold whitespace-nowrap text-white transition-colors hover:bg-white/10 md:px-4 md:py-1.5 md:text-tagline-3">
                {t('topHeading.learnMore')}
              </Link>
            </div>

            <div className="flex items-center gap-1.5 sm:hidden">
              <Link
                href="/signup"
                suppressHydrationWarning
                className="rounded-full bg-white px-2 py-1 text-[10px] leading-none font-semibold whitespace-nowrap text-ordrat-blue-main">
                {t('topHeading.startNow')}
              </Link>
              <Link
                href="/features"
                suppressHydrationWarning
                className="rounded-full border border-white bg-transparent px-2 py-1 text-[10px] leading-none font-semibold whitespace-nowrap text-white">
                {t('topHeading.learnMore')}
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute top-1.5 right-2 z-20 md:top-1/2 md:right-4 md:-translate-y-1/2 2xl:right-10">
          <button
            onClick={() => setShowTopNavMarquee(false)}
            className="close-top-nav flex size-5 cursor-pointer items-center justify-center md:size-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
              <path
                d="M22.8358 22.3639L22.3643 22.8353C22.104 23.0956 21.6819 23.0956 21.4215 22.8353L16.0004 17.4141L10.5792 22.8352C10.3189 23.0956 9.89675 23.0956 9.6364 22.8352L9.16499 22.3638C8.90464 22.1035 8.90464 21.6814 9.16499 21.421L14.5862 15.9999L9.16499 10.5787C8.90464 10.3184 8.90464 9.89626 9.16499 9.63591L9.63639 9.16451C9.89674 8.90416 10.3189 8.90416 10.5792 9.16451L16.0004 14.5857L21.4215 9.1645C21.6819 8.90415 22.104 8.90415 22.3643 9.1645L22.8358 9.6359C23.0961 9.89625 23.0961 10.3184 22.8358 10.5787L17.4146 15.9999L22.8358 21.421C23.0961 21.6814 23.0961 22.1035 22.8358 22.3639Z"
                className="fill-white"
              />
            </svg>
          </button>
        </div>
      </div>
    </RevealAnimation>
  );
};

TopNavHeading.displayName = 'TopNavHeading';
export default TopNavHeading;
