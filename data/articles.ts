/**
 * Blog content. Each article is SEO-ready: title, meta description, slug,
 * category, and structured sections required by the content spec:
 *   - TL;DR
 *   - Who this helps
 *   - Body sections
 *   - Common mistakes
 *   - Documents to gather
 *   - Official source links (by source id)
 *   - Related toolkit (product slug) + lead magnet (slug)
 *
 * Content is placeholder/educational. Anything legally precise is marked
 * "verify before publication." Do not present these as legal advice.
 */

import type { ProductTag } from "./products";

export type BlogCategory =
  | "FERS Disability Retirement"
  | "OPM Processing Delays"
  | "SSDI Offset"
  | "FEHB"
  | "FEGLI"
  | "TSP & Retirement Planning"
  | "Federal Employee Separation"
  | "Veteran Federal Employees"
  | "Documentation Strategy"
  | "Open Season";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  metaDescription: string;
  category: BlogCategory;
  publishedAt: string; // ISO date
  updatedAt?: string;
  readingMinutes: number;
  tldr: string[];
  whoThisHelps: string[];
  sections: ArticleSection[];
  commonMistakes: string[];
  documentsToGather: string[];
  sourceIds: string[];
  relatedProductSlug?: string;
  relatedLeadMagnetSlug?: string;
  tags: ProductTag[];
  featured?: boolean;
};

const DISCLAIMER_NOTE =
  "This article is educational information only and is not legal, financial, medical, tax, or government benefit advice. Verify all rules with official sources before acting.";

export const blogCategories: BlogCategory[] = [
  "FERS Disability Retirement",
  "OPM Processing Delays",
  "SSDI Offset",
  "FEHB",
  "FEGLI",
  "TSP & Retirement Planning",
  "Federal Employee Separation",
  "Veteran Federal Employees",
  "Documentation Strategy",
  "Open Season",
];

