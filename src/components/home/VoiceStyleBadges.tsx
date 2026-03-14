import RevealAnimation from '@/components/animation/RevealAnimation';
import Image from 'next/image';

export interface VoiceStyleCard {
  imgLink: string;
  name: string;
}

const voiceStyleBadges: VoiceStyleCard[] = [
  { imgLink: '/home/store-types/home.webp', name: 'Home & Decor' },
  { imgLink: '/home/store-types/foodshop.webp', name: 'Additional Specialty' },
  { imgLink: '/home/store-types/clothes.webp', name: 'Fashion & Accessories' },
  { imgLink: '/home/store-types/coffe.webp', name: 'Restaurants & Cafés' },
  { imgLink: '/home/store-types/food.webp', name: 'Food stores' },
  { imgLink: '/home/store-types/book.webp', name: 'Cultural Store' },
  { imgLink: '/home/store-types/boy.webp', name: 'Children Toys' },
  { imgLink: '/home/store-types/doc.webp', name: 'Medical Stores' },
  { imgLink: '/home/store-types/gift.webp', name: 'Gifts & Events' },
  { imgLink: '/home/store-types/service.webp', name: 'Service Stores' },
  { imgLink: '/home/store-types/sport.webp', name: 'Sports Stores' },
  { imgLink: '/home/store-types/mother.webp', name: 'Homemade Food' },
  { imgLink: '/home/store-types/shop2.webp', name: 'Handicraft Store' },
  { imgLink: '/home/store-types/tv.webp', name: 'Electronics Stores' },
];

const rowSize = 2;

const buildBadgeRows = (items: VoiceStyleCard[]) => {
  const rows: VoiceStyleCard[][] = [];
  for (let i = 0; i < items.length; i += rowSize) {
    rows.push(items.slice(i, i + rowSize));
  }

  return rows;
};

const VoiceStyleBadges = () => {
  const badgeRows = buildBadgeRows(voiceStyleBadges);

  const renderBadgeRow = (badges: VoiceStyleCard[]) => (
    <div className="grid grid-cols-2 gap-3">
      {badges.map((style, index) => (
        <div
          key={`${style.name}-${index}`}
          className="shadow-14 flex min-w-0 items-center justify-start gap-x-2 rounded-full border border-[#DFD1C5] bg-white py-1 pr-2 pl-1 sm:gap-x-3 sm:pr-4">
          <figure className="relative z-10 size-9 overflow-hidden rounded-full sm:size-11 lg:size-14">
            <Image
              src={style.imgLink}
              alt={`${style.name} voice style avatar`}
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </figure>
          <div className="min-w-0">
            <p className="text-secondary text-[12px] leading-tight font-normal sm:text-tagline-1">
              {style.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex w-full max-w-202.75 flex-col gap-y-3 overflow-hidden">
      {badgeRows.map((row, rowIndex) => (
        <RevealAnimation
          key={`business-types-row-${rowIndex}`}
          delay={0.2 + rowIndex * 0.1}
          direction={rowIndex % 2 === 0 ? 'right' : 'left'}
          offset={80}>
          {renderBadgeRow(row)}
        </RevealAnimation>
      ))}
    </div>
  );
};

export default VoiceStyleBadges;
