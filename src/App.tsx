import React, { useState } from 'react';
import { CmsProvider, useCms } from './context/CmsContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ConsultingProcess } from './components/ConsultingProcess';
import { ProjectsPortfolio } from './components/ProjectsPortfolio';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ResourcesSection } from './components/ResourcesSection';
import { FAQSection } from './components/FAQSection';
import { CTASection } from './components/CTASection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { ServiceItem } from './types';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { companyInfo, services } = useCms();

  // Modals state
  const [selectedServiceForDetail, setSelectedServiceForDetail] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [consultationServicePreselect, setConsultationServicePreselect] = useState<string>('Income Tax Consultancy');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track window scroll for scroll-to-top button
  React.useEffect(() => {
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
      
      {/* Top Navbar */}
      <Navbar
        onBookConsultation={() => handleOpenConsultation()}
        onSelectService={handleSelectServiceFromNav}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreServices={() => scrollToSection('services')}
          onBookConsultation={() => handleOpenConsultation()}
        />

        {/* 2. Trust Statistics Bar */}
        <TrustStats />

        {/* 3. About Us & 25-Year Heritage */}
        <AboutSection
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
        <FAQSection
          onBookConsultation={() => handleOpenConsultation()}
        />

        {/* 13. Call To Action Banner */}
        <CTASection
          onBookConsultation={() => handleOpenConsultation()}
          onContactClick={() => scrollToSection('contact')}
        />

        {/* 14. Contact Form & Headquarters Directory */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onNavigateToSection={scrollToSection}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
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

      <AdminDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

    </div>
  );
};

export function App() {
  return (
    <CmsProvider>
      <MainAppContent />
    </CmsProvider>
  );
}

export default App;
