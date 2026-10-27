import React from 'react';
import { Logo } from './Logo';
import { useCms } from '../context/CmsContext';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Award,
  ChevronRight,
  Briefcase
} from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenAdmin: () => void;
  onOpenSisterConcern: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateToSection,
  onOpenAdmin,
  onOpenSisterConcern
}) => {
  const { companyInfo } = useCms();

  return (
    <footer className="bg-[#07172b] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Profile & Sister Concern (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="lg" isLight={true} />
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md pt-2">
              পিওর এন্টারপ্রাইজ লিমিটেড (Pure Enterprise Limited) কোম্পানি আইন ১৯৯৪-এর অধীন নিবন্ধিত একটি আধুনিক প্রাইভেট লিমিটেড কোম্পানি। কক্সবাজারের নিজস্ব প্ল্যান্ট থেকে দেশব্যাপী বিশুদ্ধ আয়োডিনযুক্ত লবণ ও মিনামিক্স সরবরাহকারী অগ্রদূত প্রতিষ্ঠান।
            </p>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-700/80 max-w-md">
              <div className="text-[11px] font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5" />
                <span>সহযোগী প্রতিষ্ঠান (Sister Concern)</span>
              </div>
              <div className="text-sm font-bold text-white mt-1">Wings Consultants BD</div>
              <p className="text-xs text-slate-400 mt-0.5">
                ট্যাক্স, ভ্যাট, অডিট, শিল্প কারখানা স্থাপন ও প্রকল্প অর্থায়নের ২৫ বছরের বিশ্বস্ত সঙ্গী।
              </p>
              <button
                onClick={onOpenSisterConcern}
                className="mt-2 text-xs font-semibold text-amber-400 hover:text-amber-300 underline underline-offset-4 cursor-pointer"
              >
                উইংস কনসালট্যান্টস প্রোফাইল দেখুন →
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              ন্যাভিগেশন
            </div>
            <ul className="space-y-2 text-xs">
              {[
                { id: 'hero', label: 'প্রচ্ছদ' },
                { id: 'about', label: 'কোম্পানি পরিচিতি' },
                { id: 'products', label: 'পণ্য ও ব্র্যান্ড' },
                { id: 'board', label: 'পরিচালনা পর্ষদ' },
                { id: 'sister-concern', label: 'সহযোগী প্রতিষ্ঠান' },
                { id: 'compliance', label: 'মান ও সনদ' },
                { id: 'dealership', label: 'ডিলার নেটওয়ার্ক' },
                { id: 'contact', label: 'যোগাযোগ' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigateToSection(link.id)}
                    className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              প্রধান পণ্যসমূহ
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-white transition-colors">• দেশী আয়োডিনযুক্ত লবণ</li>
              <li className="hover:text-white transition-colors">• সুলভ আয়োডিনযুক্ত লবণ</li>
              <li className="hover:text-white transition-colors">• মিনামিক্স (BLRI খনিজ মিশ্রণ)</li>
              <li className="hover:text-white transition-colors">• টেক্সটাইল ইন্ডাস্ট্রিয়াল সল্ট</li>
              <li className="hover:text-white transition-colors">• ডেইরি ও ফিড মিল সরবরাহ</li>
            </ul>

            <div className="pt-2 text-xs text-amber-400 font-medium">
              শেল্ফ লাইফ: ২ বছর (ল্যাব অনুমোদিত)
            </div>
          </div>

          {/* Column 4: Contact & Locations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-sm font-bold text-white uppercase tracking-wider">
              ঠিকানা ও তথ্য
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>কারখানা:</strong> {companyInfo.productionCenter}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span><strong>দপ্তর:</strong> {companyInfo.corporateOffice}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{companyInfo.phones[0]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{companyInfo.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Admin link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {companyInfo.nameBn} (Pure Enterprise Limited). সর্বস্বত্ব সংরক্ষিত।
          </div>

          <div className="flex items-center gap-6">
            <span>Sister Concern: Wings Consultants BD</span>
            <button
              onClick={onOpenAdmin}
              className="text-slate-400 hover:text-white underline underline-offset-4 cursor-pointer"
            >
              প্রশাসনিক লগইন
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
