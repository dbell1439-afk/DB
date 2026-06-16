import type { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Section from "./Section";
import EmailSignup from "./EmailSignup";
import DisclaimerBox from "./DisclaimerBox";
import SourceLinkBox from "./SourceLinkBox";
import FAQAccordion from "./FAQAccordion";
import ProductCard from "./ProductCard";
import CTAButton from "./CTAButton";
import JsonLd from "./JsonLd";
import { faqJsonLd } from "@/lib/seo";
import { getProduct, type Product } from "@/data/products";
import type { FAQ } from "@/data/faqs";
import type { Crumb } from "./Breadcrumbs";

type Props = {
  title: string;
  eyebrow?: string;
  intro: string;
  crumbs: Crumb[];
  /** Above-the-fold CTA */
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  children: ReactNode;
  faqs?: FAQ[];
  sourceIds?: string[];
  relatedProductSlugs?: string[];
  emailTag?: string;
  /** Mid-page lead magnet CTA target */
  leadMagnetSlug?: string;
  leadMagnetLabel?: string;
};

export default function GuideLayout({
  title,
  eyebrow,
  intro,
  crumbs,
  primaryCta,
  secondaryCta,
  children,
  faqs = [],
  sourceIds = [],
  relatedProductSlugs = [],
  emailTag = "newsletter",
  leadMagnetSlug,
  leadMagnetLabel = "Get the matching free checklist",
}: Props) {
  const relatedProducts = relatedProductSlugs
    .map(getProduct)
    .filter((p): p is Product => Boolean(p));

  return (
    <>
      {faqs.length > 0 && <JsonLd data={faqJsonLd(faqs)} />}
      <PageHeader eyebrow={eyebrow} title={title} intro={intro} crumbs={crumbs} />

      {(primaryCta || secondaryCta) && (
        <div className="border-b border-navy-100 bg-white">
          <div className="container-page flex flex-col gap-3 py-5 sm:flex-row">
            {primaryCta && (
              <CTAButton href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </CTAButton>
            )}
            {secondaryCta && (
              <CTAButton href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </CTAButton>
            )}
          </div>
        </div>
      )}

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="prose-site">{children}</article>

          <aside className="space-y-6">
            {sourceIds.length > 0 && <SourceLinkBox sourceIds={sourceIds} />}

            {leadMagnetSlug && (
              <div className="rounded-2xl border border-gold/40 bg-ivory-warm p-5">
                <p className="text-sm font-semibold text-navy-900">
                  Free download
                </p>
                <p className="mt-1 text-sm text-slate-600">{leadMagnetLabel}</p>
                <CTAButton
                  href={`/start-here?lm=${leadMagnetSlug}#free-checklist`}
                  variant="gold"
                  size="sm"
                  className="mt-3 w-full"
                >
                  Get it free →
                </CTAButton>
              </div>
            )}

            <div className="rounded-2xl border border-navy-100 bg-navy-900 p-5 text-navy-100">
              <p className="text-sm font-semibold text-white">Need a next step?</p>
              <p className="mt-1 text-sm">
                Request an educational strategy session to talk through your
                options.
              </p>
              <CTAButton
                href="/consultation"
                variant="gold"
                size="sm"
                className="mt-3 w-full"
              >
                Request a session →
              </CTAButton>
            </div>
          </aside>
        </div>
      </Section>

      {/* Mid-page email capture */}
      <Section muted>
        <EmailSignup tag={emailTag} />
      </Section>

      {relatedProducts.length > 0 && (
        <Section
          title="Related toolkits"
          subtitle="Document-driven templates to prepare and organize this decision."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}

      {faqs.length > 0 && (
        <Section muted>
          <FAQAccordion faqs={faqs} title="Frequently asked questions" />
        </Section>
      )}

      <Section className="pt-0">
        <DisclaimerBox />
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CTAButton href="/toolkits" variant="primary">
            Browse all toolkits
          </CTAButton>
          <CTAButton href="/start-here" variant="secondary">
            Get a free checklist
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
