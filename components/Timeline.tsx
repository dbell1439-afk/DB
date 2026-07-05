type Step = {
  title: string;
  description: string;
  detail?: string;
};

type Props = {
  steps: Step[];
  title?: string;
};

export default function Timeline({ steps, title }: Props) {
  return (
    <section aria-label={title || "Timeline"}>
      {title && <h2 className="mb-6 text-2xl font-semibold">{title}</h2>}
      <ol className="relative space-y-6 border-l-2 border-navy-100 pl-6">
        {steps.map((step, i) => (
          <li key={i} className="relative">
            <span
              aria-hidden
              className="absolute -left-[31px] flex h-6 w-6 items-center justify-center rounded-full bg-federal text-xs font-bold text-white"
            >
              {i + 1}
            </span>
            <h3 className="text-base font-semibold text-navy-900">
              {step.title}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{step.description}</p>
            {step.detail && (
              <p className="mt-1 text-xs text-slate-500">{step.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
