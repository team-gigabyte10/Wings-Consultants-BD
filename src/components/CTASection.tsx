import React from 'react';
import { useCms } from '../context/CmsContext';
import { ArrowRight, PhoneCall, Sparkles, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onBookConsultation: () => void;
  onContactClick: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({
  onBookConsultation,
  onContactClick
}) => {
  const { companyInfo } = useCms();

  return (
    <section className="bg-gradient-to-br from-[#0a192f] via-[#0f2c59] to-[#040e1d] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>25 Years of Proven Excellence</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-white mb-4">
          Let's Build Your Success Together
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto font-normal leading-relaxed mb-8">
          Wings Consultants BD is your trusted partner for professional consultancy, project development, industry setup, taxation, documentation, and business growth.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-950/30 transition-all cursor-pointer group"
          >
            <span>Book a Consultation</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Hotline Mini Tag */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Hotline: <strong className="text-white">{companyInfo.phones[0]}</strong></span>
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Confidential & Professional Standards</span>
          </span>
        </div>

      </div>
    </section>
  );
};
