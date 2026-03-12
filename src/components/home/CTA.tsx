'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const CTA = () => {
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
              className="badge bg-[var(--color-ordrat-blue-main)] text-white uppercase"
              aria-label="Call to action section badge"
              itemProp="name">
              CTA
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                Start creating <span className="text-[#D63848]">stunning voiceover</span> today
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p itemProp="description">Join thousands using NextSaaS to create lifelike voices—no mic, no hassle.</p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="/signup"
              btnClass="btn-xl-v2 bg-[var(--color-ordrat-red-main)] text-white border-0 hover:bg-[var(--color-ordrat-blue-main)] btn-arrow-white"
              aria-label="Book your free strategy call - Navigate to signup page">
              Book your free strategy call
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CTA;
