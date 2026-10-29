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
  ExpertProfile
} from '../wingsTypes';

export const initialCompanyInfo: CompanyInfo = {
  name: "Wings Consultants BD",
  tagline: "Your Vision, Our Expertise",
  brandMessage: "Your Success, Our Commitment",
  positioning: "A Professional Consultancy Firm",
  experienceYears: 25,
  experienceBadge: "25 YEARS OF EXPERIENCE YOU CAN TRUST",
  location: "Dhaka, Bangladesh",
  address: "Motijheel / Gulshan Commercial Area, Dhaka, Bangladesh",
  phones: ["+880 1730-349633", "+880 1914-502714"],
  email: "wingsconsultantsbd@gmail.com",
  website: "www.wingsconsultantsbd.com",
  businessHours: "Saturday – Thursday: 9:00 AM – 6:00 PM (Friday Closed)",
  stats: {
    yearsExperience: "25+",
    completedProjects: "100+",
    industrySectors: "Multiple",
    clientSatisfaction: "100%"
  },
  socialLinks: {
    facebook: "https://facebook.com/wingsconsultantsbd",
    linkedin: "https://linkedin.com/company/wingsconsultantsbd",
    whatsapp: "+8801730349633"
  }
};

export const initialServices: ServiceItem[] = [
  {
    id: "income-tax-consultancy",
    slug: "income-tax-consultancy",
    title: "Income Tax Consultancy",
    tag: "Taxation & Compliance",
    shortDesc: "TIN Registration, Tax Return, Tax Clearance, Tax Advice for Individuals & Organizations.",
    fullDesc: "Comprehensive taxation management ensuring statutory compliance, tax optimization, hassle-free filings, and proactive audit advisory for companies, executives, and high-net-worth individuals in Bangladesh under the Income Tax Act.",
    icon: "Receipt",
    keyServices: [
      "e-TIN Registration & Amendments",
      "Individual & Corporate Tax Return Preparation",
      "Tax Clearance Certificate (TCC) Processing",
      "NBR Audit Representation & Appeal Support",
      "Withholding Tax & TDS Advisory",
      "Tax Planning & Wealth Statement Compilation",
      "Corporate Tax Assessment & Settlement",
      "Annual Regulatory Tax Compliance Filing"
    ],
    deliverables: [
      "Accurate Computation Sheets & e-Filing Acknowledgements",
      "Official Tax Clearance Certificates",
      "Audit Defense Dossier & NBR Representation",
      "Year-round Corporate Withholding Tax Schedules"
    ],
    industriesServed: ["Corporate Businesses", "SMEs & Startups", "High-Net-Worth Individuals", "NGOs & Non-Profits", "Exporters & Importers"],
    benefits: [
      "Zero penalty risk through timely regulatory compliance",
      "Optimized allowable deductions & legal rebates",
      "Full representation before Taxes Zones and appellate tribunals"
    ],
    ctaText: "Explore Tax Services",
    image: "/images/stock/photo-1554224155-8d04cb21cd6c.webp"
  },
  {
    id: "company-profile-pitch-deck",
    slug: "company-profile-pitch-deck",
    title: "Company Profile & Pitch Deck",
    tag: "Investment & Documentation",
    shortDesc: "For Investment, Business Proposals, Financial Projections & Feasibility.",
    fullDesc: "Strategic corporate profile writing and high-impact investor pitch decks designed for securing institutional funding, bank credit facilities, joint venture partnerships, and vendor pre-qualifications.",
    icon: "Presentation",
    keyServices: [
      "Corporate Company Profiles (Print & Digital)",
      "High-Conversion Investor Pitch Decks",
      "5-Year Financial Projections & Valuation Models",
      "Comprehensive Business Feasibility Studies",
      "Institutional Business Proposals & Bid Proposals",
      "Executive Summaries & Investment Memorandums",
      "Joint Venture & Partnership Proposals",
      "Corporate Identity & Presentation Collaterals"
    ],
    deliverables: [
      "Executive PDF & Interactive Pitch Decks",
      "Editable Multi-Scenario Financial Excel Models",
      "Comprehensive Bankable Feasibility Reports",
      "Vendor Enlistment & Pre-Qualification Dossiers"
    ],
    industriesServed: ["Commercial Enterprises", "Tech & Logistics Startups", "Industrial Manufacturers", "Hospitality & Healthcare", "Agro-processing"],
    benefits: [
      "Built according to international investment banking standards",
      "Clear financial payback period, IRR, ROI, and sensitivity analyses",
      "Strong corporate storytelling that commands stakeholder confidence"
    ],
    ctaText: "Build Your Business Profile",
    image: "/images/stock/photo-1460925895917-afdab827c52f.webp"
  },
  {
    id: "ngo-programme-consultancy",
    slug: "ngo-programme-consultancy",
    title: "NGO Programme Consultancy",
    tag: "Development & Non-Profit",
    shortDesc: "Project Proposal, Programme Design, Budget, Donor Documentation & Monitoring.",
    fullDesc: "Specialized consultancy for national and international non-governmental organizations, foundations, and civil society bodies across Bangladesh. We craft donor-winning grant proposals, logical frameworks (LogFrames), and transparent financial budgets.",
    icon: "Users2",
    keyServices: [
      "Donor-Aligned Grant Proposal Writing",
      "Logical Framework (LogFrame) & Theory of Change Formulation",
      "Programme Multi-Year Budgeting & Cost Allocation",
      "NGO Affairs Bureau (NGOAB) FD-6 / FD-7 Approval Documentation",
      "Monitoring, Evaluation, Accountability and Learning (MEAL) Frameworks",
      "Community Baseline Studies & Needs Assessments",
      "Donor Reporting & Mid-Term Evaluation Reports",
      "Institutional Capacity Building & Governance Compliance"
    ],
    deliverables: [
      "Complete Donor-Ready Project Proposals (USAID, EU, UN, DFID format)",
      "Detailed Activity-Based Budgets & Cashflow Forecasts",
      "NGOAB Compliance Dossiers & Approval Files",
      "MEAL Indicator Tracking Matrix"
    ],
    industriesServed: ["National NGOs", "International Development Agencies", "Charitable Foundations", "Microfinance Institutions", "Community Trust Funds"],
    benefits: [
      "Deep familiarity with donor compliance and NGO Affairs Bureau protocols",
      "Data-driven baseline framing ensuring high grant success rates",
      "Rigorous financial transparency and audit-ready documentation"
    ],
    ctaText: "Discuss Your NGO Project",
    image: "/images/stock/photo-1531206715517-5c0ba140b2b8.webp"
  },
  {
    id: "project-profile-development",
    slug: "project-profile-development",
    title: "Project Profile Development",
    tag: "Bank Loan & Project Finance",
    shortDesc: "Bank Loan, Industrial, Agro, Food & Other Projects.",
    fullDesc: "Bankable project profile creation for commercial banks, financial institutions (IDCOL, BIFFL), and private equity investors. Includes rigorous market sizing, civil and machinery cost estimations, financial modeling, and DSCR analysis.",
    icon: "ClipboardCheck",
    keyServices: [
      "Bank Loan Project Profiles (Term Loan & Working Capital)",
      "Technical & Financial Feasibility Studies",
      "Capex, Opex & Break-even Financial Analyses",
      "Debt Service Coverage Ratio (DSCR) & Internal Rate of Return (IRR) Computation",
      "Sensitivity & Risk Assessment Matrix",
      "Industrial Infrastructure & Equipment Estimation",
      "Environmental Impact Assessment (EIA) Support Documentation",
      "SME Foundation & Bangladesh Bank Refinance Scheme Profiles"
    ],
    deliverables: [
      "Comprehensive Bankable Project Profile (Spiral & Digital Bound)",
      "Audited Assumptions & Financial Model Sheets",
      "Bank Loan Presentation Support & Query Resolution",
      "Site & Machinery Verification Technical Summary"
    ],
    industriesServed: ["Light Engineering & Manufacturing", "Agro-Food Processing & Cold Storage", "Packaging & Paper Mills", "Garments & Textiles", "Hospital & Diagnostic Facilities"],
    benefits: [
      "Endorsed and trusted by major commercial banks & non-bank financial institutions",
      "Accurate realistic budgeting avoiding project cost overruns",
      "Direct advisory on debt structuring and government incentive schemes"
    ],
    ctaText: "Develop Your Project Profile",
    image: "/images/stock/photo-1454165804606-c3d57bc86b40.webp"
  },
  {
    id: "raw-materials-packaging-supply",
    slug: "raw-material-packaging-supply",
    title: "Raw Materials & Packaging Supply",
    tag: "Sourcing & Industrial Supply",
    shortDesc: "Supply of Quality Raw Materials, Chemicals & Packaging Materials.",
    fullDesc: "Strategic industrial sourcing and reliable supply chain advisory for premium raw materials, active botanical extracts, industrial chemicals, high-grade glass/PET containers, foil packaging, and custom labels for manufacturers.",
    icon: "PackageCheck",
    keyServices: [
      "Industrial Raw Material Procurement & Sourcing",
      "Chemicals, Emulsifiers, Preservatives & Ingredients",
      "Custom Packaging Sourcing (PET Bottles, Glass Vials, Caps, Pumps)",
      "Printed Mono-cartons, Blister Foils & Barrier Lamination Films",
      "Vendor Quality Audits & Certificate of Analysis (CoA) Verification",
      "Import Sourcing, LC Support & Port Clearance Advisory",
      "Buffer Stock Planning & Industrial Inventory Optimization",
      "Sustainable & Eco-friendly Packaging Alternatives"
    ],
    deliverables: [
      "Verified Certificate of Analysis (CoA) & Material Safety Data Sheets (MSDS)",
      "Pre-shipment Sample Batches for Laboratory Trial",
      "Guaranteed Quality Supply Agreements with Batch Traceability",
      "Optimized Material Cost Benchmarking Reports"
    ],
    industriesServed: ["Manufacturing Units", "Food & Beverage Processors", "Household Chemical Manufacturers", "Industrial Laboratories"],
    benefits: [
      "Strict quality control and authenticated botanical/chemical origins",
      "Cost reduction through bulk sourcing and verified manufacturing direct links",
      "Consistency in supply ensuring zero factory downtime"
    ],
    ctaText: "Request Material Sourcing",
    image: "/images/stock/photo-1586528116311-ad8dd3c8310d.webp"
  }
];

