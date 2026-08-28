import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  Award,
  ShieldCheck,
  FileCheck,
  TrendingUp,
  History,
  Users,
  Check
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { whyChoose } = useCms();

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return Award;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'FileCheck':
        return FileCheck;
      case 'TrendingUp':
        return TrendingUp;
      case 'History':
        return History;
      case 'Users':
        return Users;
      default:
        return Award;
    }
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Why Wings Consultants BD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Built on 25 Years of Uncompromising Integrity
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We merge deep regulatory knowledge in Bangladesh with practical commercial acumen, ensuring your ventures are compliant, bankable, and positioned for sustained profitability.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChoose.map((item, idx) => {
            const IconComp = getPillarIcon(item.icon);
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0f2c59] group-hover:bg-[#0f2c59] group-hover:text-amber-400 transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black tracking-widest text-slate-300 group-hover:text-amber-500">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0f2c59] group-hover:text-sky-950 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5 mb-2">
                    {item.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed Standards</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
