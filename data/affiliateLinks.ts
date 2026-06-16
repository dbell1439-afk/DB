/**
 * Affiliate / recommended-tool registry.
 *
 * Every outbound affiliate link on the site points to /go/[slug], which looks
 * up the slug here and 302-redirects to `url`. This keeps every destination
 * editable from ONE file and lets you add UTM / tracking later without touching
 * components. If a slug is missing, /go/[slug] falls back to /resources.
 *
 * IMPORTANT: Do not label any product "best." Frame everything as an
 * educational comparison resource and add "compare with a licensed
 * professional" language near the links.
 */

export type AffiliateCategory =
  | "Retirement planning tools"
  | "Tax software"
  | "Document scanning / organization"
  | "Cloud storage"
  | "Budgeting tools"
  | "Life insurance comparison"
  | "Long-term care education"
  | "Legal document platforms"
  | "Productivity & case organization"
  | "Books & resources";

export type AffiliateLink = {
  slug: string; // used in /go/[slug]
  name: string;
  category: AffiliateCategory;
  blurb: string;
  // Replace with your real affiliate URL. Empty string => redirect to /resources.
  url: string;
  // Set true only once you have a real affiliate relationship in place.
  isAffiliate: boolean;
};

export const affiliateLinks: AffiliateLink[] = [
  // Retirement planning tools
  {
    slug: "retirement-planner-tool",
    name: "Retirement Planning Software (placeholder)",
    category: "Retirement planning tools",
    blurb:
      "Educational planning calculators to model income scenarios. Compare options with a licensed professional.",
    url: "",
    isAffiliate: true,
  },
  // Tax software
  {
    slug: "tax-software",
    name: "Tax Preparation Software (placeholder)",
    category: "Tax software",
    blurb:
      "Consumer tax software for organizing returns. For tax advice, consult a licensed tax professional.",
    url: "",
    isAffiliate: true,
  },
  // Document scanning / organization
  {
    slug: "document-scanner-app",
    name: "Document Scanning App (placeholder)",
    category: "Document scanning / organization",
    blurb:
      "Mobile scanning to digitize benefits paperwork into a single, searchable archive.",
    url: "",
    isAffiliate: true,
  },
  // Cloud storage
  {
    slug: "cloud-storage",
    name: "Encrypted Cloud Storage (placeholder)",
    category: "Cloud storage",
    blurb:
      "Back up your federal benefits binder securely. Avoid storing SSNs or medical records unencrypted.",
    url: "",
    isAffiliate: true,
  },
  // Budgeting tools
  {
    slug: "budgeting-app",
    name: "Budgeting App (placeholder)",
    category: "Budgeting tools",
    blurb:
      "Plan around interim pay gaps and benefit delays. Educational tool, not financial advice.",
    url: "",
    isAffiliate: true,
  },
  // Life insurance comparison
  {
    slug: "life-insurance-marketplace",
    name: "Life Insurance Comparison Marketplace (placeholder)",
    category: "Life insurance comparison",
    blurb:
      "Educational marketplace to compare coverage alongside FEGLI. Compare quotes with a licensed agent.",
    url: "",
    isAffiliate: true,
  },
  // Long-term care education
  {
    slug: "ltc-education",
    name: "Long-Term Care Education Resource (placeholder)",
    category: "Long-term care education",
    blurb:
      "Background reading on long-term care planning. Not an endorsement of any specific policy.",
    url: "",
    isAffiliate: true,
  },
  // Legal document platforms
  {
    slug: "legal-document-platform",
    name: "Legal Document Platform (placeholder)",
    category: "Legal document platforms",
    blurb:
      "Self-help document tools for wills, POAs, and beneficiary forms. Not a substitute for an attorney.",
    url: "",
    isAffiliate: true,
  },
  // Productivity & case organization
  {
    slug: "case-organization-app",
    name: "Case / Project Organization App (placeholder)",
    category: "Productivity & case organization",
    blurb:
      "Keep a stalled OPM claim organized with tasks, reminders, and a contact log.",
    url: "",
    isAffiliate: true,
  },
  // Books & resources
  {
    slug: "federal-retirement-book",
    name: "Federal Retirement & Disability Reference Book (placeholder)",
    category: "Books & resources",
    blurb:
      "Independent reference reading on federal retirement and disability preparation.",
    url: "",
    isAffiliate: true,
  },
];

export const affiliateCategories: AffiliateCategory[] = [
  "Retirement planning tools",
  "Tax software",
  "Document scanning / organization",
  "Cloud storage",
  "Budgeting tools",
  "Life insurance comparison",
  "Long-term care education",
  "Legal document platforms",
  "Productivity & case organization",
  "Books & resources",
];

export function getAffiliateLink(slug: string): AffiliateLink | undefined {
  return affiliateLinks.find((l) => l.slug === slug);
}
