import React from 'react';
import { useCms } from './WingsCmsContext';
import { ShieldCheck, Briefcase, Building2, UserCheck } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const { companyInfo } = useCms();

  const statsItems = [
    {
      value: companyInfo.stats.yearsExperience,
      label: 'Years of Experience',
      sublabel: 'Decades of trusted consulting excellence',
      icon: ShieldCheck,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      value: companyInfo.stats.completedProjects,
      label: 'Projects & Assignments',
      sublabel: 'Profiles, tax files & factory setups',
      icon: Briefcase,
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10'
    },
    {
      value: companyInfo.stats.industrySectors,
      label: 'Industry Sectors',
      sublabel: 'Manufacturing, agro, trade & finance',
      icon: Building2,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    },
    {
      value: companyInfo.stats.clientSatisfaction,
      label: 'Consultancy Support',
      sublabel: 'Professional, reliable & confidential',
      icon: UserCheck,
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10'
    }
  ];

  return (
    <section className="bg-[#0f2c59] text-white py-10 sm:py-12 border-y border-sky-950 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsItems.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/40 transition-colors"
              >
                <div className={`p-3 rounded-lg ${stat.bgColor} shrink-0`}>
                  <IconComp className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-extrabold tracking-tight text-amber-300">
                    {stat.value}
                  </div>
                  <p className="text-sm font-bold text-white tracking-wide mt-0.5">
                    {stat.label}
                  </p>
                  <p className="text-xs text-slate-300 mt-1 hidden sm:block">
                    {stat.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
