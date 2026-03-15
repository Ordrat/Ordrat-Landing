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
import { useLocale } from '@/context/LocaleContext';
import { cn } from '@/utils/cn';
import CompanyMenuItemLink from './FeaturesMenuItemLink';

const CompanyMenu = ({
  menuDropdownId,
  setMenuDropdownId,
}: {
  menuDropdownId: string | null;
  setMenuDropdownId: (id: string | null) => void;
}) => {
  const { t } = useLocale();

  const leftColumnMenuItems = [
    {
      id: 'store-types',
      href: '/store-types',
      title: t('navbar.featuresMenu.storeTypes'),
      description: t('navbar.featuresMenu.storeTypesDesc'),
      icon: <ServiceIcon className="size-5" />,
    },
    {
      id: 'ordering-system',
      href: '/ordering-system',
      title: t('navbar.featuresMenu.orderingSystem'),
      description: t('navbar.featuresMenu.orderingSystemDesc'),
      icon: <AboutIcon className="size-5" />,
    },
    {
      id: 'order-onsite',
      href: '/order-onsite',
      title: t('navbar.featuresMenu.onsiteOrdering'),
      description: t('navbar.featuresMenu.onsiteOrderingDesc'),
      icon: <WhyChooseUsIcon />,
    },
    {
      id: 'qr-code-menu',
      href: '/qr-code-menu',
      title: t('navbar.featuresMenu.qrCodeMenu'),
      description: t('navbar.featuresMenu.qrCodeMenuDesc'),
      icon: <ServiceIcon />,
    },
  ];

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
              title={t('navbar.featuresMenu.marketingTools')}
              description={t('navbar.featuresMenu.marketingToolsDesc')}
              icon={<UseCaseIcon />}
              showDivider={true}
            />

            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/free-setup-service"
              title={t('navbar.featuresMenu.freeSetup')}
              description={t('navbar.featuresMenu.freeSetupDesc')}
              icon={<CaseStudyICon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/reservations"
              title={t('navbar.featuresMenu.reservations')}
              description={t('navbar.featuresMenu.reservationsDesc')}
              icon={<CaseStudyICon />}
              showDivider={true}
            />
            <CompanyMenuItemLink
              setMenuDropdownId={setMenuDropdownId}
              href="/website-templates"
              title={t('navbar.featuresMenu.websiteTemplates')}
              description={t('navbar.featuresMenu.websiteTemplatesDesc')}
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
