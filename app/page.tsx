import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import SituationCard from "@/components/SituationCard";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import ProductCard from "@/components/ProductCard";
import ResourceCard from "@/components/ResourceCard";
import BlogCard from "@/components/BlogCard";
import BookCard from "@/components/BookCard";
import CalculatorCard from "@/components/CalculatorCard";
import EmailSignup from "@/components/EmailSignup";
import DisclaimerBox from "@/components/DisclaimerBox";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import CTAButton from "@/components/CTAButton";
import { situations } from "@/data/situations";
import { leadMagnets } from "@/data/leadMagnets";
import { products } from "@/data/products";
import { affiliateLinks } from "@/data/affiliateLinks";
import { articles } from "@/data/articles";
import { books } from "@/data/books";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Home",
  description:
    "Plain-English guides, checklists, calculators, and decision tools for federal employees navigating OPM retirement, FERS disability, FEHB, FEGLI, SSDI offsets, and benefit delays. Educational information only.",
  path: "/",
});

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.featured).slice(0, 3);
  const recentArticles = [...articles]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);
  const featuredResources = affiliateLinks.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Trust positioning (no false credentials) */}
      <div className="border-b border-navy-100 bg-white">
        <div className="container-page grid gap-4 py-8 text-sm sm:grid-cols-3">
          {[
            {
              icon: "📄",
              title: "Document-driven",
              text: "Checklists, trackers, and worksheets — not vague articles.",
            },
            {
              icon: "🗣️",
              title: "Plain-English",
              text: "Benefits-literate explanations of OPM, FERS, FEHB, and FEGLI.",
            },
            {
              icon: "🛡️",
              title: "Built for federal workers",
              text: "Veteran-informed, protective, and grounded in official sources.",
            },
          ].map((b) => (
            <div key={b.title} className="flex items-start gap-3">
              <span className="text-2xl" aria-hidden>
                {b.icon}
              </span>
              <div>
                <p className="font-semibold text-navy-900">{b.title}</p>
                <p className="text-slate-600">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Choose your situation */}
      <Section
        title="Choose your situation"
        subtitle="Jump straight to the guide and tools built for where you are right now."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situations.map((s) => (
            <SituationCard key={s.id} situation={s} />
          ))}
        </div>
      </Section>

      {/* Featured tools / calculators */}
      <Section
        muted
        title="Featured decision tools"
        subtitle="Free interactive estimators and trackers. Educational only — no data stored."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <CalculatorCard
            title="FERS Disability Retirement Estimate"
            description="Estimate a gross annuity using the simplified first- and second-year offset formulas."
            href="/calculators/fers-disability-estimate"
            icon="🧮"
          />
          <CalculatorCard
            title="FEGLI Reduction Comparison"
            description="Compare 75%, 50%, and no-reduction options side by side."
            href="/calculators/fegli-reduction"
            icon="🛡️"
          />
          <CalculatorCard
            title="OPM Delay Tracker"
            description="Track days elapsed and build a documentation checklist for a pending claim."
            href="/calculators/opm-delay-tracker"
            icon="⏳"
          />
        </div>
      </Section>

      {/* Lead magnets */}
      <Section
        title="Start with a free download"
        subtitle="Grab a checklist, then get plain-English benefits guidance by email."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {leadMagnets.slice(0, 3).map((m) => (
            <LeadMagnetCard key={m.slug} magnet={m} />
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/start-here" variant="secondary">
            See all free checklists →
          </CTAButton>
        </div>
      </Section>

      {/* Paid products */}
      <Section
        muted
        title="Toolkits & templates"
        subtitle="Low-cost, document-driven toolkits to organize and prepare your benefits decisions."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/toolkits" variant="secondary">
            Browse the full store →
          </CTAButton>
        </div>
      </Section>

      {/* Affiliate resources */}
      <Section
        title="Recommended tools & resources"
        subtitle="Independent tools that may help you organize and prepare. Compare options with a licensed professional."
      >
        <AffiliateDisclosure amazon className="mb-6" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((r) => (
            <ResourceCard key={r.slug} link={r} />
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/resources" variant="secondary">
            See all recommended resources →
          </CTAButton>
        </div>
      </Section>

      {/* Books & coloring books */}
      <Section
        title="Books & coloring books"
        subtitle="Veteran-created titles — starting with ‘Same Page, Same Day,’ a synchronized coloring ritual for deployed parents and their kids."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.slice(0, 3).map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/books" variant="secondary">
            See all books →
          </CTAButton>
        </div>
      </Section>

      {/* Recent articles */}
      <Section
        muted
        title="Recent articles"
        subtitle="Practical, source-anchored explainers for real federal benefits decisions."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentArticles.map((a) => (
            <BlogCard key={a.slug} article={a} />
          ))}
        </div>
        <div className="mt-6">
          <CTAButton href="/blog" variant="secondary">
            Read the blog →
          </CTAButton>
        </div>
      </Section>

      {/* Email signup */}
      <Section>
        <EmailSignup tag="lm-readiness" />
      </Section>

      {/* Disclaimer block */}
      <Section className="pt-0">
        <DisclaimerBox />
        <p className="mt-4 text-center text-sm text-slate-500">
          Questions about whether something applies to you?{" "}
          <Link href="/consultation" className="link-underline">
            Request an educational strategy session
          </Link>
          .
        </p>
      </Section>
    </>
  );
}
