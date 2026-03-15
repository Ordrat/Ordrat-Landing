'use client';

import { useLocale } from '@/context/LocaleContext';
import CTA from '../shared/cta/CTA';

const PricingCTA = () => {
  const { t } = useLocale();

  return (
    <CTA
      className="bg-white"
      badgeText={t('pricingPage.cta.badge')}
      badgeClass="text-accent bg-ordrat-red-main"
      ctaHeading={t('pricingPage.cta.heading')}
      description={t('pricingPage.cta.description')}
      ctaBtnText={t('pricingPage.cta.button')}
      ctaBtnClass="bg-ordrat-red-main text-accent btn-arrow-white hover:bg-ordrat-red-main/90"
      checkIconBgClass="bg-ordrat-red-main"
      ctaCheckListData={[
        { id: '1', text: t('pricingPage.cta.noCard') },
        { id: '2', text: t('pricingPage.cta.freeTrial') },
      ]}
    />
  );
};

export default PricingCTA;
