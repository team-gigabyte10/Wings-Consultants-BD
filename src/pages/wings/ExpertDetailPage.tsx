import React from 'react';
import { Link, Navigate, useParams } from 'react-router';
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  GraduationCap,
  Linkedin,
  Phone,
  Quote,
  Target
} from 'lucide-react';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { Container } from '../../ui/Container';
import { JsonLd } from '../../ui/JsonLd';
import { absoluteUrl } from '../../lib/site';

export default function WingsExpertDetailPage() {
  const { slug } = useParams();
  const { experts, companyInfo, openConsultation } = useCms();
  const expert = experts.find((e) => e.slug === slug);

  usePageMeta({
    title: expert ? `${expert.name}, ${expert.title} | Wings Consultants BD` : 'Wings Consultants BD',
    description: expert?.summary,
    lang: 'en',
    image: expert?.photo
  });

  if (!expert) return <Navigate to="/wings/about#experts" replace />;

  const book = () => openConsultation(expert.consultationTopic);
  const otherExperts = experts.filter((e) => e.id !== expert.id);

  const personLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: expert.name,
    jobTitle: expert.title,
    image: absoluteUrl(expert.photo),
    url: absoluteUrl(`/wings/experts/${expert.slug}`),
    worksFor: { '@id': absoluteUrl('/wings#organization'), name: 'Wings Consultants BD' },
    knowsAbout: expert.expertise.map((x) => x.area),
    ...(expert.linkedin ? { sameAs: [expert.linkedin] } : {})
  };

  return (
    <>
      <JsonLd data={personLd} />

      <PageHero
        eyebrow={expert.title}
        title={expert.name}
        subtitle={expert.roles.join(' · ')}
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'About', to: '/wings/about' }, { label: expert.name }]}
      >
        <button
          onClick={book}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand font-bold hover:bg-slate-100 transition-colors cursor-pointer"
        >
          Book a session with {expert.name}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-brand mb-3">Executive profile</h2>
              {expert.bioParagraphs && expert.bioParagraphs.length > 0 ? (
                <div className="space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
                  {expert.bioParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              ) : (
                <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{expert.profile}</p>
              )}

              {expert.quote && (
                <blockquote className="mt-6 p-5 rounded-2xl bg-brand-soft border-l-4 border-accent">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden />
                    <div>
                      <p className="italic text-slate-800 font-medium">“{expert.quote.text}”</p>
                      <footer className="mt-1.5 text-xs font-bold uppercase tracking-wider text-brand">
                        — {expert.quote.author}
                      </footer>
                    </div>
                  </div>
                </blockquote>
              )}
            </div>

            {expert.expertise.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-brand mb-5 flex items-center gap-2">
                  <Target className="w-5 h-5 text-accent" aria-hidden />
                  Areas of expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {expert.expertise.map((x) => (
                    <div key={x.area} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-card">
                      <h3 className="font-bold text-slate-900">{x.area}</h3>
                      <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{x.scope}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {expert.modules.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-brand mb-5 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-accent" aria-hidden />
                  Training & advisory modules
                </h2>
                <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                  {expert.modules.map((m, i) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-slate-800">
                      <span className="w-6 h-6 rounded-full bg-brand-soft text-brand text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{m}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {expert.methods.length > 0 && (
              <div className="p-6 rounded-2xl bg-brand-soft border border-brand/10">
                <h2 className="text-sm font-bold uppercase tracking-wider text-brand mb-4">Methodology & approach</h2>
                <ul className="space-y-2.5 text-sm text-slate-800">
                  {expert.methods.map((m) => (
                    <li key={m} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {expert.experience.length > 0 && (
              <div>
                <h2 className="font-display text-2xl text-brand mb-5 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-accent" aria-hidden />
                  Professional experience
                </h2>
                <ol className="relative border-l-2 border-slate-200 ml-2 space-y-8">
                  {expert.experience.map((x) => (
                    <li key={x.role} className="pl-6 relative">
                      <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-white" aria-hidden />
                      <div className="text-xs font-bold uppercase tracking-wider text-accent">{x.period}</div>
                      <h3 className="mt-1 font-bold text-slate-900">{x.role}</h3>
                      <div className="text-sm text-slate-500">{x.organization}</div>
                      <p className="mt-2 text-sm text-slate-700 leading-relaxed">{x.detail}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <img
              src={expert.photo}
              alt={expert.name}
              width={350}
              height={350}
              className="w-full max-w-sm aspect-square object-cover object-top rounded-2xl border border-slate-200 shadow-card bg-slate-100"
            />

            <dl className="grid grid-cols-3 lg:grid-cols-1 gap-3">
              {expert.facts.map((f) => (
                <div key={f.label} className="flex flex-col-reverse p-4 rounded-xl border border-slate-200 bg-white">
                  <dt className="text-xs text-slate-500 mt-0.5">{f.label}</dt>
                  <dd className="font-display text-xl font-bold text-brand">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" aria-hidden />
                Education & credentials
              </h2>
              <ul className="space-y-2 text-sm text-slate-800">
                {expert.education.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            {expert.affiliations && expert.affiliations.length > 0 && (
              <div className="p-5 rounded-2xl border border-slate-200 bg-white">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4" aria-hidden />
                  Institutional affiliations
                </h2>
                <ul className="space-y-2 text-sm text-slate-800">
                  {expert.affiliations.map((aff) => (
                    <li key={aff} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                      <span>{aff}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" aria-hidden />
                Sector exposure
              </h2>
              <div className="flex flex-wrap gap-2">
                {expert.sectors.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-brand text-white">
              <h2 className="font-bold">Engage {expert.name}</h2>
              <p className="mt-1 text-sm text-slate-300">
                Lead consultant, advisor, trainer or workshop resource person for your organization.
              </p>
              <a
                href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`}
                className="mt-3 flex items-center gap-2 text-slate-200 hover:text-white"
              >
                <Phone className="w-4 h-4" aria-hidden />
                {companyInfo.phones[0]}
              </a>
              {expert.linkedin && (
                <a
                  href={expert.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 flex items-center gap-2 text-slate-200 hover:text-white"
                >
                  <Linkedin className="w-4 h-4" aria-hidden />
                  LinkedIn profile
                </a>
              )}
              <button
                onClick={book}
                className="mt-4 w-full py-2.5 rounded-lg bg-white text-brand font-bold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Book a session
              </button>
            </div>
          </aside>
        </Container>
      </section>

      {otherExperts.length > 0 && (
        <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200">
          <Container>
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-brand">Other specialist advisors</h2>
              <Link to="/wings/about#experts" className="text-sm font-bold text-accent hover:text-brand">
                All experts →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherExperts.slice(0, 4).map((other) => (
                <Link
                  key={other.id}
                  to={`/wings/experts/${other.slug}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200 hover:border-brand/40 transition-colors"
                >
                  <img
                    src={other.photo}
                    alt={other.name}
                    loading="lazy"
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-lg object-cover object-top shrink-0 bg-slate-100"
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-sm text-slate-900 truncate">{other.name}</div>
                    <div className="text-xs text-slate-500 truncate">{other.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
