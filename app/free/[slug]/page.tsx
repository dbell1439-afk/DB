import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import EmailSignup from "@/components/EmailSignup";
import DisclaimerBox from "@/components/DisclaimerBox";
import LeadMagnetCard from "@/components/LeadMagnetCard";
import { leadMagnets, getLeadMagnet } from "@/data/leadMagnets";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return leadMagnets.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const m = getLeadMagnet(params.slug);
  if (!m) return pageMeta({ title: "Free download", description: "", path: "/start-here" });
  return pageMeta({
    title: `Free: ${m.title}`,
    description: m.description,
    path: `/free/${m.slug}`,
  });
}

export default function FreeLeadMagnetPage({
  params,
}: {
  params: { slug: string };
}) {
  const magnet = getLeadMagnet(params.slug);
  if (!magnet) notFound();

  const others = leadMagnets.filter((m) => m.slug !== magnet.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Free download"
        title={magnet.title}
        intro={magnet.landingIntro || magnet.description}
        crumbs={[
          { label: "Free downloads", href: "/start-here" },
          { label: magnet.title, href: `/free/${magnet.slug}` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <h2 className="text-2xl font-semibold">What’s inside</h2>
            <ul className="mt-4 space-y-2 text-slate-700">
              {(magnet.whatsInside || magnet.bullets).map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 text-gold" aria-hidden>
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-navy-100 bg-white p-5 text-sm text-slate-600">
              <p className="font-semibold text-navy-900">How delivery works</p>
              <p className="mt-1">
                Enter your email and we’ll send the download link. You’ll also get
                a short, plain-English email series for your situation. Unsubscribe
                anytime. We never ask for SSNs, claim numbers, or medical records.
              </p>
            </div>
          </div>

          <aside>
            <div className="lg:sticky lg:top-20">
              <EmailSignup
                tag={magnet.tag}
                heading={`Send me the ${magnet.title}`}
                subheading="Free instant download. Plus practical federal benefits guidance by email."
                utmSource={`free-${magnet.slug}`}
              />
            </div>
          </aside>
        </div>
      </Section>

      <Section muted title="More free checklists">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((m) => (
            <LeadMagnetCard key={m.slug} magnet={m} />
          ))}
        </div>
        <p className="mt-6 text-sm text-slate-500">
          <Link href="/start-here" className="link-underline">
            See all free downloads →
          </Link>
        </p>
      </Section>

      <Section className="pt-0">
        <DisclaimerBox />
      </Section>
    </>
  );
}
