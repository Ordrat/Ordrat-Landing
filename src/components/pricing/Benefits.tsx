'use client';

import subFeatures4 from '@public/images/ns-img-36.png';
import subFeatures5 from '@public/images/ns-img-37.png';
import subFeatures6 from '@public/images/ns-img-38.png';
import subFeatures7 from '@public/images/ns-img-39.png';
import subFeatures8 from '@public/images/ns-img-40.png';
import subFeatures9 from '@public/images/ns-img-41.png';
import features2 from '@public/images/ns-img-619.png';
import { useLocale } from '@/context/LocaleContext';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const Benefits = () => {
  const { t } = useLocale();

  return (
    <section className="py-[100px]">
      <div className="main-container">
        {/* Benefits Section */}
        <div className="flex flex-col items-center justify-between gap-x-[70px] md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <div className="mb-13">
              <RevealAnimation delay={0.2}>
                <span className="badge bg-ordrat-red-main text-accent mb-5">{t('pricingPage.benefits.badge')}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <h2 className="text-heading-2 mb-3">{t('pricingPage.benefits.title')}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <p className="lg:max-w-[596px]">
                  {t('pricingPage.benefits.description')}
                </p>
              </RevealAnimation>
            </div>
            <ul className="list-none">
              <RevealAnimation delay={0.5}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-8 text-secondary text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary font-medium">{t('pricingPage.benefits.loyaltyTitle')}</p>
                    <p className="text-tagline-2 text-secondary/60">
                      {t('pricingPage.benefits.loyaltyDesc')}
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-46 text-secondary text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary font-medium">{t('pricingPage.benefits.speedTitle')}</p>
                    <p className="text-tagline-2 text-secondary/60">
                      {t('pricingPage.benefits.speedDesc')}
                    </p>
                  </div>
                </li>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <li className="flex items-center gap-3 py-2">
                  <div>
                    <span className="ns-shape-47 text-secondary text-[36px]" />
                  </div>
                  <div>
                    <p className="text-secondary font-medium">{t('pricingPage.benefits.personalizationTitle')}</p>
                    <p className="text-tagline-2 text-secondary/60">
                      {t('pricingPage.benefits.personalizationDesc')}
                    </p>
                  </div>
                </li>
              </RevealAnimation>
            </ul>
          </div>
          {/* Features Image */}
          <div className="relative w-full md:w-1/2">
            <RevealAnimation delay={0.4}>
              <figure className="h-auto max-w-[452px] justify-self-end">
                <Image src={features2} alt="features Images" className="h-full w-full object-cover object-center" />
              </figure>
            </RevealAnimation>
            <div className="absolute top-[55%] -start-[8.5%] z-20 flex flex-col items-center">
              <RevealAnimation delay={0.5}>
                <figure className="h-[74px] max-w-[320px] self-end overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures4}
                    alt="Sub features"
                    className="shadow-3 h-auto w-full object-cover object-center"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <figure className="my-3 h-[74px] max-w-[320px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures5}
                    alt="Sub features"
                    className="shadow-3 h-auto w-full object-cover object-center"
                  />
                </figure>
              </RevealAnimation>

              <RevealAnimation delay={0.7}>
                <figure className="relative z-40 max-h-[72px] max-w-[300px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures6}
                    alt="Sub features"
                    className="shadow-2 h-auto w-full object-cover object-center"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.8}>
                <figure className="z-30 -mt-[37px] max-h-[72px] max-w-[280px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures7}
                    alt="Sub features"
                    className="shadow-2 h-auto w-full object-cover object-center"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={0.9}>
                <figure className="z-20 -mt-[37px] max-h-[72px] max-w-[260px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures8}
                    alt="Sub features"
                    className="shadow-2 h-auto w-full object-cover object-center"
                  />
                </figure>
              </RevealAnimation>
              <RevealAnimation delay={1}>
                <figure className="-mt-[37px] max-h-[72px] max-w-[240px] overflow-hidden rounded-2xl">
                  <Image
                    src={subFeatures9}
                    alt="Sub features"
                    className="shadow-2 h-auto w-full object-cover object-center"
                  />
                </figure>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
