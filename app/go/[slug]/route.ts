import { NextResponse, type NextRequest } from "next/server";
import { getAffiliateLink } from "@/data/affiliateLinks";
import { siteConfig } from "@/data/siteConfig";

/**
 * Affiliate redirect handler.
 *
 * /go/[slug] looks up the slug in data/affiliateLinks.ts and 302-redirects to
 * the configured `url`. If the slug is unknown or has no URL yet, it falls back
 * to the /resources page so links never dead-end.
 *
 * This keeps every outbound destination editable from one file and gives you a
 * single chokepoint to add click logging or UTM params later.
 */
export function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const link = getAffiliateLink(params.slug);
  const fallback = new URL("/resources", siteConfig.url);

  if (!link || !link.url) {
    return NextResponse.redirect(fallback, 302);
  }

  // TODO: add click logging / analytics event here if desired.
  return NextResponse.redirect(link.url, 302);
}
