import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { useCms } from './WingsCmsContext';
import { Container } from '../ui/Container';

/** Expert cards. `compact` is the short strip on the home page. */
export const ExpertsSection: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { experts } = useCms();
  if (experts.length === 0) return null;

  return (
    <section id="experts" className={`scroll-mt-24 ${compact ? 'py-14 bg-white' : 'py-16 sm:py-20 bg-slate-50 border-t border-slate-200'}`}>
      <Container>
        <div className="max-w-2xl mb-8">
          <div className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Our Experts</div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand">
            {compact ? 'Meet our specialist advisors' : 'The specialists behind our advisory'}
          </h2>
          {!compact && (
            <p className="mt-3 text-slate-600 leading-relaxed">
              Senior professionals who lead our practice areas and work directly with your leadership team.
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {experts.map((ex) => (
            <article
              key={ex.id}
              className="flex flex-col sm:flex-row gap-5 p-5 sm:p-6 bg-white rounded-2xl border border-slate-200 shadow-card"
            >
              <img
                src={ex.photo}
                alt={ex.name}
                loading="lazy"
                width={160}
                height={160}
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-xl object-cover object-top shrink-0 bg-slate-100"
              />
              <div className="flex flex-col min-w-0">
                <span className="self-start px-2.5 py-1 rounded-md bg-brand-soft text-brand text-xs font-bold">{ex.title}</span>
                <h3 className="mt-2 font-display text-xl font-bold text-slate-900">{ex.name}</h3>
                <p className="mt-0.5 text-sm text-slate-500">{ex.roles.join(' · ')}</p>
                {!compact && <p className="mt-3 text-sm text-slate-700 leading-relaxed">{ex.summary}</p>}
                {!compact && (
                  <dl className="mt-4 grid grid-cols-3 gap-2">
                    {ex.facts.map((f) => (
                      <div key={f.label} className="flex flex-col-reverse p-2 rounded-lg bg-slate-50 text-center">
                        <dt className="text-[11px] leading-tight text-slate-500 mt-0.5">{f.label}</dt>
                        <dd className="font-bold text-brand text-sm">{f.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <Link
                  to={`/wings/experts/${ex.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-accent hover:text-brand transition-colors"
                >
                  View profile
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
