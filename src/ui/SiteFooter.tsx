import React from 'react';
import { Link } from 'react-router';
import { Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Container } from './Container';

export interface FooterColumn {
  title: string;
  links: { to: string; label: string }[];
}

interface SiteFooterProps {
  logo: React.ReactNode;
  about: string;
  aside?: React.ReactNode;
  columns: FooterColumn[];
  contactTitle: string;
  addresses: { label: string; text: string }[];
  phones: string[];
  email: string;
  socials: { facebook?: string; linkedin?: string };
  copyright: string;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  logo,
  about,
  aside,
  columns,
  contactTitle,
  addresses,
  phones,
  email,
  socials,
  copyright
}) => (
  <footer className="bg-brand-dark text-slate-300">
    <Container className="pt-16 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
        <div className="sm:col-span-2 lg:col-span-4 space-y-4">
          {logo}
          <p className="text-sm text-slate-400 leading-relaxed max-w-md">{about}</p>
          {aside}
          <div className="flex gap-2 pt-1">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="p-2 rounded-lg bg-white/5 hover:bg-white/15 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/5 hover:bg-white/15 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2 space-y-3">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">{col.title}</h2>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.to + l.label}>
                  <Link to={l.to} className="text-slate-400 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="sm:col-span-2 lg:col-span-4 space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider">{contactTitle}</h2>
          <ul className="space-y-3 text-sm text-slate-400">
            {addresses.map((a) => (
              <li key={a.label} className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                <span>
                  <strong className="text-slate-200">{a.label}:</strong> {a.text}
                </span>
              </li>
            ))}
            {phones.map((p) => (
              <li key={p} className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" aria-hidden />
                <a href={`tel:${p.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-accent shrink-0" aria-hidden />
              <a href={`mailto:${email}`} className="hover:text-white break-all">
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="pt-8 text-xs text-slate-500 flex flex-col sm:flex-row justify-between gap-3">
        <span>{copyright}</span>
        <span>A member of Pure Enterprise Group</span>
      </div>
    </Container>
  </footer>
);
