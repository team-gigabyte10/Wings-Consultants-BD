import React from 'react';
import { useCms } from './WingsCmsContext';
import {
  Quote,
  Star,
  Building,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useCms();

  return (
    <section className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Trusted by Leaders Across Bangladesh
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Direct feedback from entrepreneurs, corporate directors, NGO heads, and factory owners who relied on our 25 years of consultancy expertise.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300" />
                </div>

                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-slate-700 font-normal italic leading-relaxed">
                  "{test.testimonial}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0f2c59]">
                    {test.clientName}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {test.position}, <strong className="font-semibold text-slate-800">{test.company}</strong>
                  </p>
                  <span className="text-[11px] text-sky-700 font-medium">
                    Sector: {test.industry}
                  </span>
                </div>

                <div className="text-right">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>Verified Client</span>
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
