import CTAButton from "./CTAButton";
import { siteConfig } from "@/data/siteConfig";

type Props = {
  headline?: string;
  subheadline?: string;
  eyebrow?: string;
};

export default function Hero({
  headline = "Federal Benefits Are Complicated. Your Next Step Shouldn’t Be.",
  subheadline = "Plain-English guides, checklists, calculators, and decision tools for federal employees navigating OPM retirement, FERS disability, FEHB, FEGLI, SSDI offsets, and benefit delays.",
  eyebrow = "For current federal employees, retirees, veterans in federal service, and their families",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      {/* subtle decorative gradient — no government seals or logos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(60rem 30rem at 80% -10%, rgba(201,162,39,0.25), transparent), radial-gradient(40rem 20rem at 0% 120%, rgba(47,111,179,0.35), transparent)",
        }}
      />
      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <p className="text-sm font-medium text-gold-light">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {headline}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-navy-100 sm:text-lg">
          {subheadline}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <CTAButton href={siteConfig.cta.primary.href} variant="gold" size="lg">
            {siteConfig.cta.primary.label}
          </CTAButton>
          <CTAButton href={siteConfig.cta.secondary.href} variant="ghost" size="lg">
            {siteConfig.cta.secondary.label}
          </CTAButton>
        </div>
        <p className="mt-6 max-w-2xl text-xs text-navy-100/80">
          Educational information only. Not legal, financial, medical, tax, or
          government benefit advice. Not affiliated with OPM, SSA, the VA, or any
          government agency.
        </p>
      </div>
    </section>
  );
}
