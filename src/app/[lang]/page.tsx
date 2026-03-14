import Clients from '@/components/home/Clients';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import FeaturesV2 from '@/components/home/FeaturesV2';
import Hero from '@/components/home/Hero';
import Integration from '@/components/home/Integration';
import Pricing from '@/components/home/Pricing';
import Result from '@/components/home/Result';
import Steps from '@/components/home/Steps';
import VoiceStyle from '@/components/home/VoiceStyle';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata(
    'Ordrat - Fast and easy ordering',
    'Ordrat helps restaurants and cafes manage QR menus, online orders, and delivery in one simple dashboard.',
    'https://ordrat.com',
    '/images/shared/light-logo.svg',
  ),
};

const page = () => {
  return (
    <main className="bg-white">
      <Hero />
      <Clients />
      <VoiceStyle />
      <Features />
      <FeaturesV2 />
      <Steps />
      <Integration />
      <Result />
      <Pricing />
      <CTA />
    </main>
  );
};

export default page;
