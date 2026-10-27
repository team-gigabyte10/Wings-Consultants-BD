import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';

interface FAQSectionProps {
  onOpenDealership: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenDealership }) => {
  const { faqs, companyInfo } = useCms();
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0b1e3b] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>প্রয়োজনীয় প্রশ্নোত্তর</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b1e3b] tracking-tight">
            সচরাচর জিজ্ঞাসিত প্রশ্নসমূহ (FAQ)
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            পিওর এন্টারপ্রাইজ লিমিটেডের কার্যক্রম, পণ্য, মিনামিক্স এবং সহযোগী প্রতিষ্ঠান উইংস কনসালট্যান্টস বিডি সম্পর্কিত সাধারণ প্রশ্নের উত্তর।
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-300 bg-sky-50/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-md shrink-0">
                      {faq.categoryBn}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.questionBn}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-sky-700' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100">
                    {faq.answerBn}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Contact Box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0b1e3b] text-amber-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">আপনার কি আরও কিছু জানার আছে?</div>
              <div className="text-xs text-slate-500">আমাদের কাস্টমার কেয়ার টিম ও সেলস রিপ্রেজেন্টেটিভ সার্বক্ষণিক সহায়তায় প্রস্তুত।</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
              className="px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-100 flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>{companyInfo.phones[0]}</span>
            </a>
            <button
              onClick={onOpenDealership}
              className="px-4 py-2 rounded-xl bg-[#0b1e3b] text-white text-xs font-bold hover:bg-sky-900 transition-colors cursor-pointer"
            >
              ডিলার অনুসন্ধান
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
