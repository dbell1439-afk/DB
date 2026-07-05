/**
 * Books & coloring books published through Amazon KDP and other channels.
 *
 * These are a separate product stream from the digital toolkits. Replace each
 * `buyUrl` with a real Amazon/KDP listing (or "Notify me" lead-capture link for
 * pre-launch titles). Amazon links are affiliate links — see the Amazon
 * Associates disclosure rendered on the Books page.
 */

export type BookStatus = "available" | "preorder" | "coming-soon";

export type Book = {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  description: string;
  bullets: string[];
  priceLabel: string;
  status: BookStatus;
  // Amazon KDP / store link, or a Beacons/Kit "notify me" link pre-launch.
  buyUrl: string;
  icon: string;
  badge?: string;
  /** True if buyUrl is (or will be) an Amazon affiliate link. */
  amazonAffiliate?: boolean;
};

export const books: Book[] = [
  {
    slug: "same-page-same-day-family",
    title: "Same Page, Same Day",
    subtitle: "A synchronized coloring book for children of deployed parents",
    audience: "Children with a deployed parent + the deployed parent",
    description:
      "A connection ritual across the distance: the child colors a page at home while the deployed parent colors the matching page in a ruggedized pocket edition — the same page, the same day. Built by a veteran who understands the deployment cycle firsthand.",
    bullets: [
      "40 paired, synchronized pages (home edition + pocket edition)",
      "Reintegration / after-homecoming pages included",
      "Prompts that turn coloring into a shared routine",
      "Companion ruggedized pocket edition for the deployed parent",
    ],
    priceLabel: "From $14.99",
    status: "coming-soon",
    buyUrl: "/contact?subject=Same%20Page%20Same%20Day%20launch%20list",
    icon: "🎨",
    badge: "Flagship",
  },
  {
    slug: "same-page-same-day-pocket",
    title: "Same Page, Same Day — Pocket Edition",
    subtitle: "The ruggedized companion for the deployed parent",
    audience: "Deployed service members",
    description:
      "A durable, deployment-ready pocket edition with pages that mirror the home edition, so a parent downrange can color the same page on the same day as their child.",
    bullets: [
      "Ruggedized, pocket-sized format",
      "Pages mirror the family edition",
      "Designed for field conditions",
    ],
    priceLabel: "From $9.99",
    status: "coming-soon",
    buyUrl: "/contact?subject=Pocket%20Edition%20launch%20list",
    icon: "🪖",
  },
  {
    slug: "women-veterans-coloring-book",
    title: "Women Veterans Coloring Book",
    subtitle: "Honoring service, strength, and the women who served",
    audience: "Women veterans (an underserved Amazon KDP niche)",
    description:
      "A coloring book celebrating women veterans — an audience mission-driven brands overlook. Created with authentic veteran perspective.",
    bullets: [
      "Service-themed, strength-forward illustrations",
      "Reflective prompts and affirmations",
      "Giftable format",
    ],
    priceLabel: "From $11.99",
    status: "coming-soon",
    buyUrl: "/contact?subject=Women%20Veterans%20Coloring%20Book%20launch%20list",
    icon: "🎖️",
  },
];

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}
