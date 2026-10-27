import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  Briefcase,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building,
  Receipt,
  Factory,
  FileText,
  Phone,
  Mail,
  Sparkles
} from 'lucide-react';

interface SisterConcernSectionProps {
  onOpenSisterConcernModal: () => void;
}

export const SisterConcernSection: React.FC<SisterConcernSectionProps> = ({
  onOpenSisterConcernModal
}) => {
  const { sisterConcern } = useCms();

  return (
    <section id="sister-concern" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 text-[#0b1e3b] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-sky-700" />
            <span>সহযোগী প্রতিষ্ঠান (Sister Concern)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            উইংস কনসালট্যান্টস বিডি (Wings Consultants BD)
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            পিওর এন্টারপ্রাইজ লিমিটেডের অঙ্গপ্রতিষ্ঠান — বাংলাদেশে শিল্প স্থাপন, কর-ভ্যাট ব্যবস্থাপনা ও প্রাতিষ্ঠানিক প্রজেক্ট ফাইন্যান্সের ২৫ বছরের নির্ভরযোগ্য পেশাদার প্রতিষ্ঠান।
          </p>
        </div>

        {/* Corporate Synergy Card */}
        <div className="bg-[#0b1e3b] text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>পিওর এন্টারপ্রাইজ ও উইংস কনসালট্যান্টসের মেলবন্ধন</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                উৎপাদন শিল্পের শক্ত ভিত্তি + কর্পোরেট পরামর্শের পেশাদারিত্ব
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {sisterConcern.descriptionBn}
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-sky-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>২৫ বছরের কর্পোরেট ট্র্যাক রেকর্ড</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>জাতীয় ও আন্তর্জাতিক বিনিয়োগ সহায়তা</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>আইনি ও ভ্যাট ঝুঁকি নিরসন</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-900/60 p-6 rounded-2xl border border-slate-700/80 text-center">
              <div className="text-4xl sm:text-5xl font-black text-amber-400 mb-1">২৫+</div>
              <div className="text-sm font-bold text-white uppercase tracking-wider">বছরের পেশাদার অভিজ্ঞতা</div>
              <p className="text-xs text-slate-300 mt-2 mb-4">
                ট্যাক্স, ভ্যাট, অডিট ও প্রজেক্ট ফাইন্যান্সিংয়ে শীর্ষ নির্ভরযোগ্য নাম।
              </p>
              <button
                onClick={onOpenSisterConcernModal}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
              >
                <span>উইংস কনসালট্যান্টস প্রোফাইল দেখুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* 4 Core Services of Wings Consultants BD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sisterConcern.servicesBn.map((srv) => (
            <div
              key={srv.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-sky-400 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-4 group-hover:bg-[#0b1e3b] group-hover:text-amber-400 transition-colors">
                  <Building className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0b1e3b] transition-colors">
                  {srv.titleBn}
                </h4>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {srv.descBn}
                </p>
                <div className="mt-3 space-y-1">
                  {srv.featuresBn.map((feat, fIdx) => (
                    <div key={fIdx} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-sky-700">
                <span>পরামর্শ গ্রহণ করুন</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
