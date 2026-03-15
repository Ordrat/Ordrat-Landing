'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useLocale } from '@/context/LocaleContext';
import { useState } from 'react';
import PricingCard from './PricingCard';

interface PricingPlan {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceLabel: string;
  popularLine?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonHref: string;
  highlight: boolean;
}

const Pricing = () => {
  const { t, tList } = useLocale();
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans: PricingPlan[] = [
    {
      id: 'free-plan',
      title: t('home.pricing.plans.free.title'),
      description: t('home.pricing.plans.free.description'),
      features: tList('home.pricing.plans.free.features'),
      priceLabel: t('home.pricing.plans.free.priceLabel'),
      monthlyPrice: 0,
      yearlyPrice: 0,
      buttonText: t('home.pricing.startForFree'),
      buttonHref: '/contact',
      highlight: false,
    },
    {
      id: 'pro-plan',
      title: t('home.pricing.plans.pro.title'),
      description: t('home.pricing.plans.pro.description'),
      features: tList('home.pricing.plans.pro.features'),
      priceLabel: t('home.pricing.plans.pro.priceLabel'),
      popularLine: t('home.pricing.plans.pro.popularLine'),
      monthlyPrice: 50,
      yearlyPrice: 50,
      buttonText: t('home.pricing.subscribeNow'),
      buttonHref: '/contact',
      highlight: true,
    },
    {
      id: 'team-plan',
      title: t('home.pricing.plans.team.title'),
      description: t('home.pricing.plans.team.description'),
      features: tList('home.pricing.plans.team.features'),
      priceLabel: t('home.pricing.plans.team.priceLabel'),
      monthlyPrice: 1000,
      yearlyPrice: 1000,
      buttonText: t('home.pricing.subscribeNow'),
      buttonHref: '/contact',
      highlight: false,
    },
  ];

  return (
    <section className="py-[80px] md:py-[150px]">
      <div className="main-container">
        <div className="space-y-[70px]">
          <div className="space-y-7">
            {/* heading  */}
            <div className="space-y-5 text-center">
              <RevealAnimation delay={0.1}>
                <span className="badge bg-background-9 text-white font-medium">{t('home.pricing.badge')}</span>
              </RevealAnimation>
              <div className="space-y-3 text-center">
                <RevealAnimation delay={0.2}>
                  <h2 className="font-normal">
                    {t('home.pricing.titlePrefix')} <span className="text-[#D63848]">{t('home.pricing.titleAccent')}</span> {t('home.pricing.titleSuffix')}
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-tagline-1 text-secondary font-normal">
                    {t('home.pricing.description')}
                  </p>
                </RevealAnimation>
              </div>
            </div>

            {/* pricing-toggle  */}
            <RevealAnimation delay={0.4}>
              <div className="relative z-0 mx-auto w-full max-w-[293px]">
                <RevealAnimation delay={1} duration={1} direction="up" offset={200}>
                  <span className="bg-[var(--color-ordrat-red-main)] text-tagline-2 absolute -top-2.5 -right-6 z-11 inline-block w-[90px] rotate-20 rounded-[36px] px-3.5 py-1.5 font-medium text-white capitalize shadow-xs">
                    {t('home.pricing.save')}
                  </span>
                </RevealAnimation>
                <label className="shadow-1 relative z-10 inline-flex cursor-pointer items-center rounded-full bg-background-9 px-10 py-4">
                  <span className="mr-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-normal text-white">
                    {t('home.pricing.monthly')}
                  </span>
                  <input
                    type="checkbox"
                    id="priceCheck"
                    className="peer sr-only"
                    aria-label="Toggle between monthly and yearly pricing"
                    checked={isYearly}
                    onChange={(e) => setIsYearly(e.target.checked)}
                  />
                  <span className="border-stroke-1/30 after:bg-white before:bg-secondary relative h-[28px] w-13 rounded-[34px] border bg-transparent before:absolute before:-top-[5px] before:-left-[6px] before:-z-10 before:h-[36px] before:w-[62px] before:rounded-[34px] before:p-[5px] before:transition-all before:content-[''] after:absolute after:start-[2px] after:top-1/2 after:size-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-[94%]"></span>
                  <span className="ml-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-normal text-white">
                    {t('home.pricing.yearly')}
                  </span>
                </label>
              </div>
            </RevealAnimation>
          </div>

          {/* plans  */}
          <div className="relative">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <RevealAnimation key={plan.id} delay={0.4 + index * 0.1}>
                  <PricingCard
                    title={plan.title}
                    description={plan.description}
                    features={plan.features}
                    priceLabel={plan.priceLabel}
                    popularLine={plan.popularLine}
                    monthlyPrice={plan.monthlyPrice}
                    yearlyPrice={plan.yearlyPrice}
                    buttonText={plan.buttonText}
                    buttonHref={plan.buttonHref}
                    highlight={plan.highlight}
                    isYearly={isYearly}
                  />
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
