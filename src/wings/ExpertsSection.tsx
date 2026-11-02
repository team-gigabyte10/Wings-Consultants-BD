import React, { useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, Award, CheckCircle2, ChevronRight, Quote, Users } from 'lucide-react';
import { useCms } from './WingsCmsContext';
import { Container } from '../ui/Container';

/** Interactive "Leadership & Senior Advisory Team" master-detail section. */
export const ExpertsSection: React.FC<{ compact?: boolean }> = () => {
  const { experts } = useCms();
  const [selectedId, setSelectedId] = useState<string>(experts[0]?.id ?? '');

  if (experts.length === 0) return null;

  const selected = experts.find((e) => e.id === selectedId) || experts[0];
  const highlights =
    selected.highlights && selected.highlights.length > 0
      ? selected.highlights
      : selected.bioParagraphs && selected.bioParagraphs.length > 0
        ? selected.bioParagraphs
        : [selected.profile];

  return (
    <section id="experts" className="scroll-mt-24 py-20 sm:py-24 bg-[#0B1221] text-white border-t border-slate-800/80">
      <Container>
        {/* Top Centered Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-[11px] font-bold uppercase tracking-widest mb-4">
            <Users className="w-3.5 h-3.5" aria-hidden />
            <span>THE BUILDING BLOCKS: OUR PEOPLE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight">
            Leadership &amp; Senior Advisory
            <br className="hidden sm:inline" /> Team
          </h2>

          <div className="w-16 h-1 bg-amber-500 rounded-full mx-auto my-5" />

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            “Client at our hearts and talent in our brains, we establish relationships that are professional,
            win-win and long-lasting. We strongly believe that nothing is more important than talented brains. We
            offer the best brains.”
          </p>
        </div>

        {/* Two-Column Split Selector & Detail View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Consultant Selector List */}
          <div className="lg:col-span-5">
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3 px-1">
              SELECT SENIOR CONSULTANT PROFILE
            </div>

            <div className="space-y-3">
              {experts.map((ex) => {
                const isActive = ex.id === selected.id;
                return (
                  <button
                    key={ex.id}
                    type="button"
                    onClick={() => setSelectedId(ex.id)}
                    className={`w-full flex items-center justify-between gap-3.5 p-3.5 sm:p-4 rounded-xl transition-all cursor-pointer text-left border ${
                      isActive
                        ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-slate-950 border-amber-300 shadow-lg shadow-amber-500/20'
                        : 'bg-[#111A2E] hover:bg-[#16223B] text-white border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <img
                        src={ex.photo}
                        alt={ex.name}
                        loading="lazy"
                        width={44}
                        height={44}
                        className={`w-11 h-11 rounded-full object-cover object-top shrink-0 border-2 bg-slate-800 ${
                          isActive ? 'border-slate-950/80' : 'border-amber-500/60'
                        }`}
                      />
                      <div className="min-w-0">
                        <div
                          className={`font-display text-base font-bold truncate ${
                            isActive ? 'text-slate-950' : 'text-white'
                          }`}
                        >
                          {ex.name}
                        </div>
                        <div
                          className={`text-xs font-medium truncate ${
                            isActive ? 'text-slate-900' : 'text-amber-400'
                          }`}
                        >
                          {ex.shortRole || ex.title}
                        </div>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 ${isActive ? 'text-slate-950' : 'text-slate-500'}`}
                      aria-hidden
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Consultant Profile Card */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <article className="bg-[#111A2E] border border-slate-800 rounded-3xl p-6 sm:p-9 shadow-2xl">
              {/* Top Profile Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="flex items-start gap-4 sm:gap-5">
                  <img
                    src={selected.photo}
                    alt={selected.name}
                    width={96}
                    height={96}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-top border-2 border-amber-500/80 shrink-0 bg-slate-800 shadow-md"
                  />
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-amber-400 text-[10px] font-extrabold uppercase tracking-wider">
                      {selected.title}
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                      {selected.name}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300">
                      {selected.shortRole || selected.title}
                    </p>
                  </div>
                </div>

                <div className="sm:max-w-[250px] w-full sm:w-auto bg-[#0B1221] border border-slate-800 rounded-xl p-3.5 sm:text-right shrink-0">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                    ACADEMIC CREDENTIALS
                  </div>
                  <div className="mt-1 text-xs text-slate-200 leading-snug font-medium">
                    {selected.academicCredentials || selected.education[0]}
                  </div>
                </div>
              </div>

              {/* Core Expertise Box */}
              <div className="mt-6 rounded-xl border border-sky-500/30 bg-sky-950/25 p-4 flex items-start gap-3">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden />
                <div>
                  <div className="text-xs font-bold text-amber-400">Core Expertise</div>
                  <div className="mt-0.5 text-xs sm:text-sm font-semibold text-white leading-relaxed">
                    {selected.coreExpertise || selected.roles.join(', ')}
                  </div>
                </div>
              </div>

              {/* Key Highlights with Checkmarks */}
              <ul className="mt-6 space-y-4">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Quote Banner */}
              {selected.quote && (
                <div className="mt-7 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-amber-500/15 via-amber-500/10 to-transparent border-l-4 border-amber-500 flex items-start gap-3.5">
                  <Quote className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" aria-hidden />
                  <p className="text-xs sm:text-sm italic text-amber-100 leading-relaxed">
                    “{selected.quote.text} - <span className="not-italic font-semibold text-amber-200">{selected.quote.author}</span>”
                  </p>
                </div>
              )}

              {/* Link to Full Dedicated Profile Page */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Full executive dossier, modules &amp; consultation booking
                </span>
                <Link
                  to={`/wings/experts/${selected.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors"
                >
                  Full Profile
                  <ArrowRight className="w-4 h-4" aria-hidden />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};
