import React from 'react';
import { ServiceItem } from '../wingsTypes';
import { useCms } from './WingsCmsContext';
import {
  X,
  CheckCircle2,
  Building,
  ArrowRight,
  ShieldCheck,
  FileCheck2,
  Calendar,
  Sparkles,
  Phone
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onBookConsultation
}) => {
  const { companyInfo } = useCms();

  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Banner */}
        <div className="relative bg-gradient-to-r from-[#0f2c59] to-[#0369a1] text-white p-6 sm:p-8 rounded-t-2xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{service.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            {service.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-200 max-w-xl leading-relaxed">
            {service.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Detailed Overview */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Practice Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Services & Deliverables Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            
            {/* Key Services Checklist */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-3 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-sky-600" />
                <span>Scope of Services</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {service.keyServices.map((ks, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{ks}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables & Client Outcomes */}
            <div className="p-5 rounded-xl bg-sky-50/60 border border-sky-200">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0f2c59] mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600" />
                <span>Client Deliverables</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <span className="font-medium text-slate-900">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries Served */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-slate-600" />
              <span>Target Sectors & Beneficiaries</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.industriesServed.map((ind, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {/* Key Value Proposition */}
          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Why Consult Wings Consultants BD
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.benefits.map((ben, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-amber-50/50 border border-amber-200/60 text-xs text-amber-950 font-medium">
                  {ben}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 rounded-b-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-600" />
            <span>Direct Inquiry: <strong className="text-slate-900">{companyInfo.phones[0]}</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:bg-slate-100 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookConsultation(service.title);
              }}
              className="w-1/2 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0f2c59] to-[#0284c7] hover:from-[#081a33] hover:to-[#0369a1] shadow-md transition-all cursor-pointer"
            >
              <span>{service.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
