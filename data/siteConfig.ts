/**
 * Central site configuration. Edit values here to rebrand quickly.
 * No secrets belong in this file — use environment variables (see .env.example).
 */

export const siteConfig = {
  // Swap your real brand name in one place: set NEXT_PUBLIC_BRAND_NAME in your
  // env (or just edit the fallback string here). It propagates sitewide.
  name: process.env.NEXT_PUBLIC_BRAND_NAME || "Fed Up Annuitant",
  shortName: process.env.NEXT_PUBLIC_BRAND_NAME || "Fed Up Annuitant",
  tagline: "Real Help Navigating OPM Disability Retirement, Delays & Denials",
  description:
    "Plain-English guides, checklists, calculators, and decision tools for federal employees navigating OPM disability retirement, processing delays, denials, FEHB, FEGLI, and SSDI offsets. Educational information only.",
  // Production domain (WordPress custom domain: fedupannuitant.com).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://fedupannuitant.com",
  locale: "en-US",
  email: "hello@fedupannuitant.com",
  // Used for Organization JSON-LD + footer.
  legalEntity: "Fed Up Annuitant (placeholder — verify legal entity before publication)",
  social: {
    pinterest: "https://www.pinterest.com/",
    youtube: "https://www.youtube.com/",
    tiktok: "https://www.tiktok.com/",
    linkedin: "https://www.linkedin.com/",
  },

  // Free landing-page / link-in-bio hub (Beacons.ai) used alongside the site.
  beaconsUrl: "https://beacons.ai/",

  // Primary calls to action reused across the site.
  cta: {
    primary: {
      label: "Get the Free OPM Retirement Readiness Checklist",
      href: "/free/opm-retirement-readiness-checklist",
    },
    secondary: {
      label: "Browse Toolkits",
      href: "/toolkits",
    },
  },

  // Email provider switch. Set to the provider you wire up in EmailSignup.tsx.
  // Default is Kit (ConvertKit); set NEXT_PUBLIC_CONVERTKIT_FORM_ID to go live.
  // One of: "convertkit" | "beehiiv" | "mailerlite" | "tally" | "placeholder"
  emailProvider: "convertkit" as
    | "convertkit"
    | "beehiiv"
    | "mailerlite"
    | "tally"
    | "placeholder",

  // Analytics IDs are read from env at runtime (see components/Analytics.tsx).
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNav: NavItem[] = [
  { label: "Start Here", href: "/start-here" },
  { label: "Guides", href: "/fers-disability-retirement" },
  { label: "Calculators", href: "/calculators" },
  { label: "Toolkits", href: "/toolkits" },
  { label: "Books", href: "/books" },
  { label: "Watch", href: "/watch" },
  { label: "Blog", href: "/blog" },
  { label: "Consultation", href: "/consultation" },
];

// Secondary links kept in the footer to avoid overcrowding the header.
export const secondaryNav: NavItem[] = [
  { label: "Recommended Resources", href: "/resources" },
];

export const guideNav: NavItem[] = [
  {
    label: "FERS Disability Retirement Guide",
    href: "/fers-disability-retirement",
    description: "Eligibility, the SSDI requirement, evidence, and timelines.",
  },
  {
    label: "OPM Disability Retirement Estimator",
    href: "/calculators/fers-disability-estimate",
    description: "Educational annuity estimate with the SSDI offset.",
  },
  {
    label: "SSDI Offset Explainer",
    href: "/ssdi-offset",
    description: "How the first- and second-year offsets actually work.",
  },
  {
    label: "FEHB Open Season Decision Hub",
    href: "/fehb",
    description: "Compare plans and keep coverage into retirement.",
  },
  {
    label: "FEGLI Decision Hub",
    href: "/fegli",
    description: "75%, 50%, or no reduction at retirement.",
  },
  {
    label: "Federal Retirement Timeline",
    href: "/retirement-timeline",
    description: "What happens, and when, from application to first check.",
  },
  {
    label: "OPM Delay Survival Center",
    href: "/opm-delay-survival",
    description: "Track, document, and escalate a stalled claim.",
  },
  {
    label: "RIF / Separation Benefits Guide",
    href: "/rif-separation",
    description: "Questions to ask immediately after a RIF or separation.",
  },
  {
    label: "Veteran Federal Employee Guide",
    href: "/veteran-benefits",
    description: "Where VA and federal civilian benefits can overlap.",
  },
];

export const footerLegalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  { label: "Educational Disclaimer", href: "/disclaimer" },
  { label: "Not Affiliated With Government", href: "/not-affiliated" },
];
