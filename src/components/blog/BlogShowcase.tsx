'use client';

import { useLocale } from '@/context/LocaleContext';
import { IBlogPost } from '@/interface';
import RevealAnimation from '../animation/RevealAnimation';
import BlogPaginationWrapper from './BlogPaginationWrapper';

interface BlogShowcaseProps {
  blogs: IBlogPost[];
}

const BlogShowcase = ({ blogs }: BlogShowcaseProps) => {
  const { t } = useLocale();

  return (
    <section className="py-14 md:py-16 lg:py-[88px] xl:py-[100px]">
      <div className="main-container">
        <div className="mb-10 space-y-3 text-center md:mb-[70px]">
          <RevealAnimation delay={0.1}>
            <h2>
              {t('blog.showcase.titlePrefix')} <span className="text-ordrat-red-main inline-block">{t('blog.showcase.titleAccent')}</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="mx-auto max-w-[738px]">
              {t('blog.showcase.description')}
            </p>
          </RevealAnimation>
        </div>

        {/* Blog grid with pagination wrapper */}
        <BlogPaginationWrapper blogs={blogs} />
      </div>
    </section>
  );
};

BlogShowcase.displayName = 'BlogShowcase';
export default BlogShowcase;
