import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import Image from 'next/image';

export interface VoiceStyleCard {
  imgLink: string;
  name: string;
  description: string;
}

interface VoiceStyleBadgeRows {
  row0: VoiceStyleCard[];
  row1: VoiceStyleCard[];
  row2: VoiceStyleCard[];
  row3: VoiceStyleCard[];
  row4: VoiceStyleCard[];
};

const voiceStyleBadges: VoiceStyleBadgeRows = {
  row0: [
    { imgLink: '/home/store-types/home.webp', name: 'Home & Decor', description: 'Home Furniture' },
    { imgLink: '/home/store-types/book.webp', name: 'Leo', description: 'Smooth & clear' },
  ],
  row1: [
    { imgLink: '/home/store-types/clothes.webp', name: 'Ava', description: 'Soft & natural' },
    { imgLink: '/home/store-types/coffe.webp', name: 'Liam', description: 'Bold & energetic' },
    { imgLink: '/home/store-types/food.webp', name: 'Maya', description: 'Warm & calm' },
  ],
  row2: [
    { imgLink: '/home/store-types/boy.webp', name: 'Ethan', description: 'Clear' },
    { imgLink: '/home/store-types/doc.webp', name: 'Zoe', description: 'Bright & Light' },
    { imgLink: '/home/store-types/foodshop.webp', name: 'Daniel', description: 'Confident & Crispy' },
    { imgLink: '/home/store-types/gift.webp', name: 'Noah', description: 'Warm' },
  ],
  row3: [
    { imgLink: '/home/store-types/service.webp', name: 'Chloe', description: 'Cool & friendly' },
    { imgLink: '/home/store-types/sport.webp', name: 'Luna', description: 'Gentle & dreamy' },
    { imgLink: '/home/store-types/mother.webp', name: 'Oliver', description: 'Clear & dynamic' },
  ],
  row4: [
    { imgLink: '/home/store-types/shop2.webp', name: 'Nora', description: 'Friendly & upbeat' },
    { imgLink: '/home/store-types/tv.webp', name: 'Owen', description: 'Deep & polished' },
  ],
};

const VoiceStyleBadges = () => {
  const renderBadgeRow = (badges: VoiceStyleCard[], hiddenIndex?: number) => (
    <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
      {badges.map((style, index) => (
        <div
          key={`${style.name}-${index}`}
          className={cn(
            'shadow-14 flex min-w-40 items-center justify-start gap-x-3 rounded-full border border-[#DFD1C5] bg-white py-1 pr-4 pl-1 lg:min-w-48',
            hiddenIndex === index && 'max-[376px]:hidden',
          )}>
          <figure className="relative z-10 size-11 overflow-hidden rounded-full sm:size-14">
            <Image
              src={style.imgLink}
              alt={`${style.name} voice style avatar`}
              width={56}
              height={56}
              className="size-full object-cover"
            />
          </figure>
          <div>
            <p className="text-tagline-1 text-secondary font-normal">{style.name}</p>
            <p className="text-tagline-2 font-normal text-nowrap">{style.description}</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex w-full max-w-202.75 flex-col gap-y-3 overflow-hidden">
      {/* row zero  */}
      <RevealAnimation delay={0.2} direction="right" offset={80}>
        {renderBadgeRow(voiceStyleBadges.row0)}
      </RevealAnimation>

      {/* row one  */}
      <RevealAnimation delay={0.3} direction="left" offset={80}>
        {renderBadgeRow(voiceStyleBadges.row1)}
      </RevealAnimation>

      {/* row two  */}
      <RevealAnimation delay={0.4} direction="right" offset={80}>
        {renderBadgeRow(voiceStyleBadges.row2, 1)}
      </RevealAnimation>

      {/* row three  */}
      <RevealAnimation delay={0.5} direction="left" offset={80}>
        {renderBadgeRow(voiceStyleBadges.row3, 0)}
      </RevealAnimation>

      {/* row four  */}
      <RevealAnimation delay={0.6} direction="right" offset={80}>
        {renderBadgeRow(voiceStyleBadges.row4)}
      </RevealAnimation>
    </div>
  );
};

export default VoiceStyleBadges;
