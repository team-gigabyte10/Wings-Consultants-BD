import React from 'react';
import { useCms } from '../context/CmsContext';
import { Users, Award, ShieldCheck, MapPin } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const { companyInfo } = useCms();

  const stats = [
    {
      id: 'employment',
      icon: Users,
      value: companyInfo.stats.saltIndustryEmployment,
      label: 'লবণ শিল্পে কর্মসংস্থান',
      subtext: 'উপকূলীয় প্রান্তিক চাষী ও শ্রমিকদের প্রত্যক্ষ অংশীদার'
    },
    {
      id: 'shelflife',
      icon: Award,
      value: companyInfo.stats.shelfLifeYears,
      label: 'ল্যাব পরীক্ষিত শেল্ফ লাইফ',
      subtext: 'ব্যাকটেরিয়া প্রতিরোধী মান ও দীর্ঘস্থায়ী স্থায়িত্ব'
    },
    {
      id: 'blri',
      icon: ShieldCheck,
      value: 'BLRI ও DLS',
      label: 'সরকারি প্রযুক্তি ও লাইসেন্স',
      subtext: 'বাংলাদেশ প্রাণিসম্পদ গবেষণা ইনস্টিটিউটের বৈজ্ঞানিক সহায়তা'
    },
    {
      id: 'dealers',
      icon: MapPin,
      value: companyInfo.stats.nationwideDealers,
      label: 'দেশব্যাপী সরবরাহ চেইন',
      subtext: 'কক্সবাজার কারখানা থেকে সারাদেশের বিস্তৃত ডিলার নেটওয়ার্ক'
    }
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 text-white py-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-800/80">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="pt-4 lg:pt-0 lg:px-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-amber-400" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {item.value}
                </div>
                <div className="text-sm sm:text-base font-bold text-sky-200 mt-1">
                  {item.label}
                </div>
                <div className="text-xs text-slate-400 mt-1 max-w-[200px]">
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
