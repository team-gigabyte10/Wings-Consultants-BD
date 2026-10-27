import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import {
  X,
  Briefcase,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ShieldCheck,
  Building,
  Receipt,
  Factory,
  FileText
} from 'lucide-react';

interface SisterConcernModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestConsultation?: (serviceTitle?: string) => void;
}

export const SisterConcernModal: React.FC<SisterConcernModalProps> = ({
  isOpen,
  onClose,
  onRequestConsultation
}) => {
  const { sisterConcern } = useCms();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#0b1e3b] text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-bold mb-2 border border-sky-400/30">
            <Briefcase className="w-3.5 h-3.5" />
            <span>সহযোগী প্রতিষ্ঠান (Sister Concern)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {sisterConcern.nameBn}
          </h2>
          <div className="text-xs text-sky-200 font-mono mt-0.5">
            {sisterConcern.name} • ২৫ বছরের নির্ভরযোগ্য কর্পোরেট পরামর্শ
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              পরিচিতি ও কৌশলগত অবস্থান
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {sisterConcern.descriptionBn}
            </p>
          </div>

          {/* Strategic Synergy Box */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-950">
            <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
              পিওর এন্টারপ্রাইজ ও উইংস কনসালট্যান্টস মেলবন্ধন
            </div>
            <p className="text-xs sm:text-sm mt-1 leading-relaxed">
              {sisterConcern.synergyHighlightBn}
            </p>
          </div>

          {/* Core Services Detailed */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              উইংস কনসালট্যান্টসের ৪টি প্রধান সেবা খাত
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sisterConcern.servicesBn.map((srv) => (
                <div key={srv.id} className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                  <div className="text-sm font-bold text-slate-900 mb-1">
                    {srv.titleBn}
                  </div>
                  <p className="text-xs text-slate-600 mb-2 leading-relaxed">
                    {srv.descBn}
                  </p>
                  <ul className="space-y-1">
                    {srv.featuresBn.map((feat, fIdx) => (
                      <li key={fIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 mb-3">
              সরাসরি কনসালটেন্সি যোগাযোগ
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{sisterConcern.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{sisterConcern.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{sisterConcern.addressBn}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{sisterConcern.contactPersonBn}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            বন্ধ করুন
          </button>

          <a
            href={`tel:${sisterConcern.phones[0].replace(/[^0-9+]/g, '')}`}
            className="px-6 py-2.5 rounded-xl bg-[#0b1e3b] text-white font-bold text-xs sm:text-sm hover:bg-sky-900 transition-colors shadow-md flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-amber-400" />
            <span>সরাসরি কনসালট্যান্টকে কল করুন</span>
          </a>
        </div>

      </div>
    </div>
  );
};
