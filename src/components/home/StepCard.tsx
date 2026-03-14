import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';

export interface StepData {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  mainImage: StaticImageData;
  overlayImage?: StaticImageData;
  overlayImagePosition?: 'right' | 'center';
}

interface StepCardProps {
  step: StepData;
  cardRef?: (el: HTMLDivElement | null) => void;
}

const StepCard = ({ step, cardRef }: StepCardProps) => {
  return (
    <div
      ref={cardRef}
      id={step.id}
      className="step-card relative mx-auto w-[320px] shrink-0 overflow-hidden rounded-4xl border-2 border-ordrat-red-main bg-ordrat-red-main p-6 sm:w-87.5 md:h-119 md:w-100 xl:w-110.5"
      data-step={step.stepNumber}>
      <figure className="relative z-10 h-62.5 rounded-[20px] border border-ordrat-red-main bg-ordrat-red-light p-2 sm:h-70 md:h-75">
        <Image src={step.mainImage} alt={`step ${step.stepNumber}`} className="size-full object-cover" />

        {step.overlayImage && (
          <Image
            src={step.overlayImage}
            alt={`step ${step.stepNumber}`}
            className={cn(
              'absolute z-20 object-cover',
              step.overlayImagePosition === 'right' && 'top-25 -right-2.75 md:top-37.25',
              step.overlayImagePosition === 'center' && 'top-37.25 left-1/2 -translate-x-1/2',
            )}
          />
        )}
      </figure>

      {/* gradient color  */}
      <div
        className="pointer-events-none absolute bottom-33 left-1/2 z-30 hidden h-37.5 w-105 -translate-x-1/2 rotate-180 sm:bottom-31.5 sm:h-42.5 sm:w-130 md:bottom-13 md:block md:h-65.5 md:w-160.25 xl:bottom-5.5"
        style={{
          background:
            'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, var(--color-ordrat-red-main) 37.44%)',
        }}
      />

      {/* text  */}
      <div className="relative z-33 mt-6 space-y-3 md:mt-14 lg:mt-6">
        <h2 className="text-heading-5 lg:text-heading-4 font-normal text-white">{step.title}</h2>
        <p className="text-tagline-2 text-white">{step.description}</p>
      </div>
    </div>
  );
};

export default StepCard;
