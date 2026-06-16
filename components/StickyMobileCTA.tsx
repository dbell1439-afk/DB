import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

/**
 * Fixed conversion bar shown on small screens only.
 */
export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-navy-100 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(10,31,60,0.08)] backdrop-blur lg:hidden">
      <div className="flex items-center gap-3">
        <Link
          href={siteConfig.cta.primary.href}
          className="focus-ring flex-1 rounded-full bg-federal px-4 py-2.5 text-center text-sm font-semibold text-white"
        >
          Free Checklist
        </Link>
        {/* primary.href now points to the dedicated /free funnel */}
        <Link
          href={siteConfig.cta.secondary.href}
          className="focus-ring rounded-full border border-federal/30 px-4 py-2.5 text-center text-sm font-semibold text-federal"
        >
          Toolkits
        </Link>
      </div>
    </div>
  );
}
