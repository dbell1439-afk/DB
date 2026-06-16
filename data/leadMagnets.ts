/**
 * Free lead magnets used for email capture.
 * Each maps to a downloadable asset (PDF) you create separately and a tag that
 * your email provider uses to trigger the right nurture sequence.
 */

export type LeadMagnet = {
  slug: string;
  title: string;
  hook: string;
  description: string;
  bullets: string[];
  tag: string; // email-provider tag / segment
  icon: string; // emoji or icon key used by LeadMagnetCard
  featured?: boolean;
  /** Longer intro shown on the dedicated /free/[slug] landing page. */
  landingIntro?: string;
  /** Section-by-section preview of what's inside the download. */
  whatsInside?: string[];
};

export const leadMagnets: LeadMagnet[] = [
  {
    slug: "opm-retirement-readiness-checklist",
    title: "OPM Retirement Readiness Checklist",
    hook: "The free starter checklist",
    description:
      "A plain-English checklist of the documents, decisions, and dates to line up before you separate or apply for retirement.",
    bullets: [
      "Document gathering list",
      "Key dates to confirm with HR",
      "Decisions to make before you file",
    ],
    tag: "lm-readiness",
    icon: "✅",
    featured: true,
    landingIntro:
      "Most federal employees don’t lose benefits because they made the wrong call — they lose them because a document, a date, or a decision slipped through while everything else was on fire. This free checklist puts the whole picture on one page so you can move deliberately instead of reactively.",
    whatsInside: [
      "Document-gathering list (SF-50s, service history, benefit elections)",
      "Dates to confirm in writing with HR before you separate",
      "FEHB five-year continuation check",
      "FEGLI reduction-election prep",
      "TSP and beneficiary review reminders",
      "Decisions to lock in before you file — and the order to make them",
    ],
  },
  {
    slug: "fers-disability-document-checklist",
    title: "FERS Disability Retirement Document Checklist",
    hook: "Build a stronger application package",
    description:
      "The evidence categories and forms commonly referenced in a FERS disability retirement application, organized so nothing slips through.",
    bullets: [
      "Medical evidence categories",
      "Agency forms commonly involved",
      "Statement-building prompts",
    ],
    tag: "lm-fers-disability",
    icon: "🗂️",
    landingIntro:
      "A FERS disability retirement application lives or dies on documentation. This checklist organizes the evidence categories and forms commonly involved so you can build a complete, defensible package instead of a pile of paper.",
    whatsInside: [
      "Medical evidence categories to assemble",
      "Agency forms commonly involved in the package",
      "Statement-building prompts (your words matter)",
      "The required SSDI application step — don’t skip it",
      "A simple tracker for what’s done vs. outstanding",
    ],
  },
  {
    slug: "ssdi-offset-quick-calculator-worksheet",
    title: "SSDI Offset Quick Calculator Worksheet",
    hook: "Stop guessing your net number",
    description:
      "A fill-in worksheet that walks through the first-year and second-year FERS disability offset math so you can sanity-check estimates.",
    bullets: [
      "First-year offset worksheet",
      "Second-year offset worksheet",
      "Net estimate notes column",
    ],
    tag: "lm-ssdi-offset",
    icon: "🧮",
  },
  {
    slug: "fehb-open-season-comparison-sheet",
    title: "FEHB Open Season Comparison Sheet",
    hook: "Compare plans on what matters",
    description:
      "A side-by-side comparison sheet to evaluate FEHB plans on premiums, out-of-pocket maximums, and the coverage details that affect you.",
    bullets: [
      "Premium + OOP max columns",
      "Prescription + specialist notes",
      "Retirement-eligibility reminder",
    ],
    tag: "lm-fehb",
    icon: "🏥",
  },
  {
    slug: "fegli-retirement-decision-worksheet",
    title: "FEGLI Retirement Decision Worksheet",
    hook: "Map your reduction options",
    description:
      "A worksheet to compare the 75% reduction, 50% reduction, and no-reduction FEGLI options against your situation.",
    bullets: [
      "Reduction option comparison",
      "Cost-over-time prompts",
      "Questions for a licensed agent",
    ],
    tag: "lm-fegli",
    icon: "🛡️",
  },
  {
    slug: "opm-delay-call-log-escalation-tracker",
    title: "OPM Delay Call Log & Escalation Tracker",
    hook: "Document every contact",
    description:
      "A printable call log and escalation tracker so you have a dated record of every contact while your claim is pending.",
    bullets: [
      "Dated call log template",
      "Escalation contact ladder",
      "Status-change tracker",
    ],
    tag: "lm-opm-delay",
    icon: "📞",
  },
  {
    slug: "federal-medical-separation-survival-checklist",
    title: "Federal Employee Medical Separation Survival Checklist",
    hook: "Protect your benefits during separation",
    description:
      "A survival checklist for federal employees facing medical separation, covering benefits continuity, deadlines, and documentation.",
    bullets: [
      "Benefits continuity steps",
      "Deadlines you cannot miss",
      "Documentation to preserve",
    ],
    tag: "lm-medical-separation",
    icon: "🧭",
  },
];

export function getLeadMagnet(slug: string): LeadMagnet | undefined {
  return leadMagnets.find((m) => m.slug === slug);
}
