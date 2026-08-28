import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle,
  ArrowRight,
  Phone
} from 'lucide-react';

interface FAQSectionProps {
  onBookConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onBookConsultation }) => {
  const { faqs, companyInfo } = useCms();
  const [openFaqId, setOpenFaqId] = useState<string>(faqs[0]?.id || '');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'Taxation', 'Project Finance', 'Industry Setup', 'NGO Services'];

  const filteredFaqs = faqs.filter((f) => {
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    const matchesSearch =
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? '' : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-500" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct answers regarding our consultancy practices, project profile drafting for bank loans, taxation management, and turnkey factory establishment.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#0f2c59] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className={`w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer transition-colors ${
                    isOpen ? 'bg-sky-50/70 text-[#0f2c59]' : 'bg-slate-50/50 hover:bg-slate-100/70 text-slate-900'
                  }`}
                >
                  <span className="text-sm sm:text-base font-bold pr-2">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-sky-200 text-[#0f2c59]' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 pt-2 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{faq.answer}</p>
                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Category: {faq.category}</span>
                      <button
                        onClick={onBookConsultation}
                        className="text-[#0f2c59] hover:text-sky-600 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <span>Need further clarification?</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900">
                Have a specific question not covered here?
              </p>
              <p className="text-xs text-slate-500">
                Call our direct advisory lines in Dhaka or send a message anytime.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-slate-300 text-slate-800 text-xs font-bold hover:bg-slate-100 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onBookConsultation}
              className="px-5 py-2 rounded-xl bg-[#0f2c59] hover:bg-[#0284c7] text-white text-xs font-bold transition-colors cursor-pointer"
            >
              Book Consultation
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