export const initialIndustries: IndustryItem[] = [
  {
    id: "tax-financial-services",
    title: "Tax & Financial Services",
    subtitle: "Corporate taxation, audits, financial projections, and statutory compliance",
    description: "Assisting corporate entities, financial institutions, and business owners navigate complex regulatory tax codes, wealth reporting, and statutory filings.",
    icon: "Coins",
    image: "/images/stock/photo-1450133064473-71024230f91b.webp",
    keyConsultingAreas: ["Corporate Income Tax", "Withholding Tax Audits", "TIN & Wealth Filings", "Tax Optimization"],
    caseHighlight: "Successfully resolved long-standing tax assessments for 35+ corporate clients with 100% compliance."
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    subtitle: "Factory establishment, layout engineering, and production optimization",
    description: "End-to-end consulting for industrial machinery installation, greenfield factory development, utility planning, and statutory licensing across Bangladesh.",
    icon: "Factory",
    image: "/images/stock/photo-1581091226825-a6a2a5aee158.webp",
    keyConsultingAreas: ["Factory Blueprints", "DoE & Fire Licensing", "Machine Sourcing", "Process SOPs"],
    caseHighlight: "Designed and facilitated setup of 18+ medium and large-scale manufacturing units in Dhaka and regional industrial parks."
  },
  {
    id: "consumer-goods-fmcg",
    title: "Consumer Goods & FMCG",
    subtitle: "Product launches, brand profiles, and quality compliance",
    description: "Strategic consulting for fast-moving consumer goods, personal care brands, and packaged products navigating BSTI compliance and market distribution.",
    icon: "Sparkles",
    image: "/images/stock/photo-1556228720-195a672e8a03.webp",
    keyConsultingAreas: ["BSTI Quality Certification", "Packaging & Label Standards", "Project Feasibility Profiles", "Supply Chain Sourcing"],
    caseHighlight: "Supported 25+ consumer brands and manufacturing ventures from concept to retail distribution."
  },
  {
    id: "food-agro",
    title: "Food, Agro & Cold Chain",
    subtitle: "Agro-processing plants, cold storage setups, and food safety standards",
    description: "Developing high-feasibility project profiles, technical blueprints, and government subsidy filings for food processing, automated rice mills, and agro infrastructure.",
    icon: "Wheat",
    image: "/images/stock/photo-1500937386664-56d1dfef3854.webp",
    keyConsultingAreas: ["Agro Project Profiles", "Cold Storage Financing", "BSTI Food Licensing", "Supply Chain Design"],
    caseHighlight: "Prepared bank loan project documentation for major agro-processing facilities totaling over BDT 150 Crore in sanctioned funds."
  },
  {
    id: "ngo-development",
    title: "NGO & Development Sector",
    subtitle: "Donor grant proposals, NGOAB documentation, and MEAL frameworks",
    description: "Partnering with civil society organizations to design sustainable social programs, donor budgets, and fulfill NGO Affairs Bureau requirements.",
    icon: "HeartHandshake",
    image: "/images/stock/photo-1488521787991-ed7bbaae773c.webp",
    keyConsultingAreas: ["Donor Proposal Writing", "FD-6/FD-7 Bureau Filing", "Budget Planning", "Project Impact Evaluation"],
    caseHighlight: "Facilitated grant approvals and NGOAB documentation for over 40+ community development initiatives."
  },
  {
    id: "sme-entrepreneurs",
    title: "SME & Entrepreneurship",
    subtitle: "Startup documentation, investor pitch decks, and SME loans",
    description: "Empowering emerging entrepreneurs with solid business plans, Bangladesh Bank SME refinance documentation, and investor-ready pitch materials.",
    icon: "Rocket",
    image: "/images/stock/photo-1519389950473-47ba0277781c.webp",
    keyConsultingAreas: ["SME Business Plans", "Investor Pitch Decks", "Bank Credit Proposals", "Trade License & Setup"],
    caseHighlight: "Helped 60+ SMEs secure seed funding and commercial bank working capital loans."
  },
  {
    id: "investors-joint-ventures",
    title: "Investors & Corporate Groups",
    subtitle: "Feasibility studies, market entry analysis, and investment advisory",
    description: "Providing high-level market feasibility studies, joint venture documentation, and risk mitigation strategies for local and international investors entering Bangladesh.",
    icon: "TrendingUp",
    image: "/images/stock/photo-1486406146926-c627a92ad1ab.webp",
    keyConsultingAreas: ["Bankable Feasibility Studies", "JV Agreements", "BIDA Investment Guidance", "Financial Valuations"],
    caseHighlight: "Conducted market feasibility assessments for multiple industrial expansion projects across high-growth corridors."
  }
];

