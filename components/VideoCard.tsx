import Link from "next/link";
import type { Video } from "@/data/videos";

export default function VideoCard({ video }: { video: Video }) {
  return (
    <article className="card flex flex-col">
      <div className="flex items-center justify-between gap-2">
        <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-semibold text-slate-600">
          {video.platform}
        </span>
        <span className="text-xs text-slate-500">{video.durationLabel}</span>
      </div>

      {/* Faceless thumbnail placeholder (swap for a Canva thumbnail/embed) */}
      <div className="mt-3 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-navy-900 to-federal text-3xl text-white/80">
        ▶
      </div>

      <span className="mt-3 text-xs font-semibold uppercase tracking-wide text-federal">
        {video.topic}
      </span>
      <h3 className="mt-1 text-base font-semibold leading-snug text-navy-900">
        {video.title}
      </h3>
      <p className="mt-2 text-sm italic text-slate-600">“{video.hook}”</p>

      <details className="mt-3 [&_summary]:list-none">
        <summary className="focus-ring cursor-pointer text-sm font-semibold text-federal">
          View script outline
        </summary>
        <ol className="mt-2 space-y-1 text-sm text-slate-600">
          {video.script.map((line, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-gold">{i + 1}.</span>
              {line}
            </li>
          ))}
        </ol>
      </details>

      <Link
        href={video.ctaHref}
        className="focus-ring mt-4 inline-flex items-center justify-center rounded-full border border-federal/30 px-5 py-2.5 text-sm font-semibold text-federal hover:bg-navy-50"
      >
        {video.ctaLabel} →
      </Link>
    </article>
  );
}