export const articles: Article[] = [
  {
    slug: "fers-disability-retirement-what-to-know-before-applying",
    title:
      "FERS Disability Retirement: What Federal Employees Should Know Before Applying",
    metaDescription:
      "A plain-English overview of FERS disability retirement basics: eligibility ideas, the SSDI requirement, evidence, and timelines — educational only.",
    category: "FERS Disability Retirement",
    publishedAt: "2026-01-12",
    readingMinutes: 8,
    featured: true,
    tldr: [
      "FERS disability retirement generally requires a qualifying medical condition, minimum service, and that your agency cannot accommodate or reassign you.",
      "Applicants are generally also required to apply for SSDI.",
      "The strength of your application often comes down to organized medical evidence and clear statements.",
    ],
    whoThisHelps: [
      "Employees considering applying for FERS disability retirement",
      "Caregivers and spouses helping organize an application",
      "Anyone trying to understand the process before committing",
    ],
    sections: [
      {
        heading: "What FERS disability retirement is (in plain English)",
        paragraphs: [
          "FERS disability retirement is a benefit for federal employees who can no longer perform the essential duties of their position because of a medical condition. It is different from regular (age/service) retirement and from SSDI, although they can interact.",
          "The goal of an application is to document — clearly and with evidence — that your condition prevents useful and efficient service in your job and that your agency could not accommodate or reassign you.",
        ],
      },
      {
        heading: "General eligibility ideas",
        paragraphs: [
          "Eligibility usually turns on a few core ideas. The exact rules and thresholds matter, so confirm them with OPM. (Verify before publication.)",
        ],
        bullets: [
          "A minimum amount of creditable federal service",
          "A medical condition expected to last at least a year",
          "The condition prevents useful and efficient service in your current position",
          "Your agency cannot accommodate the condition or reassign you to a suitable position",
        ],
      },
      {
        heading: "Why the SSDI application matters",
        paragraphs: [
          "FERS disability retirement applicants are generally required to also file for Social Security disability (SSDI). This requirement — and the way SSDI later offsets the FERS benefit — surprises many people. See our SSDI offset explainer for the math.",
        ],
      },
    ],
    commonMistakes: [
      "Submitting thin or disorganized medical evidence",
      "Missing internal agency deadlines or accommodation steps",
      "Not applying for SSDI when required",
      "Underestimating how long OPM may take to decide",
    ],
    documentsToGather: [
      "Position description and essential duties",
      "Medical records and physician statements",
      "Records of accommodation requests and agency responses",
      "Your own statement describing how the condition affects your work",
    ],
    sourceIds: ["opm-disability", "ssa-disability", "opm-handbook"],
    relatedProductSlug: "fers-disability-prep-toolkit",
    relatedLeadMagnetSlug: "fers-disability-document-checklist",
    tags: ["Disability retirement", "Documentation"],
  },
  {
    slug: "why-opm-disability-retirement-requires-an-ssdi-application",
    title: "Why OPM Disability Retirement Requires an SSDI Application",
    metaDescription:
      "FERS disability retirement applicants are generally required to apply for SSDI. Here is what that means and how the two benefits connect — educational only.",
    category: "FERS Disability Retirement",
    publishedAt: "2026-01-15",
    readingMinutes: 6,
    tldr: [
      "FERS disability retirement and SSDI are separate programs that interact.",
      "Applicants are generally required to file for SSDI as part of the FERS process.",
      "If SSDI is approved, it offsets part of the FERS disability benefit.",
    ],
    whoThisHelps: [
      "Anyone confused about why two separate applications are needed",
      "Employees planning the sequence of their filings",
    ],
    sections: [
      {
        heading: "Two programs, one process",
        paragraphs: [
          "OPM administers FERS disability retirement; SSA administers SSDI. Even though they are run by different agencies, the FERS process generally requires you to apply for SSDI as well.",
          "Keep proof that you filed for SSDI — that documentation is commonly part of the FERS package.",
        ],
      },
      {
        heading: "What happens if SSDI is approved",
        paragraphs: [
          "If SSDI is approved, it reduces (offsets) part of your FERS disability annuity. The first 12 months and the period after are treated differently. See the offset explainer for the simplified formulas.",
        ],
      },
    ],
    commonMistakes: [
      "Skipping the SSDI application",
      "Not keeping proof of the SSDI filing",
      "Assuming SSDI approval has no effect on the FERS check",
    ],
    documentsToGather: [
      "SSDI application confirmation",
      "Any SSA decision letters",
      "FERS disability application copies",
    ],
    sourceIds: ["opm-disability", "ssa-disability"],
    relatedProductSlug: "ssdi-offset-worksheet-pack",
    relatedLeadMagnetSlug: "fers-disability-document-checklist",
    tags: ["Disability retirement", "SSDI offset"],
  },
  {
    slug: "how-the-fers-disability-retirement-ssdi-offset-works",
    title: "How the FERS Disability Retirement SSDI Offset Works",
    metaDescription:
      "A simplified, educational walkthrough of the first-year and second-year SSDI offset against a FERS disability annuity. Verify figures with OPM.",
    category: "SSDI Offset",
    publishedAt: "2026-01-18",
    readingMinutes: 7,
    featured: true,
    tldr: [
      "First 12 months: commonly described as 60% of high-3 minus 100% of SSDI.",
      "After that: commonly described as 40% of high-3 minus 60% of SSDI.",
      "These are simplified figures before deductions — your real numbers may differ.",
    ],
    whoThisHelps: [
      "Employees trying to estimate net income during disability retirement",
      "Anyone surprised by a lower-than-expected check",
    ],
    sections: [
      {
        heading: "The simplified formulas",
        paragraphs: [
          "Many resources describe the FERS disability offset in two phases. Treat these as educational shorthand, not a guarantee — OPM’s actual calculation depends on your facts. (Verify before publication.)",
        ],
        bullets: [
          "First year: 60% of high-3, reduced by 100% of any SSDI benefit",
          "Second year onward: 40% of high-3, reduced by 60% of any SSDI benefit",
        ],
      },
      {
        heading: "Why gross is not net",
        paragraphs: [
          "The formulas above produce a gross figure. Your net check is further reduced by taxes, FEHB and FEGLI premiums, survivor elections, and other deductions. Use our estimator for a gross educational figure, then plan conservatively.",
        ],
      },
    ],
    commonMistakes: [
      "Treating the gross estimate as take-home pay",
      "Forgetting the first-year vs. later-year difference",
      "Not accounting for SSDI changes over time",
    ],
    documentsToGather: [
      "High-3 salary figures",
      "SSDI award amount (if approved)",
      "Deduction details (FEHB, FEGLI, taxes)",
    ],
    sourceIds: ["opm-disability", "ssa-disability"],
    relatedProductSlug: "ssdi-offset-worksheet-pack",
    relatedLeadMagnetSlug: "ssdi-offset-quick-calculator-worksheet",
    tags: ["SSDI offset", "Disability retirement"],
  },
  {
    slug: "opm-retirement-delays-what-to-track-while-you-wait",
    title: "OPM Retirement Delays: What to Track While You Wait",
    metaDescription:
      "OPM processing can take months. Here is a practical, document-driven system for tracking your claim and escalating when needed — educational only.",
    category: "OPM Processing Delays",
    publishedAt: "2026-01-22",
    readingMinutes: 6,
    featured: true,
    tldr: [
      "Keep a dated log of every contact and status change.",
      "Confirm when your agency forwarded the case to OPM and when a CSA number is assigned.",
      "Document interim pay start and amount.",
    ],
    whoThisHelps: [
      "Anyone with a pending OPM claim",
      "Employees who feel stuck with no visibility",
    ],
    sections: [
      {
        heading: "Track the milestones",
        paragraphs: [
          "A stalled claim is easier to escalate when you can show a clean timeline. Track each milestone with a date and a source.",
        ],
        bullets: [
          "Application submitted to agency",
          "Agency forwarded the package to OPM",
          "CSA claim number received",
          "Interim pay started (date + amount)",
          "Last OPM contact (date + who)",
        ],
      },
      {
        heading: "Keep a call log",
        paragraphs: [
          "Every time you call, record the date, the representative, and what you were told. Our free OPM Delay Call Log & Escalation Tracker gives you a ready-made format.",
        ],
      },
    ],
    commonMistakes: [
      "Calling without recording what you were told",
      "Not confirming the agency actually forwarded the package",
      "Assuming interim pay equals your final annuity",
    ],
    documentsToGather: [
      "Submission confirmations",
      "CSA claim number",
      "Interim pay statements",
      "Call log entries",
    ],
    sourceIds: ["opm-retirement", "opm-disability"],
    relatedProductSlug: "opm-delay-escalation-tracker",
    relatedLeadMagnetSlug: "opm-delay-call-log-escalation-tracker",
    tags: ["OPM delay", "Documentation"],
  },
  {
    slug: "fehb-in-retirement-questions-before-you-separate",
    title: "FEHB in Retirement: Questions to Ask Before You Separate",
    metaDescription:
      "Keeping FEHB into retirement usually depends on a five-year enrollment rule. Ask these questions before you separate — educational only.",
    category: "FEHB",
    publishedAt: "2026-01-26",
    readingMinutes: 6,
    tldr: [
      "Continuing FEHB as a retiree generally requires five years of enrollment before retirement.",
      "Confirm your eligibility in writing with your agency and OPM.",
      "Plan for Medicare coordination if you are near 65.",
    ],
    whoThisHelps: [
      "Employees approaching retirement",
      "Anyone weighing whether to change plans before separating",
    ],
    sections: [
      {
        heading: "The five-year rule",
        paragraphs: [
          "Generally, you must be enrolled in FEHB for the five years immediately before retirement — or since your first opportunity to enroll — to keep it as a retiree. Confirm your specific situation with OPM. (Verify before publication.)",
        ],
      },
      {
        heading: "Questions to ask first",
        paragraphs: ["Before you separate, get clear answers in writing."],
        bullets: [
          "Do I meet the five-year continuation requirement?",
          "How do premiums change in retirement?",
          "How will Medicare coordinate with my plan?",
          "What happens to family coverage?",
        ],
      },
    ],
    commonMistakes: [
      "Dropping FEHB right before retirement",
      "Assuming any plan automatically continues",
      "Ignoring Medicare coordination timing",
    ],
    documentsToGather: [
      "FEHB enrollment history",
      "Current plan brochure",
      "Agency confirmation of continuation eligibility",
    ],
    sourceIds: ["opm-fehb", "opm-handbook"],
    relatedProductSlug: "fehb-open-season-decision-workbook",
    relatedLeadMagnetSlug: "fehb-open-season-comparison-sheet",
    tags: ["FEHB", "Documentation"],
  },
  {
    slug: "fegli-at-retirement-75-50-or-no-reduction",
    title: "FEGLI at Retirement: 75% Reduction, 50% Reduction, or No Reduction?",
    metaDescription:
      "A plain-English comparison of the FEGLI Basic reduction elections at retirement and the trade-offs to weigh — educational only.",
    category: "FEGLI",
    publishedAt: "2026-01-29",
    readingMinutes: 6,
    tldr: [
      "FEGLI Basic generally offers a 75% reduction, 50% reduction, or no reduction at retirement.",
      "Each option has different post-65 costs and coverage outcomes.",
      "Compare against private coverage with a licensed agent.",
    ],
    whoThisHelps: [
      "Employees making FEGLI elections at retirement",
      "Anyone comparing FEGLI to private life insurance",
    ],
    sections: [
      {
        heading: "The three Basic options",
        paragraphs: [
          "At retirement, FEGLI Basic commonly offers three reduction elections. The right choice depends on your coverage needs and budget over time.",
        ],
        bullets: [
          "75% reduction: lowest cost later, coverage reduces significantly after 65",
          "50% reduction: middle ground on cost and retained coverage",
          "No reduction: highest cost later, retains the most coverage",
        ],
      },
      {
        heading: "How to decide",
        paragraphs: [
          "Map your actual coverage needs (debts, dependents, final expenses) against the cost of each option over time. Use our worksheet, then compare quotes with a licensed agent.",
        ],
      },
    ],
    commonMistakes: [
      "Choosing by monthly cost alone without modeling later years",
      "Overlooking that 'no reduction' costs more over time",
      "Not comparing to private coverage",
    ],
    documentsToGather: [
      "Current FEGLI coverage amounts",
      "Premium estimates by option",
      "List of coverage needs and dependents",
    ],
    sourceIds: ["opm-fegli"],
    relatedProductSlug: "fegli-retirement-election-worksheet",
    relatedLeadMagnetSlug: "fegli-retirement-decision-worksheet",
    tags: ["FEGLI", "Documentation"],
  },
  {
    slug: "federal-employee-rif-benefits-questions-to-ask-immediately",
    title: "Federal Employee RIF: Benefits Questions to Ask Immediately",
    metaDescription:
      "Facing a Reduction in Force? Ask these benefits questions right away to protect FEHB, FEGLI, TSP, and retirement options — educational only.",
    category: "Federal Employee Separation",
    publishedAt: "2026-02-02",
    readingMinutes: 6,
    tldr: [
      "Confirm your separation date and any severance or retirement eligibility.",
      "Protect FEHB and FEGLI continuation options early.",
      "Know your TSP options before you act.",
    ],
    whoThisHelps: [
      "Employees notified of a RIF",
      "Anyone facing involuntary separation",
    ],
    sections: [
      {
        heading: "Move fast on benefits",
        paragraphs: [
          "A RIF compresses timelines. The questions below help you avoid losing options by default.",
        ],
        bullets: [
          "Am I eligible for any form of immediate or deferred retirement?",
          "Can I continue FEHB and FEGLI, and for how long?",
          "What severance or transition support applies?",
          "What are my TSP options and deadlines?",
        ],
      },
      {
        heading: "Document everything",
        paragraphs: [
          "Keep every notice, date, and conversation. Our document organizer helps you assemble a clean record quickly.",
        ],
      },
    ],
    commonMistakes: [
      "Letting FEHB/FEGLI lapse without checking continuation",
      "Cashing out TSP without understanding consequences",
      "Missing appeal or election deadlines",
    ],
    documentsToGather: [
      "RIF notice and effective dates",
      "SF-50 and personnel records",
      "Benefits enrollment confirmations",
    ],
    sourceIds: ["opm-rif", "opm-retirement", "mspb"],
    relatedProductSlug: "federal-retirement-document-organizer",
    relatedLeadMagnetSlug: "federal-medical-separation-survival-checklist",
    tags: ["Separation/RIF", "Documentation"],
  },
  {
    slug: "veteran-federal-employees-overlapping-benefits-issues",
    title: "Veteran Federal Employees: Benefits Issues That Can Overlap",
    metaDescription:
      "Veterans in federal service may navigate VA and federal civilian benefits at once. Here are the overlap areas to watch — educational only.",
    category: "Veteran Federal Employees",
    publishedAt: "2026-02-06",
    readingMinutes: 6,
    tldr: [
      "VA disability and federal civilian benefits are separate systems that can interact.",
      "Military service credit can affect federal retirement.",
      "Keep VA and federal records clearly separated and organized.",
    ],
    whoThisHelps: [
      "Veterans currently employed by the federal government",
      "Anyone coordinating VA and federal benefits",
    ],
    sections: [
      {
        heading: "Where overlap shows up",
        paragraphs: [
          "Veterans in federal service often touch multiple systems. None of this is advice — flag these areas to review with the right professional.",
        ],
        bullets: [
          "Military service deposits and retirement credit",
          "VA disability compensation alongside federal pay or annuity",
          "Coordination of health coverage options",
        ],
      },
      {
        heading: "Keep records separated",
        paragraphs: [
          "Maintain distinct files for VA and federal benefits so you can answer questions quickly. Our veteran bundle pairs overlap-awareness tools with core worksheets.",
        ],
      },
    ],
    commonMistakes: [
      "Mixing VA and federal records",
      "Overlooking a military service deposit decision",
      "Assuming one system’s rules apply to the other",
    ],
    documentsToGather: [
      "DD-214 and service records",
      "VA decision letters",
      "Federal personnel and benefits records",
    ],
    sourceIds: ["opm-retirement", "opm-handbook"],
    relatedProductSlug: "veteran-federal-employee-bundle",
    relatedLeadMagnetSlug: "opm-retirement-readiness-checklist",
    tags: ["Veteran federal employee", "Documentation"],
  },
  {
    slug: "what-documents-to-keep-during-a-federal-medical-separation",
    title: "What Documents Should You Keep During a Federal Medical Separation?",
    metaDescription:
      "A document-preservation checklist for federal employees facing medical separation, so you protect benefits and appeal options — educational only.",
    category: "Documentation Strategy",
    publishedAt: "2026-02-10",
    readingMinutes: 6,
    tldr: [
      "Preserve medical evidence, accommodation requests, and agency responses.",
      "Keep dated copies of everything you submit and receive.",
      "Organize now — reconstructing records later is hard.",
    ],
    whoThisHelps: [
      "Employees facing medical separation",
      "Caregivers helping organize records",
    ],
    sections: [
      {
        heading: "Build the record as you go",
        paragraphs: [
          "Medical separation cases live or die on documentation. Capture items in real time rather than reconstructing them later.",
        ],
        bullets: [
          "Medical records and physician statements",
          "Reasonable accommodation requests and responses",
          "Performance and attendance records relevant to the condition",
          "Every dated notice from your agency",
        ],
      },
      {
        heading: "Use a consistent system",
        paragraphs: [
          "A simple, consistent folder structure beats a pile of files. Our timeline builder and document organizer give you ready-made structures.",
        ],
      },
    ],
    commonMistakes: [
      "Relying on memory instead of dated copies",
      "Not saving agency emails and notices",
      "Storing sensitive records insecurely",
    ],
    documentsToGather: [
      "Medical records",
      "Accommodation correspondence",
      "Agency notices and decisions",
    ],
    sourceIds: ["opm-disability", "mspb"],
    relatedProductSlug: "medical-separation-timeline-builder",
    relatedLeadMagnetSlug: "federal-medical-separation-survival-checklist",
    tags: ["Documentation", "Disability retirement", "Separation/RIF"],
  },
  {
    slug: "how-to-build-a-federal-benefits-binder",
    title: "How to Build a Federal Benefits Binder",
    metaDescription:
      "A step-by-step system for assembling a federal benefits binder that keeps retirement, health, life, and TSP records in one place — educational only.",
    category: "Documentation Strategy",
    publishedAt: "2026-02-14",
    readingMinutes: 7,
    tldr: [
      "One binder, clear sections, reviewed annually.",
      "Include retirement, FEHB, FEGLI, TSP, and beneficiary records.",
      "Keep a secure digital backup.",
    ],
    whoThisHelps: [
      "Anyone within a few years of retirement",
      "Employees who want their benefits organized in one place",
    ],
    sections: [
      {
        heading: "Suggested sections",
        paragraphs: ["A good binder is boring and complete. Use clear dividers."],
        bullets: [
          "Personnel records (SF-50s, service history)",
          "Retirement estimates and elections",
          "FEHB and FEGLI details",
          "TSP statements and beneficiary forms",
          "Wills, POAs, and beneficiary designations",
        ],
      },
      {
        heading: "Review it annually",
        paragraphs: [
          "Set a yearly reminder to update beneficiaries and estimates. Our document organizer includes the index and dividers.",
        ],
      },
    ],
    commonMistakes: [
      "Letting beneficiary forms go stale",
      "Keeping only paper with no backup",
      "Mixing sensitive data into shared/unsecured storage",
    ],
    documentsToGather: [
      "SF-50s and service records",
      "Benefit election forms",
      "Beneficiary designations",
    ],
    sourceIds: ["opm-retirement", "tsp"],
    relatedProductSlug: "federal-retirement-document-organizer",
    relatedLeadMagnetSlug: "opm-retirement-readiness-checklist",
    tags: ["Documentation"],
  },
  {
    slug: "opm-interim-pay-what-it-is-and-why-it-may-be-lower",
    title: "OPM Interim Pay: What It Is and Why It May Be Lower Than Expected",
    metaDescription:
      "Interim pay helps bridge the wait for a final OPM decision, but it is often lower than your final annuity. Here is what to expect — educational only.",
    category: "OPM Processing Delays",
    publishedAt: "2026-02-18",
    readingMinutes: 5,
    tldr: [
      "Interim pay is a partial payment while OPM finalizes your claim.",
      "It is commonly lower than your final annuity.",
      "Once finalized, adjustments may be reconciled.",
    ],
    whoThisHelps: [
      "Anyone receiving or waiting on interim pay",
      "Employees budgeting through the OPM wait",
    ],
    sections: [
      {
        heading: "What interim pay is",
        paragraphs: [
          "Interim pay is a partial annuity OPM may provide while your case is finalized. It helps bridge the gap but should not be treated as your final figure.",
        ],
      },
      {
        heading: "Why it may be lower",
        paragraphs: [
          "Interim pay often excludes certain elements and deductions that are reconciled once your claim is finalized. Budget conservatively and keep your interim pay statements.",
        ],
      },
    ],
    commonMistakes: [
      "Assuming interim pay equals your final annuity",
      "Not budgeting for a possible gap",
      "Discarding interim pay statements",
    ],
    documentsToGather: [
      "Interim pay statements",
      "CSA claim number",
      "Final annuity computation (when issued)",
    ],
    sourceIds: ["opm-retirement", "opm-disability"],
    relatedProductSlug: "opm-delay-escalation-tracker",
    relatedLeadMagnetSlug: "opm-delay-call-log-escalation-tracker",
    tags: ["OPM delay", "Documentation"],
  },
  {
    slug: "federal-disability-retirement-vs-regular-retirement",
    title: "Federal Disability Retirement vs. Regular Retirement: Key Differences",
    metaDescription:
      "How FERS disability retirement differs from regular age/service retirement on eligibility, computation, and the SSDI offset — educational only.",
    category: "FERS Disability Retirement",
    publishedAt: "2026-02-22",
    readingMinutes: 6,
    tldr: [
      "Disability retirement is based on a medical inability to perform your job; regular retirement is based on age and service.",
      "The computations differ, and disability retirement involves the SSDI offset.",
      "Which is better depends entirely on your facts.",
    ],
    whoThisHelps: [
      "Employees weighing disability vs. regular retirement",
      "Anyone close to both eligibility paths",
    ],
    sections: [
      {
        heading: "Different eligibility logic",
        paragraphs: [
          "Regular retirement is generally about reaching an age and service combination. Disability retirement is about a medical condition that prevents useful and efficient service. They can lead to very different computations.",
        ],
      },
      {
        heading: "Different computations",
        paragraphs: [
          "Disability retirement uses specific formulas and the SSDI offset, while regular retirement uses a service-based computation. Run both scenarios before deciding, and confirm with OPM. (Verify before publication.)",
        ],
      },
    ],
    commonMistakes: [
      "Assuming one path is always better",
      "Ignoring the SSDI offset when comparing",
      "Not modeling both computations",
    ],
    documentsToGather: [
      "Service computation date",
      "High-3 salary figures",
      "Retirement estimates for both paths",
    ],
    sourceIds: ["opm-disability", "opm-retirement", "opm-handbook"],
    relatedProductSlug: "fers-disability-prep-toolkit",
    relatedLeadMagnetSlug: "opm-retirement-readiness-checklist",
    tags: ["Disability retirement", "Documentation"],
  },
];

export const ARTICLE_DISCLAIMER = DISCLAIMER_NOTE;

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: BlogCategory): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getRelatedArticles(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);
  return articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => {
      const aShared = a.tags.filter((t) => current.tags.includes(t)).length;
      const bShared = b.tags.filter((t) => current.tags.includes(t)).length;
      return bShared - aShared;
    })
    .slice(0, limit);
}
