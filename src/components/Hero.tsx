import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  TrendingUp,
  CheckCircle2,
  PhoneCall,
  Star,
  Users
} from 'lucide-react';

interface HeroProps {
  onExploreServices: () => void;
  onBookConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onBookConsultation }) => {
  const { companyInfo } = useCms();

  const corePillars = [
    { label: 'EXPERTISE', icon: Award, desc: '25 Yrs Technical Knowledge' },
    { label: 'RELIABILITY', icon: ShieldCheck, desc: 'Dependable Support' },
    { label: 'QUALITY', icon: CheckCircle2, desc: 'Bankable Documentation' },
    { label: 'RESULTS', icon: TrendingUp, desc: 'Measurable Enterprise Growth' }
  ];

  return (
    <section className="relative bg-gradient-to-b from-slate-100 via-white to-slate-50 overflow-hidden border-b border-slate-200">
      {/* Subtle Background Geometric Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-sky-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:pt-14 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Tagline Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/80 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-sm sm:text-base text-sky-900 font-semibold tracking-wide">
                <span className="font-script text-xl sm:text-2xl text-[#0f2c59] mr-1">Your Vision,</span>
                <span className="font-sans font-bold text-amber-700">Our Expertise</span>
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-[#0f2c59] uppercase leading-tight">
                YOUR SUCCESS, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700">
                  OUR COMMITMENT
                </span>
              </h1>
            </div>

            {/* Supporting Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Providing professional solutions in <span className="text-slate-900 font-semibold">taxation</span>,{' '}
              <span className="text-slate-900 font-semibold">industry setup</span>,{' '}
              <span className="text-slate-900 font-semibold">investment documentation</span>,{' '}
              <span className="text-slate-900 font-semibold">project development</span>, and{' '}
              <span className="text-slate-900 font-semibold">business growth</span>.
            </p>

            {/* CTAs & Trust Mini-badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#0f2c59] to-[#0284c7] hover:from-[#081b38] hover:to-[#0369a1] shadow-lg shadow-sky-950/20 hover:shadow-xl transition-all duration-200 cursor-pointer group"
              >
                <span>Get a Consultation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-base text-[#0f2c59] bg-white hover:bg-slate-50 border-2 border-slate-300 shadow-xs hover:border-[#0f2c59] transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
              </button>
            </div>

            {/* Quick direct contact indicator */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
                <span>Call Directly: <strong className="text-slate-900">+880 1730-349633</strong></span>
              </span>
              <span className="hidden sm:inline text-slate-300">•</span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                <span>Confidential & Professional Consulting</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Composite matching the Official Banner */}
          <div className="lg:col-span-5 relative">
            
            {/* 25 Years Badge Floating Top Right */}
            <div className="relative z-20 mb-4 sm:mb-0 lg:absolute lg:-top-6 lg:-right-4 bg-gradient-to-r from-[#0f2c59] to-[#091e3d] text-white p-4 rounded-2xl shadow-xl border-2 border-amber-400/80 flex items-center gap-3.5 max-w-xs mx-auto lg:mx-0">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-900 font-extrabold text-xl shrink-0 shadow-md">
                25
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-400 text-xs">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                </div>
                <p className="text-xs font-black tracking-wider uppercase text-amber-300">
                  YEARS OF EXPERIENCE
                </p>
                <p className="text-[11px] text-slate-300 font-medium">YOU CAN TRUST</p>
              </div>
            </div>

            {/* Multi-Photo Grid with Corporate Imagery */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
              
              {/* Main Top Showcase: Business Handshake & Meeting */}
              <div className="relative h-56 sm:h-64 overflow-hidden group">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80"
                  alt="Wings Consultants BD - Business Handshake & Advisory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/90 via-transparent to-black/30" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-amber-500 text-slate-900">
                    Trusted Enterprise Advisory
                  </span>
                  <p className="text-sm font-semibold text-white mt-1 drop-shadow-sm">
                    Corporate Strategy, Taxation & Statutory Approvals
                  </p>
                </div>
              </div>

              {/* Bottom 2-Tile Grid: Industrial Setup & Financial Documentation */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-white">
                <div className="relative h-36 overflow-hidden rounded-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=500&q=80"
                    alt="Financial Calculations and Project Profiles"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-2.5">
                    <div>
                      <p className="text-[11px] font-bold text-amber-300">Tax & Bank Profiles</p>
                      <p className="text-[10px] text-slate-200">100% Bank-Compliant</p>
                    </div>
                  </div>
                </div>

                <div className="relative h-36 overflow-hidden rounded-lg group">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=500&q=80"
                    alt="Industrial and Manufacturing Facility Setup"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent flex items-end p-2.5">
                    <div>
                      <p className="text-[11px] font-bold text-sky-300">Industrial & Project Setup</p>
                      <p className="text-[10px] text-slate-200">Manufacturing, FMCG & Agro</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Small Location Confirmation Tag */}
            <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-2">
              <span className="font-medium text-[#0f2c59]">Wings Consultants BD</span>
              <span className="text-slate-400">Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Strip (EXPERTISE, RELIABILITY, QUALITY, RESULTS) matching Banner */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-sky-300 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0f2c59] text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-[#0284c7] group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xs sm:text-sm font-black tracking-wider uppercase text-[#0f2c59]">
                      {pillar.label}
                    </h2>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
