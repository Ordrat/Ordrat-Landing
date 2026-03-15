import BlogShowcase from '@/components/blog/BlogShowcase';
import FeaturedBlog from '@/components/blog/FeaturedBlog';
import BlogCTA from '@/components/blog/BlogCTA';
import { IBlogPost } from '@/interface';
import getMarkDownData from '@/utils/getMarkDownData';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Blog - Ordrat | Tips & Insights for Restaurant Owners',
  description:
    'Read the latest articles, tips, and insights on restaurant management, online ordering, and growing your food business with Ordrat.',
};

const page = () => {
  const allBlogs = getMarkDownData<IBlogPost & { [key: string]: unknown }>('src/data/blogs');
  const featuredBlogs: IBlogPost[] = allBlogs.filter((blog) => blog.featured === true).slice(0, 3);

  return (
    <main className="bg-white">
      <FeaturedBlog featuredBlogs={featuredBlogs} />
      <BlogShowcase blogs={allBlogs} />
      <BlogCTA />
    </main>
  );
};

export default page;
