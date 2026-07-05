import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import BookCard from "@/components/BookCard";
import EmailSignup from "@/components/EmailSignup";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import DisclaimerBox from "@/components/DisclaimerBox";
import { books } from "@/data/books";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Books & Coloring Books",
  description:
    "Veteran-created books and coloring books, including ‘Same Page, Same Day’ — a synchronized coloring book for children of deployed parents — and a women veterans coloring book.",
  path: "/books",
});

export default function BooksPage() {
  return (
    <>
      <PageHeader
        eyebrow="Books"
        title="Books & coloring books"
        intro="Veteran-created books built around real military and family experience — starting with ‘Same Page, Same Day,’ a synchronized coloring ritual that keeps deployed parents and their kids connected across the distance."
        crumbs={[{ label: "Books", href: "/books" }]}
      />

      <Section>
        <div className="mb-8 rounded-2xl border border-gold/40 bg-ivory-warm p-5">
          <p className="text-sm font-semibold text-navy-900">
            Built from firsthand veteran experience
          </p>
          <p className="mt-1 text-sm text-slate-600">
            These titles are created by a veteran (Air Force Reserve; 100% VA
            rating) who has lived the deployment cycle. That perspective shapes
            the “after-homecoming” reintegration pages other coloring books skip.
            <span className="text-slate-500">
              {" "}
              (Personalize this founder note with your name/brand before
              publication.)
            </span>
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((b) => (
            <BookCard key={b.slug} book={b} />
          ))}
        </div>

        <AffiliateDisclosure amazon className="mt-8" />
      </Section>

      <Section muted>
        <EmailSignup
          tag="lm-books"
          heading="Get notified when the books launch"
          subheading="Join the launch list for ‘Same Page, Same Day’ and the women veterans coloring book. We’ll only email you about these titles."
        />
      </Section>

      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
