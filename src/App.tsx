import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { CmsProvider, useCms } from './context/CmsContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesCatalog } from './components/CoursesCatalog';
import { MethodologySection } from './components/MethodologySection';
import { TeamSection } from './components/TeamSection';
import { ClientsSection } from './components/ClientsSection';
import { ReviewsSection } from './components/ReviewsSection';
import { QuotesSection } from './components/QuotesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { TeamDetailModal } from './components/TeamDetailModal';
import { ConsultationModal } from './components/ConsultationModal';
import { AdminDashboardModal } from './components/AdminDashboardModal';
import { AuthModal } from './components/AuthModal';
import { UserProfileModal } from './components/UserProfileModal';
import { TrainingStream, TeamMember } from './types';
import { MessageCircle, ArrowUp, Phone } from 'lucide-react';

const MainAppContent: React.FC = () => {
  const { companyInfo, trainingStreams } = useCms();
  const { user, setIsAuthModalOpen } = useAuth();

  // Modals state
  const [selectedStreamForDetail, setSelectedStreamForDetail] = useState<TrainingStream | null>(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<string>('Sales Techniques for Better Performance');
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Track window scroll
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

  const handleOpenBooking = (courseName?: string) => {
    if (courseName) {
      setSelectedCourseForBooking(courseName);
    }
    setIsConsultationModalOpen(true);
  };

  const handleSelectStreamFromNav = (streamId: string) => {
    const stream = trainingStreams.find((s) => s.id === streamId);
    if (stream) {
      setSelectedStreamForDetail(stream);
    } else {
      scrollToSection('courses');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      
      {/* Top Header & Navbar */}
      <Navbar
        onBookConsultation={() => handleOpenBooking()}
        onSelectCourseStream={handleSelectStreamFromNav}
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onOpenProfile={() => {
          if (user) {
            setIsProfileModalOpen(true);
          } else {
            setIsAuthModalOpen(true);
          }
        }}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section (Motto & Overview) */}
        <Hero
          onExploreCourses={() => scrollToSection('courses')}
          onMeetTeam={() => scrollToSection('team')}
          onBookTraining={() => handleOpenBooking()}
        />

        {/* 2. About Us & The Inside Story (Pages 2 & 5) */}
        <AboutSection />

        {/* 3. Specialized Training Courses Catalog (Page 4: 7 Streams, 60+ Modules) */}
        <CoursesCatalog
          onSelectStream={(stream) => setSelectedStreamForDetail(stream)}
          onBookCourse={(courseTitle) => handleOpenBooking(courseTitle)}
        />

        {/* 4. Methodology, Objectives & Learning Outcomes (Page 3) */}
        <MethodologySection />

        {/* 5. The Building Blocks: Our People & Consultants (Pages 5, 7–14) */}
        <TeamSection
          onSelectMember={(member) => setSelectedTeamMember(member)}
        />

        {/* 6. Valued Corporate Customers (Page 6) */}
        <ClientsSection />

        {/* 7. Client Reviews & Feedback (Firestore Real-time) */}
        <ReviewsSection />

        {/* 8. Words of Wisdom & Guiding Quotes */}
        <QuotesSection />

        {/* 9. Official Contact & Headquarters Directory (Pages 1, 14) */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer
        onOpenAdmin={() => setIsAdminModalOpen(true)}
        onSelectCourseStream={handleSelectStreamFromNav}
      />

      {/* Floating Action Buttons */}
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
            Chat on WhatsApp: 01730-349633
          </span>
        </a>
      </div>

      {/* Interactive Detail Modals */}
      <CourseDetailModal
        stream={selectedStreamForDetail}
        onClose={() => setSelectedStreamForDetail(null)}
        onBookCourse={(course) => handleOpenBooking(course)}
      />

      <TeamDetailModal
        member={selectedTeamMember}
        onClose={() => setSelectedTeamMember(null)}
        onBookConsultant={(name) => handleOpenBooking(`Consultation with ${name}`)}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
        initialCourse={selectedCourseForBooking}
      />

      <AdminDashboardModal
        isOpen={isAdminModalOpen}
        onClose={() => setIsAdminModalOpen(false)}
      />

      <AuthModal />

      <UserProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        onSelectCourseForBooking={(course) => handleOpenBooking(course)}
      />

    </div>
  );
};

export function App() {
  return (
    <AuthProvider>
      <CmsProvider>
        <MainAppContent />
      </CmsProvider>
    </AuthProvider>
  );
}

export default App;
