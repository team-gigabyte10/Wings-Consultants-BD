import React from 'react';
import { useCms } from '../context/CmsContext';
import { Building2, ShieldCheck, Quote, Star, Award } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const { clientPartners } = useCms();

  return (
    <section id="clients" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Our Valued Customers
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Trusted by Bangladesh's Foremost Enterprises
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Wings Consultants has proudly facilitated high-impact corporate training and strategic advisory for leading conglomerates, NGOs, banking institutions, and manufacturing powerhouses.
          </p>
        </div>

        {/* Corporate Client Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          {clientPartners.map((client) => (
            <div
              key={client.id}
              className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-amber-400 transition-all duration-200 flex flex-col justify-between items-center text-center group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-amber-50 text-slate-700 group-hover:text-amber-700 flex items-center justify-center mb-3 transition-colors">
                <Building2 className="w-6 h-6" />
              </div>

              <div>
                <h4 className="text-sm font-serif font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {client.name}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5 line-clamp-1">
                  {client.category}
                </p>
              </div>

              {client.tagline && (
                <span className="mt-3 text-[9.5px] uppercase tracking-wider text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/60">
                  {client.tagline}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Famous Quote Banner from Page 6 */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 text-center relative overflow-hidden shadow-xl">
          <Quote className="w-8 h-8 text-amber-400 mx-auto mb-3 opacity-80" />
          <p className="text-lg sm:text-2xl font-serif italic max-w-3xl mx-auto leading-relaxed">
            "High achievement always takes place in the framework of high expectations."
          </p>
          <div className="mt-3 text-xs font-bold uppercase tracking-widest text-amber-400">
            — Charles Kettering
          </div>
        </div>

      </div>
    </section>
  );
};
