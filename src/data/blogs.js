// Blog posts. `content` is an array of blocks so the [slug] page can render
// structured articles. Swap this for a CMS/API later without touching the UI.

export const blogCategories = [
  "All",
  "Property",
  "Family",
  "Criminal",
  "Corporate",
  "Consumer",
  "Taxation",
];

export const blogs = [
  {
    slug: "legal-notice-format-and-when-to-send",
    title: "Legal Notice Format: What It Is and When You Should Send One",
    category: "Consumer",
    excerpt:
      "A legal notice is often the first formal step in resolving a dispute. Here's how it works, what it must contain, and when sending one makes sense.",
    author: "Adv. Sana Fatima",
    date: "2026-06-18",
    readTime: 6,
    accent: "from-gold-600 to-gold-400",
    tags: ["Legal Notice", "Disputes", "Consumer"],
    content: [
      { type: "p", text: "A legal notice is a formal written communication sent by one party to another, informing the recipient of a grievance and the sender's intention to take legal action if the issue is not resolved. It is frequently the first step before filing a suit." },
      { type: "h2", text: "When should you send a legal notice?" },
      { type: "p", text: "Legal notices are commonly used for recovery of money, cheque bounce under Section 138, tenancy disputes, employment dues, defective goods and consumer complaints. Sending one often resolves the matter without going to court." },
      { type: "h2", text: "What must a legal notice contain?" },
      { type: "list", items: ["Names and addresses of both parties", "A clear statement of facts and the grievance", "The relief or action sought", "A reasonable timeline to comply (typically 15–30 days)", "Signature of the sender or their advocate"] },
      { type: "h2", text: "Should you use a lawyer?" },
      { type: "p", text: "While you can send a notice yourself, a lawyer-drafted notice carries more weight, uses precise legal language and reduces the risk of your claim being weakened later. It also signals that you are serious about pursuing the matter." },
    ],
  },
  {
    slug: "mutual-divorce-process-in-india",
    title: "Mutual Consent Divorce in India: Step-by-Step Process",
    category: "Family",
    excerpt:
      "Mutual divorce is the fastest, least painful way to legally separate. Understand the two-motion process, timelines and documents required.",
    author: "Adv. Isha Verma",
    date: "2026-06-10",
    readTime: 7,
    accent: "from-ink-700 to-ink-900",
    tags: ["Divorce", "Family", "Custody"],
    content: [
      { type: "p", text: "A mutual consent divorce is granted when both spouses agree to separate amicably. It is far quicker and less adversarial than a contested divorce, and courts encourage it wherever possible." },
      { type: "h2", text: "Eligibility" },
      { type: "p", text: "Under the Hindu Marriage Act, couples must have lived separately for at least one year and mutually agree that the marriage cannot continue. Similar provisions exist under other personal laws." },
      { type: "h2", text: "The two-motion process" },
      { type: "list", items: ["First motion: joint petition filed before the family court", "Cooling-off period of up to six months (often waived)", "Second motion: both parties reaffirm consent", "Decree of divorce granted by the court"] },
      { type: "h2", text: "Documents you'll need" },
      { type: "list", items: ["Marriage certificate", "Address and identity proof", "Photographs of the marriage", "Details of assets and settlement terms", "Custody and maintenance agreement, if applicable"] },
      { type: "p", text: "A family lawyer helps you draft the settlement terms fairly and ensures the process moves smoothly, avoiding delays and future disputes." },
    ],
  },
  {
    slug: "property-title-verification-checklist",
    title: "Buying Property? A Complete Title Verification Checklist",
    category: "Property",
    excerpt:
      "Never buy property without verifying its title. This checklist covers the documents and searches every buyer must complete first.",
    author: "Adv. Aarav Mehta",
    date: "2026-05-28",
    readTime: 8,
    accent: "from-gold-500 to-gold-300",
    tags: ["Property", "Due Diligence", "RERA"],
    content: [
      { type: "p", text: "Title verification confirms that the seller legally owns the property and has the right to sell it. Skipping this step is the single biggest cause of property litigation in India." },
      { type: "h2", text: "Key documents to verify" },
      { type: "list", items: ["Mother deed and chain of title (30 years)", "Sale deed and encumbrance certificate", "Property tax receipts and mutation records", "Approved building plan and occupancy certificate", "RERA registration for under-construction projects"] },
      { type: "h2", text: "Searches to run" },
      { type: "p", text: "Conduct a search at the sub-registrar's office to confirm the chain of ownership and check for any registered charges or mortgages. An encumbrance certificate reveals whether the property is free of liabilities." },
      { type: "h2", text: "Why a lawyer matters" },
      { type: "p", text: "A property advocate reads between the lines — spotting forged documents, pending litigation, or defective titles that an untrained eye would miss. This small upfront cost prevents enormous losses later." },
    ],
  },
  {
    slug: "anticipatory-bail-explained",
    title: "Anticipatory Bail: How It Protects You Before Arrest",
    category: "Criminal",
    excerpt:
      "Anticipatory bail lets you secure your liberty in advance if you fear arrest. Learn when and how to apply.",
    author: "Adv. Vikram Nair",
    date: "2026-05-15",
    readTime: 6,
    accent: "from-ink-800 to-ink-950",
    tags: ["Criminal", "Bail", "Defence"],
    content: [
      { type: "p", text: "Anticipatory bail is a direction to release a person on bail if they are arrested, granted in anticipation of arrest. It is a powerful protection against wrongful or harassment-driven arrests." },
      { type: "h2", text: "When can you apply?" },
      { type: "p", text: "You may apply when you have a reasonable apprehension of arrest for a non-bailable offence — for example, after an FIR is filed or when you receive a notice. The application is made to the Sessions Court or High Court." },
      { type: "h2", text: "Factors courts consider" },
      { type: "list", items: ["Nature and gravity of the accusation", "Antecedents of the applicant", "Possibility of the applicant fleeing", "Whether the accusation is to injure or humiliate"] },
      { type: "p", text: "Because timing and drafting are critical, an experienced criminal lawyer dramatically improves your chances of securing anticipatory bail on favourable conditions." },
    ],
  },
  {
    slug: "gst-notice-how-to-respond",
    title: "Received a GST Notice? Here's How to Respond Correctly",
    category: "Taxation",
    excerpt:
      "A GST notice is not something to ignore. Understand the common types of notices and how to reply within the deadline.",
    author: "Adv. Rahul Khanna",
    date: "2026-05-02",
    readTime: 5,
    accent: "from-gold-600 to-gold-400",
    tags: ["GST", "Taxation", "Compliance"],
    content: [
      { type: "p", text: "GST authorities issue notices for a range of reasons — mismatched returns, non-filing, excess input credit, or scrutiny of transactions. Each notice has a specific deadline for response." },
      { type: "h2", text: "Common GST notices" },
      { type: "list", items: ["GSTR-3A: non-filing of returns", "ASMT-10: scrutiny of returns", "DRC-01: show-cause notice for demand", "REG notices: registration issues"] },
      { type: "h2", text: "How to respond" },
      { type: "p", text: "Read the notice carefully, identify the exact issue, gather supporting documents and file a clear, timely reply on the GST portal. Missing the deadline can lead to ex-parte demands and penalties." },
      { type: "p", text: "A GST lawyer helps you frame a legally sound reply, negotiate with the department and, if needed, file an appeal against an unjust demand." },
    ],
  },
  {
    slug: "starting-a-startup-legal-checklist",
    title: "The Founder's Legal Checklist for Starting Up in India",
    category: "Corporate",
    excerpt:
      "From incorporation to founder agreements and IP, here are the legal essentials every startup founder should get right early.",
    author: "Adv. Ananya Rao",
    date: "2026-04-20",
    readTime: 7,
    accent: "from-ink-700 to-ink-900",
    tags: ["Startup", "Corporate", "Founders"],
    content: [
      { type: "p", text: "Getting the legal foundation right early saves founders from painful disputes and lost funding later. Here is what every startup should prioritise." },
      { type: "h2", text: "Incorporation & structure" },
      { type: "p", text: "Choose the right entity — a Private Limited company is usually best for startups seeking funding. Register it properly with correct MOA/AOA and post-incorporation compliances." },
      { type: "h2", text: "Founder & team agreements" },
      { type: "list", items: ["Founders' agreement with vesting", "ESOP policy for early employees", "Employment and NDA agreements", "IP assignment clauses"] },
      { type: "h2", text: "Protecting your IP" },
      { type: "p", text: "Register your trademark early and ensure all code, content and designs created for the company are legally owned by it. Investors will scrutinise this during due diligence." },
      { type: "p", text: "A startup lawyer acts as your part-time general counsel, keeping you compliant and fundable as you scale." },
    ],
  },
];

export function getBlog(slug) {
  return blogs.find((b) => b.slug === slug);
}

export function getRelatedBlogs(slug, limit = 3) {
  const current = getBlog(slug);
  if (!current) return blogs.slice(0, limit);
  return blogs
    .filter((b) => b.slug !== slug && b.category === current.category)
    .concat(blogs.filter((b) => b.slug !== slug && b.category !== current.category))
    .slice(0, limit);
}
