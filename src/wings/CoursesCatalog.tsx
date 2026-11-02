import React, { useState } from 'react';
import { useCms } from './WingsCmsContext';
import { TrainingStream } from '../wingsTypes';
import {
  BookOpen,
  Search,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  X,
  Award,
  Users,
  TrendingUp,
  Briefcase,
  Truck,
  HeartHandshake,
  Compass,
  ShieldCheck
} from 'lucide-react';

const STREAM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Users,
  TrendingUp,
  Briefcase,
  Truck,
  HeartHandshake,
  Compass,
  ShieldCheck,
  BookOpen
};

export const CoursesCatalog: React.FC = () => {
  const { trainingStreams, openConsultation } = useCms();
  const [selectedStreamId, setSelectedStreamId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalStream, setActiveModalStream] = useState<TrainingStream | null>(null);

  const renderIcon = (iconName: string, className: string = 'w-6 h-6') => {
    const IconComponent = STREAM_ICONS[iconName] || BookOpen;
    return <IconComponent className={className} />;
  };

  // Filter streams and courses based on search query and selected category
  const filteredStreams = trainingStreams
    .filter((stream) => selectedStreamId === 'all' || stream.id === selectedStreamId)
    .map((stream) => ({
      ...stream,
      courses: stream.courses.filter(
        (course) =>
          course.toLowerCase().includes(searchQuery.toLowerCase()) ||
          stream.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter((stream) => stream.courses.length > 0);

  const totalCoursesCount = trainingStreams.reduce((acc, s) => acc + s.courses.length, 0);

  return (
    <section id="courses" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -ml-48 -mb-48 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Wings Consultants Course Overview</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-4">
            Specialized Executive Training Modules
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-slate-600 text-base leading-relaxed">
            Comprehensive corporate capacity-building, technical management, and human resource training programs engineered for organizations across Bangladesh. Explore over{' '}
            <strong className="text-slate-900">{totalCoursesCount}+ curated training courses</strong> across {trainingStreams.length} specialized verticals.
          </p>
        </div>

        {/* Search & Stream Filter Bar */}
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 mb-12 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedStreamId('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedStreamId === 'all'
                  ? 'bg-[#0B1221] text-amber-400 shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Streams ({totalCoursesCount})
            </button>
            {trainingStreams.map((stream) => (
              <button
                key={stream.id}
                onClick={() => setSelectedStreamId(stream.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  selectedStreamId === stream.id
                    ? 'bg-[#0B1221] text-amber-400 shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{stream.title}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] ${
                    selectedStreamId === stream.id ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {stream.courses.length}
                </span>
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search course or topic..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Streams Grid */}
        {filteredStreams.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No matching training courses found</h3>
            <p className="text-slate-500 text-sm">Try searching with a different keyword or selecting &quot;All Streams&quot;.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStreams.map((stream) => (
              <div
                key={stream.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
              >
                {/* Stream Top Banner */}
                <div className="bg-gradient-to-r from-[#0B1221] to-[#162238] p-6 text-white relative overflow-hidden">
                  <div className="flex items-start justify-between relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                      {renderIcon(stream.iconName, 'w-6 h-6')}
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold">
                      {stream.courses.length} Modules
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {stream.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{stream.shortDesc}</p>
                </div>

                {/* Course List */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2.5 mb-6 max-h-[340px] overflow-y-auto pr-1">
                    {stream.courses.map((course, idx) => (
                      <li
                        key={idx}
                        onClick={() => openConsultation(`Training: ${course} (${stream.title})`)}
                        className="flex items-start gap-2.5 text-sm text-slate-700 group/item hover:bg-blue-50/70 p-1.5 -mx-1.5 rounded-lg transition-colors cursor-pointer"
                        title="Click to inquire or book this training module"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                        <span className="leading-snug font-medium text-slate-700 group-hover/item:text-blue-950 transition-colors flex-1">
                          {course}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => setActiveModalStream(stream)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Stream Details</span>
                    </button>
                    <button
                      onClick={() => openConsultation(`Corporate Training Workshop: ${stream.title}`)}
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                    >
                      <span>Book Workshop</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Inspirational Banner */}
        <div className="mt-14 bg-gradient-to-r from-blue-950 via-[#0B1221] to-slate-900 rounded-2xl p-8 text-center border border-amber-500/20 shadow-lg">
          <p className="text-amber-300 font-serif italic text-lg md:text-xl max-w-3xl mx-auto mb-2">
            &ldquo;One of the symptoms of an approaching nervous breakdown is the belief that one&apos;s work is terribly important.&rdquo;
          </p>
          <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">— Bertrand Russell</p>
        </div>
      </div>

      {/* Stream Details Modal */}
      {activeModalStream && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            <div className="bg-[#0B1221] p-6 sm:p-8 text-white flex items-start justify-between sticky top-0 z-10">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
                  {activeModalStream.courses.length} Training Modules
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">{activeModalStream.title}</h3>
                <p className="text-slate-300 text-sm mt-1">{activeModalStream.shortDesc}</p>
              </div>
              <button
                onClick={() => setActiveModalStream(null)}
                className="p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              {activeModalStream.deliverables && activeModalStream.deliverables.length > 0 && (
                <div>
                  <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                    <Award className="w-4 h-4 text-amber-500" />
                    Key Learning Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {activeModalStream.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeModalStream.targetAudience && (
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    <Users className="w-4 h-4 text-blue-800" />
                    Target Participants
                  </h4>
                  <p className="text-sm text-slate-600">{activeModalStream.targetAudience}</p>
                </div>
              )}

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Complete Module Curriculum ({activeModalStream.courses.length})
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalStream.courses.map((course, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const title = `Training: ${course} (${activeModalStream.title})`;
                        setActiveModalStream(null);
                        openConsultation(title);
                      }}
                      className="flex items-start gap-2 p-2.5 rounded-xl border border-slate-200 hover:border-amber-400 hover:bg-amber-50/40 text-left text-xs font-medium text-slate-700 transition-all cursor-pointer"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveModalStream(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 text-xs font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const streamTitle = activeModalStream.title;
                    setActiveModalStream(null);
                    openConsultation(`Corporate Training Workshop: ${streamTitle}`);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Book Stream Workshop</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
