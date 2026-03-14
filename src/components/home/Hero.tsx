'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useLocale } from '@/context/LocaleContext';
import { cn } from '@/utils/cn';
import Image from 'next/image';

const Hero = () => {
  const { t, isRTL } = useLocale();
  const heroSubtitleAccent = t('home.hero.subtitleAccent');
  const titleLine1 = t('home.hero.titleLine1');
  const firstSpaceIdx = titleLine1.indexOf(' ');
  const titleFirstWord = firstSpaceIdx >= 0 ? titleLine1.slice(0, firstSpaceIdx) : titleLine1;
  const titleRest = firstSpaceIdx >= 0 ? titleLine1.slice(firstSpaceIdx) : '';

  return (
    <section
      className="pt-30 max-[1920px]:px-5 md:pt-34 lg:pt-36">
      <div
        className="bg-background-12 border-background-12 relative mx-auto -mb-2 max-w-470 overflow-hidden rounded-4xl border pt-18 md:pt-24">
        <div className="main-container relative z-10">
          <div className="lp:space-y-34 space-y-10 md:space-y-15">
            <div className="mx-auto space-y-10 text-center lg:space-y-14">
              <div className="space-y-3 text-center">
                <div className="space-y-5">
                  <RevealAnimation instant delay={0.1}>
                    <span className="badge bg-ordrat-red-main text-accent/80" aria-label="Trusted worldwide badge">
                      {t('home.hero.badge')}
                    </span>
                  </RevealAnimation>
                  <RevealAnimation instant delay={0.2}>
                    <h1 className="lg:text-heading-2 text-heading-3 mx-auto max-w-87.5 font-bold leading-[110%] text-ordrat-blue-main sm:max-w-140 lg:max-w-230">
                      <span className="relative inline-flex flex-wrap items-start justify-center gap-x-1 gap-y-1 pt-3 sm:flex-nowrap sm:gap-x-0.5 sm:pt-5 lg:pt-6">
                        <span>
                          {/* Head decoration anchored above first letter at all sizes */}
                          <span className="relative inline-block">
                            <Image
                              src="/home/Hero/head.svg"
                              alt=""
                              width={45}
                              height={39}
                              className={cn(
                                'absolute w-5 sm:w-8 lg:w-10 -top-5 sm:-top-7 lg:-top-8 right-12',
                                isRTL ? '-right-10 rotate-20' : 'left-0 -rotate-45',
                              )}
                              aria-hidden="true"
                            />
                            {titleFirstWord}
                          </span>
                          {titleRest}
                        </span>
                      </span>
                      <span className="mt-1 mb-4 block lg:mt-2 lg:mb-10">
                        {t('home.hero.titleLine2Prefix')}{' '}
                        <span className="relative inline-block text-ordrat-red-main">
                          {t('home.hero.titleBrand')}
                          {/* Underline SVG */}
                          <Image
                            src="/home/Hero/line.svg"
                            alt=""
                            width={335}
                            height={34}
                            className={cn(
                              'absolute left-0 w-full',
                              isRTL
                                ? '-bottom-5 sm:-bottom-6 lg:-bottom-8'
                                : '-bottom-2 sm:-bottom-3 lg:-bottom-4',
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </h1>
                  </RevealAnimation>
                </div>
                <RevealAnimation instant delay={0.3}>
                  <p className="mx-auto mt-6 max-w-175 text-[#4A4A4A] flex flex-wrap items-center justify-center gap-x-1 text-center text-base leading-7 sm:max-w-240 lg:max-w-295">
                    {t('home.hero.subtitle')}
                    {heroSubtitleAccent ? (
                      <span className="text-ordrat-red-main">{heroSubtitleAccent}</span>
                    ) : null}
                  </p>
                </RevealAnimation>
              </div>

              <RevealAnimation instant delay={0.4}>
                <div className="relative mx-auto flex w-full max-w-295 justify-center">
                  {/* Arrow SVG - right side pointing to dashboard */}
                  <Image
                    src="/home/Hero/arrow.svg"
                    alt=""
                    width={112}
                    height={112}
                    className="absolute -top-12 right-2 z-10 hidden w-20 lg:-right-10 lg:-top-20 lg:block lg:w-28"
                    aria-hidden="true"
                  />
                  <Image
                    src="https://cdn.ordrat.com/ordrat-dashboard.webp"
                    alt={t('home.hero.dashboardAlt')}
                    width={1200}
                    height={541}
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 768px) 100vw, 1180px"
                    quality={85}
                    className="relative h-auto w-full object-cover lg:scale-[1.04]"
                  />
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
