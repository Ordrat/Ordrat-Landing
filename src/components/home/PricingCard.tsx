'use client';

import { useLocale } from '@/context/LocaleContext';
import LinkButton from '@/components/ui/button/Button';
import { CheckIconV3 } from '@/icons';
import { cn } from '@/utils/cn';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  priceLabel?: string;
  popularLine?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  buttonText: string;
  buttonHref: string;
  highlight?: boolean;
  isYearly: boolean;
}

const PricingCard = ({
  title,
  description,
  features,
  priceLabel,
  popularLine,
  monthlyPrice,
  yearlyPrice,
  buttonText,
  buttonHref,
  highlight = false,
  isYearly,
}: PricingCardProps) => {
  const { t } = useLocale();
  const price = isYearly ? yearlyPrice : monthlyPrice;
  const pricePeriod = isYearly ? t('home.pricing.yearSuffix') : t('home.pricing.monthSuffix');

  return (
    <div
      className={cn(
        'flex h-[598px] flex-col gap-6 rounded-4xl bg-[var(--color-ordrat-red-main)] px-6 py-8 max-lg:w-full',
        highlight && 'p-1.5',
      )}>
      <div
        className={cn(
          'relative flex h-full flex-col gap-6 overflow-hidden text-white',
          highlight && 'rounded-[28px] bg-white p-6 text-secondary dark:bg-black dark:text-white',
        )}>
        <div className="mb-6">
          {popularLine && (
            <span className="bg-ordrat-red-main absolute top-4 right-4 z-10 inline-flex items-center justify-center rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.02em] text-white whitespace-nowrap capitalize shadow-sm">
              {popularLine}
            </span>
          )}
          <h3
            className={cn(
              'text-heading-5 mb-2 font-normal',
              highlight ? 'text-secondary' : 'text-white',
            )}>
            {title}
          </h3>
          <p
            className={cn(
              'mb-6 max-w-[270px]',
              highlight ? 'text-secondary/70' : 'text-white/80',
            )}>
            {description}
          </p>
          <ul className="relative list-none space-y-4">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2.5">
                <CheckIconV3 fill={highlight ? 'accent' : 'ordrat'} />
                <span
                  className={cn(
                    'text-tagline-2 font-normal',
                    highlight ? 'text-secondary' : 'text-white',
                  )}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={cn(
            'mt-auto border-t pt-6',
            highlight ? 'border-black' : 'border-white/40',
          )}>
          {priceLabel ? (
            <div className="mb-6">
              <h4
                className={cn(
                  'text-heading-4 font-normal',
                  highlight ? 'text-secondary' : 'text-white',
                )}>
                {priceLabel}
              </h4>
            </div>
          ) : (
            <>
              <div className={cn('mb-6', isYearly ? 'price-year' : 'price-month')}>
                <h4
                  className={cn(
                    'text-heading-4 font-normal',
                    highlight ? 'text-secondary' : 'text-white',
                  )}>
                  ${price}
                  <span className="text-tagline-2">{pricePeriod}</span>
                </h4>
              </div>
              <div className={cn('mb-6 hidden', isYearly ? 'price-month' : 'price-year')}>
                <h4 className="text-heading-4 font-normal">
                  ${isYearly ? monthlyPrice : yearlyPrice}
                  <span className="text-tagline-2">
                    {isYearly ? t('home.pricing.monthSuffix') : t('home.pricing.yearSuffix')}
                  </span>
                </h4>
              </div>
            </>
          )}
          <div className="flex w-full gap-3 max-sm:flex-col">
            <LinkButton
              href={buttonHref}
              className="w-full"
              btnClass={cn(
                'btn-md w-full',
                highlight
                  ? 'bg-[var(--color-ordrat-red-main)] text-white border-0 hover:bg-secondary btn-arrow-white'
                  : 'bg-secondary text-white border-0 hover:bg-white hover:text-[var(--color-ordrat-blue-main)] btn-arrow-white hover:btn-arrow-black',
              )}>
              {buttonText}
            </LinkButton>
            <LinkButton
              href="/pricing"
              className="w-full"
              btnClass={cn(
                'btn-md w-full',
                highlight
                  ? 'bg-white text-[var(--color-ordrat-red-main)] border border-[var(--color-ordrat-red-main)] hover:bg-[var(--color-ordrat-red-main)] hover:text-white hover:btn-arrow-white'
                  : 'bg-white text-secondary border border-secondary/25 hover:bg-secondary hover:text-white btn-arrow-black hover:btn-arrow-white',
              )}>
              {t('home.pricing.planComparison')}
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
