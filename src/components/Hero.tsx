import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Award,
  Factory,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onOpenDealership: () => void;
  onOpenSisterConcern: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onOpenDealership,
  onOpenSisterConcern
}) => {
  const { companyInfo } = useCms();

  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#07172b] via-[#0b2247] to-[#0f2c59] text-white py-16 sm:py-24 lg:py-28">
      {/* Background Decorative Mesh & Glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bengali Main Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>কোম্পানি আইন ১৯৯৪ এর অধীন RJSC নিবন্ধিত প্রতিষ্ঠান (কার্যক্রম: ২০২০ থেকে)</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.2]">
              {companyInfo.nameBn}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-amber-300 mt-2 text-2xl sm:text-3xl lg:text-4xl">
                জাতির সুস্বাস্থ্য, সঠিক পুষ্টি ও টেকসই শিল্প উন্নয়নে অগ্রদূত
              </span>
            </h1>

            {/* Sub-description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              কক্সবাজারের নিজস্ব পরিশোধন কমপ্লেক্স থেকে দেশব্যাপী বিশুদ্ধ আয়োডিনযুক্ত ভোজ্য লবণ 
              <strong className="text-white font-semibold"> (দেশী ও সুলভ)</strong>, বাংলাদেশ প্রাণিসম্পদ গবেষণা ইনস্টিটিউট 
              <strong className="text-amber-300 font-semibold"> (BLRI) </strong> 
              প্রযুক্তি সহায়তায় উদ্ভাবিত অগ্রদূত ক্যাটল মিনারেল 
              <strong className="text-amber-300 font-semibold"> 'মিনামিক্স'</strong> এবং প্রাতিষ্ঠানিক 
              <strong className="text-white font-semibold"> 'ইন্ডাস্ট্রিয়াল সল্ট' </strong> 
              উৎপাদন ও সরবরাহকারী নির্ভরযোগ্য কর্পোরেট প্রতিষ্ঠান।
            </p>

            {/* Sister Concern Callout Badge */}
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/80 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 max-w-2xl mx-auto lg:mx-0">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-lg bg-sky-600/30 border border-sky-400/40 flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5 text-sky-300" />
                </div>
                <div>
                  <div className="text-xs text-sky-300 font-semibold uppercase tracking-wider">সহযোগী প্রতিষ্ঠান (Sister Concern)</div>
                  <div className="text-sm font-bold text-white">Wings Consultants BD — ২৫ বছরের পেশাদার অভিজ্ঞতা</div>
                </div>
              </div>
              <button
                onClick={onOpenSisterConcern}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-200 hover:bg-sky-500/30 transition-all border border-sky-400/30 flex items-center gap-1 cursor-pointer"
              >
                <span>সেবাসমূহ দেখুন</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-base hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              >
                <span>আমাদের পণ্য ও ব্র্যান্ডসমূহ</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenDealership}
                className="px-6 py-3.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-semibold text-base border border-slate-600 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>ডিলারশিপ ও বাল্ক অনুসন্ধান</span>
              </button>
            </div>

            {/* Quick Micro Badges */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>কক্সবাজার উৎপাদন কেন্দ্র</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>প্রাণিসম্পদ অধিদপ্তর (DLS) ছাড়পত্র</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>২ বছর ল্যাব টেস্টেড শেল্ফ লাইফ</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Brands Visual Bento Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3.5 sm:gap-4">
            
            {/* 1. Deshi Salt */}
            <div
              onClick={onExploreProducts}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-blue-950/70 border border-slate-700/60 hover:border-sky-400/60 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-sky-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-sky-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-xs text-sky-400 font-semibold">ভোজ্য লবণ</div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">দেশী লবণ</h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                সঠিক আয়োডিন ও সুষম লবণাক্ততাসম্পন্ন প্রিমিয়াম পারিবারিক লবণ।
              </p>
            </div>

            {/* 2. Shulov Salt */}
            <div
              onClick={onExploreProducts}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-emerald-950/70 border border-slate-700/60 hover:border-emerald-400/60 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-xs text-emerald-400 font-semibold">ভোজ্য লবণ</div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">সুলভ লবণ</h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                প্রান্তিক ও সাধারণ মানুষের ক্রয়ক্ষমতায় শতভাগ নিরাপদ আয়োডাইজড সল্ট।
              </p>
            </div>

            {/* 3. Minamix Cattle Mineral */}
            <div
              onClick={onExploreProducts}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-amber-950/70 border border-amber-500/40 hover:border-amber-400 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-amber-500/20 relative overflow-hidden"
            >
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider">
                BLRI
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-xs text-amber-400 font-semibold">প্রাণিসম্পদ উদ্ভাবন</div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">মিনামিক্স</h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                দুধের SNF বৃদ্ধি, হাড়ের গঠন ও মিল্ক ফিভার প্রতিরোধক বৈপ্লবিক খনিজ সম্পূরক।
              </p>
            </div>

            {/* 4. Industrial Salt */}
            <div
              onClick={onExploreProducts}
              className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/70 border border-slate-700/60 hover:border-sky-400/60 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-slate-500/10"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-700/40 text-slate-200 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Factory className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-400 font-semibold">শিল্প খাত</div>
              <h3 className="text-base sm:text-lg font-bold text-white mt-0.5">ইন্ডাস্ট্রিয়াল সল্ট</h3>
              <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                টেক্সটাইল, ডাইং ও ট্যানারির উচ্চ বিশুদ্ধতার গ্রেডেড বাল্ক লবণ।
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
