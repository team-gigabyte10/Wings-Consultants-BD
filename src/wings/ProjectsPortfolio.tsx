import React, { useState } from 'react';
import { useCms } from './WingsCmsContext';
import {
  Briefcase,
  Calendar,
  CheckCircle2,
  Lock,
  Tag,
  ArrowRight,
  Filter
} from 'lucide-react';

interface ProjectsPortfolioProps {
  onBookConsultation: (projectType?: string) => void;
}

export const ProjectsPortfolio: React.FC<ProjectsPortfolioProps> = ({ onBookConsultation }) => {
  const { projects } = useCms();
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState<string>('All');

  // Extract unique industries for filtering
  const industriesList = ['All', ...Array.from(new Set(projects.map((p) => p.industry)))];

  const filteredProjects =
    selectedIndustryFilter === 'All'
      ? projects
      : projects.filter((p) => p.industry === selectedIndustryFilter);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-amber-500" />
            <span>Proven Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Featured Projects & Assignments
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Showcasing representative industrial turnkey setups, bank loan project profiles, corporate tax resolutions, and donor grant portfolios across Bangladesh.
          </p>
        </div>

        {/* Industry Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {industriesList.map((ind) => (
            <button
              key={ind}
              onClick={() => setSelectedIndustryFilter(ind)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                selectedIndustryFilter === ind
                  ? 'bg-[#0f2c59] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {ind}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2c59]/90 via-transparent to-transparent" />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-amber-400 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {proj.industry}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="font-semibold text-slate-200">{proj.clientCategory}</span>
                    <span className="flex items-center gap-1 text-amber-300 font-bold">
                      <Calendar className="w-3 h-3" />
                      <span>{proj.completionYear}</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-[#0f2c59] group-hover:text-sky-900 transition-colors leading-snug">
                    {proj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Services Provided Tags */}
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Consulting Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {proj.servicesProvided.map((sp, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-800 text-[11px] font-medium border border-sky-100"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Notice & CTA */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Lock className="w-3 h-3 text-slate-400" />
                  <span>Confidential Case</span>
                </div>

                <button
                  onClick={() => onBookConsultation(`Inquiry for similar project: ${proj.title}`)}
                  className="text-xs font-bold text-[#0f2c59] hover:text-sky-600 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Similar Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Confidentiality Disclaimer Card */}
        <div className="mt-12 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span>
              All client names and proprietary formulation details are strictly protected under non-disclosure agreements (NDAs) adhering to professional corporate consultancy ethics.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
};