export const initialWhyChoose: WhyChoosePillar[] = [
  {
    id: "expertise",
    title: "Proven Expertise",
    subtitle: "Technical & Regulatory Mastery",
    description: "Quarter-century of deep domain mastery across taxation laws, industrial engineering, cGMP compliance, and institutional project financing in Bangladesh.",
    icon: "Award"
  },
  {
    id: "reliability",
    title: "Unwavering Reliability",
    subtitle: "Dependable Long-Term Support",
    description: "Consistent, dependable guidance from project inception through licensing, documentation, and operational scale. We stand by our clients at every step.",
    icon: "ShieldCheck"
  },
  {
    id: "quality",
    title: "Gold-Standard Quality",
    subtitle: "Precision Documentation",
    description: "Bankable reports, mathematically sound financial models, and error-free regulatory dossiers recognized and accepted by banks, donors, and government bodies.",
    icon: "FileCheck"
  },
  {
    id: "results",
    title: "Measurable Results",
    subtitle: "Business Growth Driven",
    description: "Solutions designed specifically around commercial viability, loan sanctions, smooth factory commissioning, and tangible enterprise expansion.",
    icon: "TrendingUp"
  },
  {
    id: "experience",
    title: "25 Years of Experience",
    subtitle: "A Heritage of Trust",
    description: "With 25 years of continuous consultancy operations in Dhaka, our seasoned perspective protects clients from costly missteps and delays.",
    icon: "History"
  },
  {
    id: "client-centric",
    title: "Client-Centric Approach",
    subtitle: "Tailored Solutions",
    description: "Every business has unique operational realities. We reject generic templates, delivering bespoke strategies aligned with your specific commercial goals.",
    icon: "Users"
  }
];

