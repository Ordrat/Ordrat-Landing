import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';

interface FeatureImgCardProps {
  title: string;
  imageSrc: string | StaticImageData;
  className?: string;
}

const FeatureImgCard = ({ title, imageSrc, className }: FeatureImgCardProps) => {
  return (
    <div
      className={cn('w-85.75 shrink-0 space-y-6', className)}
      role="listitem"
      itemScope
      itemType="https://schema.org/ImageObject"
      aria-label={`${title} use case`}>
      <h3 className="text-heading-5 text-center font-normal" itemProp="name">
        {title}
      </h3>
      <figure className="max-w-85.75 overflow-hidden rounded-4xl max-sm:h-75">
        <Image
          src={imageSrc}
          alt={`Visual representation of ${title} use case for AI voice generator`}
          className="size-full object-cover"
          itemProp="contentUrl"
          title={`${title} use case image`}
          width={343}
          height={300}
        />
      </figure>
    </div>
  );
};

export default FeatureImgCard;
