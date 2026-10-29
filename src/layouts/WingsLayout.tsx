import React from 'react';
import { Link, Outlet } from 'react-router';
import { Building2 } from 'lucide-react';
import { CmsProvider, useCms } from '../wings/WingsCmsContext';
import { Logo } from '../wings/WingsLogo';
import { ConsultationModal } from '../wings/ConsultationModal';
import { SiteHeader, NavItem } from '../ui/SiteHeader';
import { SiteFooter } from '../ui/SiteFooter';
import { FloatingActions } from '../ui/FloatingActions';
import { ScrollToTop } from '../ui/ScrollToTop';

const WingsShell: React.FC = () => {
  const { companyInfo, services, isConsultationModalOpen, openConsultation, closeConsultation, selectedServiceForBooking } = useCms();

  const nav: NavItem[] = [
    { to: '/wings', label: 'Home', end: true },
    { to: '/wings/about', label: 'About' },
    {
      to: '/wings/services',
      label: 'Services',
      children: services.map((s) => ({ to: `/wings/services/${s.slug}`, label: s.title }))
    },
    { to: '/wings/industries', label: 'Industries' },
    { to: '/wings/case-studies', label: 'Case Studies' },
    { to: '/wings/insights', label: 'Insights' },
    { to: '/wings/contact', label: 'Contact' }
  ];

  return (
    <div data-site="wings" className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-sky-200 selection:text-slate-950">
      <ScrollToTop />
      <SiteHeader
        site="wings"
        logo={<Logo size="md" />}
        homeTo="/wings"
        homeLabel="Wings Consultants BD — Home"
        nav={nav}
        cta={{ label: 'Book a Consultation', onClick: () => openConsultation() }}
        phone={companyInfo.phones[0]}
        email={companyInfo.email}
        menuLabel="Open or close menu"
      />

      <main className="flex-1">
        <Outlet />
      </main>

      <SiteFooter
        logo={<Logo size="lg" isLight />}
        about={companyInfo.brandMessage}
        aside={
          <Link to="/" className="flex items-start gap-3 p-3.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors max-w-md">
            <Building2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
            <span>
              <span className="block text-xs text-slate-400">Parent company</span>
              <span className="block text-sm font-bold text-white">Pure Enterprise Limited →</span>
            </span>
          </Link>
        }
        columns={[
          {
            title: 'Firm',
            links: [
              { to: '/wings/about', label: 'About Us' },
              { to: '/wings/industries', label: 'Industries' },
              { to: '/wings/case-studies', label: 'Case Studies' },
              { to: '/wings/insights', label: 'Insights' },
              { to: '/wings/faq', label: 'FAQ' },
              { to: '/wings/contact', label: 'Contact' }
            ]
          },
          {
            title: 'Services',
            links: services.map((s) => ({ to: `/wings/services/${s.slug}`, label: s.title }))
          }
        ]}
        contactTitle="Head Office"
        addresses={[{ label: companyInfo.location, text: companyInfo.address }]}
        phones={companyInfo.phones}
        email={companyInfo.email}
        socials={companyInfo.socialLinks}
        copyright={`© ${new Date().getFullYear()} ${companyInfo.name}. All rights reserved.`}
      />

      <FloatingActions
        whatsapp={companyInfo.socialLinks.whatsapp ?? companyInfo.phones[0]}
        whatsappLabel="Chat on WhatsApp"
        topLabel="Back to top"
      />

      {/* A new key on each open resets the form to the chosen service */}
      <ConsultationModal
        key={isConsultationModalOpen ? `open-${selectedServiceForBooking}` : 'closed'}
        isOpen={isConsultationModalOpen} onClose={closeConsultation} initialService={selectedServiceForBooking} />
    </div>
  );
};

export const WingsLayout: React.FC = () => (
  <CmsProvider>
    <WingsShell />
  </CmsProvider>
);
