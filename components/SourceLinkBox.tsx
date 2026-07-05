import { getSources } from "@/data/sources";

type Props = {
  sourceIds: string[];
  title?: string;
};

export default function SourceLinkBox({
  sourceIds,
  title = "Official sources",
}: Props) {
  const sources = getSources(sourceIds);
  if (sources.length === 0) return null;
  return (
    <section className="rounded-2xl border border-federal/20 bg-navy-50 p-5">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-navy-900">
        <span aria-hidden>🔗</span> {title}
      </h3>
      <p className="mt-1 text-xs text-slate-600">
        Always confirm rules and figures with the primary government source.
      </p>
      <ul className="mt-3 space-y-2">
        {sources.map((s) => (
          <li key={s.id}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm font-medium"
            >
              {s.label}
            </a>
            <span className="block text-xs text-slate-500">{s.agency}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
