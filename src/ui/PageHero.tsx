import React from 'react';
import { Link, useLocation } from 'react-router';
import { ChevronRight } from 'lucide-react';
import { Container } from './Container';
import { JsonLd } from './JsonLd';
import { absoluteUrl } from '../lib/site';

export interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}

/** Banner at the top of every inner page: breadcrumb, title and short intro. */
export const PageHero: React.FC<PageHeroProps> = ({ eyebrow, title, subtitle, crumbs, children }) => {
  const { pathname } = useLocation();
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.to ?? pathname)
    }))
  };

  return (
    <section className="relative overflow-hidden bg-brand-dark text-white">
      <JsonLd data={breadcrumbLd} />
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:22px_22px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/25 blur-3xl pointer-events-none" />

      <Container className="relative py-12 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-300">
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-500" aria-hidden />}
                {c.to ? (
                  <Link to={c.to} className="hover:text-white transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white font-semibold">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {eyebrow && (
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-accent-soft/90 mb-2">{eyebrow}</div>
        )}
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-tight">
          {title}
        </h1>
        {subtitle && <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-7 flex flex-wrap gap-3">{children}</div>}
      </Container>
    </section>
  );
};
