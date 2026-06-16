/**
 * Paid digital products (low-ticket). Swap the `checkoutUrl` with a real
 * Gumroad / Payhip / Stripe Payment Link before launch.
 *
 * Pricing and contents are educational templates only — they do NOT provide
 * legal, financial, medical, or tax advice.
 */

export type ProductTag =
  | "Disability retirement"
  | "OPM delay"
  | "FEHB"
  | "FEGLI"
  | "SSDI offset"
  | "Veteran federal employee"
  | "Separation/RIF"
  | "Documentation";

export type Product = {
  slug: string;
  title: string;
  price: number;
  priceLabel: string;
  forWho: string;
  includes: string[];
  tags: ProductTag[];
  // Placeholder checkout link. Use a Gumroad/Payhip/Stripe URL in production.
  checkoutUrl: string;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "fers-disability-prep-toolkit",
    title: "FERS Disability Retirement Prep Toolkit",
    price: 29,
    priceLabel: "$29",
    forWho:
      "Federal employees preparing a FERS disability retirement application who want an organized, document-driven package.",
    includes: [
      "Document checklist + evidence organizer",
      "Statement-building prompts",
      "Timeline tracker for agency + OPM steps",
      "Common-mistakes review sheet",
    ],
    tags: ["Disability retirement", "Documentation"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-fers-toolkit",
    featured: true,
    badge: "Best seller",
  },
  {
    slug: "opm-delay-escalation-tracker",
    title: "OPM Delay Escalation Tracker",
    price: 17,
    priceLabel: "$17",
    forWho:
      "Anyone with a pending OPM claim who needs a dated record and an escalation plan.",
    includes: [
      "Call log + contact ladder",
      "Status-change tracker",
      "Escalation letter prompts",
      "Interim pay follow-up checklist",
    ],
    tags: ["OPM delay", "Documentation"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-opm-tracker",
  },
  {
    slug: "ssdi-offset-worksheet-pack",
    title: "SSDI Offset Worksheet Pack",
    price: 19,
    priceLabel: "$19",
    forWho:
      "Federal employees confused about how SSDI reduces a FERS disability annuity.",
    includes: [
      "First-year offset worksheet",
      "Second-year offset worksheet",
      "Net-estimate planner",
      "Questions-for-a-professional list",
    ],
    tags: ["SSDI offset", "Disability retirement"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-ssdi-pack",
  },
  {
    slug: "fehb-open-season-decision-workbook",
    title: "FEHB Open Season Decision Workbook",
    price: 27,
    priceLabel: "$27",
    forWho:
      "Employees and retirees comparing FEHB plans during Open Season or before separating.",
    includes: [
      "Plan comparison grid",
      "Total-cost worksheet",
      "Retirement-continuation checklist",
      "Medicare coordination prompts",
    ],
    tags: ["FEHB", "Documentation"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-fehb-workbook",
  },
  {
    slug: "fegli-retirement-election-worksheet",
    title: "FEGLI Retirement Election Worksheet",
    price: 17,
    priceLabel: "$17",
    forWho:
      "Employees deciding between the 75%, 50%, and no-reduction FEGLI options at retirement.",
    includes: [
      "Reduction option comparison",
      "Cost-over-time planner",
      "Coverage-needs questionnaire",
      "Agent question list",
    ],
    tags: ["FEGLI", "Documentation"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-fegli-worksheet",
  },
  {
    slug: "federal-retirement-document-organizer",
    title: "Federal Retirement Document Organizer",
    price: 29,
    priceLabel: "$29",
    forWho:
      "Anyone who wants a single, organized federal benefits binder before separating or retiring.",
    includes: [
      "Master document index",
      "Benefits binder section dividers",
      "Beneficiary review checklist",
      "Annual review reminders",
    ],
    tags: ["Documentation", "Separation/RIF"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-doc-organizer",
  },
  {
    slug: "medical-separation-timeline-builder",
    title: "Medical Accommodation / Separation Timeline Builder",
    price: 39,
    priceLabel: "$39",
    forWho:
      "Employees navigating reasonable accommodation, medical separation, or disability retirement who need a clear timeline.",
    includes: [
      "Accommodation request tracker",
      "Separation timeline builder",
      "Evidence-preservation checklist",
      "Deadline alert planner",
    ],
    tags: ["Disability retirement", "Separation/RIF", "Documentation"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-timeline-builder",
    badge: "Most complete",
  },
  {
    slug: "veteran-federal-employee-bundle",
    title: "Veteran Federal Employee Benefits Bundle",
    price: 49,
    priceLabel: "$49",
    forWho:
      "Veterans in federal service who want both VA-overlap awareness tools and core federal benefits worksheets in one bundle.",
    includes: [
      "Everything in the Prep Toolkit",
      "VA / federal overlap awareness sheet",
      "Document organizer",
      "SSDI offset worksheet pack",
    ],
    tags: ["Veteran federal employee", "Disability retirement", "Documentation"],
    checkoutUrl: "https://gumroad.com/l/REPLACE-veteran-bundle",
    featured: true,
    badge: "Best value",
  },
];

export const productTags: ProductTag[] = [
  "Disability retirement",
  "OPM delay",
  "FEHB",
  "FEGLI",
  "SSDI offset",
  "Veteran federal employee",
  "Separation/RIF",
  "Documentation",
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
