import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  ShieldCheck,
  CheckCircle2,
  Building,
  FileSpreadsheet,
  Award,
  ArrowRight,
  TrendingUp,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  onBookConsultation: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onBookConsultation }) => {
  const { companyInfo } = useCms();

  const coreFocusAreas = [
    {
      title: 'Professional Expertise',
      desc: 'Quarter-century of advisory experience across corporate taxation, statutory filings, and industrial compliance in Bangladesh.'
    },
    {
      title: 'Practical Solutions',
      desc: 'Action-oriented, commercially viable consulting frameworks that bridge regulatory mandates with daily enterprise operations.'
    },
    {
      title: 'Business Documentation',
      desc: 'Precision-crafted company profiles, investor pitch decks, donor proposals, and bank loan project files that command institutional trust.'
    },
    {
      title: 'Industry Setup & Compliance',
      desc: 'End-to-end factory layouts, cGMP cleanroom engineering, DGDA drug licensing, BSTI certification, and environmental permits.'
    },
    {
      title: 'Investment Support & Feasibility',
      desc: 'Comprehensive financial modeling, valuation, sensitivity testing, and joint venture feasibility analysis for local and foreign investors.'
    },
    {
      title: 'Project Development & Growth',
      desc: 'Holistic business growth blueprints, debt financing documentation, and ongoing follow-up support to scale operations safely.'
    }
  ];

  const milestones = [
    { year: '1999', title: 'Foundational Advisory', desc: 'Established in Dhaka, specializing in taxation, regulatory documentation, and business registrations.' },
    { year: '2008', title: 'Industrial & Project Expansion', desc: 'Expanded into industrial project profiles, bank loan documentation, and raw material supply chain consultancy.' },
    { year: '2016', title: 'Bank Project Finance & NGOs', desc: 'Formulated 100+ bankable project profiles and international donor grant proposals.' },
    { year: 'Present', title: '25 Years of Trusted Leadership', desc: 'The preferred partner for enterprises, investors, and manufacturers seeking sustainable growth.' }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>About Wings Consultants BD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Your Trusted Consulting Partner
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Wings Consultants BD is a premier corporate consultancy firm based in Dhaka, providing multidisciplinary business support, taxation management, industrial engineering, and financial documentation for individuals, entrepreneurs, organizations, investors, NGOs, manufacturers, and growing businesses across Bangladesh.
          </p>
        </div>

        {/* Narrative & Experience Badge Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story & Timeline Badge */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Experience Card */}
            <div className="relative rounded-2xl bg-gradient-to-br from-[#0f2c59] via-[#091f3d] to-[#040e1d] text-white p-7 sm:p-8 shadow-xl border border-sky-900/60 overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                    Heritage of Excellence
                  </span>
                  <h3 className="text-4xl font-serif font-black text-white mt-1">
                    25 Years
                  </h3>
                  <p className="text-sm text-slate-300 font-medium">Of Experience You Can Trust</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
                  <ShieldCheck className="w-9 h-9" />
                </div>
              </div>

              <div className="pt-6 space-y-3.5 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Headquartered in Dhaka, Bangladesh with nationwide client reach</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Proven record in NBR taxation, BSTI / DGDA compliance & bank loans</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span>Strict confidentiality and ethical business consultancy standards</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Corporate Motto</p>
                  <p className="text-sm font-serif italic text-amber-300">Your Vision, Our Expertise</p>
                </div>
                <button
                  onClick={onBookConsultation}
                  className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors cursor-pointer"
                >
                  Book Meeting
                </button>
              </div>
            </div>

            {/* Quick Location & Credential Tag */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-600" />
                <span className="font-semibold text-slate-800">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Sat - Thu, 9 AM - 6 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Core Value Pillars */}
          <div className="lg:col-span-7">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f2c59] mb-6">
              Our Multi-Disciplinary Consulting Strengths
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreFocusAreas.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-sky-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span className="w-2 h-2 rounded-full bg-sky-600 group-hover:bg-amber-500 transition-colors" />
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#0f2c59] transition-colors">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-4.5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-sm font-bold text-slate-900">
                  Ready to accelerate your business growth?
                </p>
                <p className="text-xs text-slate-500">
                  Schedule a confidential preliminary assessment with our senior partners.
                </p>
              </div>

              <button
                onClick={onBookConsultation}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0f2c59] hover:bg-[#081a33] text-white font-bold text-sm shadow-md transition-colors cursor-pointer"
              >
                <span>Learn More & Consult</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Visual Journey / Timeline */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
              Quarter-Century Milestone
            </span>
            <h3 className="text-2xl font-serif font-bold text-[#0f2c59] mt-2">
              Our Journey Over 25 Years
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((ms, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all duration-200"
              >
                <div className="text-2xl font-serif font-black text-amber-600 mb-1">
                  {ms.year}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-2">
                  {ms.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ms.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
