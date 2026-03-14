'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useLocale } from '@/context/LocaleContext';
import LinkButton from '@/components/ui/button/Button';

const CTA = () => {
  const { t } = useLocale();

  return (
    <section
      className="py-[80px] md:py-[112px]"
      aria-labelledby="cta-heading"
      itemScope
      itemType="https://schema.org/WebPageElement">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span
              className="badge bg-secondary text-white uppercase"
              aria-label="Call to action section badge"
              itemProp="name">
              {t('home.cta.badge')}
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                {t('home.cta.titlePrefix')} <span className="text-[#D63848]">{t('home.cta.titleAccent')}</span> {t('home.cta.titleSuffix')}
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p itemProp="description">{t('home.cta.description')}</p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="/signup"
              btnClass="btn-xl-v2 bg-[var(--color-ordrat-red-main)] text-white border-0 hover:bg-secondary btn-arrow-white"
              aria-label="Book your free strategy call - Navigate to signup page">
              {t('home.cta.button')}
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
