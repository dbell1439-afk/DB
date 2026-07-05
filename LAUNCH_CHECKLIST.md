# 🚀 Launch Checklist

Work top to bottom. Items marked **(compliance)** should not be skipped.

## 1. Brand & content

- [ ] Set real brand name, domain, and email in `data/siteConfig.ts`.
- [ ] Replace `siteConfig.legalEntity` placeholder with your real entity name.
- [ ] Review homepage headline/subheadline (alternates are in the prompt).
- [ ] Proofread all 12 articles in `data/articles.ts`; remove any
      `verify before publication` notes only after confirming the facts.
- [ ] Confirm every FAQ answer in `data/faqs.ts` against an official source.

## 2. Legal & compliance **(compliance)**

- [ ] Have a licensed attorney review `/privacy-policy`, `/terms`,
      `/affiliate-disclosure`, `/disclaimer`, and `/not-affiliated`.
- [ ] Add jurisdiction-specific privacy rights (GDPR/CCPA) to the privacy policy.
- [ ] Add your refund policy to `/terms` and to each checkout.
- [ ] Confirm no government seals, logos, or "official" implications anywhere.
- [ ] Verify the "not affiliated with OPM.gov" language appears sitewide (footer
      + `/not-affiliated`). ✅ already wired.
- [ ] Confirm affiliate disclosure renders near affiliate links. ✅ already wired.

## 3. Monetization wiring

- [ ] Replace every `checkoutUrl` in `data/products.ts` with real
      Gumroad/Payhip/Stripe links.
- [ ] Fill `url` for each entry in `data/affiliateLinks.ts` (only set
      `isAffiliate: true` once a real relationship exists).
- [ ] Create the actual lead-magnet PDFs referenced in `data/leadMagnets.ts`.
- [ ] Choose an email provider, set `siteConfig.emailProvider`, and finish the
      `TODO` in `components/EmailSignup.tsx`.
- [ ] Build the 7-email nurture sequence in your provider (`EMAIL_SEQUENCE.md`).

## 4. Forms

- [ ] Set `NEXT_PUBLIC_FORMSPREE_CONTACT_ID` and
      `NEXT_PUBLIC_FORMSPREE_CONSULT_ID` (or migrate to Tally).
- [ ] Submit a test message through `/contact` and `/consultation`.
- [ ] Confirm the privacy warning shows on the consultation form. ✅ already wired.

## 5. SEO

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Add `public/og-default.png` (1200×630) and per-page OG images if desired.
- [ ] Add a `public/favicon.ico` / app icons.
- [ ] Verify `/sitemap.xml` and `/robots.txt` resolve in production.
- [ ] Submit the sitemap to Google Search Console
      (set `NEXT_PUBLIC_GSC_VERIFICATION`).
- [ ] Spot-check JSON-LD with the Rich Results Test (Organization, Website,
      Article, Product, FAQPage, Breadcrumbs).

## 6. Analytics (opt-in)

- [ ] Add any of: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`,
      `NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_PINTEREST_TAG_ID`,
      `NEXT_PUBLIC_CLARITY_ID`.
- [ ] Confirm your privacy policy lists exactly the tools you enabled. **(compliance)**

## 7. Quality & performance

- [ ] `npm run typecheck` passes. ✅
- [ ] `npm run build` succeeds. ✅
- [ ] `npm run lint` clean.
- [ ] Run Lighthouse (mobile) — target 90+ performance/SEO/accessibility.
- [ ] Test keyboard navigation + screen-reader labels on forms and accordions.
- [ ] Test on a real phone (sticky mobile CTA, header menu, calculators).

## 8. Security / dependencies

- [ ] This repo pins the latest patched **Next.js 14.2.x**. Remaining audit
      advisories in the 14.x line are primarily self-hosted DoS concerns that
      Vercel mitigates. Before launch, run `npm audit` and decide whether to
      plan a major upgrade to Next 15/16 (breaking: async route `params`).
- [ ] Confirm no secrets are committed; all secrets live in Vercel env vars.

## 9. Deploy

- [ ] Push to GitHub, import to Vercel, add env vars, deploy.
- [ ] Attach custom domain + HTTPS.
- [ ] Smoke-test every nav link, a product checkout, a `/go/*` redirect, and an
      email signup in production.
