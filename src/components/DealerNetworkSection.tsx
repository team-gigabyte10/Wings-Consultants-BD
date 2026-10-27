import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  MapPin,
  Truck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Store,
  Users
} from 'lucide-react';

interface DealerNetworkSectionProps {
  onOpenDealershipModal: () => void;
}

export const DealerNetworkSection: React.FC<DealerNetworkSectionProps> = ({
  onOpenDealershipModal
}) => {
  const steps = [
    {
      step: '০১',
      title: 'আবেদন বা যোগাযোগ',
      desc: 'আমাদের অনলাইন ফর্ম পূরণ করুন অথবা সরাসরি কক্সবাজার/ঢাকা সেলস টিমের সাথে যোগাযোগ করুন।'
    },
    {
      step: '০২',
      title: 'বাজার অঞ্চল নির্ধারণ',
      desc: 'আপনার পছন্দের জেলা, উপজেলা বা নির্দিষ্ট বাজার অঞ্চলে এক্সক্লুসিভ বা সেমি-এক্সক্লুসিভ টেরিটরি যাচাই।'
    },
    {
      step: '০৩',
      title: 'ডিলার চুক্তি ও অনুমোদন',
      desc: 'ব্যবস্থাপনা পরিচালকের অনুমোদনে সহজ শর্তে পাইকারি ডিলারশিপ চুক্তি সম্পাদন।'
    },
    {
      step: '০৪',
      title: 'কারখানা থেকে সরাসরি ডেলিভারি',
      desc: 'কক্সবাজার পরিশোধনাগার থেকে সরাসরি ট্রাক বা ট্রান্সপোর্টে আপনার গুদামে দ্রুত পণ্য পৌঁছে দেওয়া।'
    }
  ];

  return (
    <section id="dealership" className="py-16 sm:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-amber-700" />
            <span>সাপ্লাই চেইন ও ডিস্ট্রিবিউশন</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            দেশব্যাপী ডিলার নেটওয়ার্ক ও কক্সবাজার প্ল্যান্ট
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            কক্সবাজারের আধুনিক রিফাইনিং হাব থেকে ৬৪ জেলায় দেশী লবণ, সুলভ লবণ ও মিনামিক্স দ্রুত পৌঁছে দেওয়ার সুসংগঠিত নেটওয়ার্ক।
          </p>
        </div>

        {/* Big Banner Box */}
        <div className="bg-gradient-to-r from-[#0b1e3b] via-[#102a52] to-[#07172b] text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                নতুন ডিলার ও পাইকারি সরবরাহকারী নিয়োগ চলছে
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                আপনার এলাকায় পিওর এন্টারপ্রাইজের অনুমোদিত ডিলারশিপ গ্রহণ করুন
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                লবণ নিত্যপ্রয়োজনীয় এবং মিনামিক্স দেশের ডেইরি খামার ও ফিড মিলের এক নম্বর অগ্রদূত পুষ্টি উপাদান। আকর্ষণীয় ডিলার মার্জিন, বিক্রয়োত্তর সহায়তা এবং কক্সবাজার থেকে সরাসরি নিরবচ্ছিন্ন সরবরাহ নিশ্চয়তায় আপনার ব্যবসা এগিয়ে নিন।
              </p>
              
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-sky-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>উপজেলা ও জেলাভিত্তিক টেরিটরি অগ্রাধিকার</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  <span>ডেইরি খামার ও ফিড মিলের ব্যাপক চাহিদা</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center bg-slate-900/60 p-6 rounded-2xl border border-slate-700/80 text-center">
              <Store className="w-10 h-10 text-amber-400 mb-3" />
              <div className="text-base font-bold text-white">অনলাইন ডিলারশিপ আবেদন</div>
              <p className="text-xs text-slate-300 mt-1 mb-4">
                খুব সহজেই মাত্র ২ মিনিটে আপনার বাণিজ্যিক তথ্য দিয়ে আবেদন করুন।
              </p>
              <button
                onClick={onOpenDealershipModal}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
              >
                <span>আবেদন ফর্ম খুলুন</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* 4 Steps to Dealership */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 shadow-xs hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl font-black text-amber-500 mb-2 font-mono">
                {st.step}
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2">
                {st.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {st.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
