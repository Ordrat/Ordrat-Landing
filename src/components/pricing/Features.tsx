'use client';

import checkCircle from '@public/images/icons/check-circle.svg';
import thumbsUp from '@public/images/icons/thumbs-up.svg';
import users from '@public/images/icons/users.svg';
import { useLocale } from '@/context/LocaleContext';
import Image from 'next/image';
import NumberAnimation from '../animation/NumberAnimation';
import RevealAnimation from '../animation/RevealAnimation';

const Features = () => {
  const { t } = useLocale();

  return (
    <section className="pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge bg-ordrat-red-main text-accent">{t('pricingPage.features.badge')}</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.3}>
              <h2>{t('pricingPage.features.title')}</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <p className="mx-auto max-w-[744px]">
                {t('pricingPage.features.description')}
              </p>
            </RevealAnimation>
          </div>
        </div>
        <RevealAnimation delay={0.5}>
          <div className="bg-ordrat-red-main flex flex-col space-y-8 rounded-[20px] py-6 md:flex-row md:space-y-0">
            <div className="max-md:border-b-stroke-1 md:border-e-stroke-1 flex-1 space-y-6 py-6 max-md:border-b md:border-e">
              <figure className="bg-white mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={checkCircle} alt={t('pricingPage.features.malwareRate')} className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation
                    number={99}
                    speed={1000}
                    data-speed={1000}
                    interval={180}
                    rooms={2}
                    heightSpaceRatio={2.5}>
                    99
                  </NumberAnimation>
                  {t('pricingPage.features.malwareRate')}
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  {t('pricingPage.features.malwareDesc')}
                </p>
              </div>
            </div>
            <div className="max-md:border-b-stroke-10 md:border-e-stroke-10 flex-1 space-y-6 py-6 max-md:border-b md:border-e">
              <figure className="bg-white mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={users} alt={t('pricingPage.features.integrityRate')} className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={100} speed={1000} interval={180} rooms={3} heightSpaceRatio={2.5}>
                    100
                  </NumberAnimation>
                  {t('pricingPage.features.integrityRate')}
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  {t('pricingPage.features.integrityDesc')}
                </p>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-6">
              <figure className="bg-white mx-auto flex h-[52px] w-20 items-center justify-center rounded-full px-7 py-3.5">
                <Image src={thumbsUp} alt={t('pricingPage.features.footprintRate')} className="size-6" />
              </figure>
              <div className="space-y-2 text-center">
                <h3 className="text-heading-6 flex items-center justify-center font-normal text-white">
                  <NumberAnimation number={5} speed={1000} interval={180} rooms={1} heightSpaceRatio={2.5}>
                    5
                  </NumberAnimation>
                  {t('pricingPage.features.footprintRate')}
                </h3>
                <p className="text-accent/60 mx-auto max-w-[274px]">
                  {t('pricingPage.features.footprintDesc')}
                </p>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Features;
