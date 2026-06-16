import Link from "next/link";
import Section from "@/components/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-federal">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold">We couldn’t find that page</h1>
        <p className="mt-3 text-slate-600">
          The page may have moved. Try one of these instead:
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="focus-ring rounded-full bg-federal px-5 py-2.5 text-sm font-semibold text-white hover:bg-federal-dark"
          >
            Home
          </Link>
          <Link
            href="/start-here"
            className="focus-ring rounded-full border border-federal/30 px-5 py-2.5 text-sm font-semibold text-federal hover:bg-navy-50"
          >
            Start Here
          </Link>
          <Link
            href="/blog"
            className="focus-ring rounded-full border border-federal/30 px-5 py-2.5 text-sm font-semibold text-federal hover:bg-navy-50"
          >
            Blog
          </Link>
        </div>
      </div>
    </Section>
  );
}
