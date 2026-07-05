import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import SourceLinkBox from "@/components/SourceLinkBox";
import EmailSignup from "@/components/EmailSignup";
import DisclaimerBox from "@/components/DisclaimerBox";
import RelatedArticles from "@/components/RelatedArticles";
import ProductCard from "@/components/ProductCard";
import CTAButton from "@/components/CTAButton";
import JsonLd from "@/components/JsonLd";
import {
  articles,
  getArticle,
  getRelatedArticles,
  ARTICLE_DISCLAIMER,
} from "@/data/articles";
import { getProduct } from "@/data/products";
import { getLeadMagnet } from "@/data/leadMagnets";
import { pageMeta, articleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticle(params.slug);
  if (!article) return pageMeta({ title: "Article", description: "", path: "/blog" });
  return pageMeta({
    title: article.title,
    description: article.metaDescription,
    path: `/blog/${article.slug}`,
    type: "article",
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug);
  const product = article.relatedProductSlug
    ? getProduct(article.relatedProductSlug)
    : undefined;
  const magnet = article.relatedLeadMagnetSlug
    ? getLeadMagnet(article.relatedLeadMagnetSlug)
    : undefined;

  return (
    <>
      <JsonLd data={articleJsonLd(article)} />
      <PageHeader
        eyebrow={article.category}
        title={article.title}
        intro={article.metaDescription}
        crumbs={[
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <article className="prose-site">
            <p className="text-sm text-slate-500">
              {new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              · {article.readingMinutes} min read
            </p>

            {/* TL;DR */}
            <div className="not-prose my-6 rounded-2xl border border-federal/20 bg-navy-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-federal">
                TL;DR
              </p>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                {article.tldr.map((t) => (
                  <li key={t} className="flex gap-2">
                    <span className="text-gold">•</span> {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Who this helps */}
            <h2>Who this helps</h2>
            <ul>
              {article.whoThisHelps.map((w) => (
                <li key={w}>{w}</li>
              ))}
            </ul>

            {/* Body sections */}
            {article.sections.map((s) => (
              <div key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Mid-article lead magnet CTA */}
            {magnet && (
              <div className="not-prose my-8 rounded-2xl border border-gold/40 bg-ivory-warm p-5">
                <p className="font-semibold text-navy-900">
                  Free download: {magnet.title}
                </p>
                <p className="mt-1 text-sm text-slate-600">{magnet.description}</p>
                <CTAButton
                  href={`/free/${magnet.slug}`}
                  variant="gold"
                  size="sm"
                  className="mt-3"
                >
                  Get it free →
                </CTAButton>
              </div>
            )}

            {/* Common mistakes */}
            <h2>Common mistakes</h2>
            <ul>
              {article.commonMistakes.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>

            {/* Documents to gather */}
            <h2>Documents to gather</h2>
            <ul>
              {article.documentsToGather.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>

            <div className="not-prose mt-8">
              <DisclaimerBox variant="compact">{ARTICLE_DISCLAIMER}</DisclaimerBox>
            </div>
          </article>

          <aside className="space-y-6">
            <SourceLinkBox sourceIds={article.sourceIds} />
            {product && (
              <div>
                <p className="mb-2 text-sm font-semibold text-navy-900">
                  Related toolkit
                </p>
                <ProductCard product={product} />
              </div>
            )}
            <div className="rounded-2xl border border-navy-100 bg-navy-900 p-5 text-navy-100">
              <p className="text-sm font-semibold text-white">Get the newsletter</p>
              <p className="mt-1 text-sm">
                Plain-English federal benefits guidance, by email.
              </p>
              <CTAButton
                href="/start-here#free-checklist"
                variant="gold"
                size="sm"
                className="mt-3 w-full"
              >
                Start free →
              </CTAButton>
            </div>
          </aside>
        </div>
      </Section>

      <Section muted>
        <EmailSignup tag="newsletter" />
      </Section>

      <Section>
        <RelatedArticles articles={related} />
        <p className="mt-6 text-sm text-slate-500">
          <Link href="/blog" className="link-underline">
            ← Back to all articles
          </Link>
        </p>
      </Section>
    </>
  );
}
