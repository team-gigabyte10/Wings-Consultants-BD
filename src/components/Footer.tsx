import React from 'react';
import { Logo } from './Logo';
import { useCms } from '../context/CmsContext';
import { MapPin, Phone, Mail, ChevronRight, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAdmin: () => void;
  onSelectCourseStream: (streamId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin, onSelectCourseStream }) => {
  const { companyInfo, trainingStreams } = useCms();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="lg" isLight={true} />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              A dynamic training and development consulting firm, delivering advanced management solutions. We bridge theory and practical ground reality through experiential learning.
            </p>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs italic text-amber-300/90 font-serif">
              "Sky is not the Limit- It's an Opportunity"
            </div>
          </div>

          {/* Col 2: Training Streams */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Training Streams
            </h4>
            <ul className="space-y-1.5 text-xs">
              {trainingStreams.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => {
                      onSelectCourseStream(s.id);
                      scrollToSection('courses');
                    }}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-slate-400 hover:underline cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-500" />
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  About Us & Values
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('courses')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Course Overview (60+)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('methodology')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Methodology & Outcomes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('team')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Consultants & Fellows
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('clients')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Valued Corporate Clients
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-amber-400 transition-colors text-slate-400"
                >
                  Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Contacts */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Offices & Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Main Office:</strong> 7/9 Eastern Commercial Complex, 73 Kakrail, Dhaka.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-orange-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Liaison Office:</strong> 76 Mohakhali, Dhaka.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{companyInfo.phones.join(' | ')}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                <span>{companyInfo.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & staff link */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Wings Consultants. All rights reserved. Dhaka, Bangladesh.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenAdmin}
              className="hover:text-slate-300 flex items-center gap-1 cursor-pointer transition-colors"
            >
              <Lock className="w-3 h-3 text-amber-500" />
              <span>Internal Admin Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
