import React from 'react';
import { useCms } from '../context/CmsContext';
import { Quote, Sparkles } from 'lucide-react';

export const QuotesSection: React.FC = () => {
  const { inspirationalQuotes } = useCms();

  return (
    <section className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Words of Wisdom & Inspiration
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Guiding Philosophy & Thought Leadership
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            The principles of perseverance, continuous growth, and bold leadership that fuel our training methodologies.
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationalQuotes.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-amber-500 mb-3 opacity-60" />
                <p className="text-sm sm:text-base font-serif italic text-slate-800 leading-relaxed">
                  "{item.quote}"
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  — {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
