import React, { createContext, useContext, useState } from 'react';
import {
  CompanyInfo,
  BoardMember,
  ProductItem,
  ComplianceCertification,
  SisterConcernInfo,
  FaqItem,
  DealerInquiryLead,
  LeadStatus
} from '../types';
import {
  initialCompanyInfo,
  initialBoardMembers,
  initialProducts,
  initialComplianceCertifications,
  initialSisterConcern,
  initialFaqs,
  initialSampleLeads
} from '../data/initialData';

interface CmsContextType {
  companyInfo: CompanyInfo;
  boardMembers: BoardMember[];
  products: ProductItem[];
  compliances: ComplianceCertification[];
  sisterConcern: SisterConcernInfo;
  faqs: FaqItem[];
  leads: DealerInquiryLead[];

  // Mutators & Lead Management
  addLead: (lead: Omit<DealerInquiryLead, 'id' | 'createdAt' | 'status'>) => Promise<string>;
  updateLeadStatus: (id: string, status: LeadStatus, notes?: string) => void;
  deleteLead: (id: string) => void;
  updateCompanyInfo: (updated: Partial<CompanyInfo>) => void;

  // Active Modals state
  selectedProduct: ProductItem | null;
  setSelectedProduct: (product: ProductItem | null) => void;
  isDealerModalOpen: boolean;
  setIsDealerModalOpen: (open: boolean) => void;
  dealerModalPreselectProduct: string;
  setDealerModalPreselectProduct: (name: string) => void;
  isSisterConcernModalOpen: boolean;
  setIsSisterConcernModalOpen: (open: boolean) => void;
  isAdminModalOpen: boolean;
  setIsAdminModalOpen: (open: boolean) => void;

  // Reset function
  resetToDefaults: () => void;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

const STORAGE_KEYS = {
  COMPANY: 'pure_enterprise_company_v1',
  PRODUCTS: 'pure_enterprise_products_v1',
  BOARD: 'pure_enterprise_board_v1',
  LEADS: 'pure_enterprise_leads_v1',
  FAQS: 'pure_enterprise_faqs_v1'
};

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.COMPANY);
      return saved ? JSON.parse(saved) : initialCompanyInfo;
    } catch {
      return initialCompanyInfo;
    }
  });

  const [boardMembers] = useState<BoardMember[]>(initialBoardMembers);
  const [products] = useState<ProductItem[]>(initialProducts);
  const [compliances] = useState<ComplianceCertification[]>(initialComplianceCertifications);
  const [sisterConcern] = useState<SisterConcernInfo>(initialSisterConcern);
  const [faqs] = useState<FaqItem[]>(initialFaqs);

  const [leads, setLeads] = useState<DealerInquiryLead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
      return saved ? JSON.parse(saved) : initialSampleLeads;
    } catch {
      return initialSampleLeads;
    }
  });

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false);
  const [dealerModalPreselectProduct, setDealerModalPreselectProduct] = useState<string>('');
  const [isSisterConcernModalOpen, setIsSisterConcernModalOpen] = useState(false);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  const updateCompanyInfo = (updated: Partial<CompanyInfo>) => {
    setCompanyInfo((prev) => {
      const next = { ...prev, ...updated };
      localStorage.setItem(STORAGE_KEYS.COMPANY, JSON.stringify(next));
      return next;
    });
  };

  const addLead = async (leadData: Omit<DealerInquiryLead, 'id' | 'createdAt' | 'status'>): Promise<string> => {
    const newId = 'lead-' + Date.now();
    const newLead: DealerInquiryLead = {
      ...leadData,
      id: newId,
      status: 'New',
      createdAt: new Date().toISOString()
    };
    const nextLeads = [newLead, ...leads];
    setLeads(nextLeads);
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(nextLeads));
    return newId;
  };

  const updateLeadStatus = (id: string, status: LeadStatus, notes?: string) => {
    const nextLeads = leads.map((l) => (l.id === id ? { ...l, status, notes: notes ?? l.notes } : l));
    setLeads(nextLeads);
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(nextLeads));
  };

  const deleteLead = (id: string) => {
    const nextLeads = leads.filter((l) => l.id !== id);
    setLeads(nextLeads);
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(nextLeads));
  };

  const resetToDefaults = () => {
    localStorage.clear();
    setCompanyInfo(initialCompanyInfo);
    setLeads(initialSampleLeads);
    setSelectedProduct(null);
    setIsDealerModalOpen(false);
    setIsSisterConcernModalOpen(false);
    setIsAdminModalOpen(false);
  };

  return (
    <CmsContext.Provider
      value={{
        companyInfo,
        boardMembers,
        products,
        compliances,
        sisterConcern,
        faqs,
        leads,
        addLead,
        updateLeadStatus,
        deleteLead,
        updateCompanyInfo,
        selectedProduct,
        setSelectedProduct,
        isDealerModalOpen,
        setIsDealerModalOpen,
        dealerModalPreselectProduct,
        setDealerModalPreselectProduct,
        isSisterConcernModalOpen,
        setIsSisterConcernModalOpen,
        isAdminModalOpen,
        setIsAdminModalOpen,
        resetToDefaults
      }}
    >
      {children}
    </CmsContext.Provider>
  );
};

export const useCms = (): CmsContextType => {
  const context = useContext(CmsContext);
  if (!context) {
    throw new Error('useCms must be used within a CmsProvider');
  }
  return context;
};