export const initialConsultingSteps: ConsultingStep[] = [
  {
    step: "01",
    title: "Consultation & Discovery",
    subtitle: "Requirement Understanding",
    description: "We initiate an in-depth dialogue to thoroughly comprehend your business objectives, operational challenges, regulatory scope, and timeline expectations.",
    deliverable: "Initial Scope Document & Engagement Roadmap"
  },
  {
    step: "02",
    title: "Comprehensive Assessment",
    subtitle: "Technical & Financial Analysis",
    description: "Our senior consultants analyze regulatory criteria, site conditions, taxation parameters, financial viability, and statutory prerequisites.",
    deliverable: "Gap Analysis & Feasibility Check Report"
  },
  {
    step: "03",
    title: "Strategic Blueprint",
    subtitle: "Bespoke Solution Formulation",
    description: "We develop a tailor-made consulting strategy, encompassing detailed architectural layouts, financial models, proposal structures, or compliance pathways.",
    deliverable: "Strategic Action Plan & Execution Matrix"
  },
  {
    step: "04",
    title: "Documentation & Execution",
    subtitle: "Precision Delivery",
    description: "We prepare bankable project profiles, investor pitch decks, donor proposals, or DGDA/BSTI regulatory dossiers with rigorous multi-tier quality checks.",
    deliverable: "Final Bankable Dossier & Regulatory Filings"
  },
  {
    step: "05",
    title: "Follow-up & Ongoing Support",
    subtitle: "Sustained Success",
    description: "Our commitment extends beyond delivery. We assist during bank presentations, regulatory inspections, donor reviews, and operational scale-up.",
    deliverable: "Audit Defense, Query Support & Expansion Advisory"
  }
];

