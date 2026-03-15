'use client';

import { useState } from 'react';
import gradient4 from '@public/images/ns-img-496.png';
import { useLocale } from '@/context/LocaleContext';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

type CellValue = '__CHECK__' | '__CROSS__' | string;
type PlanKey = 'trial' | 'saving' | 'vip';

const CheckIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto shrink-0">
    <rect width={20} height={20} rx={10} className="fill-[#22C55E]" />
    <path
      d="M9.24 14.173L15.29 8.246C15.662 7.884 15.662 7.3 15.29 6.938C14.917 6.575 14.315 6.575 13.943 6.938L8.57 12.211L6.066 9.762C5.693 9.4 5.092 9.4 4.719 9.762C4.346 10.125 4.346 10.711 4.719 11.073L7.9 14.173C8.085 14.354 8.329 14.444 8.57 14.444C8.814 14.444 9.055 14.354 9.24 14.173Z"
      className="fill-white"
    />
  </svg>
);

const CrossIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto shrink-0">
    <rect width={20} height={20} rx={10} className="fill-secondary/10 dark:fill-accent/10" />
    <path
      d="M12.828 7.172C13.088 7.432 13.088 7.853 12.828 8.112L11.06 9.88L12.828 11.648C13.088 11.908 13.088 12.328 12.828 12.588C12.568 12.848 12.148 12.848 11.888 12.588L10.12 10.82L8.352 12.588C8.092 12.848 7.672 12.848 7.412 12.588C7.152 12.328 7.152 11.908 7.412 11.648L9.18 9.88L7.412 8.112C7.152 7.853 7.152 7.432 7.412 7.172C7.672 6.913 8.092 6.913 8.352 7.172L10.12 8.94L11.888 7.172C12.148 6.913 12.568 6.913 12.828 7.172Z"
      className="fill-secondary/30 dark:fill-accent/30"
    />
  </svg>
);

const renderCellValue = (value: CellValue, isVip = false) => {
  if (value === '__CHECK__') {
    return <CheckIcon />;
  }
  if (value === '__CROSS__') {
    return <CrossIcon />;
  }
  return (
    <span
      className={cn(
        'text-tagline-3 font-medium',
        isVip ? 'text-white/80' : 'text-secondary/70 dark:text-accent/70',
      )}>
      {value}
    </span>
  );
};

