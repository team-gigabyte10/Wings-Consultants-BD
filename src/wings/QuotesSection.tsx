import React from 'react';
import { useCms } from './WingsCmsContext';
import { Quote, Sparkles } from 'lucide-react';

export const QuotesSection: React.FC = () => {
  const { inspirationalQuotes } = useCms();

  if (!inspirationalQuotes || inspirationalQuotes.length === 0) return null;

  return (
    <section className="py-20 bg-[#0B1221] text-white relative overflow-hidden border-t border-slate-800/80">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(245,158,11,0.08),transparent_60%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Words of Wisdom &amp; Inspiration</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            Guiding Philosophy &amp; Thought Leadership
          </h2>
          <p className="text-slate-400 text-sm">
            Timeless principles of perseverance, integrity, and excellence that inspire our advisory ethos at Wings Consultants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inspirationalQuotes.map((item, idx) => (
            <div
              key={item.id || idx}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/5 group"
            >
              <div>
                <Quote className="w-7 h-7 text-amber-500/40 group-hover:text-amber-400 mb-3 transition-colors" />
                <p className="text-slate-200 text-sm italic leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
              </div>
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">— {item.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
