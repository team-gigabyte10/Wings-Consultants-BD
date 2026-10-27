import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  Award,
  ArrowRight,
  TrendingUp,
  HeartHandshake,
  Target,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  onOpenDealership: () => void;
  onOpenSisterConcern: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenDealership,
  onOpenSisterConcern
}) => {
  const { companyInfo } = useCms();

  const corePillars = [
    {
      title: 'আয়োডিন ঘাটতি দূরীকরণ',
      desc: 'ইউনিসেফ ২০১১-এর তথ্যমতে যেখানে বাজারে ৫৫% প্যাকেট লবণে সঠিক আয়োডিন থাকে না, সেখানে আমরা সঠিক ও স্থায়ী মাত্রার আয়োডাইজেশন শতভাগ নিশ্চিত করি।'
    },
    {
      title: 'উপকূলীয় চাষীদের ক্ষমতায়ন',
      desc: 'কক্সবাজারের স্থানীয় লবণ চাষীদের সাথে দীর্ঘমেয়াদী অংশীদারিত্বের মাধ্যমে কাঁচামাল সংগ্রহ এবং তাদের টেকসই জীবিকা নিশ্চিতকরণ।'
    },
    {
      title: 'প্রাণিসম্পদ পুষ্টিতে পথিকৃৎ',
      desc: 'বাংলাদেশ প্রাণিসম্পদ গবেষণা ইনস্টিটিউট (BLRI)-এর বৈজ্ঞানিক সহায়তায় তৈরি মিনামিক্সের মাধ্যমে ডেইরি ও পশুসম্পদে বিপ্লব সাধন।'
    },
    {
      title: 'সামাজিক ও আর্থিক টেকসই উন্নয়ন',
      desc: 'পরিবেশ ও সামাজিক ভারসাম্য বজায় রেখে দেশীয় উৎপাদন সক্ষমতা বৃদ্ধি এবং বিদেশ হতে লবণ আমদানির নির্ভরতা হ্রাস করা।'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0b1e3b] text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-500" />
            <span>আমাদের পরিচিতি ও প্রেক্ষাপট</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            পিওর এন্টারপ্রাইজ লিমিটেড
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            কোম্পানি আইন ১৯৯৪-এর অধীন Joint Stock Companies and Firms (RJSC) নিবন্ধিত একটি দায়িত্বশীল প্রাইভেট লিমিটেড কোম্পানি (কার্যক্রম শুরু: ০১ জানুয়ারি ২০২০)।
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Story & Motto */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mission & Motto Highlight Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#07172b] to-[#0f2c59] text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>কোম্পানির মূল নীতিবাক্য (Motto)</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold leading-snug text-white font-serif-heading">
                “সামাজিক ও পরিবেশগত ভারসাম্য রক্ষা এবং আর্থিক টেকসই উন্নয়ন নিশ্চিত করা।”
              </blockquote>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                বাংলাদেশে প্রতি বছর ২.০ মিলিয়ন মেট্রিক টন লবণের চাহিদা রয়েছে, যার মধ্যে খাদ্য লবণ ০.৯ মিলিয়ন মেট্রিক টন। পিওর এন্টারপ্রাইজ দেশের উত্তরাঞ্চল ও প্রান্তিক সুবিধাবঞ্চিত জনগোষ্ঠীর সুস্বাস্থ্য সুরক্ষায় কেমিক্যালমুক্ত, যথাযথ আয়োডিনযুক্ত লবণ নিয়মিত পৌঁছে দেওয়ার ব্রত নিয়ে এগিয়ে চলেছে।
              </p>

              <div className="mt-6 pt-5 border-t border-slate-700 flex items-center justify-between text-xs text-sky-200">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span>কক্সবাজার উৎপাদন কমপ্লেক্স</span>
                </div>
                <div className="flex items-center gap-1 font-semibold text-amber-400">
                  <span>দেশব্যাপী সেলস নেটওয়ার্ক</span>
                </div>
              </div>
            </div>

            {/* Support to Farmers Card */}
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-amber-950">লবণ চাষীদের উন্নয়ন ও সামাজিক দায়বদ্ধতা</h4>
                <p className="text-xs text-amber-900/80 mt-1 leading-relaxed">
                  পিওর এন্টারপ্রাইজ শুধু আয়োডিন ঘাটতি দূর করতেই সীমাবদ্ধ নয়; বরং স্থানীয় লবণ চাষীদের ন্যায্য আয় ও টেকসই উৎপাদন বজায় রাখতে সরাসরি পৃষ্ঠপোষকতা প্রদান করে থাকে।
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars & Objectives */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-bold tracking-wider uppercase text-sky-600">আমাদের মূল অঙ্গীকার</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                বিশুদ্ধ পুষ্টি ও সামাজিক টেকসই উন্নয়নে ৪টি মূল ভিত্তি
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                ব্যবস্থাপনা পরিচালকের সরাসরি তত্ত্বাবধানে কক্সবাজারের নিজস্ব প্ল্যান্টে আধুনিক ওয়াশিং, আয়োডাইজেশন ও ল্যাব টেস্টিং নিশ্চিত করে প্রতিটি প্যাকেট ও ব্যাচ বাজারজাত করা হয়।
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 hover:border-sky-400 bg-slate-50/50 hover:bg-sky-50/30 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 group-hover:scale-110 transition-transform" />
                    <h4 className="text-sm font-bold text-slate-900">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Sister Concern Callout Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-sky-800 uppercase tracking-wider">কর্পোরেট সক্ষমতা ও সহযোগী প্রতিষ্ঠান</div>
                <h4 className="text-base font-bold text-[#0b1e3b] mt-0.5">Wings Consultants BD — সিস্টার কনসার্ন</h4>
                <p className="text-xs text-slate-600 mt-1">
                  ট্যাক্স, ভ্যাট, অডিট, শিল্প কারখানা স্থাপন ও প্রাতিষ্ঠানিক কমপ্লায়েন্সের ২৫ বছরের বিশ্বস্ত নাম।
                </p>
              </div>
              <button
                onClick={onOpenSisterConcern}
                className="shrink-0 px-4 py-2 rounded-xl bg-[#0b1e3b] text-white text-xs font-bold hover:bg-sky-900 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>সহযোগী প্রোফাইল</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenDealership}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all cursor-pointer shadow-md"
              >
                ডিলারশিপ তথ্য ও আবেদন
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
