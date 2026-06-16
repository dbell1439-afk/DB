import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import BlogCard from "@/components/BlogCard";
import EmailSignup from "@/components/EmailSignup";
import { articles, blogCategories } from "@/data/articles";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Blog",
  description:
    "Practical, source-anchored articles on FERS disability retirement, OPM delays, SSDI offsets, FEHB, FEGLI, TSP, federal separation, and documentation strategy.",
  path: "/blog",
});

export default function BlogIndex() {
  const sorted = [...articles].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );

  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Practical federal benefits articles"
        intro="Document-driven explainers for real federal benefits decisions — written in plain English and anchored to official sources."
        crumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-navy-100 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((a) => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>

      <Section muted>
        <EmailSignup tag="newsletter" />
        <p className="mt-4 text-center text-xs text-slate-500">
          Looking for a tool instead?{" "}
          <Link href="/toolkits" className="link-underline">
            Browse the toolkits store
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
