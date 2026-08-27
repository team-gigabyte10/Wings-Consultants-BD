import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { useAuth } from '../context/AuthContext';
import { LeadStatus, CourseRegistration } from '../types';
import {
  X,
  Lock,
  CheckCircle2,
  Phone,
  Mail,
  Clock,
  Trash2,
  Edit3,
  Download,
  RefreshCw,
  Database,
  Users,
  Star,
  BookOpen,
  ShieldCheck,
  Building,
  Calendar
} from 'lucide-react';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({ isOpen, onClose }) => {
  const {
    leads,
    updateLeadStatus,
    deleteLead,
    registrations,
    updateRegistrationStatus,
    reviews,
    isFirestoreConnected,
    lastSyncedAt,
    companyInfo
  } = useCms();
  const { user, userProfile, isAdmin, setIsAuthModalOpen, setAuthModalMode } = useAuth();

  const [activeTab, setActiveTab] = useState<'leads' | 'registrations' | 'reviews' | 'firebase'>('leads');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  if (!isOpen) return null;

  const filteredLeads = leads.filter((l) => (filterStatus === 'all' ? true : l.status === filterStatus));

  const exportLeadsToCsv = () => {
    const headers = ['ID', 'Full Name', 'Company', 'Phone', 'Email', 'Service Required', 'Status', 'Date'];
    const rows = leads.map((l) => [
      l.id,
      `"${l.fullName}"`,
      `"${l.company || ''}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.serviceRequired}"`,
      l.status,
      l.createdAt
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `wings_consultants_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 text-white p-6 rounded-t-3xl flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-serif font-bold text-white">
                  Wings Consultants — Staff & CRM Portal
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Firestore Live</span>
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Cloud Firestore & Firebase Auth Central Management Console
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Notice if not signed in */}
        {!user && (
          <div className="bg-amber-50 border-b border-amber-200 p-3 px-6 text-xs text-amber-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>You are browsing in Staff Guest view. Sign in with administrative credentials for unrestricted edit privileges.</span>
            </div>
            <button
              onClick={() => {
                setAuthModalMode('login');
                setIsAuthModalOpen(true);
              }}
              className="font-bold underline text-amber-900 hover:text-amber-950 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center justify-between border-b border-slate-200 px-6 pt-3 bg-slate-50">
          <div className="flex items-center gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('leads')}
              className={`pb-3 px-3 text-xs font-bold transition-all cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'leads'
                  ? 'border-amber-600 text-amber-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Training Inquiries ({leads.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('registrations')}
              className={`pb-3 px-3 text-xs font-bold transition-all cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'registrations'
                  ? 'border-amber-600 text-amber-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Course Signups ({registrations.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 px-3 text-xs font-bold transition-all cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'reviews'
                  ? 'border-amber-600 text-amber-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Star className="w-3.5 h-3.5" />
              <span>Client Reviews ({reviews.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('firebase')}
              className={`pb-3 px-3 text-xs font-bold transition-all cursor-pointer border-b-2 whitespace-nowrap flex items-center gap-1.5 ${
                activeTab === 'firebase'
                  ? 'border-amber-600 text-amber-800'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Firebase Architecture</span>
            </button>
          </div>

          {activeTab === 'leads' && (
            <button
              onClick={exportLeadsToCsv}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-700 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm mb-2 cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>
          )}
        </div>

        {/* Body */}
        <div className="p-6">
          {/* Tab 1: Leads */}
          {activeTab === 'leads' && (
            <div>
              {/* Filter pills */}
              <div className="flex items-center gap-2 mb-4 overflow-x-auto pb-1">
                {['all', 'New', 'Contacted', 'In Progress', 'Completed'].map((st) => (
                  <button
                    key={st}
                    onClick={() => setFilterStatus(st)}
                    className={`px-3 py-1 rounded-full text-xs font-semibold capitalize cursor-pointer transition-colors ${
                      filterStatus === st
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              {filteredLeads.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-sm">
                  No inquiries found in this view.
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-sm font-bold text-slate-900">{lead.fullName}</h4>
                          {lead.company && (
                            <span className="text-xs bg-slate-200 text-slate-800 px-2 py-0.5 rounded font-medium">
                              {lead.company}
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              lead.status === 'New'
                                ? 'bg-amber-100 text-amber-800'
                                : lead.status === 'Contacted'
                                ? 'bg-blue-100 text-blue-800'
                                : lead.status === 'In Progress'
                                ? 'bg-purple-100 text-purple-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {lead.status}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(lead.createdAt).toLocaleString()}
                          </span>
                        </div>

                        <div className="text-xs text-slate-600 flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1 font-semibold text-slate-900">
                            <Phone className="w-3 h-3 text-amber-600" /> {lead.phone}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <Mail className="w-3 h-3 text-blue-600" /> {lead.email}
                          </span>
                          <span className="text-slate-400">|</span>
                          <span className="text-amber-800 font-medium">{lead.serviceRequired}</span>
                          {lead.participantCount && (
                            <span className="text-slate-500 text-[11px]">
                              ({lead.participantCount})
                            </span>
                          )}
                        </div>

                        {lead.projectDescription && (
                          <p className="text-xs text-slate-600 italic bg-white p-2 rounded border border-slate-200/80 mt-1">
                            "{lead.projectDescription}"
                          </p>
                        )}
                      </div>

                      {/* Status Change Buttons */}
                      <div className="flex items-center gap-2 shrink-0">
                        <select
                          value={lead.status}
                          onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                          className="text-xs border border-slate-300 rounded px-2.5 py-1.5 bg-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Completed">Completed</option>
                          <option value="Archived">Archived</option>
                        </select>

                        <button
                          onClick={() => deleteLead(lead.id)}
                          className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors cursor-pointer"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Registrations */}
          {activeTab === 'registrations' && (
            <div>
              {registrations.length === 0 ? (
                <div className="text-center py-12 text-slate-400 text-sm">
                  No dedicated course signups yet. Registrations submitted via the catalog or user profile will appear here in real-time.
                </div>
              ) : (
                <div className="space-y-3">
                  {registrations.map((reg) => (
                    <div
                      key={reg.id}
                      className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-slate-900">{reg.courseTitle}</h4>
                          <span className="text-xs bg-amber-100 text-amber-800 font-semibold px-2 py-0.5 rounded">
                            {reg.userName}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(reg.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">
                          Organization: {reg.companyName || 'Corporate'} • {reg.userEmail} • {reg.userPhone}
                        </p>
                      </div>

                      <select
                        value={reg.status}
                        onChange={(e) => updateRegistrationStatus(reg.id, e.target.value as any)}
                        className="text-xs border border-slate-300 rounded px-2.5 py-1.5 bg-white"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 3: Reviews */}
          {activeTab === 'reviews' && (
            <div className="space-y-3">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{rev.userName}</h4>
                      <span className="text-xs text-amber-700 font-semibold">({rev.company})</span>
                      <div className="flex items-center gap-0.5">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-slate-700 mt-1 italic leading-relaxed">
                      "{rev.comment}"
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 shrink-0">
                    {new Date(rev.createdAt).toLocaleDateString()}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 4: Firebase Architecture */}
          {activeTab === 'firebase' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <Database className="w-4 h-4" />
                    <span>Firestore Database Provisioning</span>
                  </h4>
                  <div className="text-xs space-y-1 text-slate-300 font-mono">
                    <div>Project ID: <span className="text-white font-bold">buy-now-31fd2</span></div>
                    <div>Database ID: <span className="text-white font-bold">ai-studio-wingsconsultants-...</span></div>
                    <div>Status: <span className="text-emerald-400 font-bold">ONLINE (Synchronized)</span></div>
                    <div>Active Collections: <span className="text-amber-300">users, leads, registrations, reviews</span></div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Firebase Authentication</span>
                  </h4>
                  <div className="text-xs space-y-1 text-slate-300 font-mono">
                    <div>Auth Domain: <span className="text-white">buy-now-31fd2.firebaseapp.com</span></div>
                    <div>Supported Providers: <span className="text-white font-bold">Email/Password, Guest Access</span></div>
                    <div>Current User: <span className="text-amber-300">{user?.email || (user ? 'Guest Anonymous' : 'Not signed in')}</span></div>
                    <div>Role: <span className="text-emerald-400">{userProfile?.role || 'client'}</span></div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
                <h5 className="font-bold text-slate-900">Firestore Collections Schema & Security</h5>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>/users/{'{uid}'}</strong>: Client profiles, saved courses, corporate designations, role assignment.</li>
                  <li><strong>/leads/{'{leadId}'}</strong>: Real-time corporate training inquiries and status lifecycle (New → Contacted → In Progress → Completed).</li>
                  <li><strong>/registrations/{'{regId}'}</strong>: Participant module enrollments and workshop cohort schedules.</li>
                  <li><strong>/reviews/{'{reviewId}'}</strong>: Verified client testimonials with 5-star ratings.</li>
                </ul>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
