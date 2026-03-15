'use client';

import { useLocale } from '@/context/LocaleContext';
import CTA from '../shared/cta/CTA';

const BlogCTA = () => {
  const { t } = useLocale();

  return (
    <CTA
      className="bg-white"
      badgeText={t('blog.cta.badge')}
      badgeClass="text-accent bg-ordrat-red-main"
      ctaHeading={t('blog.cta.heading')}
      spanText={t('blog.cta.headingAccent')}
      spanClass="text-ordrat-red-main"
      description={t('blog.cta.description')}
      ctaBtnText={t('blog.cta.button')}
      ctaBtnClass="bg-ordrat-red-main text-accent btn-arrow-white hover:bg-ordrat-red-main/90"
      checkIconBgClass="bg-ordrat-red-main"
      ctaCheckListData={[
        { id: '1', text: t('blog.cta.noCard') },
        { id: '2', text: t('blog.cta.freeTrial') },
      ]}
    />
  );
};

export default BlogCTA;
