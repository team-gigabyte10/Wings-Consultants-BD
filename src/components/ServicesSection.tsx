import React from 'react';
import { useCms } from '../context/CmsContext';
import { ServiceItem } from '../types';
import {
  Receipt,
  Factory,
  Presentation,
  Users2,
  ClipboardCheck,
  PackageCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onBookConsultationForService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onBookConsultationForService
}) => {
  const { services } = useCms();

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Receipt':
        return Receipt;
      case 'Factory':
        return Factory;
      case 'Presentation':
        return Presentation;
      case 'Users2':
        return Users2;
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'PackageCheck':
        return PackageCheck;
      default:
        return ClipboardCheck;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0f2c59]/5 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Our Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Comprehensive Corporate Services
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering tailored, bankable, and statutory-compliant consultancy across our core business practices to fuel growth and ensure zero compliance friction.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, idx) => {
            const IconComp = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="flex flex-col justify-between bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  {/* Service Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#0f2c59] to-[#0284c7] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-6 h-6 text-amber-300" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-400 group-hover:text-amber-500 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Category Tag */}
                  <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md">
                    {service.tag}
                  </span>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0f2c59] mt-3 group-hover:text-sky-900 transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullet checklist snippet */}
                  <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Key Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.keyServices.slice(0, 4).map((ks, kIdx) => (
                        <li key={kIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{ks}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-[#0f2c59] hover:text-sky-600 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookConsultationForService(service.title)}
                    className="px-3.5 py-1.5 rounded-lg bg-[#0f2c59] hover:bg-[#0284c7] text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    {service.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Services CTA Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0f2c59] to-[#081a33] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              Have a unique regulatory or business project in mind?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our 25-year experienced senior advisory team provides custom tailored consultancy for complex multi-sector assignments.
            </p>
          </div>

          <button
            onClick={() => onBookConsultationForService('Custom Multi-Sector Consultancy')}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-md transition-colors cursor-pointer"
          >
            Request Custom Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
