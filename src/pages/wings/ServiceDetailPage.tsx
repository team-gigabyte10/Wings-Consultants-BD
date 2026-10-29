import React from 'react';
import { Link, Navigate, useParams } from 'react-router';
import { ArrowRight, Building, CheckCircle2, FileCheck2, Phone, ShieldCheck } from 'lucide-react';
import { useCms } from '../../wings/WingsCmsContext';
import { usePageMeta } from '../../lib/usePageMeta';
import { PageHero } from '../../ui/PageHero';
import { Container } from '../../ui/Container';

export default function WingsServiceDetailPage() {
  const { slug } = useParams();
  const { services, companyInfo, openConsultation } = useCms();
  const service = services.find((s) => s.slug === slug);

  usePageMeta({
    title: service ? `${service.title} | Wings Consultants BD` : 'Wings Consultants BD',
    description: service?.shortDesc,
    lang: 'en'
  });

  if (!service) return <Navigate to="/wings/services" replace />;

  const others = services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        eyebrow={service.tag}
        title={service.title}
        subtitle={service.shortDesc}
        crumbs={[{ label: 'Home', to: '/wings' }, { label: 'Services', to: '/wings/services' }, { label: service.title }]}
      >
        <button
          onClick={() => openConsultation(service.title)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-brand font-bold hover:bg-slate-100 transition-colors cursor-pointer"
        >
          {service.ctaText}
          <ArrowRight className="w-4 h-4" aria-hidden />
        </button>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-8 space-y-10">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-brand mb-3">Practice overview</h2>
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg">{service.fullDesc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand mb-4 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-accent" aria-hidden />
                  Scope of services
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {service.keyServices.map((ks) => (
                    <li key={ks} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden />
                      <span>{ks}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-brand-soft border border-brand/10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-brand mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-accent" aria-hidden />
                  Client deliverables
                </h3>
                <ul className="space-y-2.5 text-sm text-slate-800">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" aria-hidden />
                      <span className="font-medium">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="font-display text-2xl text-brand mb-4">Why consult Wings Consultants BD</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {service.benefits.map((b) => (
                  <div key={b} className="p-4 rounded-xl bg-white border border-slate-200 shadow-card text-sm text-slate-800">
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-2xl border border-slate-200 shadow-card"
            />
            <div className="p-5 rounded-2xl border border-slate-200">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
                <Building className="w-4 h-4" aria-hidden />
                Sectors served
              </h2>
              <div className="flex flex-wrap gap-2">
                {service.industriesServed.map((ind) => (
                  <span key={ind} className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                    {ind}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 rounded-2xl bg-brand text-white">
              <h2 className="font-bold">Talk to a consultant</h2>
              <a href={`tel:${companyInfo.phones[0].replace(/[^0-9+]/g, '')}`} className="mt-2 flex items-center gap-2 text-slate-200 hover:text-white">
                <Phone className="w-4 h-4" aria-hidden />
                {companyInfo.phones[0]}
              </a>
              <button
                onClick={() => openConsultation(service.title)}
                className="mt-4 w-full py-2.5 rounded-lg bg-white text-brand font-bold hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Book a consultation
              </button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <Container>
          <h2 className="font-display text-2xl text-brand mb-6">Other services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((s) => (
              <Link
                key={s.id}
                to={`/wings/services/${s.slug}`}
                className="group block p-5 bg-white rounded-2xl border border-slate-200 shadow-card hover:border-brand/40 transition-colors"
              >
                <div className="text-xs font-semibold text-accent">{s.tag}</div>
                <h3 className="mt-1 font-bold text-slate-900 group-hover:text-brand">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">{s.shortDesc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
