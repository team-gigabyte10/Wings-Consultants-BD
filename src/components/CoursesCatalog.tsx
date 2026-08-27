import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { useAuth } from '../context/AuthContext';
import { TrainingStream } from '../types';
import {
  TrendingUp,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Radio,
  MessagesSquare,
  Settings,
  Search,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Quote,
  Bookmark,
  BookmarkCheck
} from 'lucide-react';

interface CoursesCatalogProps {
  onSelectStream: (stream: TrainingStream) => void;
  onBookCourse: (courseTitle: string) => void;
}

export const CoursesCatalog: React.FC<CoursesCatalogProps> = ({
  onSelectStream,
  onBookCourse
}) => {
  const { trainingStreams } = useCms();
  const { userProfile, toggleSaveCourse } = useAuth();
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Icon selector mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Radio':
        return <Radio className="w-5 h-5" />;
      case 'MessagesSquare':
        return <MessagesSquare className="w-5 h-5" />;
      case 'Settings':
        return <Settings className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  const filteredStreams = trainingStreams.filter((stream) => {
    if (activeTab !== 'all' && stream.id !== activeTab) {
      return false;
    }
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = stream.title.toLowerCase().includes(q);
      const matchCourses = stream.courses.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchCourses;
    }
    return true;
  });

  const totalCourses = trainingStreams.reduce((acc, s) => acc + s.courses.length, 0);

  const isBookmarked = (courseTitle: string) => {
    return userProfile?.savedCourses?.includes(courseTitle) || false;
  };

  return (
    <section id="courses" className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            Wings Consultants Course Overview
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Specialized Executive Training Modules
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose from <strong>{totalCourses} specialized training courses</strong> spanning 7 core organizational domains. Every module is tailored for real-world application, behavioral change, and measurable productivity.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
          
          {/* Stream Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Streams ({totalCourses})
            </button>
            {trainingStreams.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === s.id
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {s.title} ({s.courses.length})
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search course or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            />
          </div>

        </div>

        {/* Streams & Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStreams.map((stream) => (
            <div
              key={stream.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-400"
            >
              {/* Card Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-colors">
                    {renderIcon(stream.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {stream.courses.length} Modules
                  </span>
                </div>

                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                  {stream.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {stream.shortDesc}
                </p>

                {/* Course List Preview with Bookmarking & Booking */}
                <div className="border-t border-slate-100 pt-4">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center justify-between">
                    <span>Course Offerings:</span>
                    <span className="text-[10px] text-slate-400 lowercase">click to book / save</span>
                  </div>
                  <ul className="space-y-1.5">
                    {stream.courses.map((course, cIdx) => {
                      const bookmarked = isBookmarked(course);
                      return (
                        <li
                          key={cIdx}
                          className="flex items-center justify-between gap-2 text-xs text-slate-700 hover:text-amber-800 hover:bg-amber-50/70 p-2 rounded-lg transition-colors group/item"
                        >
                          <div
                            onClick={() => onBookCourse(course)}
                            className="flex items-start gap-2 flex-1 cursor-pointer"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span className="font-medium group-hover/item:underline">{course}</span>
                          </div>

                          <div className="flex items-center gap-1 shrink-0">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSaveCourse(course);
                              }}
                              className={`p-1 rounded transition-colors cursor-pointer ${
                                bookmarked
                                  ? 'text-amber-600 hover:text-amber-700'
                                  : 'text-slate-300 hover:text-amber-600 opacity-0 group-hover/item:opacity-100'
                              }`}
                              title={bookmarked ? 'Saved to profile' : 'Save course'}
                            >
                              {bookmarked ? (
                                <BookmarkCheck className="w-4 h-4 fill-amber-500 text-amber-600" />
                              ) : (
                                <Bookmark className="w-4 h-4" />
                              )}
                            </button>
                            <button
                              type="button"
                              onClick={() => onBookCourse(course)}
                              className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded opacity-0 group-hover/item:opacity-100 hover:bg-amber-200 transition-all cursor-pointer"
                            >
                              Book
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectStream(stream)}
                  className="text-xs font-bold text-slate-700 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
                >
                  <span>Stream Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookCourse(stream.courses[0])}
                  className="text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white px-3 py-1.5 rounded-md shadow-sm transition-colors cursor-pointer"
                >
                  Book Workshop
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Famous Quote Banner from Page 4 */}
        <div className="mt-16 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 rounded-2xl p-6 sm:p-8 text-white text-center shadow-lg">
          <Quote className="w-8 h-8 text-amber-200 mx-auto mb-2 opacity-80" />
          <p className="text-lg sm:text-xl font-serif italic max-w-3xl mx-auto leading-relaxed">
            "The world is full of magical things patiently waiting for our wits to grow sharper."
          </p>
          <div className="mt-3 text-xs font-bold uppercase tracking-widest text-amber-200">
            — Bertrand Russell
          </div>
        </div>

      </div>
    </section>
  );
};
