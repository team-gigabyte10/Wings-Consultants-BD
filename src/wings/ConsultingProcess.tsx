import React, { useState } from 'react';
import { useCms } from './WingsCmsContext';
import {
  MessageSquare,
  Search,
  Compass,
  FileCheck2,
  Headphones,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface ConsultingProcessProps {
  onBookConsultation: () => void;
}

export const ConsultingProcess: React.FC<ConsultingProcessProps> = ({ onBookConsultation }) => {
  const { consultingSteps } = useCms();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stepIcons = [
    MessageSquare,
    Search,
    Compass,
    FileCheck2,
    Headphones
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0a192f] text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Methodical & Transparent</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Our 5-Step Consulting Process
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            From initial exploratory meetings to final statutory approvals and ongoing post-filing support, our standardized roadmap ensures predictability and timely execution.
          </p>
        </div>

        {/* Desktop Horizontal Timeline Navigation */}
        <div className="hidden lg:grid grid-cols-5 gap-3 mb-10 relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -translate-y-1/2 z-0" />
          {consultingSteps.map((step, idx) => {
            const IconComp = stepIcons[idx] || MessageSquare;
            const isSelected = activeStepIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`relative z-10 p-4 rounded-xl text-center transition-all duration-200 flex flex-col items-center cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-b from-[#0f2c59] to-[#0284c7] border-2 border-amber-400 shadow-xl scale-105'
                    : 'bg-slate-900/90 border border-slate-700 hover:border-slate-500'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm mb-2.5 transition-colors ${
                    isSelected
                      ? 'bg-amber-400 text-slate-950 shadow-md'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                  Step {step.step}
                </span>
                <span className="text-xs font-bold text-white mt-0.5 line-clamp-1">
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step Details Box (Active Step on Desktop & Responsive List on Mobile) */}
        <div className="bg-slate-900/80 border border-slate-700 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Number & Title */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-700 pb-6 lg:pb-0 lg:pr-8">
              <div className="inline-block px-3 py-1 rounded-md bg-amber-500/20 text-amber-300 text-xs font-black uppercase tracking-widest mb-2">
                Phase {consultingSteps[activeStepIndex].step} of 05
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                {consultingSteps[activeStepIndex].title}
              </h3>
              <p className="text-xs text-sky-400 font-semibold mt-1">
                {consultingSteps[activeStepIndex].subtitle}
              </p>
            </div>

            {/* Description & Concrete Deliverable */}
            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {consultingSteps[activeStepIndex].description}
              </p>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-600/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Phase Key Deliverable:
                  </span>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    {consultingSteps[activeStepIndex].deliverable}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    disabled={activeStepIndex === 0}
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1.5 rounded bg-slate-700 hover:bg-slate-600 text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Prev
                  </button>
                  <button
                    disabled={activeStepIndex === consultingSteps.length - 1}
                    onClick={() => setActiveStepIndex((prev) => Math.min(consultingSteps.length - 1, prev + 1))}
                    className="px-3 py-1.5 rounded bg-sky-600 hover:bg-sky-500 text-xs disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile Vertical Stepper View */}
        <div className="lg:hidden mt-8 space-y-3">
          <p className="text-xs text-slate-400 text-center font-medium">
            Tap any step to explore details
          </p>
          <div className="grid grid-cols-2 gap-2">
            {consultingSteps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-xl text-left border text-xs font-bold transition-all ${
                  activeStepIndex === idx
                    ? 'bg-amber-400 text-slate-950 border-amber-400'
                    : 'bg-slate-900 text-slate-300 border-slate-700'
                }`}
              >
                <div className="text-[10px] opacity-75">Step {s.step}</div>
                <div className="truncate">{s.title}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Booking Prompt */}
        <div className="mt-12 text-center">
          <button
            onClick={onBookConsultation}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm shadow-lg transition-colors cursor-pointer"
          >
            <span>Start Step 01: Schedule Initial Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
