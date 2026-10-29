import React, { createContext, useContext, useState } from 'react';
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
  ExpertProfile,
  ConsultationRequest
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
  initialExperts
} from '../data/wingsInitialData';
import { formatInquiry, openWhatsApp } from '../lib/inquiry';

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
  experts: ExpertProfile[];

  /** Opens WhatsApp with the request already written. Nothing is stored. */
  sendInquiry: (request: ConsultationRequest) => void;

  isConsultationModalOpen: boolean;
  openConsultation: (serviceTitle?: string) => void;
  closeConsultation: () => void;
  selectedServiceForBooking: string;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState('Income Tax Consultancy');

  const sendInquiry = (r: ConsultationRequest) => {
    const text = formatInquiry(`Wings Consultants BD — Consultation request: ${r.serviceRequired}`, [
      ['Name', r.fullName],
      ['Company', r.company],
      ['Phone', r.phone],
      ['Email', r.email],
      ['Budget', r.budgetRange],
      ['Preferred date', r.preferredDate],
      ['Preferred time', r.preferredTime],
      ['Contact by', r.preferredContactMethod],
      ['Details', r.projectDescription]
    ]);
    openWhatsApp(initialCompanyInfo.socialLinks.whatsapp ?? initialCompanyInfo.phones[0], text);
  };

  return (
    <CmsContext.Provider
      value={{
        companyInfo: initialCompanyInfo,
        services: initialServices,
        industries: initialIndustries,
        whyChoose: initialWhyChoose,
        consultingSteps: initialConsultingSteps,
        projects: initialProjects,
        caseStudies: initialCaseStudies,
        testimonials: initialTestimonials,
        resources: initialResources,
        faqs: initialFaqs,
        experts: initialExperts,
        sendInquiry,
        isConsultationModalOpen,
        openConsultation: (serviceTitle?: string) => {
          if (serviceTitle) setSelectedServiceForBooking(serviceTitle);
          setIsConsultationModalOpen(true);
        },
        closeConsultation: () => setIsConsultationModalOpen(false),
        selectedServiceForBooking
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
