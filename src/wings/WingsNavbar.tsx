import React, { useState, useEffect } from 'react';
import { Logo } from './WingsLogo';
import { useCms } from './WingsCmsContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const { companyInfo, setIsConsultationModalOpen, setIsAdminOpen, services } = useCms();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services', hasDropdown: true },
    { id: 'industries', label: 'Industries' },
    { id: 'projects', label: 'Projects' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'resources', label: 'Resources' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-sm">
      {/* Top Bar - Contact & Hours (hidden when scrolled or on mobile) */}
      <div
        className={`bg-[#07172b] text-slate-300 text-xs border-b border-slate-800 transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0 overflow-hidden py-0' : 'py-2 px-4 sm:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Wings Consultants BD"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.phones[0]}</span>
            </a>
            <a
              href={`tel:${companyInfo.phones[1]?.replace(/[^0-9+]/g, '')}`}
              className="hidden md:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Call Secondary Line"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyInfo.phones[1]}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
              title="Email Us"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-5 text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyInfo.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.businessHours}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`bg-white/95 backdrop-blur-md transition-all duration-300 border-b border-slate-100 ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Official Logo */}
          <div onClick={() => handleNavClick('home')} className="focus:outline-none">
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                        activeSection === link.id
                          ? 'text-[#0f2c59] bg-sky-50'
                          : 'text-slate-700 hover:text-[#0f2c59] hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 text-slate-400" />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 bg-white rounded-xl shadow-xl border border-slate-100 p-2 py-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="px-3 pb-2 mb-2 border-b border-slate-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                            Our Consulting Practices
                          </span>
                        </div>
                        {services.map((srv) => (
                          <button
                            key={srv.id}
                            onClick={() => {
                              handleNavClick('services');
                              setIsServicesDropdownOpen(false);
                            }}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-sky-50/70 transition-colors group flex items-start gap-2.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0 group-hover:bg-amber-500" />
                            <div>
                              <p className="text-xs font-semibold text-slate-800 group-hover:text-[#0f2c59]">
                                {srv.title}
                              </p>
                              <p className="text-[11px] text-slate-500 line-clamp-1">
                                {srv.tag}
                              </p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${
                    activeSection === link.id
                      ? 'text-[#0f2c59] bg-sky-50'
                      : 'text-slate-700 hover:text-[#0f2c59] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#0f2c59] to-[#0284c7] hover:from-[#0a192f] hover:to-[#0369a1] shadow-md shadow-sky-900/10 hover:shadow-lg transition-all duration-200 cursor-pointer group"
            >
              <span>Get a Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => setIsConsultationModalOpen(true)}
              className="sm:hidden px-3 py-1.5 rounded-md bg-[#0f2c59] text-white text-xs font-semibold"
            >
              Consult
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#0f2c59] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    activeSection === link.id
                      ? 'text-[#0f2c59] bg-sky-50 font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsConsultationModalOpen(true);
                }}
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-center text-white bg-gradient-to-r from-[#0f2c59] to-[#0284c7] shadow-md flex items-center justify-center gap-2"
              >
                <span>Get a Consultation</span>
                <Sparkles className="w-4 h-4 text-amber-300" />
              </button>

              <div className="p-3 bg-slate-50 rounded-xl space-y-2 text-xs text-slate-600">
                <p className="font-semibold text-slate-800">Direct Contacts:</p>
                <div className="flex flex-col gap-1.5">
                  <a
                    href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
                    className="flex items-center gap-2 text-sky-800 font-medium"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    <span>{companyInfo.phones[0]}</span>
                  </a>
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="flex items-center gap-2 text-slate-600"
                  >
                    <Mail className="w-3.5 h-3.5 text-amber-500" />
                    <span>{companyInfo.email}</span>
                  </a>
                </div>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsAdminOpen(true);
                  }}
                  className="w-full mt-2 pt-2 border-t border-slate-200 text-slate-500 hover:text-amber-700 flex items-center justify-center gap-1.5 text-xs font-semibold py-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Admin / Staff Portal</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
