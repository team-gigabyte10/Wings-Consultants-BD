import React from 'react';
import { useCms } from '../context/CmsContext';
import {
  Calendar,
  Presentation,
  ThumbsUp,
  MessagesSquare,
  BarChart3,
  Users,
  ShieldCheck,
  Compass,
  Languages,
  HelpCircle,
  Briefcase,
  Sparkles,
  MonitorPlay,
  CheckCircle2,
  Quote,
  Target,
  Layers
} from 'lucide-react';

export const MethodologySection: React.FC = () => {
  const { trainingObjectives, trainingMethods, learningOutcomes } = useCms();

  const getObjectiveIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar':
        return <Calendar className="w-5 h-5" />;
      case 'Presentation':
        return <Presentation className="w-5 h-5" />;
      case 'ThumbsUp':
        return <ThumbsUp className="w-5 h-5" />;
      case 'MessagesSquare':
        return <MessagesSquare className="w-5 h-5" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      default:
        return <Compass className="w-5 h-5" />;
    }
  };

  const getMethodIcon = (iconName: string) => {
    switch (iconName) {
      case 'Languages':
        return <Languages className="w-5 h-5 text-blue-600" />;
      case 'Users':
        return <Users className="w-5 h-5 text-indigo-600" />;
      case 'HelpCircle':
        return <HelpCircle className="w-5 h-5 text-amber-600" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-orange-600" />;
      default:
        return <MonitorPlay className="w-5 h-5 text-cyan-600" />;
    }
  };

  return (
    <section id="methodology" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            The Organization & Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            How We Deliver Transformational Learning
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our training sessions expand intellectual range, fit the person to the job, and instill high-degree professionalism through proven pedagogical models.
          </p>
        </div>

        {/* 2-Column: Objectives & Methods */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          
          {/* Objectives Column */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Training Objectives
                </h3>
                <p className="text-xs text-slate-500">Adding to participants’ present inventory of skills</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {trainingObjectives.map((obj, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 transition-colors">
                  <div className="text-amber-600 mb-1.5">{getObjectiveIcon(obj.icon)}</div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{obj.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-tight">{obj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Methods and Approaches Column */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-slate-900">
                  Methods and Approaches
                </h3>
                <p className="text-xs text-slate-500">Engaging, interactive, and bilingual delivery</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {trainingMethods.map((method, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-300 transition-colors">
                  <div className="mb-2">{getMethodIcon(method.icon)}</div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{method.title}</h4>
                  <p className="text-[11px] text-slate-600 leading-tight">{method.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Learning Outcomes Interactive Table / Grid */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-slate-200 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Measurable Value</span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900 mt-1">
              Learning Outcomes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Every workshop is designed to trigger concrete shifts in capability, demeanor, and execution:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {learningOutcomes.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-amber-50/40 hover:border-amber-200 transition-colors"
              >
                <span className="text-xs font-bold uppercase px-2.5 py-1 rounded bg-amber-600 text-white shrink-0 tracking-wider">
                  {item.action}
                </span>
                <span className="text-xs sm:text-sm text-slate-800 font-medium self-center">
                  {item.outcome}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How is the Training Different? Callout */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white rounded-2xl p-8 sm:p-10 border border-slate-800 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Competitive Edge</span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-3">
                How is Our Training Different?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
                The training offers a quick yet comprehensive guide and is an opportunity for the Executives who want to get mastering the practical skills. <strong>Practical solutions are used, therefore easy to implement.</strong>
              </p>
              <p className="text-xs sm:text-sm text-amber-300 font-medium">
                Participants will learn what global experts and industry captains say — with direct application to the Bangladeshi corporate landscape.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 text-center">
              <Quote className="w-6 h-6 text-amber-400 mx-auto mb-2" />
              <p className="text-sm sm:text-base font-serif italic text-white leading-snug mb-2">
                "Nothing is impossible; the word itself says, 'I’m possible!'"
              </p>
              <div className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                — Audrey Hepburn
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
