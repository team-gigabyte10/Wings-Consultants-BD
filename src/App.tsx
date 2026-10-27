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
import { ProductItem } from './types';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { WingsApp } from './wings/WingsApp';

const MainAppContent: React.FC = () => {
  const {
    companyInfo,
    selectedProduct,
    setSelectedProduct,
    isDealerModalOpen,
    setIsDealerModalOpen,
    dealerModalPreselectProduct,
    setDealerModalPreselectProduct
  } = useCms();

  const [currentView, setCurrentView] = useState<'pure-enterprise' | 'wings-consultants'>(() => {
    return window.location.hash === '#wings-consultants' ? 'wings-consultants' : 'pure-enterprise';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#wings-consultants') {
        setCurrentView('wings-consultants');
      } else if (currentView === 'wings-consultants' && window.location.hash !== '#wings-consultants') {
        setCurrentView('pure-enterprise');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

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

  const openWingsWebsite = () => {
    setCurrentView('wings-consultants');
    window.location.hash = 'wings-consultants';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const returnToPureEnterprise = () => {
    setCurrentView('pure-enterprise');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'sister-concern') {
      const elem = document.getElementById('sister-concern');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

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

  // If viewing the full English Wings Consultants BD website:
  if (currentView === 'wings-consultants') {
    return <WingsApp onReturnToParent={returnToPureEnterprise} />;
  }

  // Otherwise, render the Pure Enterprise Limited main body website:
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
          onOpenSisterConcern={openWingsWebsite}
        />

        {/* Trust & Key Performance Metrics */}
        <TrustStats />

        {/* About Company, Origin & Mission */}
        <AboutSection
          onOpenDealership={() => handleOpenDealership()}
          onOpenSisterConcern={openWingsWebsite}
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
          onOpenSisterConcernModal={openWingsWebsite}
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
        onOpenAdmin={() => {}}
        onOpenSisterConcern={openWingsWebsite}
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
