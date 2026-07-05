import type { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Section from "./Section";

type Props = {
  title: string;
  updated?: string;
  children: ReactNode;
};

export default function LegalLayout({
  title,
  updated = "2026-06-16",
  children,
}: Props) {
  return (
    <>
      <PageHeader title={title} crumbs={[{ label: title, href: "#" }]} />
      <Section>
        <div className="prose-site max-w-3xl">
          <p className="rounded-lg border border-gold/40 bg-ivory-warm px-4 py-3 text-sm text-slate-700">
            <strong>Template — verify before publication.</strong> This is a
            starting-point template, not legal advice. Have a licensed attorney
            review and customize it for your business, jurisdiction, and data
            practices before you publish.
          </p>
          <p className="text-sm text-slate-500">
            Last updated:{" "}
            {new Date(updated).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {children}
        </div>
      </Section>
    </>
  );
}