export const initialProjects: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Turnkey Industrial Manufacturing Unit Project Profile & Setup",
    industry: "Industrial Manufacturing",
    clientCategory: "Industrial Manufacturer",
    servicesProvided: ["Factory Layout Plan", "BSTI & DoE Compliance", "Machinery Sourcing", "Operational SOPs"],
    description: "Complete turnkey consulting for a 15,000 sq.ft. modern light industrial manufacturing facility in Gazipur, including compliant airflow layout, environmental clearances, and machinery commissioning.",
    completionYear: "2024",
    image: "/images/stock/photo-1581091226825-a6a2a5aee158.webp",
    isFeatured: true,
    confidentialNotice: "Client identity protected under professional NDA"
  },
  {
    id: "proj-2",
    title: "Bank Loan Project Profile for Automatic Agro-Food Processing Plant",
    industry: "Agro & Food Processing",
    clientCategory: "Corporate Agro Business",
    servicesProvided: ["Bankable Project Profile", "Financial Modeling", "DSCR Analysis", "Bank Presentation Support"],
    description: "Formulation of a comprehensive feasibility study and financial projection for a BDT 45 Crore automated flour and grain processing plant, successfully sanctioned by a leading commercial bank.",
    completionYear: "2024",
    image: "/images/stock/photo-1500937386664-56d1dfef3854.webp",
    isFeatured: true
  },
  {
    id: "proj-3",
    title: "Corporate Income Tax Optimization & NBR Audit Settlement",
    industry: "Taxation & Finance",
    clientCategory: "Import & Export Enterprise",
    servicesProvided: ["Corporate Tax Assessment", "Withholding Tax Planning", "TCC Processing", "Taxes Zone Representation"],
    description: "Structured multi-year tax planning and resolved complex withholding tax queries, securing clean Tax Clearance Certificates and substantial allowable rebates under prevailing tax legislation.",
    completionYear: "2025",
    image: "/images/stock/photo-1554224155-8d04cb21cd6c.webp",
    isFeatured: true
  },
  {
    id: "proj-4",
    title: "Multi-Year Donor Grant Proposal & NGOAB Approval Dossier",
    industry: "NGO & Social Development",
    clientCategory: "National Non-Profit Organization",
    servicesProvided: ["Grant Proposal Writing", "LogFrame & MEAL Design", "Budgeting", "FD-6 Filing Support"],
    description: "Developed a comprehensive 3-year community healthcare and skill-development proposal for an international donor consortium, securing approval and full NGO Affairs Bureau clearance.",
    completionYear: "2023",
    image: "/images/stock/photo-1488521787991-ed7bbaae773c.webp",
    isFeatured: false
  },
  {
    id: "proj-5",
    title: "Investor Pitch Deck & Corporate Profile for Tech Logistics Venture",
    industry: "Technology & Logistics",
    clientCategory: "Growth-Stage Startup",
    servicesProvided: ["Investor Pitch Deck", "Financial Model & Valuation", "Market Feasibility", "Corporate Profile"],
    description: "Crafted an executive investor presentation, 5-year unit economic projection, and commercial pitch deck that assisted the client in securing strategic Series-A seed capital.",
    completionYear: "2024",
    image: "/images/stock/photo-1460925895917-afdab827c52f.webp",
    isFeatured: false
  },
  {
    id: "proj-6",
    title: "Industrial Raw Material & Chemical Supply Chain Agreement",
    industry: "Chemicals & Materials",
    clientCategory: "Consumer Goods Brand",
    servicesProvided: ["Raw Material Sourcing", "CoA Verification", "Packaging Supply", "Batch Quality Audits"],
    description: "Established continuous, certified sourcing channels for industrial grade ingredients, emulsifiers, and imported amber glass/PET packaging with zero batch rejection.",
    completionYear: "2025",
    image: "/images/stock/photo-1586528116311-ad8dd3c8310d.webp",
    isFeatured: false
  }
];

export const initialCaseStudies: CaseStudyItem[] = [
  {
    id: "case-1",
    title: "Accelerating Factory Licensing & Quality Compliance for a Consumer Goods Unit",
    industry: "Consumer Goods Manufacturing",
    challenge: "A newly established manufacturing facility faced severe regulatory delays due to non-compliant factory ventilation layout and unverified product quality dossiers required by BSTI and DoE standards.",
    approach: "Wings Consultants BD conducted an on-site engineering audit, redesigned the floorplan blueprint to satisfy safety norms, formulated operational SOPs, and represented the client across statutory inspections.",
    solution: "Delivered compliant architectural drawings, standardized quality dossiers, and facilitated direct technical verification with licensing inspectors.",
    outcome: "Secured operational certifications within 60 days without structural rebuilding penalties, enabling commercial production ahead of schedule.",
    metrics: [
      { label: "Approval Time", value: "60 Days" },
      { label: "Cost Saved", value: "35%" },
      { label: "Compliance Score", value: "100% Validated" }
    ]
  },
  {
    id: "case-2",
    title: "Securing BDT 350 Million Term Loan for Light Engineering Expansion",
    industry: "Industrial Manufacturing",
    challenge: "An established engineering firm required significant debt financing for automated CNC machinery import, but their internal financial projections failed the bank's strict DSCR sensitivity tests.",
    approach: "Our financial consulting team reconstructed a bankable project profile, factoring in multi-shift production capacity, localized raw material pricing, and 7-year cashflow projections.",
    solution: "Produced an audited, highly detailed Bank Project Profile and assisted management throughout the bank's credit risk committee evaluations.",
    outcome: "Full term loan facility approved by the lead commercial bank with competitive interest rates and structured moratorium.",
    metrics: [
      { label: "Sanctioned Amount", value: "BDT 35 Cr" },
      { label: "DSCR Ratio", value: "1.82x" },
      { label: "Bank Approval", value: "Unanimous" }
    ]
  }
];

