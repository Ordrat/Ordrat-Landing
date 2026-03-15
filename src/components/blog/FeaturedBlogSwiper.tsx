'use client';
import { useLocale } from '@/context/LocaleContext';
import { IBlogPost } from '@/interface';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

interface FeaturedBlogSwiperProps {
  featuredBlogs: IBlogPost[];
}

const FeaturedBlogSwiper = ({ featuredBlogs }: FeaturedBlogSwiperProps) => {
  const { t } = useLocale();

  return (
    <RevealAnimation delay={0.3}>
      <div className="relative">
        <Swiper
          className="swiper blog-article-swiper"
          slidesPerView={1}
          loop={true}
          effect="slide"
          speed={1000}
          spaceBetween={40}
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: '.pagination-bullets',
            clickable: true,
            type: 'bullets',
          }}
          scrollbar={false}>
          <div className="swiper-wrapper">
            {featuredBlogs.map((blog) => (
              <SwiperSlide key={blog.slug} className="swiper-slide">
                <article className="scale-100 transition-transform duration-500 hover:scale-[99%] hover:transition-transform hover:duration-500">
                  <figure className="max-h-[550px] w-full overflow-hidden rounded-t-[20px]">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      width={600}
                      height={550}
                      quality={100}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                  <div className="bg-ordrat-red-main space-y-6 rounded-b-[20px] px-4 py-8 md:p-8">
                    <div className="flex items-center gap-2">
                      <Link href={`/blog?category=${blog.tag.toLowerCase()}`}>
                        <span className="badge me-1 bg-secondary text-accent">{blog.tag}</span>
                      </Link>
                      <span rel="author" className="text-tagline-3 text-accent font-normal">
                        {blog.author}
                      </span>
                      <span className="h-[6px] w-[5px] rounded-full bg-secondary"> </span>
                      <time dateTime={blog.publishDate} className="text-tagline-3 text-accent font-normal">
                        {blog.publishDate}
                      </time>
                    </div>
                    <div>
                      <h3 className="sm:text-heading-5 text-tagline-1 mb-2 text-accent font-normal">
                        <Link href={`/blog/${blog.slug}`} aria-label={`Read full article about ${blog.title}`}>
                          {blog.title}
                        </Link>
                      </h3>
                      <p className="sm:text-tagline-1 text-tagline-2 text-accent/90 font-normal">
                        {blog.description}
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href={`/blog/${blog.slug}`}
                        btnClass="bg-ordrat-red-main text-accent btn-arrow-white hover:bg-secondary hover:text-accent btn-md-v2"
                        aria-label={`Read full article about ${blog.title}`}>
                        {t('blog.readMore')}
                      </LinkButton>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </div>
          <div className="pagination-bullets mt-5 md:mt-14"></div>
        </Swiper>
      </div>
    </RevealAnimation>
  );
};

FeaturedBlogSwiper.displayName = 'FeaturedBlogSwiper';
export default FeaturedBlogSwiper;
