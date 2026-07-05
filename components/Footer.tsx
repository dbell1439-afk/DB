import Link from "next/link";
import {
  footerLegalNav,
  guideNav,
  primaryNav,
  secondaryNav,
  siteConfig,
} from "@/data/siteConfig";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-navy-100 bg-navy-900 text-navy-100">
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-white">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-xs font-bold text-gold"
              >
                FUA
              </span>
              {siteConfig.name}
            </div>
            <p className="mt-3 text-sm text-navy-100/80">
              Practical, document-driven education for federal employees
              navigating OPM retirement, FERS disability, FEHB, FEGLI, SSDI
              offsets, and benefit delays.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {[...primaryNav, ...secondaryNav].map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="hover:text-gold-light">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Guides</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {guideNav.slice(0, 6).map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="hover:text-gold-light">
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Legal & Trust</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {footerLegalNav.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="hover:text-gold-light">
                    {i.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="hover:text-gold-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-light">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 space-y-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-navy-100/80">
          <p>
            <span className="font-semibold text-white">
              Educational information only.
            </span>{" "}
            {siteConfig.name} provides general educational information and tools.
            It does not provide legal, financial, medical, tax, or government
            benefit advice. Using this site does not create any professional or
            advisory relationship. For advice about your specific situation,
            consult a licensed attorney, financial planner, tax professional, or
            other qualified expert.
          </p>
          <p>
            <span className="font-semibold text-white">
              Not affiliated with the government.
            </span>{" "}
            {siteConfig.name} is an independent brand and is not affiliated with,
            endorsed by, or connected to the U.S. Office of Personnel Management
            (OPM.gov), the Social Security Administration (SSA), the Department of
            Veterans Affairs (VA), or any other federal agency. Agency names are
            used only for identification and reference.
          </p>
          <p>
            <span className="font-semibold text-white">
              No VA claims preparation.
            </span>{" "}
            We provide general education only. We do not prepare, file, or assist
            with VA disability claims, and we never charge any fee for VA claims
            preparation. For help with a VA claim, contact a VA-accredited
            representative, attorney, or Veterans Service Organization (VSO).
          </p>
          <p>
            <span className="font-semibold text-white">Affiliate disclosure.</span>{" "}
            Some links may be affiliate links. If you purchase through them, we
            may earn a commission at no additional cost to you. As an Amazon
            Associate, we earn from qualifying purchases.
          </p>
        </div>

        <p className="mt-8 text-xs text-navy-100/60">
          © {year} {siteConfig.legalEntity}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
