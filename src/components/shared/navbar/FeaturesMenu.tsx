// crypto marketing company menu
'use client';
import {
  AboutIcon,
  CaseStudyICon,
  CustomersIcon,
  ServiceIcon,
  TestimonialIcon,
  UseCaseIcon,
  WhyChooseUsIcon,
} from '@/icons/menu-icon';
import { cn } from '@/utils/cn';
import nsImg420 from '@public/images/ns-img-420.jpg';
import Image from 'next/image';
import CompanyMenuItemLink from './FeaturesMenuItemLink';

interface MenuItemProps {
  id: string;
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const leftColumnMenuItems: MenuItemProps[] = [

  {
    id: 'store-types',
    href: '/store-types',
    title: 'Store Types',
    description: 'Explore our solutions for different store types',
    icon: <ServiceIcon className="size-5" />,
  },
  {
    id: 'ordering-system',
    href: '/ordering-system',
    title: 'Ordering System',
    description: 'Streamline your ordering process with our intuitive system',
    icon: <AboutIcon className="size-5" />,
  },
  {
    id: 'order-onsite',
    href: '/order-onsite',
    title: 'On-site Ordering',
    description: 'On-site ordering system for your restaurant',
    icon: <WhyChooseUsIcon />,
  },
  {
    id: 'qr-code-menu',
    href: '/qr-code-menu',
    title: 'QR Code Menu',
    description: 'Easy-to-use QR code menu system for your restaurant',
    icon: <ServiceIcon />,
  },
];

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  return (
    <div>
      <div
        className={cn(
          '0.3 ease ease absolute top-full left-1/2 z-40 h-3 w-full min-w-[752px] -translate-x-1/2 bg-transparent transition-opacity duration-300',
          menuDropdownId === 'company-mega-menu' ? 'pointer-events-auto! opacity-100' : 'pointer-events-none opacity-0',
        )}
      />
      <div
        id="company-mega-menu"
        className={cn(
          'border-stroke-10/80 ease absolute top-full left-1/2 z-50 mt-2 hidden w-full -translate-x-1/2 items-start gap-y-6 rounded-[20px] border bg-white p-4 transition-all duration-300 md:w-[752px] md:gap-x-6 xl:flex',
          // when hover show the menu
          menuDropdownId === 'company-mega-menu'
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-2.5 opacity-0',
        )}>
        {/* left column menu items */}
        <ul id="product-dropdown-menu" className="flex-1 space-y-1">
          {leftColumnMenuItems.map((item, index) => (
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              key={item.id}
              href={item.href}
              title={item.title}
              description={item.description}
              icon={item.icon}
              showDivider={index !== leftColumnMenuItems.length - 1}
            />
          ))}
        </ul>

        {/* right column menu items */}
        <div className="flex-1 space-y-[15px]">
          <ul id="product-dropdown-menu" className="flex-1 space-y-1">
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/marketing-tools"
              title="Marketing Tools"
              description="Boost your sales with our marketing tools"
              icon={<UseCaseIcon />}
              showDivider={true}
            />

            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/free-setup-service"
              title="Free Setup Service"
              description="Get your store up and running for free"
              icon={<CaseStudyICon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/reservations"
              title="Reservations System"
              description="Book a demo or consultation with our team"
              icon={<CaseStudyICon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/website-templates"
              title="Website Templates"
              description="Pre-designed templates for your business"
              icon={<CustomersIcon />}
              showDivider={false}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

CompanyMenu.displayName = 'CompanyMenu';
export default CompanyMenu;