const Pricing = () => {
  const { t } = useLocale();
  const [isYearly, setIsYearly] = useState(false);

  const comparisonSections = [
    {
      sectionKey: 'basicFeatures',
      rows: [
        'orderCount',
        'productCount',
        'cloudPosSystem',
        'visits',
        'branchAddition',
        'otpOrderVerification',
        'productMobileApp',
      ],
    },
    {
      sectionKey: 'marketing',
      rows: [
        'whatsappMarketingTools',
        'affiliateMarketingSystem',
        'promotionalOffersDiscountCoupons',
        'promotionalDiscountReports',
      ],
    },
    {
      sectionKey: 'designCustomization',
      rows: [
        'hideAdvertisements',
        'multiLanguageMultiCurrencySupport',
        'fastUserFriendlyDesign',
        'designCustomizationCapability',
        'defaultOrdratDomain',
        'customDomainConnection',
      ],
    },
    {
      sectionKey: 'ecommerceGeneralFeatures',
      rows: [
        'completeOnlineStore',
        'searchEngineOptimization',
        'qrCodeGeneration',
        'displayFakeSalesViews',
        'technicalSupportEmailChat',
        'googleSheetsMetaIntegration',
        'wishlistManagement',
        'geographicPerformanceMonitoring',
        'abandonedCartLogs',
        'restaurantTableManagementSystem',
        'storeManagementServices',
      ],
    },
    {
      sectionKey: 'analyticsReports',
      rows: [
        'storeVisitAnalytics',
        'detailedSalesCustomerStatistics',
        'shippingDeliveryPerformanceAnalysis',
        'timeTrendAnalysis',
        'abandonedCartAnalysis',
        'conversionRateAnalysis',
        'returnsRefundAnalysis',
      ],
    },
    {
      sectionKey: 'shippingPayment',
      rows: ['customDeliveryServiceAssignment', 'ordratPlatformShipping', 'cashOnDelivery'],
    },
    {
      sectionKey: 'supportManagement',
      rows: ['addAssistantsSpecificPermissions', 'vipSupportDedicatedAccountManager'],
    },
    {
      sectionKey: 'mobileApplications',
      rows: ['merchantMobileApplication'],
    },
  ] as const;

  const plans: { key: PlanKey; bg: string; textColor: string; isVip: boolean }[] = [
    { key: 'trial', bg: 'bg-background-1 dark:bg-background-6', textColor: 'text-secondary dark:text-accent', isVip: false },
    { key: 'saving', bg: 'bg-background-1 dark:bg-background-6', textColor: 'text-secondary dark:text-accent', isVip: false },
    { key: 'vip', bg: 'bg-ordrat-red-main', textColor: 'text-white', isVip: true },
  ];

  const vipPriceLabel = isYearly
    ? t('home.pricing.plans.team.yearlyPriceLabel')
    : t('home.pricing.plans.team.priceLabel');

  return (
    <section className="pt-[120px] pb-16 md:pt-[160px] md:pb-20 lg:pb-[95px] xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="mx-auto w-full max-w-[1440px] px-5 md:px-6 lg:px-10 xl:px-16">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-2xl space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <span className="badge bg-ordrat-red-main text-white">{t('home.pricing.badge')}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <h2>{t('home.pricing.comparison.title')}</h2>
            </RevealAnimation>
          </div>

          {/* Monthly/Yearly Toggle */}
          <RevealAnimation delay={0.35}>
            <div className="relative z-0 mx-auto mb-14 w-full max-w-[293px]">
              <RevealAnimation delay={1} duration={1} direction="up" offset={200}>
                <span style={{ right: '-1.5rem', insetInlineEnd: 'unset' }} className="bg-[var(--color-ordrat-red-main)] text-tagline-2 absolute -top-2.5 z-11 inline-block w-[90px] rotate-20 rounded-[36px] px-3.5 py-1.5 font-medium text-white capitalize shadow-xs">
                  {t('home.pricing.save')}
                </span>
              </RevealAnimation>
              <label className="shadow-1 relative z-10 inline-flex cursor-pointer items-center rounded-full bg-background-9 px-10 py-4">
                <span className="me-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-normal text-white">
                  {t('home.pricing.monthly')}
                </span>
                <input
                  type="checkbox"
                  id="comparisonPriceCheck"
                  className="peer sr-only"
                  aria-label="Toggle between monthly and yearly pricing"
                  checked={isYearly}
                  onChange={(e) => setIsYearly(e.target.checked)}
                />
                <span className="border-stroke-1/30 after:bg-white before:bg-secondary relative h-[28px] w-13 rounded-[34px] border bg-transparent before:absolute before:-top-[5px] before:-left-[6px] before:-z-10 before:h-[36px] before:w-[62px] before:rounded-[34px] before:p-[5px] before:transition-all before:content-[''] after:absolute after:start-[2px] after:top-1/2 after:size-6 after:-translate-y-1/2 after:rounded-full after:transition-all after:content-[''] peer-checked:after:start-[2px] peer-checked:after:translate-x-[94%]" />
                <span className="ms-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-normal text-white">
                  {t('home.pricing.yearly')}
                </span>
              </label>
            </div>
          </RevealAnimation>

          {/* ============================================
              DESKTOP TABLE — hidden below xl
              ============================================ */}
          <RevealAnimation delay={0.4}>
            <div className="hidden xl:block">
              <div className="overflow-hidden rounded-2xl border border-stroke-1 dark:border-stroke-5">
                {/* Sticky Plan Headers */}
                <div className="sticky top-0 z-20 grid grid-cols-[minmax(280px,2fr)_repeat(3,minmax(180px,1fr))] border-b border-stroke-1 dark:border-stroke-5">
                  {/* Features column header */}
                  <div className="bg-background-2 dark:bg-background-6 flex items-end border-e border-stroke-1 px-8 py-6 dark:border-stroke-5">
                    <h3 className="text-heading-6 text-secondary dark:text-accent">
                      {t('home.pricing.comparison.headers.features')}
                    </h3>
                  </div>

                  {/* Trial header */}
                  <div className="bg-background-2 dark:bg-background-6 flex flex-col justify-between border-e border-stroke-1 px-6 py-6 dark:border-stroke-5">
                    <div className="space-y-2">
                      <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 font-medium uppercase tracking-wider">
                        {t('home.pricing.plans.free.title')}
                      </p>
                      <h4 className="text-heading-5 text-secondary dark:text-accent font-normal">
                        {t('home.pricing.plans.free.priceLabel')}
                      </h4>
                      <p className="text-tagline-3 text-secondary/50 dark:text-accent/50 line-clamp-2">
                        {t('home.pricing.plans.free.description')}
                      </p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-secondary hover:btn-ordrat-red-main btn-md mt-5 w-full text-center first-letter:uppercase before:content-none">
                      {t('home.pricing.startForFree')}
                    </Link>
                  </div>

                  {/* Saving header */}
                  <div className="bg-secondary relative flex flex-col justify-between overflow-hidden border-e border-stroke-5 px-6 py-6">
                    <div className="absolute -top-28 -end-20 z-0 h-full w-full">
                      <Image src={gradient4} alt="" priority aria-hidden="true" />
                    </div>
                    <div className="relative z-10 space-y-2">
                      <p className="text-tagline-2 font-medium uppercase tracking-wider text-white/60">
                        {t('home.pricing.plans.pro.title')}
                      </p>
                      <h4 className="text-heading-5 font-normal text-white">
                        {t('home.pricing.plans.pro.priceLabel')}
                      </h4>
                      <p className="text-tagline-3 line-clamp-2 text-white/50">
                        {t('home.pricing.plans.pro.description')}
                      </p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-white hover:btn-ordrat-red-main btn-md relative z-10 mt-5 w-full text-center first-letter:uppercase before:content-none">
                      {t('home.pricing.subscribeNow')}
                    </Link>
                  </div>

                  {/* VIP header — premium treatment */}
                  <div className="bg-ordrat-red-main flex flex-col justify-between px-6 py-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="text-tagline-2 font-medium uppercase tracking-wider text-white/80">
                          {t('home.pricing.plans.team.title')}
                        </p>
                        <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
                          {t('home.pricing.plans.team.proBadge')}
                        </span>
                      </div>
                      <h4 className="text-heading-5 font-normal text-white transition-all duration-300">
                        {vipPriceLabel}
                      </h4>
                      <p className="text-tagline-3 line-clamp-2 text-white/70">
                        {t('home.pricing.plans.team.description')}
                      </p>
                    </div>
                    <Link
                      href="/contact-us"
                      className="btn btn-white hover:btn-secondary btn-md mt-5 w-full text-center first-letter:uppercase before:content-none">
                      {t('home.pricing.subscribeNow')}
                    </Link>
                  </div>
                </div>

                {/* Table Body */}
                {comparisonSections.map((section) => (
                  <div key={section.sectionKey}>
                    {/* Section header row */}
                    <div className="grid grid-cols-[minmax(280px,2fr)_repeat(3,minmax(180px,1fr))] border-b border-stroke-1 dark:border-stroke-5">
                      <div className="bg-ordrat-red-main col-span-4 px-8 py-3.5">
                        <p className="text-tagline-2 text-accent font-semibold uppercase tracking-wide">
                          {t(`home.pricing.comparison.sections.${section.sectionKey}`)}
                        </p>
                      </div>
                    </div>

                    {/* Feature rows */}
                    {section.rows.map((rowKey, rowIndex) => (
                      <div
                        key={rowKey}
                        className={cn(
                          'grid grid-cols-[minmax(280px,2fr)_repeat(3,minmax(180px,1fr))] transition-colors duration-150 hover:bg-background-2/60 dark:hover:bg-background-7/40',
                          rowIndex < section.rows.length - 1 && 'border-b border-stroke-1/60 dark:border-stroke-5/60',
                          rowIndex === section.rows.length - 1 && 'border-b border-stroke-1 dark:border-stroke-5',
                        )}>
                        {/* Feature label */}
                        <div className="flex items-center border-e border-stroke-1/60 px-8 py-4 dark:border-stroke-5/60">
                          <span className="text-tagline-2 text-secondary/70 dark:text-accent/70 font-normal">
                            {t(`home.pricing.comparison.rows.${rowKey}.label`)}
                          </span>
                        </div>

                        {/* Plan values */}
                        {plans.map((plan, planIndex) => (
                          <div
                            key={plan.key}
                            className={cn(
                              'flex items-center justify-center px-4 py-4 text-center',
                              planIndex < plans.length - 1 && 'border-e border-stroke-1/60 dark:border-stroke-5/60',
                              plan.isVip && 'bg-ordrat-red-main/[0.04] dark:bg-ordrat-red-main/10',
                            )}>
                            {renderCellValue(
                              t(`home.pricing.comparison.rows.${rowKey}.${plan.key}`) as CellValue,
                              false,
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </RevealAnimation>

          {/* ============================================
              MOBILE / TABLET CARDS — visible below xl
              ============================================ */}
          <div className="space-y-8 xl:hidden">
            {/* Trial Plan Card */}
            <RevealAnimation delay={0.4}>
              <div className="overflow-hidden rounded-2xl border border-stroke-1 dark:border-stroke-5">
                <div className="bg-ordrat-red-main space-y-5 px-6 py-7">
                  <div>
                    <p className="text-tagline-1 mb-2 font-medium text-white/80">
                      {t('home.pricing.plans.free.title')}
                    </p>
                    <h3 className="text-heading-5 font-normal text-white">
                      {t('home.pricing.plans.free.priceLabel')}
                    </h3>
                    <p className="text-tagline-3 mt-1 text-white/70">
                      {t('home.pricing.plans.free.description')}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="btn btn-white hover:btn-secondary btn-md w-full text-center first-letter:uppercase before:content-none">
                    {t('home.pricing.startForFree')}
                  </Link>
                </div>
                <div className="bg-background-1 dark:bg-background-6">
                  {comparisonSections.map((section) => (
                    <div key={`trial-${section.sectionKey}`}>
                      <div className="bg-ordrat-red-main px-6 py-3">
                        <p className="text-tagline-3 text-accent font-semibold uppercase tracking-wide">
                          {t(`home.pricing.comparison.sections.${section.sectionKey}`)}
                        </p>
                      </div>
                      {section.rows.map((rowKey) => (
                        <div
                          key={`trial-${rowKey}`}
                          className="flex items-center justify-between border-b border-stroke-1/50 px-6 py-3.5 dark:border-stroke-5/50">
                          <span className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                            {t(`home.pricing.comparison.rows.${rowKey}.label`)}
                          </span>
                          <div className="shrink-0 ps-4">
                            {renderCellValue(
                              t(`home.pricing.comparison.rows.${rowKey}.trial`) as CellValue,
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>

            {/* Saving Plan Card */}
            <RevealAnimation delay={0.5}>
              <div className="overflow-hidden rounded-2xl border border-stroke-1 dark:border-stroke-5">
                <div className="bg-secondary relative space-y-5 overflow-hidden px-6 py-7">
                  <div className="absolute -top-28 -end-20 z-0 h-full w-full">
                    <Image src={gradient4} alt="" priority aria-hidden="true" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-tagline-1 mb-2 font-medium text-white/70">
                      {t('home.pricing.plans.pro.title')}
                    </p>
                    <h3 className="text-heading-5 font-normal text-white">
                      {t('home.pricing.plans.pro.priceLabel')}
                    </h3>
                    <p className="text-tagline-3 mt-1 text-white/60">
                      {t('home.pricing.plans.pro.description')}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="btn btn-white hover:btn-ordrat-red-main btn-md relative z-10 w-full text-center first-letter:uppercase before:content-none">
                    {t('home.pricing.subscribeNow')}
                  </Link>
                </div>
                <div className="bg-background-1 dark:bg-background-6">
                  {comparisonSections.map((section) => (
                    <div key={`saving-${section.sectionKey}`}>
                      <div className="bg-ordrat-red-main px-6 py-3">
                        <p className="text-tagline-3 text-accent font-semibold uppercase tracking-wide">
                          {t(`home.pricing.comparison.sections.${section.sectionKey}`)}
                        </p>
                      </div>
                      {section.rows.map((rowKey) => (
                        <div
                          key={`saving-${rowKey}`}
                          className="flex items-center justify-between border-b border-stroke-1/50 px-6 py-3.5 dark:border-stroke-5/50">
                          <span className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                            {t(`home.pricing.comparison.rows.${rowKey}.label`)}
                          </span>
                          <div className="shrink-0 ps-4">
                            {renderCellValue(
                              t(`home.pricing.comparison.rows.${rowKey}.saving`) as CellValue,
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>

            {/* VIP Plan Card — premium */}
            <RevealAnimation delay={0.6}>
              <div className="overflow-hidden rounded-2xl border-2 border-ordrat-red-main shadow-lg">
                <div className="bg-ordrat-red-main space-y-5 px-6 py-7">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <p className="text-tagline-1 font-medium text-white/90">
                        {t('home.pricing.plans.team.title')}
                      </p>
                      <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-semibold tracking-wide text-white uppercase">
                        PRO
                      </span>
                    </div>
                    <h3 className="text-heading-5 font-normal text-white transition-all duration-300">
                      {vipPriceLabel}
                    </h3>
                    <p className="text-tagline-3 mt-1 text-white/80">
                      {t('home.pricing.plans.team.description')}
                    </p>
                  </div>
                  <Link
                    href="/contact-us"
                    className="btn btn-white hover:btn-secondary btn-md w-full text-center first-letter:uppercase before:content-none">
                    {t('home.pricing.subscribeNow')}
                  </Link>
                </div>
                <div className="bg-background-1 dark:bg-background-6">
                  {comparisonSections.map((section) => (
                    <div key={`vip-${section.sectionKey}`}>
                      <div className="bg-ordrat-red-main px-6 py-3">
                        <p className="text-tagline-3 text-accent font-semibold uppercase tracking-wide">
                          {t(`home.pricing.comparison.sections.${section.sectionKey}`)}
                        </p>
                      </div>
                      {section.rows.map((rowKey) => (
                        <div
                          key={`vip-${rowKey}`}
                          className="flex items-center justify-between border-b border-stroke-1/50 px-6 py-3.5 dark:border-stroke-5/50">
                          <span className="text-tagline-3 text-secondary/60 dark:text-accent/60 font-normal">
                            {t(`home.pricing.comparison.rows.${rowKey}.label`)}
                          </span>
                          <div className="shrink-0 ps-4">
                            {renderCellValue(
                              t(`home.pricing.comparison.rows.${rowKey}.vip`) as CellValue,
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Pricing;
