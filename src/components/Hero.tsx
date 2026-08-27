import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  CheckCircle2,
  Building2,
  GraduationCap,
  Quote
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onMeetTeam: () => void;
  onBookTraining: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreCourses,
  onMeetTeam,
  onBookTraining
}) => {
  const { companyInfo } = useCms();

  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      
      {/* Subtle Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top "We Serve" Pill Badge as shown on Page 1 of brochure */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide shadow-inner">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="uppercase tracking-widest font-bold">We Serve</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-200">Leading Corporations, Financial Institutions & Enterprises</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Message & Motto */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <h2 className="text-sm sm:text-base font-bold text-amber-400 uppercase tracking-widest mb-2 font-mono">
              Wings Consultants
            </h2>
            
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight mb-4">
              Sky is not the Limit— <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                It’s an Opportunity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-6">
              A dynamic training and development consulting firm delivering advanced management solutions. We empower human potential through experiential learning, actionable business strategies, and proven corporate leadership.
            </p>

            {/* Quick Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">7 Core Training Streams</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">60+ Practical Modules</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Experiential "Learning by Doing"</span>
              </div>
              <div className="flex items-center gap-2.5 bg-slate-800/60 border border-slate-700/60 px-3.5 py-2.5 rounded-lg">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-200 font-medium">Senior C-Suite Facilitators</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onExploreCourses}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold px-6 py-3.5 rounded-xl text-sm sm:text-base shadow-lg shadow-amber-900/30 hover:shadow-orange-900/50 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>Explore Course Catalog (60+)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onMeetTeam}
                className="inline-flex items-center gap-2 bg-slate-800/90 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold px-5 py-3.5 rounded-xl text-sm sm:text-base border border-slate-700 transition-all cursor-pointer"
              >
                <Users className="w-4 h-4 text-amber-400" />
                <span>Meet Our Consultants</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase & Quote Banner */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Visual Card */}
              <div className="bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/80 rounded-2xl p-5 shadow-2xl backdrop-blur-md relative overflow-hidden">
                
                {/* Visual Header Image representation */}
                <div className="relative h-52 sm:h-60 rounded-xl overflow-hidden mb-4 border border-slate-700">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
                    alt="Corporate Training and Development Session"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider bg-slate-900/90 px-2 py-0.5 rounded border border-amber-400/30">
                        Executive Mastery
                      </span>
                      <h3 className="text-white font-bold text-base mt-1">
                        High-Value Corporate Training & Facilitation
                      </h3>
                      <p className="text-slate-300 text-xs">
                        Interactive workshops in Bangla & English
                      </p>
                    </div>
                  </div>
                </div>

                {/* Signature Quote as shown on Page 2 */}
                <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-l-4 border-amber-500 p-4 rounded-r-lg">
                  <Quote className="w-4 h-4 text-amber-400 mb-1" />
                  <p className="text-xs sm:text-sm text-slate-200 italic font-serif">
                    "Your attitude, not your aptitude, will determine your altitude."
                  </p>
                  <p className="text-[11px] font-bold text-amber-400 mt-1 text-right">
                    — Zig Ziglar
                  </p>
                </div>

                {/* Highlights row */}
                <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t border-slate-800 text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-amber-400">50+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Clients</div>
                  </div>
                  <div className="border-x border-slate-800">
                    <div className="text-lg sm:text-xl font-bold text-white">60+</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Courses</div>
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl font-bold text-emerald-400">100%</div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Practical</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