export const initialTestimonials: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Engr. M. A. Rahman",
    position: "Managing Director",
    company: "Industrial Engineering & Agro Ltd.",
    industry: "Manufacturing & Agro",
    testimonial: "Wings Consultants BD prepared our bank project profile with extraordinary thoroughness. Their 25 years of domain experience is clearly visible in the financial precision and technical clarity that satisfied the bank's credit committee on the very first submission.",
    rating: 5,
    date: "January 2025"
  },
  {
    id: "test-2",
    clientName: "Dr. K. H. Hossain",
    position: "Founder & Managing Director",
    company: "Apex Consumer Products Ltd.",
    industry: "Consumer Goods & Manufacturing",
    testimonial: "Navigating regulatory clearances and factory setup for industrial manufacturing is challenging in Bangladesh. Wings Consultants BD guided our facility layout, quality documentation, and licensing seamlessly. Highly recommended for corporate and industrial consulting.",
    rating: 5,
    date: "November 2024"
  },
  {
    id: "test-3",
    clientName: "Syeda Farhana Kabir",
    position: "Executive Director",
    company: "Development Action Bangladesh (NGO)",
    industry: "Non-Profit & NGO",
    testimonial: "Their NGO programme consulting team developed a winning donor grant proposal for our community initiative. The LogFrame and budget structures were world-class, and their support with NGO Affairs Bureau documentation was invaluable.",
    rating: 5,
    date: "August 2024"
  },
  {
    id: "test-4",
    clientName: "Tanvir Ahmed",
    position: "Director of Finance",
    company: "Apex Global Trading & Imports",
    industry: "Corporate Trade & Taxation",
    testimonial: "We have entrusted our corporate tax compliance, annual tax returns, and advisory to Wings Consultants BD for several years. Their team is prompt, reliable, and provides proactive solutions that give us complete peace of mind.",
    rating: 5,
    date: "February 2025"
  }
];

export const initialResources: ResourceArticle[] = [
  {
    id: "res-1",
    title: "Essential Guide to Corporate Tax Return Filing & Compliance in Bangladesh",
    slug: "corporate-tax-return-filing-guide-bangladesh",
    category: "Tax & Compliance",
    excerpt: "A comprehensive breakdown of the Income Tax Act requirements, mandatory filing deadlines, withholding tax audit preparation, and legal deduction strategies for businesses.",
    content: `Filing corporate tax returns in Bangladesh requires strict adherence to the latest Income Tax legislation. This guide outlines key provisions:

1. Mandatory Corporate Documentation
Every registered company in Bangladesh must submit audited financial statements, a computed tax calculation sheet, withholding tax certificates (TDS/VDS), and bank reconciliation statements alongside Form 35(B).

2. Important Tax Deadlines & Penalties
Corporate returns must be filed on or before Tax Day (the 15th day of the 7th month following the end of the income year). Late filings attract statutory penalties and interest under the Income Tax Act.

3. Maximizing Allowable Deductions
Learn how proper documentation of business expenditures, depreciation allowances on plant & machinery, and amortizations can legitimately reduce taxable profit while maintaining full statutory compliance.

For dedicated assistance with your company's tax assessment, contact Wings Consultants BD.`,
    readTime: "6 min read",
    publishDate: "January 2025",
    author: "Wings Tax Advisory Team",
    downloadableDocName: "Corporate_Tax_Filing_Checklist_BD.pdf",
    tags: ["Income Tax", "NBR Compliance", "Corporate Tax", "Tax Returns"]
  },
  {
    id: "res-2",
    title: "Step-by-Step Guide: Setting Up a Modern Industrial Manufacturing Plant in Bangladesh",
    slug: "industrial-plant-setup-guide-bangladesh",
    category: "Industry Setup",
    excerpt: "From land zoning and industrial factory layout design to DoE clearance and BSTI quality approvals — an authoritative roadmap for prospective industrialists.",
    content: `The light manufacturing and consumer goods sector in Bangladesh is experiencing rapid domestic growth and export demand.

Key Milestones for Factory Setup:
1. Architectural & Floor Layout: Designing unidirectional material and personnel flows to optimize productivity and comply with industrial safety guidelines.
2. Department of Environment (DoE) & Fire Safety Clearance: Securing site clearance, effluent treatment plant (ETP) plans, and structural fire safety approvals.
3. Quality & Standard Licensing: Preparing standard product dossiers, batch manufacturing records (BMR), and equipment qualification files for BSTI certification.
4. Machinery Procurement & Trial Commissioning: Sourcing high-efficiency machinery, calibration, and conducting trial production runs.

Wings Consultants BD provides turnkey industrial consultancy from blueprint design to trial batch commissioning.`,
    readTime: "8 min read",
    publishDate: "December 2024",
    author: "Industrial Consultancy Wing",
    downloadableDocName: "Industrial_Factory_Setup_Checklist.pdf",
    tags: ["Factory Setup", "Manufacturing", "Industrial", "BSTI", "DoE Clearance"]
  },
  {
    id: "res-3",
    title: "Key Elements of a Bankable Project Profile for Commercial Bank Loans",
    slug: "bankable-project-profile-guide",
    category: "Project Development",
    excerpt: "Understand what credit risk officers and bank appraisal committees scrutinize in your project feasibility report, from DSCR ratios to realistic break-even analyses.",
    content: `When commercial banks and financial institutions appraise a project loan, they prioritize repayment capacity, promoter background, and financial realism.

Core Sections Every Project Profile Must Contain:
- Executive Summary & Promoters' Track Record
- Technical Assessment: Machinery capacity, utility balance, site accessibility
- Market Demand & Pricing Sensitivity Analysis
- Comprehensive Financial Modeling: 5 to 7-year Projected Income Statements, Balance Sheets, Cash Flow Statements
- Key Financial Ratios: Debt Service Coverage Ratio (DSCR), Break-Even Analysis, Internal Rate of Return (IRR), and Payback Period.

Wings Consultants BD has formulated over 100+ bankable profiles accepted across leading banks in Bangladesh.`,
    readTime: "7 min read",
    publishDate: "November 2024",
    author: "Project Finance Advisory",
    downloadableDocName: "Bank_Loan_Project_Profile_Template_Guide.pdf",
    tags: ["Bank Loan", "Project Profile", "Feasibility Study", "Financial Model"]
  },
  {
    id: "res-4",
    title: "How to Structure an NGO Project Proposal for International Donors",
    slug: "ngo-project-proposal-writing-guide",
    category: "NGO Consultancy",
    excerpt: "A practical guide to crafting winning grant proposals, Logical Frameworks (LogFrames), and fulfilling NGO Affairs Bureau (FD-6) requirements in Bangladesh.",
    content: `International grant competition demands compelling problem statements supported by verified baseline data and watertight budget allocations.

Key Proposal Components:
1. Situational Analysis & Problem Justification: Backed by empirical research and community need.
2. Logical Framework (LogFrame): Aligning inputs, outputs, outcomes, and verifiable indicators.
3. Activity-Based Multi-Year Budgeting: Ensuring full cost transparency and compliance with donor ceiling guidelines.
4. NGO Affairs Bureau Alignment: Preparing documentation for swift FD-6 or FD-7 project approvals.

Consult with Wings Consultants BD for professional NGO proposal writing and donor compliance support.`,
    readTime: "5 min read",
    publishDate: "October 2024",
    author: "Development Services Group",
    downloadableDocName: "NGO_Grant_Proposal_LogFrame_Template.pdf",
    tags: ["NGO", "Grant Proposal", "LogFrame", "NGO Affairs Bureau"]
  }
];

