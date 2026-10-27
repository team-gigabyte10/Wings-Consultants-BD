import React, { useState, useEffect } from 'react';
import { CmsProvider as WingsCmsProvider, useCms } from './WingsCmsContext';
import { Navbar as WingsNavbar } from './WingsNavbar';
import { Hero as WingsHero } from './WingsHero';
import { TrustStats as WingsTrustStats } from './WingsTrustStats';
import { AboutSection as WingsAbout } from './WingsAbout';
import { ServicesSection } from './ServicesSection';
import { IndustriesSection } from './IndustriesSection';
import { WhyChooseUs } from './WhyChooseUs';
import { ConsultingProcess } from './ConsultingProcess';
import { ProjectsPortfolio } from './ProjectsPortfolio';
import { CaseStudiesSection } from './CaseStudiesSection';
import { TestimonialsSection } from './TestimonialsSection';
import { ResourcesSection } from './ResourcesSection';
import { FAQSection as WingsFAQ } from './WingsFAQ';
import { CTASection } from './CTASection';
import { ContactSection as WingsContact } from './WingsContact';
import { Footer as WingsFooter } from './WingsFooter';
import { ServiceDetailModal } from './ServiceDetailModal';
import { ConsultationModal } from './ConsultationModal';
import { ServiceItem } from '../wingsTypes';
import { ArrowLeft, ArrowUp, MessageCircle } from 'lucide-react';

interface WingsAppProps {
  onReturnToParent: () => void;
}

const WingsAppInner: React.FC<WingsAppProps> = ({ onReturnToParent }) => {
  const { services } = useCms();

  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationServicePreselect, setConsultationServicePreselect] = useState<string>('Income Tax Consultancy');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setConsultationServicePreselect(serviceTitle);
    }
    setIsConsultationModalOpen(true);
  };

  const handleSelectServiceFromNav = (serviceId: string) => {
    const s = services.find((srv) => srv.id === serviceId);
    if (s) {
      setSelectedServiceForDetail(s);
    } else {
      scrollToSection('services');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      
      {/* Top Banner: Return to Parent Company */}
      <div className="bg-[#07172b] text-white py-2 px-4 text-xs border-b border-slate-800 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-semibold text-slate-200">
              Pure Enterprise Limited Group • Official Sister Concern
            </span>
          </div>
          <button
            onClick={onReturnToParent}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold transition-all cursor-pointer shadow-sm text-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>← Return to Pure Enterprise Limited (মূল প্রতিষ্ঠান)</span>
          </button>
        </div>
      </div>

      {/* Top Navbar */}
      <WingsNavbar
        activeSection="home"
        onNavigate={scrollToSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <WingsHero
          onExploreServices={() => scrollToSection('services')}
          onBookConsultation={() => handleOpenConsultation()}
        />

        {/* 2. Trust Statistics Bar */}
        <WingsTrustStats />

        {/* 3. About Us & 25-Year Heritage */}
        <WingsAbout
          onBookConsultation={() => handleOpenConsultation('Strategic Corporate Planning')}
        />

        {/* 4. Core Services (6 Primary Practices) */}
        <ServicesSection
          onSelectService={(srv) => setSelectedServiceForDetail(srv)}
          onBookConsultationForService={(srvTitle) => handleOpenConsultation(srvTitle)}
        />

        {/* 5. Industries We Serve */}
        <IndustriesSection
          onBookConsultation={(indName) => handleOpenConsultation(indName)}
        />

        {/* 6. Why Choose Wings Consultants BD */}
        <WhyChooseUs />

        {/* 7. 5-Step Consulting Process */}
        <ConsultingProcess
          onBookConsultation={() => handleOpenConsultation()}
        />

        {/* 8. Projects & Portfolio */}
        <ProjectsPortfolio
          onBookConsultation={(topic) => handleOpenConsultation(topic)}
        />

        {/* 9. Case Studies & Proven Results */}
        <CaseStudiesSection
          onBookConsultation={(topic) => handleOpenConsultation(topic)}
        />

        {/* 10. Client Testimonials */}
        <TestimonialsSection />

        {/* 11. Knowledge Base & Guides */}
        <ResourcesSection />

        {/* 12. FAQ Section */}
        <WingsFAQ
          onBookConsultation={() => handleOpenConsultation()}
        />

        {/* 13. Call To Action Banner */}
        <CTASection
          onBookConsultation={() => handleOpenConsultation()}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 14. Contact Form & Headquarters Directory */}
        <WingsContact />
      </main>

      {/* Global Footer */}
      <WingsFooter
        onNavigateToSection={scrollToSection}
      />

      {/* Floating Quick Contact & WhatsApp Widget */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5">
        {showScrollTop && (
          <button
            onClick={() => scrollToSection('top')}
            className="w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-slate-800 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href="https://wa.me/8801730349633"
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute right-15 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap hidden group-hover:block transition-all">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Modals */}
      <ServiceDetailModal
        service={selectedServiceForDetail}
        onClose={() => setSelectedServiceForDetail(null)}
        onBookConsultation={(srvTitle) => handleOpenConsultation(srvTitle)}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialService={consultationServicePreselect}
      />

    </div>
  );
};

export const WingsApp: React.FC<WingsAppProps> = ({ onReturnToParent }) => {
  return (
    <WingsCmsProvider>
      <WingsAppInner onReturnToParent={onReturnToParent} />
    </WingsCmsProvider>
  );
};
