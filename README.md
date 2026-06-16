# FedBenefits Navigator

A fast, professional, revenue-focused **educational** website for a U.S. federal
employee benefits brand — OPM retirement, FERS disability retirement, FEHB,
FEGLI, SSDI offsets, federal separation/RIF, and benefit-delay survival.

> **Educational information only.** This site does **not** provide legal,
> financial, medical, tax, or government benefit advice and is **not affiliated**
> with OPM, SSA, the VA, or any government agency. Compliance language is built
> into every page, the footer, and dedicated legal pages.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**. No database,
no paid CMS — all content lives in typed local data files. Deploy free on Vercel.

---

## Tech stack

| Layer        | Choice                                             |
| ------------ | -------------------------------------------------- |
| Framework    | Next.js 14 (App Router, RSC, static generation)    |
| Language     | TypeScript                                          |
| Styling      | Tailwind CSS (custom navy/federal/gold theme)      |
| Content      | Typed local data files in `/data` (no CMS/DB)      |
| Email        | Provider-agnostic component (ConvertKit/Beehiiv/MailerLite/Tally/Resend) |
| Forms        | Formspree/Tally placeholders                        |
| Payments     | Gumroad/Payhip/Stripe payment links                 |
| Analytics    | GA4, Plausible, Meta Pixel, Pinterest, Clarity (all opt-in) |
| Deploy       | Vercel-ready                                         |

## Quick start

```bash
npm install
cp .env.example .env.local   # fill in what you use (all optional for local dev)
npm run dev                  # http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
npm run lint       # next lint
```

## Project structure

```
app/                    App Router pages + routes
  page.tsx              Home (high-converting landing)
  start-here/           Situation picker + lead-magnet capture
  fers-disability-retirement/, ssdi-offset/, fehb/, fegli/,
  retirement-timeline/, opm-delay-survival/, rif-separation/,
  veteran-benefits/     Guide / decision hub pages
  calculators/          Index + 3 interactive calculators
  toolkits/             Store (filterable) + /[slug] product pages
  resources/            Affiliate resource directory
  consultation/         Educational strategy-session intake
  blog/                 Index + /[slug] articles (12)
  about/, contact/      Brand + contact
  privacy-policy/, terms/, affiliate-disclosure/, disclaimer/,
  not-affiliated/       Legal & compliance pages
  go/[slug]/route.ts    Affiliate redirect handler
  sitemap.ts, robots.ts SEO infrastructure
components/              Reusable UI (see list below)
  calculators/          Client-side calculator components
data/                   Typed content: products, affiliateLinks, leadMagnets,
                        faqs, articles, sources, situations, siteConfig
lib/seo.ts              Metadata + JSON-LD helpers
```

### Reusable components

`Header`, `Footer`, `Hero`, `CTAButton`, `LeadMagnetCard`, `ProductCard`,
`AffiliateDisclosure`, `DisclaimerBox`, `SourceLinkBox`, `FAQAccordion`,
`CalculatorCard`, `SituationCard`, `Timeline`, `ResourceCard`, `BlogCard`,
`EmailSignup`, `Breadcrumbs`, `RelatedArticles`, `StickyMobileCTA`, plus layout
helpers (`Section`, `PageHeader`, `GuideLayout`, `LegalLayout`, `StoreGrid`,
`JsonLd`, `Analytics`, `ContactForm`, `ConsultationForm`).

## Editing content (no code required)

Everything is data-driven. Edit these files and the UI updates everywhere:

- **`data/siteConfig.ts`** — brand name, nav, CTAs, email provider switch.
- **`data/products.ts`** — paid toolkits (title, price, `checkoutUrl`, tags).
- **`data/affiliateLinks.ts`** — affiliate registry powering `/go/[slug]`.
- **`data/leadMagnets.ts`** — free downloads + email tags.
- **`data/articles.ts`** — blog posts (structured: TL;DR, mistakes, docs, etc.).
- **`data/faqs.ts`** — FAQ groups (also emitted as FAQPage JSON-LD).
- **`data/sources.ts`** — official OPM/SSA/TSP/IRS source links.

## Wiring up integrations (before launch)

All integrations are placeholders that work in "demo mode" until configured.

1. **Email capture** — set `siteConfig.emailProvider` and the matching env var,
   then replace the `TODO` in `components/EmailSignup.tsx` with your provider's
   form post or embed. UTM source is already captured.
2. **Payments** — replace each `checkoutUrl` in `data/products.ts` with a real
   Gumroad/Payhip/Stripe payment link.
3. **Affiliate links** — fill `url` for each entry in `data/affiliateLinks.ts`.
   Empty URLs safely fall back to `/resources`.
4. **Forms** — set `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` /
   `NEXT_PUBLIC_FORMSPREE_CONSULT_ID` (or swap in Tally).
5. **Analytics** — add any of the analytics env vars; each tag is opt-in.
6. **OG image** — add `public/og-default.png` (1200×630). Referenced by SEO meta.

See `.env.example` for the full list.

## Deployment (Vercel)

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com/new), **Import** the repo. Framework preset:
   **Next.js** (auto-detected). Build command `next build`, output handled
   automatically.
3. Add environment variables from `.env.example` (set `NEXT_PUBLIC_SITE_URL` to
   your production domain so canonical URLs, sitemap, and JSON-LD are correct).
4. Deploy. Add your custom domain in **Settings → Domains**.
5. After first deploy, submit `https://yourdomain.com/sitemap.xml` to Google
   Search Console (set `NEXT_PUBLIC_GSC_VERIFICATION` for meta-tag verification).

## Compliance notes

- Sitewide disclaimers (educational only, not advice, not affiliated with
  government) appear in the footer and on every major page.
- Dedicated `/disclaimer`, `/not-affiliated`, `/affiliate-disclosure`,
  `/privacy-policy`, and `/terms` pages.
- FTC affiliate disclosure renders near affiliate links.
- Legal pages are **templates marked "verify before publication"** — have a
  licensed attorney review them for your business and jurisdiction.
- Content involving legal precision is marked **"verify before publication."**

## Security

This project pins the latest patched Next.js 14.2.x. See
`LAUNCH_CHECKLIST.md` for the dependency/security note before going live.

## Further docs

- `LAUNCH_CHECKLIST.md` — pre-launch task list.
- `REVENUE_ROADMAP.md` — 30-day monetization plan.
- `EMAIL_SEQUENCE.md` — 7-email nurture sequence.