export const initialFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "What consultancy services does Wings Consultants BD provide?",
    answer: "Wings Consultants BD provides comprehensive corporate solutions across five core practices: (1) Income Tax Consultancy, (2) Company Profile & Investor Pitch Decks, (3) NGO Programme Consultancy, (4) Bankable Project Profile Development, and (5) Raw Materials & Packaging Supply.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you provide income tax consultancy for both individuals and companies?",
    answer: "Yes. We offer complete tax services including e-TIN registration, annual income tax return preparation, wealth statements, withholding tax (TDS) management, tax clearance certificates (TCC), and representation before the National Board of Revenue (NBR) for assessment and audit settlement.",
    category: "Taxation"
  },
  {
    id: "faq-3",
    question: "How do you help with company profiles and investor pitch decks?",
    answer: "We craft strategic corporate profiles and investor-grade pitch decks. Our team conducts business model analysis, develops 5-year financial projections (including NPV, IRR, and payback calculations), and creates compelling presentations tailored to secure venture capital, bank facilities, or corporate partnerships.",
    category: "Business Planning"
  },
  {
    id: "faq-4",
    question: "Can you prepare bankable project profiles for bank loan approvals?",
    answer: "Yes. With 25 years of experience in project documentation, we develop detailed, bank-compliant feasibility studies and project profiles for industrial factories, agro-food processors, SME loans, cold storage setups, and manufacturing units. Our profiles are widely recognized by commercial banks and financial institutions in Bangladesh.",
    category: "Project Finance"
  },
  {
    id: "faq-5",
    question: "What support do you provide for industrial project profiles and bank financing?",
    answer: "We offer comprehensive project modeling including Capex/Opex forecasting, technical infrastructure planning, Debt Service Coverage Ratio (DSCR) calculations, break-even analysis, and presentation support during bank appraisal committee evaluations.",
    category: "Project Finance"
  },
  {
    id: "faq-6",
    question: "Do you provide consultancy support for NGOs and donor projects?",
    answer: "Yes. We assist NGOs, foundations, and civil society organizations with donor-aligned grant proposal writing, Logical Framework (LogFrame) design, multi-year budget formulation, and statutory documentation for the NGO Affairs Bureau (FD-6 / FD-7 filings).",
    category: "NGO Services"
  },
  {
    id: "faq-7",
    question: "Can you supply quality raw materials and packaging materials for manufacturers?",
    answer: "Yes. We assist manufacturers in sourcing authenticated raw ingredients, industrial chemicals, laboratory tested materials, and customized packaging materials (bottles, glass vials, barrier foil, mono-cartons) with verified Certificates of Analysis (CoA).",
    category: "Raw Materials"
  },
  {
    id: "faq-8",
    question: "How can I book a consultation with Wings Consultants BD?",
    answer: "You can schedule a consultation directly on this website using our 'Get a Consultation' booking form, or call us at +880 1730-349633 / +880 1914-502714, or email us at wingsconsultantsbd@gmail.com. We also welcome scheduled in-person meetings at our Dhaka office.",
    category: "General"
  }
];

export const HR_TRAINING_PRACTICE = "HR, Training & Capacity Building";

