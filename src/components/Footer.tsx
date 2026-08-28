import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Globe,
  ArrowRight,
  ShieldCheck,
  Lock,
  Star,
  FileText,
  X
} from 'lucide-react';

interface FooterProps {
  onNavigateToSection: (sectionId: string) => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateToSection, onOpenAdmin }) => {
  const { companyInfo, services } = useCms();
  const [legalModalContent, setLegalModalContent] = useState<{ title: string; body: string } | null>(null);

  const quickLinks = [
    { label: 'Home', id: 'top' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Industries We Serve', id: 'industries' },
    { label: 'Why Choose Us', id: 'why-us' },
    { label: 'Featured Projects', id: 'projects' },
    { label: 'Knowledge Base', id: 'resources' },
    { label: 'Frequently Asked Questions', id: 'faq' },
    { label: 'Contact Us', id: 'contact' }
  ];

  const openLegalModal = (type: 'privacy' | 'terms' | 'disclaimer') => {
    if (type === 'privacy') {
      setLegalModalContent({
        title: 'Privacy & Client Confidentiality Policy',
        body: `Wings Consultants BD is committed to safeguarding all client financial records, trade formulas, and tax documentation. We do not sell or disclose client corporate intelligence to third parties without explicit authorization under binding Non-Disclosure Agreements (NDAs). All statutory filings are prepared with utmost confidentiality in compliance with the laws of Bangladesh.`
      });
    } else if (type === 'terms') {
      setLegalModalContent({
        title: 'Terms of Professional Engagement',
        body: `All consultancy advisory, project profile developments, and regulatory filing support rendered by Wings Consultants BD are subject to formalized letters of engagement. Clients are responsible for providing authentic, verified source accounting and technical data required for statutory and bank loan compliance.`
      });
    } else {
      setLegalModalContent({
        title: 'Professional Regulatory Disclaimer',
        body: `Project profiles, financial sensitivity models, and feasibility forecasts prepared by Wings Consultants BD are advisory projections based on prevailing economic factors in Bangladesh. Bank loan approvals and regulatory license issuances remain subject to the independent evaluation and discretion of respective financial institutions, DGDA, BSTI, NBR, and statutory government authorities.`
      });
    }
  };

  return (
    <footer className="bg-[#08172c] text-slate-300 relative border-t-4 border-amber-400">
      
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Positioning (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/5 p-3 rounded-2xl inline-block border border-white/10">
              <Logo variant="light" showBadge={true} size="md" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Wings Consultants BD</strong> is a multidisciplinary corporate consultancy firm in Dhaka with <strong>25 years of trusted experience</strong>. We deliver bankable project profiles, corporate income tax management, investment documentation, and NGO development strategies.
            </p>

            {/* Tagline Badge */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1">
              <p className="text-xs text-amber-300 font-serif italic">
                "{companyInfo.tagline}"
              </p>
              <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                {companyInfo.brandMessage}
              </p>
            </div>

            {/* Direct Phone & WhatsApp */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{companyInfo.phones[0]}</span>
              </a>
              <a
                href="https://wa.me/8801730349633"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-700/60 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-amber-400 rounded-xs" />
              <span>Corporate Navigation</span>
            </h3>

            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigateToSection(link.id)}
                    className="hover:text-amber-300 transition-colors flex items-center gap-1.5 cursor-pointer text-slate-300 hover:translate-x-1 duration-150"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Practices (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-sky-400 rounded-xs" />
              <span>Core Practices</span>
            </h3>

            <ul className="space-y-2 text-xs">
              {services.map((serv) => (
                <li key={serv.id}>
                  <button
                    onClick={() => onNavigateToSection('services')}
                    className="hover:text-amber-300 transition-colors text-left text-slate-300 line-clamp-1 cursor-pointer"
                  >
                    {serv.title}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                <button
                  onClick={() => onNavigateToSection('resources')}
                  className="text-amber-400 text-xs font-bold hover:underline cursor-pointer"
                >
                  Download Practice Guides →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operating Hours (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-3.5 bg-emerald-400 rounded-xs" />
              <span>Dhaka Head Office</span>
            </h3>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{companyInfo.location}</span>
              </div>

              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-amber-300 break-all">
                  {companyInfo.email}
                </a>
              </div>

              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{companyInfo.website}</span>
              </div>

              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Business Hours:</strong>
                  <span>{companyInfo.businessHours}</span>
                  <span className="block text-slate-400">Friday: Closed</span>
                </div>
              </div>
            </div>

            {/* Admin Management Key Button */}
            <div className="pt-3">
              <button
                onClick={onOpenAdmin}
                className="w-full py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>Staff Lead Portal & CMS</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>
              © {new Date().getFullYear()} <strong>Wings Consultants BD</strong>. All rights reserved. A Professional Consultancy Firm, Dhaka, Bangladesh.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              25 Years of Experience You Can Trust • Regulated Corporate & Technical Advisory
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <button
              onClick={() => openLegalModal('privacy')}
              className="hover:text-slate-200 cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => openLegalModal('terms')}
              className="hover:text-slate-200 cursor-pointer"
            >
              Terms of Engagement
            </button>
            <span>•</span>
            <button
              onClick={() => openLegalModal('disclaimer')}
              className="hover:text-slate-200 cursor-pointer"
            >
              Regulatory Disclaimer
            </button>
          </div>
        </div>

      </div>

      {/* Legal Information Modal */}
      {legalModalContent && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl relative">
            <button
              onClick={() => setLegalModalContent(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-xl font-serif font-bold text-[#0f2c59] mb-3">
              {legalModalContent.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {legalModalContent.body}
            </p>

            <div className="text-right">
              <button
                onClick={() => setLegalModalContent(null)}
                className="px-4 py-2 bg-[#0f2c59] text-white rounded-lg text-xs font-bold hover:bg-[#0284c7] transition-colors cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
