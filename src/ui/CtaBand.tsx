import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';

interface CtaBandProps {
  title: string;
  text: string;
  primary: { label: string; onClick: () => void };
  secondary?: { label: string; href: string };
}

export const CtaBand: React.FC<CtaBandProps> = ({ title, text, primary, secondary }) => (
  <section className="py-14 sm:py-16 bg-brand-soft">
    <Container className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
      <div className="max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand">{title}</h2>
        <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
      </div>
      <div className="flex flex-wrap gap-3 shrink-0">
        <button
          onClick={primary.onClick}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand text-white font-bold hover:bg-brand-dark shadow-sm transition-colors cursor-pointer"
        >
          {primary.label}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
        {secondary && (
          <a
            href={secondary.href}
            className="inline-flex items-center px-6 py-3 rounded-lg border border-brand/30 text-brand font-bold hover:bg-white transition-colors"
          >
            {secondary.label}
          </a>
        )}
      </div>
    </Container>
  </section>
);
