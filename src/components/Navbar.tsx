import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { useCms } from '../context/CmsContext';
import { useAuth } from '../context/AuthContext';
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  BookOpen,
  Users,
  Compass,
  Building2,
  Lock,
  ChevronDown,
  User,
  ShieldCheck,
  Star,
  Bookmark,
  Database
} from 'lucide-react';

interface NavbarProps {
  onBookConsultation: () => void;
  onSelectCourseStream: (streamId: string) => void;
  onOpenAdmin: () => void;
  onOpenProfile: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookConsultation,
  onSelectCourseStream,
  onOpenAdmin,
  onOpenProfile
}) => {
  const { companyInfo, trainingStreams, isFirestoreConnected } = useCms();
  const { user, userProfile, setIsAuthModalOpen, setAuthModalMode, isAdmin } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    setIsCoursesDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenAuth = (mode: 'login' | 'register') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-200 transition-all duration-300">
      {/* Top Corporate Contact & Address Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate">
                {companyInfo.mainAddress} | Liaison: {companyInfo.liaisonAddress}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={`tel:${companyInfo.phones[0]}`}
                className="flex items-center gap-1 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span className="font-semibold">{companyInfo.phones[0]}</span>
              </a>
              <span className="text-slate-600">|</span>
              <a
                href={`tel:${companyInfo.phones[1]}`}
                className="hover:text-amber-400 transition-colors"
              >
                {companyInfo.phones[1]}
              </a>
            </div>

            <a
              href={`mailto:${companyInfo.email}`}
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.email}</span>
            </a>

            <button
              onClick={onOpenAdmin}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] font-medium border border-slate-700 transition-colors cursor-pointer"
              title="Staff & Inquiries Management"
            >
              <Lock className="w-3 h-3 text-amber-400" />
              <span>Staff Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-200 ${isScrolled ? 'py-2' : 'py-3'}`}>
          
          {/* Brand Logo */}
          <div onClick={() => scrollToSection('hero')} className="cursor-pointer">
            <Logo size={isScrolled ? 'md' : 'lg'} />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
            >
              About Us
            </button>

            {/* Courses Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setIsCoursesDropdownOpen(!isCoursesDropdownOpen)}
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer py-2"
              >
                <span>Courses & Streams</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>

              <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 px-2 hidden group-hover:block transition-all z-50">
                <div className="text-[11px] font-bold text-slate-400 uppercase px-3 pb-2 border-b border-slate-100">
                  7 Core Training Streams
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  {trainingStreams.map((stream) => (
                    <button
                      key={stream.id}
                      onClick={() => {
                        onSelectCourseStream(stream.id);
                        scrollToSection('courses');
                      }}
                      className="text-left px-3 py-2 rounded-xl hover:bg-amber-50 text-xs font-medium text-slate-700 hover:text-amber-700 transition-colors flex items-center justify-between group/item cursor-pointer"
                    >
                      <span className="font-semibold">{stream.title}</span>
                      <span className="text-[10px] bg-slate-100 group-hover/item:bg-amber-200 px-1.5 py-0.5 rounded text-slate-600 group-hover/item:text-amber-900 font-bold">
                        {stream.courses.length}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-slate-100 px-3">
                  <button
                    onClick={() => scrollToSection('courses')}
                    className="w-full text-center text-xs font-bold text-amber-600 hover:text-amber-700 py-1 cursor-pointer"
                  >
                    View All 60+ Modules →
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('methodology')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
            >
              Methodology
            </button>

            <button
              onClick={() => scrollToSection('team')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
            >
              Consultants
            </button>

            <button
              onClick={() => scrollToSection('clients')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
            >
              Clients
            </button>

            <button
              onClick={() => scrollToSection('reviews')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Reviews</span>
              <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-semibold text-slate-700 hover:text-amber-600 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          {/* User Auth & Booking Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {user ? (
              <button
                onClick={onOpenProfile}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-all border border-slate-200 cursor-pointer"
              >
                <div className="w-6 h-6 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs">
                  {userProfile?.displayName ? userProfile.displayName.charAt(0).toUpperCase() : 'U'}
                </div>
                <span className="max-w-[100px] truncate">
                  {userProfile?.displayName || user.displayName || 'My Profile'}
                </span>
                {userProfile?.savedCourses && userProfile.savedCourses.length > 0 && (
                  <span className="w-4 h-4 rounded-full bg-amber-600 text-white text-[9px] flex items-center justify-center font-bold">
                    {userProfile.savedCourses.length}
                  </span>
                )}
              </button>
            ) : (
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleOpenAuth('login')}
                  className="text-xs font-bold text-slate-700 hover:text-amber-700 px-3 py-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleOpenAuth('register')}
                  className="text-xs font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg border border-amber-200 transition-colors cursor-pointer"
                >
                  Register
                </button>
              </div>
            )}

            <button
              onClick={onBookConsultation}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              <span>Book Training</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            {user ? (
              <button
                onClick={onOpenProfile}
                className="w-8 h-8 rounded-full bg-amber-500 text-white text-xs font-bold flex items-center justify-center"
              >
                {userProfile?.displayName ? userProfile.displayName.charAt(0).toUpperCase() : 'U'}
              </button>
            ) : (
              <button
                onClick={() => handleOpenAuth('login')}
                className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1.5 rounded-lg border border-amber-200"
              >
                Sign In
              </button>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              About Us & Inside Story
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Training Courses (7 Streams)</span>
              <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">60+ Modules</span>
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Objectives & Learning Outcomes
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Our People & Lead Consultants
            </button>
            <button
              onClick={() => scrollToSection('clients')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Valued Corporate Customers
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Testimonials & Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left px-3 py-2 text-sm font-semibold text-slate-800 rounded-lg hover:bg-slate-50"
            >
              Headquarters & Contact
            </button>

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookConsultation();
                }}
                className="w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl text-sm shadow cursor-pointer"
              >
                Book Corporate Training
              </button>

              {user ? (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenProfile();
                  }}
                  className="w-full text-center bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold py-2.5 rounded-xl text-xs flex items-center justify-center gap-1.5"
                >
                  <User className="w-3.5 h-3.5 text-slate-600" />
                  <span>My Profile & Saved Courses ({userProfile?.savedCourses?.length || 0})</span>
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleOpenAuth('login');
                    }}
                    className="py-2.5 bg-slate-100 text-slate-800 rounded-xl text-xs font-bold text-center"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleOpenAuth('register');
                    }}
                    className="py-2.5 bg-amber-50 text-amber-800 rounded-xl text-xs font-bold text-center border border-amber-200"
                  >
                    Register
                  </button>
                </div>
              )}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAdmin();
                }}
                className="w-full text-center bg-slate-900 text-white font-semibold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Staff Admin Portal</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
