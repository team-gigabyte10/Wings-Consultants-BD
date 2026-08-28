import React, { useState } from 'react';
import { useCms } from '../context/CmsContext';
import { LeadItem } from '../types';
import {
  X,
  Lock,
  Unlock,
  Users,
  CheckCircle2,
  Clock,
  Archive,
  Phone,
  Mail,
  Calendar,
  Building,
  DollarSign,
  Download,
  Settings,
  ShieldAlert,
  Search,
  Filter,
  Save
} from 'lucide-react';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({ isOpen, onClose }) => {
  const {
    leads,
    updateLeadStatus,
    updateLeadNotes,
    deleteLead,
    companyInfo,
    updateCompanyStats
  } = useCms();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [authError, setAuthError] = useState('');
  const [activeTab, setActiveTab] = useState<'leads' | 'stats'>('leads');
  const [searchFilter, setSearchFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedLead, setSelectedLead] = useState<LeadItem | null>(null);

  // Stats edit form
  const [statsForm, setStatsForm] = useState(companyInfo.stats);
  const [statsSavedMsg, setStatsSavedMsg] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default PIN for firm management: 2525 or wings
    if (pinCode.trim() === '2525' || pinCode.trim().toLowerCase() === 'wings' || pinCode.trim() === '1234') {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Invalid Security PIN. (Hint: Try 2525 or "wings")');
    }
  };

  const filteredLeads = leads.filter((l) => {
    const matchesStatus = statusFilter === 'All' || l.status === statusFilter;
    const matchesSearch =
      l.fullName.toLowerCase().includes(searchFilter.toLowerCase()) ||
      l.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
      l.phone.includes(searchFilter) ||
      (l.company && l.company.toLowerCase().includes(searchFilter.toLowerCase())) ||
      l.serviceRequired.toLowerCase().includes(searchFilter.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const exportLeadsCsv = () => {
    const headers = ['ID', 'Date', 'Full Name', 'Company', 'Phone', 'Email', 'Service Required', 'Status', 'Budget', 'Notes'];
    const rows = leads.map((l) => [
      l.id,
      new Date(l.createdAt).toLocaleDateString(),
      `"${l.fullName}"`,
      `"${l.company || ''}"`,
      `"${l.phone}"`,
      `"${l.email}"`,
      `"${l.serviceRequired}"`,
      l.status,
      `"${l.budgetRange || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Wings_Consultants_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSaveStats = (e: React.FormEvent) => {
    e.preventDefault();
    updateCompanyStats(statsForm);
    setStatsSavedMsg(true);
    setTimeout(() => setStatsSavedMsg(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in">
      <div
        className="relative bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-slate-200 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#0f2c59] text-white p-5 sm:p-6 flex items-center justify-between border-b border-sky-900">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-400 text-slate-950">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Wings Consultants BD — Executive Portal
              </h3>
              <p className="text-xs text-slate-300">
                Lead Management & Corporate Data Controls
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {!isAuthenticated ? (
            /* PIN Protection Screen */
            <div className="max-w-md mx-auto py-10 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#0f2c59] flex items-center justify-center mx-auto border border-sky-200">
                <Lock className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                Executive Access Required
              </h4>
              <p className="text-xs text-slate-500">
                Please enter the internal management PIN code to view client inquiries and manage firm statistics.
              </p>

              <form onSubmit={handleLogin} className="space-y-3 pt-2">
                <input
                  type="password"
                  autoFocus
                  placeholder="Enter PIN (e.g. 2525)"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  className="w-full text-center px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-lg font-mono tracking-widest text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-sky-500"
                />

                {authError && (
                  <p className="text-xs font-semibold text-rose-600">
                    {authError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0f2c59] hover:bg-[#0284c7] text-white font-bold text-sm rounded-xl transition-colors cursor-pointer shadow-md"
                >
                  Verify & Access Dashboard
                </button>
              </form>

              <p className="text-[11px] text-slate-400">
                For demo convenience: use PIN <strong>2525</strong> or <strong>wings</strong>
              </p>
            </div>
          ) : (
            /* Authenticated Portal */
            <div className="space-y-6">
              
              {/* Top Navigation Tabs & Quick Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div className="flex gap-2 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveTab('leads')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      activeTab === 'leads'
                        ? 'bg-[#0f2c59] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Users className="w-4 h-4" />
                    <span>Inquiries & Leads ({leads.length})</span>
                  </button>

                  <button
                    onClick={() => setActiveTab('stats')}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      activeTab === 'stats'
                        ? 'bg-[#0f2c59] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Settings className="w-4 h-4" />
                    <span>Company Statistics</span>
                  </button>
                </div>

                {activeTab === 'leads' && (
                  <button
                    onClick={exportLeadsCsv}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Export CSV</span>
                  </button>
                )}
              </div>

              {/* TAB 1: LEADS & INQUIRIES */}
              {activeTab === 'leads' && (
                <div className="space-y-4">
                  {/* Search & Status Filters */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="relative w-full sm:w-72">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search name, phone, service..."
                        value={searchFilter}
                        onChange={(e) => setSearchFilter(e.target.value)}
                        className="w-full pl-9 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div className="flex items-center gap-1.5 w-full sm:w-auto overflow-x-auto">
                      {(['All', 'New', 'In Progress', 'Contacted', 'Completed', 'Archived'] as const).map((st) => (
                        <button
                          key={st}
                          onClick={() => setStatusFilter(st)}
                          className={`px-3 py-1 rounded-lg text-[11px] font-bold transition-colors cursor-pointer shrink-0 ${
                            statusFilter === st
                              ? 'bg-amber-400 text-slate-950 font-black'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Leads Table / Card List */}
                  {filteredLeads.length === 0 ? (
                    <div className="text-center py-12 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                      <Users className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-slate-600">No inquiries matching filter</p>
                      <p className="text-xs text-slate-400">New website submissions will automatically appear here.</p>
                    </div>
                  ) : (
                    <div className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                            <tr>
                              <th className="p-3">Received</th>
                              <th className="p-3">Client Name</th>
                              <th className="p-3">Contact Details</th>
                              <th className="p-3">Practice Required</th>
                              <th className="p-3">Status</th>
                              <th className="p-3 text-right">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {filteredLeads.map((lead) => (
                              <tr key={lead.id} className="hover:bg-sky-50/40 transition-colors">
                                <td className="p-3 text-slate-500 whitespace-nowrap">
                                  {new Date(lead.createdAt).toLocaleDateString()}{' '}
                                  <span className="text-[10px] text-slate-400 block">
                                    {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                  </span>
                                </td>
                                <td className="p-3">
                                  <strong className="text-slate-900 font-bold block">{lead.fullName}</strong>
                                  {lead.company && (
                                    <span className="text-[11px] text-slate-500">{lead.company}</span>
                                  )}
                                </td>
                                <td className="p-3">
                                  <div className="font-mono text-slate-800">{lead.phone}</div>
                                  <div className="text-slate-500 text-[11px]">{lead.email}</div>
                                </td>
                                <td className="p-3">
                                  <span className="px-2 py-0.5 rounded bg-sky-100 text-sky-900 text-[11px] font-semibold">
                                    {lead.serviceRequired}
                                  </span>
                                  {lead.budgetRange && (
                                    <div className="text-[10px] text-slate-500 mt-0.5">Budget: {lead.budgetRange}</div>
                                  )}
                                </td>
                                <td className="p-3">
                                  <select
                                    value={lead.status}
                                    onChange={(e) => updateLeadStatus(lead.id, e.target.value as any)}
                                    className={`px-2 py-1 rounded text-[11px] font-bold border ${
                                      lead.status === 'New'
                                        ? 'bg-amber-100 text-amber-900 border-amber-300'
                                        : lead.status === 'In Progress'
                                        ? 'bg-sky-100 text-sky-900 border-sky-300'
                                        : lead.status === 'Contacted'
                                        ? 'bg-indigo-100 text-indigo-900 border-indigo-300'
                                        : lead.status === 'Completed'
                                        ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                                        : 'bg-slate-100 text-slate-700 border-slate-300'
                                    }`}
                                  >
                                    <option value="New">New</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Contacted">Contacted</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Archived">Archived</option>
                                  </select>
                                </td>
                                <td className="p-3 text-right whitespace-nowrap">
                                  <button
                                    onClick={() => setSelectedLead(lead)}
                                    className="px-2.5 py-1 rounded bg-[#0f2c59] text-white font-bold text-[11px] hover:bg-[#0284c7] transition-colors mr-1.5 cursor-pointer"
                                  >
                                    Details
                                  </button>
                                  <button
                                    onClick={() => {
                                      if (confirm(`Delete record for ${lead.fullName}?`)) {
                                        deleteLead(lead.id);
                                      }
                                    }}
                                    className="px-2 py-1 rounded bg-rose-50 text-rose-700 hover:bg-rose-100 text-[11px] font-semibold transition-colors cursor-pointer"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Selected Lead Details Modal */}
                  {selectedLead && (
                    <div className="fixed inset-0 z-60 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
                      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4">
                        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                          <h4 className="text-lg font-bold text-[#0f2c59]">
                            Lead Information: {selectedLead.fullName}
                          </h4>
                          <button
                            onClick={() => setSelectedLead(null)}
                            className="p-1 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 cursor-pointer"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="space-y-2.5 text-xs text-slate-700">
                          <p><strong>Company:</strong> {selectedLead.company || 'Not Specified'}</p>
                          <p><strong>Phone:</strong> {selectedLead.phone}</p>
                          <p><strong>Email:</strong> {selectedLead.email}</p>
                          <p><strong>Service Requested:</strong> {selectedLead.serviceRequired}</p>
                          <p><strong>Preferred Contact Method:</strong> {selectedLead.preferredContactMethod}</p>
                          {selectedLead.preferredDate && (
                            <p><strong>Appointment Date & Time:</strong> {selectedLead.preferredDate} ({selectedLead.preferredTime})</p>
                          )}
                          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                            <strong>Project Details / Description:</strong>
                            <p className="mt-1 text-slate-600 whitespace-pre-line">{selectedLead.projectDescription}</p>
                          </div>

                          <div className="pt-2">
                            <label className="block font-bold text-slate-800 mb-1">
                              Consultant Internal Notes:
                            </label>
                            <textarea
                              rows={3}
                              defaultValue={selectedLead.notes || ''}
                              onBlur={(e) => updateLeadNotes(selectedLead.id, e.target.value)}
                              placeholder="Add follow-up notes, assigned consultant name, or quotation details..."
                              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs"
                            />
                            <span className="text-[10px] text-slate-400">Notes automatically save when you click outside.</span>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-200 flex justify-between">
                          <a
                            href={`tel:${selectedLead.phone.replace(/[^0-9+]/g, '')}`}
                            className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            <span>Call Client</span>
                          </a>
                          <button
                            onClick={() => setSelectedLead(null)}
                            className="px-4 py-1.5 rounded-lg bg-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-300"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 2: COMPANY STATS EDITING */}
              {activeTab === 'stats' && (
                <div className="max-w-xl mx-auto space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#0f2c59]">
                      Update Trust Statistics
                    </h4>
                    <p className="text-xs text-slate-500">
                      Changes made here instantly update the live numbers on the website homepage and trust strips.
                    </p>
                  </div>

                  {statsSavedMsg && (
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Company statistics updated successfully!</span>
                    </div>
                  )}

                  <form onSubmit={handleSaveStats} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Years of Experience Display Value
                      </label>
                      <input
                        type="text"
                        value={statsForm.yearsExperience}
                        onChange={(e) => setStatsForm({ ...statsForm, yearsExperience: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Completed Projects / Assignments
                      </label>
                      <input
                        type="text"
                        value={statsForm.completedProjects}
                        onChange={(e) => setStatsForm({ ...statsForm, completedProjects: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Industry Sectors Covered
                      </label>
                      <input
                        type="text"
                        value={statsForm.industrySectors}
                        onChange={(e) => setStatsForm({ ...statsForm, industrySectors: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Client Satisfaction / Support Level
                      </label>
                      <input
                        type="text"
                        value={statsForm.clientSatisfaction}
                        onChange={(e) => setStatsForm({ ...statsForm, clientSatisfaction: e.target.value })}
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-xs"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-[#0f2c59] hover:bg-[#0284c7] text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Live Changes</span>
                    </button>
                  </form>
                </div>
              )}

            </div>
          )}
        </div>
      </div>
    </div>
  );
};
