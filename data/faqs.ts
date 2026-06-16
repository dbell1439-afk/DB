/**
 * FAQ content, grouped by topic. Rendered with FAQAccordion and emitted as
 * FAQPage JSON-LD for SEO. Answers are educational only — link to official
 * sources for anything legally precise, and mark uncertain items
 * "verify before publication."
 */

export type FAQ = {
  question: string;
  answer: string;
};

export type FAQGroup = {
  id: string;
  title: string;
  faqs: FAQ[];
};

export const faqGroups: FAQGroup[] = [
  {
    id: "fers-disability",
    title: "FERS Disability Retirement",
    faqs: [
      {
        question: "Do I have to apply for Social Security disability (SSDI) too?",
        answer:
          "FERS disability retirement applicants are generally required to also apply for SSDI. The OPM disability pages explain the application requirement; confirm the current rule with OPM and SSA before relying on it. (Verify before publication.)",
      },
      {
        question: "What is the basic eligibility idea for FERS disability retirement?",
        answer:
          "Generally, you must have a minimum amount of federal service, a medical condition expected to last at least a year that prevents useful and efficient service in your position, and your agency must be unable to accommodate or reassign you. Specifics matter — see OPM’s disability retirement information.",
      },
      {
        question: "How long does OPM take to decide?",
        answer:
          "Processing times vary widely and change over time. Keep a dated record of every step and contact. Our OPM Delay Survival Center has a free tracker to help you document the wait.",
      },
    ],
  },
  {
    id: "ssdi-offset",
    title: "SSDI Offset",
    faqs: [
      {
        question: "How does SSDI reduce my FERS disability annuity?",
        answer:
          "In simplified terms often cited for the first 12 months, the FERS benefit is 60% of your high-3 reduced by 100% of any SSDI benefit; after that, it is commonly described as 40% of your high-3 reduced by 60% of SSDI. Real cases involve more factors — use our estimator for an educational figure only and verify with OPM.",
      },
      {
        question: "Why might my net check be lower than I expected?",
        answer:
          "Deductions for taxes, FEHB and FEGLI premiums, survivor elections, and the SSDI offset can all reduce the gross figure. The estimator shows a gross, pre-deduction number for education only.",
      },
    ],
  },
  {
    id: "fehb-fegli",
    title: "FEHB & FEGLI",
    faqs: [
      {
        question: "Can I keep FEHB into retirement?",
        answer:
          "Generally you must be enrolled in FEHB for the five years immediately before retirement (or since your first opportunity) to continue it as a retiree. Confirm your specific eligibility with OPM and your agency before separating.",
      },
      {
        question: "What are the FEGLI reduction options at retirement?",
        answer:
          "FEGLI Basic commonly offers a 75% reduction, a 50% reduction, or no reduction at retirement, each with different post-65 cost and coverage outcomes. Compare the options on the OPM FEGLI pages and with a licensed agent.",
      },
    ],
  },
  {
    id: "general",
    title: "About This Site",
    faqs: [
      {
        question: "Do you provide legal, financial, tax, or medical advice?",
        answer:
          "No. This site provides educational information only. It is not legal, financial, medical, tax, or government benefit advice, and we are not affiliated with OPM, SSA, the VA, or any government agency. For advice about your situation, consult a licensed professional.",
      },
      {
        question: "Are you affiliated with OPM or the federal government?",
        answer:
          "No. We are an independent educational brand and are not affiliated with, endorsed by, or connected to OPM.gov, SSA, the VA, or any federal agency.",
      },
      {
        question: "Are some links affiliate links?",
        answer:
          "Yes. Some links may be affiliate links. If you purchase through them, we may earn a commission at no additional cost to you. We only share tools that may help federal employees organize, understand, or prepare their benefits decisions.",
      },
    ],
  },
];

export function getFAQGroup(id: string): FAQGroup | undefined {
  return faqGroups.find((g) => g.id === id);
}

export function allFAQs(): FAQ[] {
  return faqGroups.flatMap((g) => g.faqs);
}
