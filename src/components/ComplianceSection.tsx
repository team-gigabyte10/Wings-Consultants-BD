import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  ShieldCheck,
  Building2,
  FileCheck,
  Award,
  FlaskConical,
  CheckCircle2
} from 'lucide-react';

export const ComplianceSection: React.FC = () => {
  const { compliances } = useCms();

  const iconMap: { [key: string]: any } = {
    Building2,
    ShieldCheck,
    FlaskConical,
    FileCheck,
    Award
  };

  return (
    <section id="compliance" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>আইনি কমপ্লায়েন্স ও বৈজ্ঞানিক অনুমোদন</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            সরকারি সনদ ও গুণগত নিশ্চয়তা
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            পিওর এন্টারপ্রাইজ লিমিটেড বাংলাদেশ সরকারের সকল বাণিজ্যিক, শিল্প ও প্রাণিসম্পদ নিয়ন্ত্রণকারী নীতিমালার শতভাগ পরিপালন নিশ্চিত করে।
          </p>
        </div>

        {/* 5 Compliances Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {compliances.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mb-3 shadow-xs group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="inline-block px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 mb-2">
                    {item.badgeBn}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-950 transition-colors">
                    {item.titleBn}
                  </h3>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    {item.authorityBn}
                  </div>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.descBn}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>যাচাইকৃত ও অনুমোদিত</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quality Commitment Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-amber-300">
              কেমিক্যালমুক্ত ও ব্যাকটেরিয়ারোধক শতভাগ খাঁটি লবণ
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              কক্সবাজার কারখানা থেকে প্রতিটি লট নিজস্ব মান নিয়ন্ত্রণ ল্যাবে পরীক্ষা করে ২ বছর স্থায়িত্বের নিশ্চয়তা প্রদান করা হয়।
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold">
              USI কমপ্লায়েন্ট
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-xs font-bold">
              BLRI ফর্মুলেশন
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
