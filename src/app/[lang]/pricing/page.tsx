import Benefits from '@/components/pricing/Benefits';
import Contact from '@/components/pricing/Contact';
import Features from '@/components/pricing/Features';
import Pricing from '@/components/pricing/Pricing';
import PricingCTA from '@/components/pricing/PricingCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Pricing - Ordrat | Plans & Packages for Restaurants & Cafes',
  description:
    'Explore Ordrat pricing plans designed for restaurants and cafes. Choose the right package to launch your online ordering system and grow your business.',
};

const page = () => {
  return (
    <main className="bg-background-3">
      <Pricing />
      <Benefits />
      <Features />
      <Contact />
      <PricingCTA />
    </main>
  );
};

export default page;
