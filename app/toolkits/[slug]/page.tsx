import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import CTAButton from "@/components/CTAButton";
import DisclaimerBox from "@/components/DisclaimerBox";
import ProductCard from "@/components/ProductCard";
import EmailSignup from "@/components/EmailSignup";
import JsonLd from "@/components/JsonLd";
import { products, getProduct } from "@/data/products";
import { pageMeta, productJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = getProduct(params.slug);
  if (!product) return pageMeta({ title: "Toolkit", description: "", path: "/toolkits" });
  return pageMeta({
    title: product.title,
    description: `${product.title} (${product.priceLabel}). ${product.forWho} Educational template only.`,
    path: `/toolkits/${product.slug}`,
  });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = products
    .filter(
      (p) =>
        p.slug !== product.slug &&
        p.tags.some((t) => product.tags.includes(t)),
    )
    .slice(0, 3);

  return (
    <>
      <JsonLd data={productJsonLd(product)} />
      <PageHeader
        eyebrow="Toolkit"
        title={product.title}
        intro={product.forWho}
        crumbs={[
          { label: "Toolkits", href: "/toolkits" },
          { label: product.title, href: `/toolkits/${product.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="prose-site">
            <p className="text-3xl font-bold text-federal">{product.priceLabel}</p>
            <h2>What’s included</h2>
            <ul>
              {product.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <h2>Who it’s for</h2>
            <p>{product.forWho}</p>
            <h2>Format & delivery</h2>
            <p>
              Instant digital download (PDF / printable worksheets) delivered
              after checkout through a third-party processor
              (Gumroad/Payhip/Stripe). This is an educational template — it does
              not provide legal, financial, medical, or tax advice and does not
              guarantee any OPM, SSA, VA, or agency outcome.
            </p>
          </div>

          <aside className="space-y-5">
            <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-card">
              <p className="text-2xl font-bold text-navy-900">
                {product.priceLabel}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                One-time purchase, instant download.
              </p>
              <CTAButton
                href={product.checkoutUrl}
                variant="gold"
                external
                className="mt-4 w-full"
              >
                Buy now →
              </CTAButton>
              <p className="mt-3 text-[11px] text-slate-500">
                Secure checkout via a third-party processor. Educational template
                only.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section muted title="You might also like">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <EmailSignup tag="newsletter" />
      </Section>

      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
