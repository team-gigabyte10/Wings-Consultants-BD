import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CompanyInfo,
  ServiceItem,
  IndustryItem,
  WhyChoosePillar,
  ConsultingStep,
  ProjectItem,
  CaseStudyItem,
  TestimonialItem,
  ResourceArticle,
  FaqItem,
  ConsultationLead,
  LeadStatus
} from '../wingsTypes';
import {
  initialCompanyInfo,
  initialServices,
  initialIndustries,
  initialWhyChoose,
  initialConsultingSteps,
  initialProjects,
  initialCaseStudies,
  initialTestimonials,
  initialResources,
  initialFaqs,
  initialSampleLeads
} from '../data/wingsInitialData';

interface CmsContextType {
  companyInfo: CompanyInfo;
  services: ServiceItem[];
  industries: IndustryItem[];
  whyChoose: WhyChoosePillar[];
  consultingSteps: ConsultingStep[];
  projects: ProjectItem[];
  caseStudies: CaseStudyItem[];
  testimonials: TestimonialItem[];
  resources: ResourceArticle[];
  faqs: FaqItem[];
  leads: ConsultationLead[];
  
  // Actions
  updateCompanyInfo: (updated: Partial<CompanyInfo>) => void;
  addLead: (lead: Omit<ConsultationLead, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateLeadStatus: (id: string, status: LeadStatus, notes?: string) => void;
  deleteLead: (id: string) => void;
  
  // CMS Content Mutators
  updateService: (updated: ServiceItem) => void;
  updateProject: (updated: ProjectItem) => void;
  updateTestimonial: (updated: TestimonialItem) => void;
  updateFaq: (updated: FaqItem) => void;
  addFaq: (newFaq: Omit<FaqItem, 'id'>) => void;
  
  // Modals & Active View Management
  activeServiceModal: ServiceItem | null;
  setActiveServiceModal: (service: ServiceItem | null) => void;
  isConsultationModalOpen: boolean;
  setIsConsultationModalOpen: (open: boolean) => void;
  selectedServiceForBooking: string;
  setSelectedServiceForBooking: (serviceName: string) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  
  // Reset
  resetToDefaults: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COMPANY: 'wings_cms_company_v3',
  SERVICES: 'wings_cms_services_v3',
  PROJECTS: 'wings_cms_projects_v3',
  TESTIMONIALS: 'wings_cms_testimonials_v3',
  FAQS: 'wings_cms_faqs_v3',
  LEADS: 'wings_cms_leads_v3'
};

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load from localStorage or default
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPANY);
      return saved ? JSON.parse(saved) : initialCompanyInfo;
    } catch {
      return initialCompanyInfo;
    }
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return saved ? JSON.parse(saved) : initialServices;
    } catch {
      return initialServices;
    }
  });

  const [industries] = useState<IndustryItem[]>(initialIndustries);
  const [whyChoose] = useState<WhyChoosePillar[]>(initialWhyChoose);
  const [consultingSteps] = useState<ConsultingStep[]>(initialConsultingSteps);

  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return saved ? JSON.parse(saved) : initialProjects;
    } catch {
      return initialProjects;
    }
  });

  const [caseStudies] = useState<CaseStudyItem[]>(initialCaseStudies);

  const [testimonials, setTestimonials] = useState<TestimonialItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return saved ? JSON.parse(saved) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  });

  const [resources] = useState<ResourceArticle[]>(initialResources);

  const [faqs, setFaqs] = useState<FaqItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.FAQS);
      return saved ? JSON.parse(saved) : initialFaqs;
    } catch {
      return initialFaqs;
    }
  });

  const [leads, setLeads] = useState<ConsultationLead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
      return saved ? JSON.parse(saved) : initialSampleLeads;
    } catch {
      return initialSampleLeads;
    }
  });

  // Modal states
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string>('Income Tax Consultancy');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Sync to storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(companyInfo));
    } catch (e) {
      console.error(e);
    }
  }, [companyInfo]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
    } catch (e) {
      console.error(e);
    }
  }, [services]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    } catch (e) {
      console.error(e);
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
    } catch (e) {
      console.error(e);
    }
  }, [testimonials]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.FAQS, JSON.stringify(faqs));
    } catch (e) {
      console.error(e);
    }
  }, [faqs]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
    } catch (e) {
      console.error(e);
    }
  }, [leads]);

  // Actions
  const updateCompanyInfo = (updated: Partial<CompanyInfo>) => {
    setCompanyInfo((prev) => ({ ...prev, ...updated }));
  };

  const addLead = async (leadData: Omit<ConsultationLead, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const newId = `lead-${Date.now()}`;
    const newLead: ConsultationLead = {
      ...leadData,
      id: newId,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    setLeads((prev) => [newLead, ...prev]);
    return newId;
  };

  const updateLeadStatus = (id: string, status: LeadStatus, notes?: string) => {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, status, notes: notes !== undefined ? notes : lead.notes } : lead
      )
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((lead) => lead.id !== id));
  };

  const updateService = (updated: ServiceItem) => {
    setServices((prev) => prev.map((s) => (s.id === updated.id ? updated : s)));
  };

  const updateProject = (updated: ProjectItem) => {
    setProjects((prev) => prev.map((p) => (p.id === updated.id ? updated : p)));
  };

  const updateTestimonial = (updated: TestimonialItem) => {
    setTestimonials((prev) => prev.map((t) => (t.id === updated.id ? updated : t)));
  };

  const updateFaq = (updated: FaqItem) => {
    setFaqs((prev) => prev.map((f) => (f.id === updated.id ? updated : f)));
  };

  const addFaq = (newFaq: Omit<FaqItem, 'id'>) => {
    const item: FaqItem = {
      ...newFaq,
      id: `faq-${Date.now()}`
    };
    setFaqs((prev) => [...prev, item]);
  };

  const resetToDefaults = () => {
    setCompanyInfo(initialCompanyInfo);
    setServices(initialServices);
    setProjects(initialProjects);
    setTestimonials(initialTestimonials);
    setFaqs(initialFaqs);
    setLeads(initialSampleLeads);
    localStorage.clear();
  };

  return (
    <CmsContext.Provider
      value={{
        companyInfo,
        services,
        industries,
        whyChoose,
        consultingSteps,
        projects,
        caseStudies,
        testimonials,
        resources,
        faqs,
        leads,
        updateCompanyInfo,
        addLead,
        updateLeadStatus,
        deleteLead,
        updateService,
        updateProject,
        updateTestimonial,
        updateFaq,
        addFaq,
        activeServiceModal,
        setActiveServiceModal,
        isConsultationModalOpen,
        setIsConsultationModalOpen,
        selectedServiceForBooking,
        setSelectedServiceForBooking,
        isAdminOpen,
        setIsAdminOpen,
        resetToDefaults
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = () => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
