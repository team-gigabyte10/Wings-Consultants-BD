import React from 'react';
import { useCms } from './WingsCmsContext';
import {
  FileText,
  AlertCircle,
  Compass,
  CheckCircle2,
  TrendingUp,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onBookConsultation: (topic?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onBookConsultation }) => {
  const { caseStudies } = useCms();

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f2c59]/5 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5 text-amber-500" />
            <span>Real Results & Value</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Consultancy Case Studies
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Detailed breakdowns of how our strategic advisory and statutory documentation resolved bottlenecks and delivered tangible enterprise growth.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((cs) => (
            <div
              key={cs.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Title */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-md bg-sky-50 text-sky-800 text-xs font-bold uppercase tracking-wider">
                    {cs.industry}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Verified Outcome
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0f2c59] leading-snug mb-6">
                  {cs.title}
                </h3>

                {/* Structured Breakdown: Challenge, Approach, Solution, Outcome */}
                <div className="space-y-4 text-xs sm:text-sm">
                  
                  {/* Challenge */}
                  <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100">
                    <div className="flex items-center gap-2 text-rose-800 font-bold mb-1">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-6">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="p-3.5 rounded-xl bg-sky-50/60 border border-sky-100">
                    <div className="flex items-center gap-2 text-sky-900 font-bold mb-1">
                      <Compass className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>Our Advisory Approach</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-6">
                      {cs.approach}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>The Solution Delivered</span>
                    </div>
                    <p className="text-slate-700 leading-relaxed pl-6">
                      {cs.solution}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200">
                    <div className="flex items-center gap-2 text-emerald-950 font-bold mb-1">
                      <TrendingUp className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Business Outcome</span>
                    </div>
                    <p className="text-emerald-900 font-medium leading-relaxed pl-6">
                      {cs.outcome}
                    </p>
                  </div>

                </div>

                {/* Metrics Highlight Strip */}
                <div className="grid grid-cols-3 gap-2 pt-6 mt-6 border-t border-slate-100">
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="text-center p-2 rounded-lg bg-slate-50">
                      <div className="text-sm sm:text-base font-black text-[#0f2c59]">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-medium">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Case Reference #BD-{cs.id}
                </span>
                <button
                  onClick={() => onBookConsultation(`Case Inquiry: ${cs.title}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f2c59] hover:text-sky-700 transition-colors cursor-pointer"
                >
                  <span>Discuss Similar Strategy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
