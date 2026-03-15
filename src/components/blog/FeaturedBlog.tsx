'use client';

import { useLocale } from '@/context/LocaleContext';
import { IBlogPost } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';
import FeaturedBlogSwiper from './FeaturedBlogSwiper';

interface FeaturedBlogProps {
  featuredBlogs: IBlogPost[];
}

const FeaturedBlog = ({ featuredBlogs }: FeaturedBlogProps) => {
  const { t } = useLocale();

  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[100px]">
      <div className="main-container">
        <div className="space-y-10 md:space-y-[70px]">
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[700px] text-center">{t('blog.featured.titlePrefix')} <span className="text-ordrat-red-main">{t('blog.featured.titleAccent')}</span></h2>
          </RevealAnimation>
          <FeaturedBlogSwiper featuredBlogs={featuredBlogs} />
        </div>
      </div>
    </section>
  );
};

FeaturedBlog.displayName = 'FeaturedBlog';
export default FeaturedBlog;
