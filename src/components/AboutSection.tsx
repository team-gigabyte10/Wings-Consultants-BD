import React from 'react';
import {
  CheckCircle2,
  Lightbulb,
  Heart,
  Target,
  TrendingUp,
  Award,
  Compass,
  Sparkles,
  Quote,
  ShieldCheck
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const coreValues = [
    {
      title: "Good Science & Sound Economics",
      description: "A steadfast commitment to evidence-based methodologies and financially sound strategies that ensure lasting ROI.",
      icon: Compass
    },
    {
      title: "Appetite for Innovation & New Ideas",
      description: "Constantly pioneering fresh corporate perspectives, game theory applications, and cutting-edge management tools.",
      icon: Lightbulb
    },
    {
      title: "Power of Knowledge to Improve Lives",
      description: "A deep belief that continuous learning elevates both individual career trajectories and organizational sustainability.",
      icon: Sparkles
    },
    {
      title: "Ideas Proven on the Ground",
      description: "Rejecting generic box-solutions in favor of battle-tested tactics verified in real Bangladeshi and multinational environments.",
      icon: ShieldCheck
    },
    {
      title: "Commitment to Equity & Mutual Respect",
      description: "Fostering inclusive workplace cultures where every employee's latent talent is recognized, mentored, and mobilized.",
      icon: Heart
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            About Wings Consultants
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Who We Are & What Drives Us
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Wings Consultants is a dynamic training and development consulting firm delivering advanced management solutions under the motto: <strong className="text-slate-900 font-semibold">"Sky is not the Limit, It’s an Opportunity"</strong>.
          </p>
        </div>

        {/* 2-Column Story: Who We Are & About Training */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          
          {/* Left Column: Who We Are? */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-7 bg-amber-500 rounded-full inline-block" />
              Who We Are?
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Our aim is to address some of the most important and critical issues facing the business and service world today. Our desire for creativity and innovation coupled together with in-depth understanding gives us the flexibility to choose the most appropriate tools for the job.
              </p>
              <p>
                Solutions don’t come in a box, and what gets things going for some people might not work for others. Therefore, <strong>Wings Consultants</strong> offers many unique ideas to do great work for a better world. We hope you’ll join us!
              </p>
            </div>

            {/* Core Values List */}
            <div className="mt-6 pt-6 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-widest text-amber-700 mb-3">
                Our Foundational Values:
              </h4>
              <ul className="space-y-2.5">
                {coreValues.slice(0, 3).map((val, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>{val.title}:</strong> {val.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: About Training */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-2 h-7 bg-orange-500 rounded-full inline-block" />
              About Training
            </h3>
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Training in recent times has become an art which is mastered and nurtured with superior skills, supreme knowledge, and outstanding service. Hence rises the importance of training sessions to help professionals become <strong>more confident, better prepared, and hungry to render success of impregnable magnitude</strong>.
              </p>
              <p>
                Training extends intellectual range and fits the person to the job. The aim is to develop human resources possessing high degrees of professionalism to create the building blocks for an enterprise's survival and growth.
              </p>
              <p className="bg-amber-50/80 p-3.5 rounded-lg border-l-4 border-amber-500 text-slate-800 text-xs sm:text-sm italic">
                "The materials and tools are linked with practical and real-life examples of our country's large corporate houses, as well as multinational and overseas corporations."
              </p>
            </div>
          </div>

        </div>

        {/* The Inside Story & The Bottom Line (Page 5) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 relative overflow-hidden mb-12">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
                Executive Philosophy
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
                The Inside Story
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Keeping the clients’ interest at heart, we look forward to helping them achieve the best. <strong>Client at our hearts and talent in our brains</strong>, we establish relationships that are professional, win-win, and long-lasting. We strongly believe that nothing is more important than talented brains. We offer the best brains.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                We start by questioning ourselves about the necessity of communication, its essence, and magnitude. Before we reach our audience we justify <em>“what”, “why”, “how”, “when”</em> and, not surprisingly, <em>“why not”</em>. We know how to deal with the present and how to reach the future.
              </p>

              {/* The Bottom Line Callout */}
              <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 font-bold">
                  ⚡
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">The Bottom Line</h4>
                  <p className="text-xs sm:text-sm text-slate-200">
                    "All the yesterdays make todays, and todays make tomorrows. Only change is constant. We follow change."
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Quote of Nelson Mandela */}
            <div className="lg:col-span-4 bg-gradient-to-b from-amber-500/20 to-orange-500/10 border border-amber-500/30 rounded-2xl p-6 text-center">
              <Quote className="w-8 h-8 text-amber-400 mx-auto mb-3" />
              <p className="text-base sm:text-lg font-serif italic text-white leading-snug mb-3">
                "No axe is sharp enough to cut the soul who keeps on trying."
              </p>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                — Nelson Mandela
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
