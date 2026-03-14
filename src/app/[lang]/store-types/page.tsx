import { defaultMetadata } from '@/utils/generateMetaData';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Store Types - Ordrat',
};

const labels = {
  en: {
    headingStart: 'Ordrat',
    headingAccent: 'Business',
    headingEnd: 'Types',
    description:
      'Boost your online sales with modern tools: digital QR menus, reservation and delivery systems through our platform, and much more!',
  },
  ar: {
    headingStart: 'أودرات',
    headingAccent: 'أنواع',
    headingEnd: 'المتاجر',
    description:
      'عزّز مبيعاتك أونلاين بأدوات حديثة مثل قوائم QR الرقمية ونظام الحجوزات والتوصيل عبر منصتنا، وأكثر بكثير.',
  },
} as const;

const typeItems = {
  en: [
    { title: 'Home & Decor', icon: '/home/store-types/home.webp' },
    { title: 'Additional Specialty', icon: '/home/store-types/star.webp' },
    { title: 'Fashion & Accessories', icon: '/home/store-types/clothes.webp' },
    { title: 'Restaurants & Cafes', icon: '/home/store-types/coffe.webp' },
    { title: 'Food stores', icon: '/home/store-types/foodshop.webp' },
    { title: 'Cultural Store', icon: '/home/store-types/book.webp' },
    { title: 'Children Toys', icon: '/home/store-types/boy.webp' },
    { title: 'Medical Stores', icon: '/home/store-types/doc.webp' },
    { title: 'Gifts & Events', icon: '/home/store-types/gift.webp' },
    { title: 'Service Stores', icon: '/home/store-types/service.webp' },
    { title: 'Sports Stores', icon: '/home/store-types/sport.webp' },
    { title: 'Homemade Food', icon: '/home/store-types/mother.webp' },
    { title: 'Handicraft Store', icon: '/home/store-types/mu.webp' },
    { title: 'Electronics Stores', icon: '/home/store-types/tv.webp' },
  ],
  ar: [
    { title: 'المنزل والديكور', icon: '/home/store-types/home.webp' },
    { title: 'متاجر متخصصة', icon: '/home/store-types/star.webp' },
    { title: 'الأزياء والإكسسوارات', icon: '/home/store-types/clothes.webp' },
    { title: 'المطاعم والمقاهي', icon: '/home/store-types/coffe.webp' },
    { title: 'متاجر الأغذية', icon: '/home/store-types/foodshop.webp' },
    { title: 'المتاجر الثقافية', icon: '/home/store-types/book.webp' },
    { title: 'ألعاب الأطفال', icon: '/home/store-types/boy.webp' },
    { title: 'المتاجر الطبية', icon: '/home/store-types/doc.webp' },
    { title: 'الهدايا والمناسبات', icon: '/home/store-types/gift.webp' },
    { title: 'متاجر الخدمات', icon: '/home/store-types/service.webp' },
    { title: 'المتاجر الرياضية', icon: '/home/store-types/sport.webp' },
    { title: 'الأكل المنزلي', icon: '/home/store-types/mother.webp' },
    { title: 'المتاجر اليدوية', icon: '/home/store-types/mu.webp' },
    { title: 'متاجر الإلكترونيات', icon: '/home/store-types/tv.webp' },
  ],
} as const;

export default async function StoreTypesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale = lang === 'ar' ? 'ar' : 'en';

  return (
    <main className="bg-white pt-38 pb-20 md:pt-44 lg:pt-48">
      <section className="main-container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h1 className="text-secondary text-heading-2 leading-tight">
              {labels[locale].headingStart} <span className="text-ordrat-red-main">{labels[locale].headingAccent}</span>{' '}
              {labels[locale].headingEnd}
            </h1>
            <p className="text-secondary/70 text-tagline-1 mt-5 max-w-110">{labels[locale].description}</p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {typeItems[locale].map((item) => (
                <article
                  key={item.title}
                  className="border-stroke-10 flex items-center gap-4 rounded-full border bg-white px-3 py-2.5 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
                  <div className="relative size-12 shrink-0 overflow-hidden rounded-full bg-[#F7F7F7]">
                    <Image src={item.icon} alt={item.title} fill sizes="48px" className="object-contain p-1" />
                  </div>
                  <h2 className="text-secondary text-tagline-1 font-medium">{item.title}</h2>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
