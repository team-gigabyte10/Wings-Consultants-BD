import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { ResourceArticle } from '../types';
import {
  BookOpen,
  Search,
  Download,
  Calendar,
  Clock,
  ArrowRight,
  FileText,
  X,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const { resources, companyInfo } = useCms();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<ResourceArticle | null>(null);
  const [downloadSuccessMsg, setDownloadSuccessMsg] = useState<string | null>(null);

  const categories = [
    'All',
    'Tax & Compliance',
    'Industry Setup',
    'Project Development',
    'NGO Consultancy'
  ];

  const filteredResources = resources.filter((res) => {
    const matchesCategory =
      selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (docName?: string) => {
    if (!docName) return;
    setDownloadSuccessMsg(`Official checklist "${docName}" downloaded successfully.`);
    setTimeout(() => setDownloadSuccessMsg(null), 4000);
  };

  return (
    <section id="resources" className="py-16 sm:py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 text-[#0f2c59] text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>Knowledge Base & Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0f2c59] tracking-tight">
            Consultancy Insights & Resources
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Practical regulatory guides, bank loan project checklists, cGMP factory setup roadmaps, and tax advisory articles written by our senior consultants in Dhaka.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0f2c59] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search guides, topics, tax..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:ring-2 focus:ring-sky-500 focus:border-sky-500 text-slate-800"
            />
          </div>
        </div>

        {/* Download Alert Notification if Triggered */}
        {downloadSuccessMsg && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold flex items-center justify-between animate-in fade-in">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{downloadSuccessMsg}</span>
            </div>
            <button onClick={() => setDownloadSuccessMsg(null)}>
              <X className="w-4 h-4 text-emerald-700" />
            </button>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredResources.map((art) => (
            <div
              key={art.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between gap-2 mb-3 text-xs text-slate-500">
                  <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 font-bold">
                    {art.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.readTime}</span>
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => setActiveArticle(art)}
                  className="text-lg sm:text-xl font-serif font-bold text-[#0f2c59] group-hover:text-sky-800 cursor-pointer transition-colors leading-snug"
                >
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed">
                  {art.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {art.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveArticle(art)}
                  className="text-xs font-bold text-[#0f2c59] hover:text-sky-600 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {art.downloadableDocName && (
                  <button
                    onClick={() => handleDownload(art.downloadableDocName)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-bold border border-amber-200 transition-colors cursor-pointer"
                    title="Download Official PDF Checklist"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-700" />
                    <span>Download PDF</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
              <span className="px-2.5 py-0.5 rounded bg-sky-50 text-sky-800 font-bold">
                {activeArticle.category}
              </span>
              <span>•</span>
              <span>{activeArticle.publishDate}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-[#0f2c59] mb-4">
              {activeArticle.title}
            </h2>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4 whitespace-pre-line leading-relaxed pb-6 border-b border-slate-200">
              {activeArticle.content}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
              <span>Author: <strong className="text-slate-800">{activeArticle.author}</strong></span>
              
              {activeArticle.downloadableDocName && (
                <button
                  onClick={() => handleDownload(activeArticle.downloadableDocName)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold cursor-pointer transition-colors shadow-xs"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Guide Checklist</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
