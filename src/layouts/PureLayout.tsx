import React from 'react';
import { Link, Outlet } from 'react-router';
import { Briefcase } from 'lucide-react';
import { CmsProvider, useCms } from '../context/CmsContext';
import { Logo } from '../components/Logo';
import { DealerModal } from '../components/DealerModal';
import { SiteHeader, NavItem } from '../ui/SiteHeader';
import { SiteFooter } from '../ui/SiteFooter';
import { FloatingActions } from '../ui/FloatingActions';
import { ScrollToTop } from '../ui/ScrollToTop';
import { JsonLd } from '../ui/JsonLd';
import { absoluteUrl } from '../lib/site';

const PureShell: React.FC = () => {
  const { companyInfo, products, isDealerModalOpen, openDealerModal, closeDealerModal, dealerModalPreselectProduct } = useCms();

  const nav: NavItem[] = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About Us' },
    {
      to: '/products',
      label: 'Products',
      children: products.map((p) => ({ to: `/products/${p.slug}`, label: p.nameBn }))
    },
    { to: '/dealership', label: 'Dealership' },
    { to: '/wings', label: 'Sister Concern' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <div data-site="pure" className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-amber-400 selection:text-slate-950">
      <ScrollToTop />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': absoluteUrl('/#organization'),
          name: 'Pure Enterprise Limited',
          alternateName: companyInfo.nameBn,
          url: absoluteUrl('/'),
          logo: absoluteUrl('/images/brand/pure-enterprise-logo.png'),
          email: companyInfo.email,
          telephone: companyInfo.phones[0].replace(/[^0-9+]/g, ''),
          foundingDate: String(companyInfo.establishmentYear),
          address: { '@type': 'PostalAddress', addressLocality: "Cox's Bazar", addressCountry: 'BD' },
          sameAs: [companyInfo.socialLinks.facebook].filter(Boolean),
          subOrganization: { '@id': absoluteUrl('/wings#organization') }
        }}
      />
      <SiteHeader
        site="pure"
        logo={<Logo size="md" />}
        homeTo="/"
        homeLabel="পিওর এন্টারপ্রাইজ লিমিটেড — হোম"
        nav={nav}
        cta={{ label: 'ডিলারশিপ আবেদন', onClick: () => openDealerModal() }}
        phone={companyInfo.phones[0]}
        email={companyInfo.email}
        menuLabel="মেনু খুলুন বা বন্ধ করুন"
      />

      <main className="flex-1">
        <Outlet />
      </main>

      <SiteFooter
        logo={<Logo size="lg" isLight />}
        about="পিওর এন্টারপ্রাইজ লিমিটেড কোম্পানি আইন ১৯৯৪-এর অধীন নিবন্ধিত একটি প্রাইভেট লিমিটেড কোম্পানি। কক্সবাজারের নিজস্ব প্ল্যান্ট থেকে দেশব্যাপী বিশুদ্ধ আয়োডিনযুক্ত লবণ ও মিনামিক্স সরবরাহকারী প্রতিষ্ঠান।"
        aside={
          <Link to="/wings" className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors max-w-md">
            <Briefcase className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
            <span>
              <span className="block text-xs text-slate-400">সহযোগী প্রতিষ্ঠান (Sister Concern)</span>
              <span className="block text-sm font-bold text-white">Wings Consultants BD →</span>
            </span>
          </Link>
        }
        columns={[
          {
            title: 'Company',
            links: [
              { to: '/about', label: 'About Us' },
              { to: '/about#board', label: 'Board of Directors' },
              { to: '/about#compliance', label: 'Compliance & Quality' },
              { to: '/faq', label: 'FAQ' },
              { to: '/contact', label: 'Contact' }
            ]
          },
          {
            title: 'Products',
            links: [
              ...products.map((p) => ({ to: `/products/${p.slug}`, label: p.nameBn })),
              { to: '/dealership', label: 'Dealership' }
            ]
          }
        ]}
        contactTitle="যোগাযোগ"
        addresses={[
          { label: 'কারখানা', text: companyInfo.productionCenter },
          { label: 'কর্পোরেট অফিস', text: companyInfo.corporateOffice }
        ]}
        phones={companyInfo.phones}
        email={companyInfo.email}
        socials={companyInfo.socialLinks}
        copyright={`© ${new Date().getFullYear()} ${companyInfo.nameBn} (Pure Enterprise Limited). সর্বস্বত্ব সংরক্ষিত।`}
      />

      <FloatingActions
        whatsapp={companyInfo.socialLinks.whatsapp ?? companyInfo.phones[0]}
        whatsappLabel="হোয়াটসঅ্যাপে কথা বলুন"
        topLabel="উপরে যান"
      />

      {/* A new key on each open resets the form to the chosen product */}
      <DealerModal
        key={isDealerModalOpen ? `open-${dealerModalPreselectProduct}` : 'closed'}
        isOpen={isDealerModalOpen} onClose={closeDealerModal} preselectedProduct={dealerModalPreselectProduct} />
    </div>
  );
};

export const PureLayout: React.FC = () => (
  <CmsProvider>
    <PureShell />
  </CmsProvider>
);
