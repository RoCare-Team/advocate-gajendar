// All practice areas. Content is static but structured so an API can replace it later.
// `icon` values map to lucide-react icons via components/ui/Icon.jsx.

export const practiceAreas = [
  {
    slug: "property",
    name: "Property Lawyer",
    icon: "Home",
    tagline: "Title, disputes & registration",
    short:
      "Expert help with property disputes, title verification, registration and RERA matters.",
    overview:
      "Property transactions carry significant legal and financial risk. Our verified property advocates handle title verification, sale-deed drafting, mutation, partition suits, builder disputes and RERA complaints — ensuring your investment is legally watertight.",
    services: [
      "Title search & due diligence",
      "Sale deed & agreement drafting",
      "Property registration assistance",
      "Partition & inheritance disputes",
      "Builder / RERA complaints",
      "Mutation & land record correction",
    ],
    startingPrice: 999,
  },
  {
    slug: "family",
    name: "Family Lawyer",
    icon: "Users",
    tagline: "Divorce, custody & maintenance",
    short:
      "Compassionate counsel for divorce, child custody, maintenance and matrimonial disputes.",
    overview:
      "Family matters demand sensitivity and discretion. Our family law specialists guide you through mutual and contested divorce, alimony, child custody, guardianship and domestic-violence protection with empathy and strategic clarity.",
    services: [
      "Mutual & contested divorce",
      "Child custody & guardianship",
      "Maintenance & alimony claims",
      "Domestic violence protection",
      "Judicial separation",
      "Marriage registration",
    ],
    startingPrice: 1499,
  },
  {
    slug: "civil",
    name: "Civil Lawyer",
    icon: "Scale",
    tagline: "Suits, recovery & injunctions",
    short:
      "Representation in civil suits, money recovery, injunctions and contractual disputes.",
    overview:
      "From money-recovery suits to injunctions and specific-performance claims, our civil litigation team builds a strong evidentiary case and represents you effectively at every stage of the proceedings.",
    services: [
      "Money recovery suits",
      "Injunction & stay applications",
      "Specific performance claims",
      "Contract & agreement disputes",
      "Declaration suits",
      "Appeals & revisions",
    ],
    startingPrice: 1299,
  },
  {
    slug: "corporate",
    name: "Corporate Lawyer",
    icon: "Building2",
    tagline: "Contracts, compliance & M&A",
    short:
      "Advisory on contracts, compliance, mergers, due diligence and corporate governance.",
    overview:
      "Grow with confidence. Our corporate advisors draft and review commercial contracts, structure investments, run legal due diligence and keep your company compliant with the Companies Act and SEBI regulations.",
    services: [
      "Contract drafting & vetting",
      "Corporate compliance & filings",
      "Mergers & acquisitions",
      "Shareholder agreements",
      "Legal due diligence",
      "Joint venture structuring",
    ],
    startingPrice: 2499,
  },
  {
    slug: "criminal",
    name: "Criminal Lawyer",
    icon: "Gavel",
    tagline: "Bail, defence & trials",
    short:
      "Robust defence for bail, FIR quashing, trials and white-collar crime matters.",
    overview:
      "When your liberty is at stake, experience matters. Our criminal defence advocates handle anticipatory and regular bail, FIR quashing, trial representation and appeals across all courts with an aggressive, ethical strategy.",
    services: [
      "Anticipatory & regular bail",
      "FIR quashing & stay",
      "Trial defence & representation",
      "Cheque bounce (Sec 138)",
      "White-collar & economic offences",
      "Appeals & revisions",
    ],
    startingPrice: 1999,
  },
  {
    slug: "consumer",
    name: "Consumer Lawyer",
    icon: "Shield",
    tagline: "Complaints & compensation",
    short:
      "File and fight consumer complaints for defective goods, services and unfair trade.",
    overview:
      "Been cheated by a business? We file and pursue complaints before the District, State and National Consumer Commissions for deficient services, defective products, medical negligence and unfair trade practices.",
    services: [
      "Consumer complaint drafting",
      "Deficiency in service claims",
      "Defective product refunds",
      "Medical negligence cases",
      "Insurance claim disputes",
      "E-commerce fraud complaints",
    ],
    startingPrice: 999,
  },
  {
    slug: "gst",
    name: "GST Lawyer",
    icon: "Receipt",
    tagline: "Registration, notices & appeals",
    short:
      "End-to-end GST registration, return support, notice replies and appeals.",
    overview:
      "Stay GST-compliant and dispute-ready. Our indirect-tax experts handle registration, return filing advisory, show-cause notice replies, input-credit disputes and appeals before GST authorities.",
    services: [
      "GST registration & amendment",
      "Return filing advisory",
      "Show-cause notice replies",
      "Input tax credit disputes",
      "GST refund claims",
      "Appeals before authorities",
    ],
    startingPrice: 1299,
  },
  {
    slug: "tax",
    name: "Tax Lawyer",
    icon: "BadgeIndianRupee",
    tagline: "Income tax & assessments",
    short:
      "Guidance on income-tax notices, assessments, appeals and tax planning.",
    overview:
      "Resolve tax troubles the right way. We represent individuals and businesses in income-tax assessments, scrutiny, penalty proceedings and appeals before the CIT(A) and ITAT, along with lawful tax-planning advice.",
    services: [
      "Income tax notice replies",
      "Scrutiny & assessment support",
      "Appeals before CIT(A) & ITAT",
      "Penalty & prosecution defence",
      "TDS dispute resolution",
      "Tax planning advisory",
    ],
    startingPrice: 1499,
  },
  {
    slug: "trademark",
    name: "Trademark Lawyer",
    icon: "Stamp",
    tagline: "Search, filing & opposition",
    short:
      "Protect your brand with trademark search, registration and opposition support.",
    overview:
      "Your brand is an asset — protect it. We conduct trademark searches, file applications, respond to examination reports and handle oppositions and infringement actions to secure your intellectual property.",
    services: [
      "Trademark search & clearance",
      "Application filing (all classes)",
      "Examination report replies",
      "Opposition & rectification",
      "Infringement notices",
      "Renewal & assignment",
    ],
    startingPrice: 1799,
  },
  {
    slug: "copyright",
    name: "Copyright Lawyer",
    icon: "Copyright",
    tagline: "Registration & infringement",
    short:
      "Register and enforce copyrights for creative, literary and software works.",
    overview:
      "From music and manuscripts to software and design, we register your original works and enforce your rights against unauthorised use, piracy and infringement.",
    services: [
      "Copyright registration",
      "Software & code protection",
      "Licensing agreements",
      "Infringement notices & suits",
      "Assignment of rights",
      "Content takedown support",
    ],
    startingPrice: 1499,
  },
  {
    slug: "company-registration",
    name: "Company Registration",
    icon: "Landmark",
    tagline: "Pvt Ltd, LLP & startups",
    short:
      "Register your Private Limited, LLP, OPC or partnership quickly and correctly.",
    overview:
      "Launch your venture on a solid legal footing. We handle end-to-end incorporation of Private Limited companies, LLPs, OPCs and partnerships, including DSC, DIN, MOA/AOA and post-incorporation compliance.",
    services: [
      "Private Limited registration",
      "LLP & OPC formation",
      "Partnership & proprietorship",
      "DSC & DIN application",
      "MOA / AOA drafting",
      "Post-incorporation compliance",
    ],
    startingPrice: 5999,
  },
  {
    slug: "documentation",
    name: "Legal Documentation",
    icon: "FileText",
    tagline: "Drafting & vetting",
    short:
      "Professionally drafted and vetted agreements, deeds and legal documents.",
    overview:
      "A well-drafted document prevents disputes. Our lawyers draft and vet agreements, affidavits, deeds, wills, powers of attorney and NDAs tailored precisely to your situation.",
    services: [
      "Agreement & contract drafting",
      "Affidavits & declarations",
      "Wills & succession deeds",
      "Power of attorney",
      "NDA & MOU drafting",
      "Document vetting",
    ],
    startingPrice: 799,
  },
  {
    slug: "legal-notice",
    name: "Legal Notice",
    icon: "ScrollText",
    tagline: "Send & reply to notices",
    short:
      "Draft and dispatch legally sound notices — or respond to one you received.",
    overview:
      "A properly worded legal notice often resolves a dispute without litigation. We draft and send notices for recovery, cheque bounce, tenancy, employment and consumer matters, and prepare strong replies too.",
    services: [
      "Recovery & payment notices",
      "Cheque bounce notice",
      "Tenant / landlord notices",
      "Employment & wage notices",
      "Consumer complaint notices",
      "Reply to legal notice",
    ],
    startingPrice: 899,
  },
  {
    slug: "rental-agreement",
    name: "Rental Agreement",
    icon: "Home",
    tagline: "Rent & lease deeds",
    short:
      "Legally valid rent and lease agreements drafted and ready for registration.",
    overview:
      "Protect both landlord and tenant with a clear, enforceable rental agreement. We draft residential and commercial rent/lease deeds with the right clauses and assist with e-stamping and registration.",
    services: [
      "Residential rent agreement",
      "Commercial lease deed",
      "Leave & licence agreement",
      "E-stamping assistance",
      "Registration support",
      "Custom clause drafting",
    ],
    startingPrice: 599,
  },
  {
    slug: "employment-law",
    name: "Employment Law",
    icon: "UserCheck",
    tagline: "Wrongful termination & HR",
    short:
      "Advice on termination, wages, harassment and employment agreements.",
    overview:
      "Whether you are an employer or employee, we advise on employment contracts, wrongful termination, unpaid dues, non-compete clauses, POSH compliance and workplace harassment matters.",
    services: [
      "Employment contract drafting",
      "Wrongful termination claims",
      "Unpaid salary & dues recovery",
      "POSH / harassment complaints",
      "Non-compete & NDA disputes",
      "HR policy advisory",
    ],
    startingPrice: 1299,
  },
  {
    slug: "startup-legal-services",
    name: "Startup Legal Services",
    icon: "Rocket",
    tagline: "Founders, funding & IP",
    short:
      "A complete legal toolkit for founders — from incorporation to fundraising.",
    overview:
      "Build your startup right. We support founders with incorporation, founder agreements, ESOP structuring, term-sheet review, fundraising documentation and ongoing IP and compliance needs.",
    services: [
      "Founders' agreement",
      "ESOP policy structuring",
      "Term sheet & SHA review",
      "Fundraising documentation",
      "IP protection strategy",
      "Startup compliance retainer",
    ],
    startingPrice: 3999,
  },
];

export function getPracticeArea(slug) {
  return practiceAreas.find((p) => p.slug === slug);
}
