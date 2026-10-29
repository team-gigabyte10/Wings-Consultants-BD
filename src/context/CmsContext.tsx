import React, { createContext, useContext, useState } from 'react';
import {
  CompanyInfo,
  BoardMember,
  ProductItem,
  ComplianceCertification,
  SisterConcernInfo,
  FaqItem,
  DealerInquiry
} from '../types';
import {
  initialCompanyInfo,
  initialBoardMembers,
  initialProducts,
  initialComplianceCertifications,
  initialSisterConcern,
  initialFaqs
} from '../data/initialData';
import { formatInquiry, openWhatsApp } from '../lib/inquiry';

interface CmsContextType {
  companyInfo: CompanyInfo;
  boardMembers: BoardMember[];
  products: ProductItem[];
  compliances: ComplianceCertification[];
  sisterConcern: SisterConcernInfo;
  faqs: FaqItem[];

  /** Opens WhatsApp with the inquiry already written. Nothing is stored. */
  sendInquiry: (inquiry: DealerInquiry) => void;

  isDealerModalOpen: boolean;
  openDealerModal: (productName?: string) => void;
  closeDealerModal: () => void;
  dealerModalPreselectProduct: string;
}

const CmsContext = createContext<CmsContextType | undefined>(undefined);

export const CmsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false);
  const [dealerModalPreselectProduct, setDealerModalPreselectProduct] = useState('');

  const sendInquiry = (inquiry: DealerInquiry) => {
    const text = formatInquiry(`পিওর এন্টারপ্রাইজ লিমিটেড — ${inquiry.inquiryType}`, [
      ['নাম', inquiry.fullName],
      ['মোবাইল', inquiry.phone],
      ['ইমেইল', inquiry.email],
      ['প্রতিষ্ঠান', inquiry.businessName],
      ['জেলা', inquiry.district],
      ['আগ্রহী পণ্য', inquiry.interestedProducts.join(', ')],
      ['বার্তা', inquiry.message]
    ]);
    openWhatsApp(initialCompanyInfo.socialLinks.whatsapp ?? initialCompanyInfo.phones[0], text);
  };

  return (
    <CmsContext.Provider
      value={{
        companyInfo: initialCompanyInfo,
        boardMembers: initialBoardMembers,
        products: initialProducts,
        compliances: initialComplianceCertifications,
        sisterConcern: initialSisterConcern,
        faqs: initialFaqs,
        sendInquiry,
        isDealerModalOpen,
        openDealerModal: (productName = '') => {
          setDealerModalPreselectProduct(productName);
          setIsDealerModalOpen(true);
        },
        closeDealerModal: () => setIsDealerModalOpen(false),
        dealerModalPreselectProduct
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
