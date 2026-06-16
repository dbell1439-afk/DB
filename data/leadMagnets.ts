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
