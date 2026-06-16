"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, siteConfig } from "@/data/siteConfig";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-100 bg-ivory/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring flex items-center gap-2 font-semibold text-navy-900"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900 text-xs font-bold text-gold"
          >
            FUA
          </span>
          <span className="text-base sm:text-lg">{siteConfig.name}</span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-full px-3 py-2 text-sm font-medium text-slate-700 hover:bg-navy-50 hover:text-navy-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            href={siteConfig.cta.primary.href}
            className="focus-ring inline-flex items-center rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy-900 hover:bg-gold-light"
          >
            Free Checklist
          </Link>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-lg p-2 text-navy-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="text-xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-navy-100 bg-ivory lg:hidden"
        >
          <nav aria-label="Mobile" className="container-page flex flex-col py-3">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-navy-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={siteConfig.cta.primary.href}
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 inline-flex items-center justify-center rounded-full bg-gold px-4 py-2.5 text-sm font-semibold text-navy-900"
            >
              {siteConfig.cta.primary.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
