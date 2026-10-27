import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useCms } from '../context/CmsContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  Sparkles,
  Briefcase,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { companyInfo, setIsDealerModalOpen, setIsSisterConcernModalOpen, setIsAdminModalOpen } = useCms();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { id: 'hero', label: 'প্রচ্ছদ' },
    { id: 'about', label: 'কোম্পানি পরিচিতি' },
    { id: 'products', label: 'পণ্য ও ব্র্যান্ড' },
    { id: 'board', label: 'পরিচালনা পর্ষদ' },
    { id: 'sister-concern', label: 'সহযোগী প্রতিষ্ঠান' },
    { id: 'compliance', label: 'মান ও লাইসেন্স' },
    { id: 'dealership', label: 'ডিলার নেটওয়ার্ক' },
    { id: 'faq', label: 'প্রশ্নোত্তর' },
    { id: 'contact', label: 'যোগাযোগ' }
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 shadow-sm bg-white">
      {/* Top Bar - Contact & Location */}
      <div
        className={`bg-[#0b1e3b] text-slate-200 text-xs border-b border-slate-800 transition-all duration-300 ${
          isScrolled ? 'max-h-0 opacity-0 overflow-hidden py-0' : 'py-2 px-4 sm:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.phones[0]}</span>
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{companyInfo.email}</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6 text-slate-300">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>প্ল্যান্ট: কক্সবাজার | কর্পোরেট অফিস: ঢাকা</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.businessHoursBn}</span>
            </div>
            <button
              onClick={() => setIsAdminModalOpen(true)}
              className="text-xs text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              এডমিন ড্যাশবোর্ড
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          className="cursor-pointer"
          title="পিওর এন্টারপ্রাইজ লিমিটেড"
        >
          <Logo size="md" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1.5 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="px-2.5 py-1.5 rounded-md hover:text-[#0b1e3b] hover:bg-slate-100 transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={() => setIsSisterConcernModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold bg-sky-50 text-sky-800 hover:bg-sky-100 border border-sky-200 transition-all cursor-pointer shadow-xs"
          >
            <Briefcase className="w-3.5 h-3.5 text-sky-600" />
            <span>Wings Consultants BD</span>
          </button>

          <button
            onClick={() => setIsDealerModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-[#0b1e3b] text-white hover:bg-sky-900 transition-all cursor-pointer shadow-md hover:shadow-lg"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>ডিলারশিপ আবেদন</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-3 shadow-xl">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left py-2.5 px-3 rounded-lg text-slate-800 font-medium hover:bg-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsSisterConcernModalOpen(true);
              }}
              className="w-full py-2.5 rounded-lg text-center font-semibold text-sm bg-sky-50 text-sky-800 border border-sky-200"
            >
              সহযোগী প্রতিষ্ঠান: Wings Consultants BD
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDealerModalOpen(true);
              }}
              className="w-full py-2.5 rounded-lg text-center font-bold text-sm bg-[#0b1e3b] text-white shadow-sm"
            >
              ডিলারশিপ ও পাইকারি আবেদন
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
