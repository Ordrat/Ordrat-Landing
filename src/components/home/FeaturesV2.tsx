'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useLocale } from '@/context/LocaleContext';
import { cn } from '@/utils/cn';
import Branches from '@public/home/FeaturesV2-Mobile/Branches.webp';
import Dashboard from '@public/home/FeaturesV2-Mobile/dashboard.webp';
import Deal from '@public/home/FeaturesV2-Mobile/Deal.webp';
import Example from '@public/home/FeaturesV2-Mobile/Example.webp';
import OrderDetails from '@public/home/FeaturesV2-Mobile/order_details.webp';
import PickDelivery from '@public/home/FeaturesV2-Mobile/Pick-delivery.webp';
import { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import FeatureImgCard from './FeatureImgCard';

interface TeamItem {
  id: string;
  title: string;
  imageSrc: StaticImageData;
  className?: string;
}

const FeaturesV2 = () => {
  const { t, tList, isRTL } = useLocale();
  const itemTitles = tList('home.advantages.items');

  const teamItems: TeamItem[] = [
    {
      id: 'branches',
      title: itemTitles[0] ?? 'Branches',
      imageSrc: Branches,
      className: 'ml-6',
    },
    {
      id: 'dashboard',
      title: itemTitles[1] ?? 'Dashboard',
      imageSrc: Dashboard,
    },
    {
      id: 'delivery-management',
      title: itemTitles[2] ?? 'Delivery Management',
      imageSrc: Deal,
    },
    {
      id: 'share-profile',
      title: itemTitles[3] ?? 'Shop Profiles',
      imageSrc: Example,
    },
    {
      id: 'order-details',
      title: itemTitles[4] ?? 'Order Details',
      imageSrc: OrderDetails,
    },
    {
      id: 'delivery-picking',
      title: itemTitles[5] ?? 'Delivery Picking',
      imageSrc: PickDelivery,
    },
  ];

  return (
    <section
      className="space-y-[76px] overflow-hidden py-[80px] md:py-[120px] lg:py-[154px]"
      aria-labelledby="team-heading"
      itemScope
      itemType="https://schema.org/ItemList">
      <div className="main-container">
        {/* content  */}
        <div className={cn('space-y-3 text-center', isRTL ? 'lg:text-right' : 'lg:text-left')}>
          <RevealAnimation delay={0.1}>
            <h1 id="team-heading" className="mx-auto max-w-[500px] font-normal lg:mx-0" itemProp="name">
              {t('home.advantages.titlePrefix')} <span className="text-[#D63848] whitespace-nowrap">{t('home.advantages.titleAccent')} </span>
              {t('home.advantages.titleSuffix')}
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-tagline-1 mx-auto max-w-[538px] font-normal lg:mx-0" itemProp="description">
              {t('home.advantages.description')}
            </p>
          </RevealAnimation>
        </div>
      </div>

      {/* marquee  */}
      <RevealAnimation delay={0.3}>
        <div className="relative" aria-label="Voice styles for creators and teams">
          <Marquee autoFill speed={50} direction={isRTL ? 'right' : 'left'}>
            <div className="flex items-center justify-center gap-x-6">
              {teamItems.map((item) => (
                <FeatureImgCard key={item.id} {...item} />
              ))}
            </div>
          </Marquee>

          <div
            className="absolute top-0 left-0 z-10 h-[110%] w-[120px] rotate-180 md:w-[180px] lg:w-[300px] xl:w-[426px]"
            style={{ background: 'linear-gradient(270deg, #ffffff 16.67%, rgba(244, 239, 231, 0) 100%)' }}
          />

          <div
            className="absolute top-0 right-0 z-10 h-[110%] w-[120px] md:w-[180px] lg:w-[300px] xl:w-[426px]"
            style={{ background: 'linear-gradient(270deg, #ffffff 16.67%, rgba(244, 239, 231, 0) 100%)' }}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default FeaturesV2;
