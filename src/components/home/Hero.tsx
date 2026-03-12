'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="pt-30 max-[1920px]:px-5 md:pt-34 lg:pt-36">
      <div
        className="bg-background-12 border-background-12 relative mx-auto -mb-2 max-w-470 overflow-hidden border pt-18 md:pt-24 xl:rounded-4xl">
        <div className="main-container relative z-10">
          <div className="lp:space-y-34 space-y-10 md:space-y-15">
            <div className="mx-auto space-y-10 text-center lg:space-y-14">
              <div className="space-y-3 text-center">
                <div className="space-y-5">
                  <RevealAnimation instant delay={0.1}>
                    <span className="badge bg-ordrat-red-main text-accent/80" aria-label="Trusted worldwide badge">
                      Trusted worldwide in over 30 countries
                    </span>
                  </RevealAnimation>
                  <RevealAnimation instant delay={0.2}>
                    <h1 className="lg:text-heading-2 text-heading-3 mx-auto max-w-87.5 font-bold leading-[110%] text-ordrat-blue-main sm:max-w-140 lg:max-w-230">
                      <span className="relative inline-flex flex-wrap items-start justify-center gap-x-1 gap-y-1 sm:flex-nowrap sm:gap-x-0.5">
                        {/* Head decoration SVG */}
                        <Image
                          src="/home/Hero/head.svg"
                          alt=""
                          width={45}
                          height={39}
                          className="-mr-1 w-5 -translate-y-3 -rotate-45 sm:-mr-2 sm:w-8 lg:w-10 lg:-translate-y-4"
                          aria-hidden="true"
                        />
                        <span>Create online store and QR Menu</span>
                      </span>
                      <span className="mt-1 mb-4 block lg:mt-2 lg:mb-10">
                        Fast and easy with{' '}
                        <span className="relative inline-block text-ordrat-red-main">
                          Ordrat
                          {/* Underline SVG */}
                          <Image
                            src="/home/Hero/line.svg"
                            alt=""
                            width={335}
                            height={34}
                            className="absolute -bottom-2 left-0 w-full sm:-bottom-3 lg:-bottom-4"
                            aria-hidden="true"
                          />
                        </span>
                      </span>
                    </h1>
                  </RevealAnimation>
                </div>
                <RevealAnimation instant delay={0.3}>
                  <p className="mx-auto mt-6 max-w-175 text-[#4A4A4A] flex flex-wrap items-center justify-center gap-x-1 text-center text-base leading-7 sm:max-w-240 lg:max-w-295">
                    We make your work more organized and easier with many modern features for{' '}
                    <span className="text-ordrat-red-main">managing your online store</span>
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
                    alt="لوحة تحكم أوردرات - نظام إدارة المتاجر والمطاعم الإلكترونية"
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
