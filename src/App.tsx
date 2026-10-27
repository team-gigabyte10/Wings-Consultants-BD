import React, { useState, useEffect } from 'react';
import { CmsProvider, useCms } from './context/CmsContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { AboutSection } from './components/AboutSection';
import { ProductsSection } from './components/ProductsSection';
import { BoardOfDirectors } from './components/BoardOfDirectors';
import { SisterConcernSection } from './components/SisterConcernSection';
import { ComplianceSection } from './components/ComplianceSection';
import { DealerNetworkSection } from './components/DealerNetworkSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

import { ProductDetailModal } from './components/ProductDetailModal';
import { DealerModal } from './components/DealerModal';
import { SisterConcernModal } from './components/SisterConcernModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { ProductItem } from './types';
import { ArrowUp, MessageCircle } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const {
    companyInfo,
    selectedProduct,
    setSelectedProduct,
    isDealerModalOpen,
    setIsDealerModalOpen,
    dealerModalPreselectProduct,
    setDealerModalPreselectProduct,
    isSisterConcernModalOpen,
    setIsSisterConcernModalOpen,
    isAdminModalOpen,
    setIsAdminModalOpen
  } = useCms();

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
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
    if (sectionId === 'hero' || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDealership = (productName?: string) => {
    if (productName) {
      setDealerModalPreselectProduct(productName);
    } else {
      setDealerModalPreselectProduct('');
    }
    setIsDealerModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      
      {/* 1. Global Navigation Bar */}
      <Navbar onNavigate={scrollToSection} />

      {/* 2. Main Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onExploreProducts={() => scrollToSection('products')}
          onOpenDealership={() => handleOpenDealership()}
          onOpenSisterConcern={() => setIsSisterConcernModalOpen(true)}
        />

        {/* Trust & Key Performance Metrics */}
        <TrustStats />

        {/* About Company, Origin & Mission */}
        <AboutSection
          onOpenDealership={() => handleOpenDealership()}
          onOpenSisterConcern={() => setIsSisterConcernModalOpen(true)}
        />

        {/* 4 Core Brands & Products Portfolio */}
        <ProductsSection
          onSelectProduct={(p: ProductItem) => setSelectedProduct(p)}
          onOpenDealershipForProduct={(pName: string) => handleOpenDealership(pName)}
        />

        {/* Management Board (8 Members) */}
        <BoardOfDirectors />

        {/* Dedicated Sister Concern: Wings Consultants BD */}
        <SisterConcernSection
          onOpenSisterConcernModal={() => setIsSisterConcernModalOpen(true)}
        />

        {/* Quality, Licenses & Scientific Compliance */}
        <ComplianceSection />

        {/* Supply Chain & 64-District Dealership */}
        <DealerNetworkSection
          onOpenDealershipModal={() => handleOpenDealership()}
        />

        {/* Frequently Asked Questions (FAQ) */}
        <FAQSection
          onOpenDealership={() => handleOpenDealership()}
        />

        {/* Contact & Inquiry Directory */}
        <ContactSection />

      </main>

      {/* 3. Global Footer */}
      <Footer
        onNavigateToSection={scrollToSection}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenSisterConcern={() => setIsSisterConcernModalOpen(true)}
      />

      {/* 4. Floating WhatsApp & Scroll-to-Top Widgets */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        {showScrollTop && (
          <button
            onClick={() => scrollToSection('top')}
            className="w-11 h-11 rounded-full bg-[#0b1e3b] text-white flex items-center justify-center shadow-lg hover:bg-sky-900 transition-all cursor-pointer"
            aria-label="উপরে যান"
            title="উপরে যান"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}

        <a
          href={companyInfo.socialLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="w-13 h-13 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer group relative"
          aria-label="WhatsApp-এ যোগাযোগ করুন"
          title="WhatsApp-এ যোগাযোগ করুন"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
          <span className="absolute right-15 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap hidden group-hover:block transition-all">
            হোয়াটসঅ্যাপে কথা বলুন
          </span>
        </a>
      </div>

      {/* 5. Modals */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOrderOrDealership={(productName) => handleOpenDealership(productName)}
      />

      <DealerModal
        isOpen={isDealerModalOpen}
        onClose={() => setIsDealerModalOpen(false)}
        preselectedProduct={dealerModalPreselectProduct}
      />

      <SisterConcernModal
        isOpen={isSisterConcernModalOpen}
        onClose={() => setIsSisterConcernModalOpen(false)}
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
