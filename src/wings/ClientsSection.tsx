import React from 'react';
import { useCms } from './WingsCmsContext';
import { Building2, Award } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const { clientPartners } = useCms();

  return (
    <section id="clients" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold tracking-widest uppercase mb-4">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Our Valued Customers</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Trusted by Bangladesh&apos;s Foremost Enterprises
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-600 text-base leading-relaxed">
            Over the past two decades, Wings Consultants has delivered strategic consultancy, corporate capacity-building, and financial advisory to leading multinational corporations, banks, NGOs, and industrial conglomerates.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {clientPartners.map((client) => (
            <div
              key={client.id}
              className="group bg-slate-50/70 hover:bg-[#0B1221] border border-slate-200/80 hover:border-amber-500/40 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-white group-hover:bg-amber-500/20 border border-slate-200/60 group-hover:border-amber-400/30 flex items-center justify-center text-blue-900 group-hover:text-amber-400 font-serif font-bold text-sm shadow-sm transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/80 text-blue-900 group-hover:bg-white/10 group-hover:text-amber-300 transition-colors">
                  {client.category}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-white text-base leading-snug transition-colors">
                  {client.name}
                </h3>
                {client.tagline && (
                  <p className="text-xs text-slate-500 group-hover:text-slate-300 mt-1 line-clamp-1 transition-colors">
                    {client.tagline}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quote Callout from Presentation */}
        <div className="mt-16 bg-slate-900 rounded-2xl p-8 md:p-10 text-center relative overflow-hidden border border-slate-800">
          <p className="text-white font-serif italic text-lg md:text-2xl max-w-4xl mx-auto mb-3 leading-relaxed">
            &ldquo;Keep on going, and the chances are that you will stumble on something, perhaps when you are least expecting it. I have never heard of anyone ever stumbling on something sitting down.&rdquo;
          </p>
          <p className="text-amber-400 text-xs font-bold uppercase tracking-widest">— Charles Kettering</p>
        </div>
      </div>
    </section>
  );
};

