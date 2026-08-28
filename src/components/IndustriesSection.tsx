import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import {
  Coins,
  Factory,
  Sparkles,
  Wheat,
  HeartHandshake,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Building2
} from 'lucide-react';

interface IndustriesSectionProps {
  onBookConsultation: (industryName?: string) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onBookConsultation }) => {
  const { industries } = useCms();
  const [selectedIndustry, setSelectedIndustry] = useState<string>(industries[0]?.id || '');

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Coins':
        return Coins;
      case 'Factory':
        return Factory;
      case 'Sparkles':
        return Sparkles;
      case 'Wheat':
        return Wheat;
      case 'HeartHandshake':
        return HeartHandshake;
      case 'Rocket':
        return Rocket;
      case 'TrendingUp':
        return TrendingUp;
      default:
        return Building2;
    }
  };

  const activeInd = industries.find((i) => i.id === selectedIndustry) || industries[0];

  return (
    <section id="industries" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Sectors We Empower</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            With 25 years of specialized sector knowledge, we help clients across manufacturing, finance, health care, agro-business, and the non-profit sector navigate regulatory landscapes.
          </p>
        </div>

        {/* Industry Tabs & Active Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Vertical Industry Selectors */}
          <div className="lg:col-span-5 space-y-2">
            {industries.map((ind) => {
              const IconComp = getIndustryIcon(ind.icon);
              const isActive = ind.id === activeInd.id;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    isActive
                      ? 'bg-[#0f2c59] text-white border-[#0f2c59] shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/80'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`p-2.5 rounded-lg ${
                        isActive
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-white text-[#0f2c59] border border-slate-200'
                      }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-900'}`}>
                        {ind.title}
                      </h4>
                      <p className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'} line-clamp-1`}>
                        {ind.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? 'text-amber-400 translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Industry Deep Dive */}
          <div className="lg:col-span-7 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden mb-6 group">
              <img
                src={activeInd.image}
                alt={activeInd.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/90 via-[#0f2c59]/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded bg-amber-400 text-slate-950">
                  Sector Specialization
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                  {activeInd.title}
                </h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
              {activeInd.description}
            </p>

            {/* Key Consulting Areas */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-3">
                Key Sector Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeInd.keyConsultingAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Box if available */}
            {activeInd.caseHighlight && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 mb-6 flex items-start gap-3">
                <span className="text-base">📌</span>
                <div>
                  <strong className="font-bold">Track Record: </strong>
                  <span>{activeInd.caseHighlight}</span>
                </div>
              </div>
            )}

            {/* Action */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
              <p className="text-xs text-slate-500">
                Discuss your sector requirements with our domain experts.
              </p>
              <button
                onClick={() => onBookConsultation(`Sector Advisory: ${activeInd.title}`)}
                className="px-5 py-2.5 rounded-xl bg-[#0f2c59] hover:bg-[#0284c7] text-white text-xs font-bold shadow-md transition-colors cursor-pointer"
              >
                Inquire for {activeInd.title}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