export const initialExperts: ExpertProfile[] = [
  {
    id: "expert-1",
    slug: "dr-muhammad-abdul-bari",
    name: "Dr. Muhammad Abdul Bari",
    title: "HR Expert",
    roles: [
      "Professional Trainer",
      "HRM & Management Consultant",
      "Development & Capacity-Building Specialist"
    ],
    photo: "/images/team/muhammad-abdul-bari.webp",
    summary:
      "PhD in Human Resource Management with 19+ years in the NGO and development sector. Leads our HR advisory, leadership training and capacity-building work.",
    profile:
      "Senior development and management professional who combines a PhD in Human Resource Management with extensive practical experience in staff development, recruitment, HR systems, programme and project management, organizational effectiveness, strategic partnerships, donor engagement and development finance. Works closely with NGO leadership, management teams, project professionals and community-oriented institutions, and turns complex management and development concepts into practical, participant-focused learning, tools and workplace applications.",
    facts: [
      { value: "19+ Years", label: "NGO & development-sector experience" },
      { value: "PhD", label: "Human Resource Management" },
      { value: "Senior", label: "Advisory engagement with leadership teams" }
    ],
    expertise: [
      { area: "Strategic HRM & Workforce Development", scope: "HR planning, recruitment and selection, onboarding, performance management, staff development, competency frameworks and retention." },
      { area: "Leadership & Management", scope: "Leadership effectiveness, supervision, delegation, decision-making, communication, team management and workplace performance." },
      { area: "Training of Trainers (ToT)", scope: "Training needs assessment, learning objectives, adult-learning principles, session planning, facilitation, presentation and evaluation." },
      { area: "Organizational Development", scope: "Institutional strengthening, organizational effectiveness, change management, culture, role clarity and performance improvement." },
      { area: "Programme & Project Management", scope: "Project cycle management, work planning, implementation, monitoring, reporting, coordination and risk management." },
      { area: "NGO & Development Management", scope: "NGO management, stakeholder engagement, partnership development, donor relations and development-sector practice." },
      { area: "Resource Mobilization & Partnerships", scope: "Donor engagement, funding readiness, strategic partnerships, proposal concepts and resource mobilization." },
      { area: "Development Finance & Social Enterprise", scope: "Investment readiness, blended-finance concepts, enterprise development and community-based economic initiatives." }
    ],
    modules: [
      "Strategic Human Resource Management for NGOs and Development Organizations",
      "Recruitment, Selection, Onboarding and Staff Retention",
      "Performance Management and Staff Development",
      "Leadership and Supervisory Skills for NGO Managers",
      "Team Building, Communication and Workplace Effectiveness",
      "Training of Trainers (ToT) and Professional Facilitation Skills",
      "Organizational Development and Change Management",
      "Project & Programme Management for Development Professionals",
      "Donor Relations, Strategic Partnerships and Resource Mobilization",
      "Funding Readiness, Proposal Concepts and Development Finance",
      "Social Enterprise and Community Enterprise Development",
      "Professional Ethics, Accountability and Institutional Effectiveness"
    ],
    methods: [
      "Training Needs Assessment (TNA) and competency-gap identification",
      "Adult learning, participatory facilitation and experience-based learning",
      "Session design, learning objectives, exercises, case studies and group work",
      "Executive and management workshops and professional development sessions",
      "Training materials, presentations, facilitator notes and practical tools",
      "Pre/post learning checks, participant feedback and training evaluation",
      "Linking training outcomes to organizational performance and workplace application"
    ],
    experience: [
      {
        role: "Development & Management Consultant / HRM & Development Finance Consultant",
        organization: "Work Info, Bangladesh",
        period: "Current",
        detail: "Senior advisory support to NGOs, social enterprises and local institutions on HRM, organizational effectiveness, programme and project management, strategic partnerships, donor engagement, resource mobilization, development finance and funding readiness."
      },
      {
        role: "Funding & Investment Consultant",
        organization: "Ashroy Angon Society (AAS), Bangladesh",
        period: "2026 – Present",
        detail: "Institutional funding strategy, partnership development, donor and investor engagement, project concept development and blended funding initiatives in community enterprise, eco-tourism, green value chains and agriculture."
      },
      {
        role: "Senior NGO / Development Management",
        organization: "NGO & Development Sector, Bangladesh",
        period: "19+ years",
        detail: "Progressive experience in staff development, recruitment, HR systems, project and programme management, institutional development, stakeholder coordination, donor relations and partnership building, including senior management responsibilities."
      }
    ],
    education: [
      "PhD in Human Resource Management — University of Southern California, 2007",
      "Professional and academic development in HRM, management and development practice"
    ],
    sectors: [
      "NGO & development management",
      "Human resources & staff development",
      "Community enterprise",
      "Climate-smart agriculture",
      "Renewable energy",
      "Eco-tourism",
      "Sustainable livelihoods",
      "Inclusive finance",
      "SME & social enterprise",
      "Institutional capacity building"
    ],
    consultationTopic: HR_TRAINING_PRACTICE
  }
];
