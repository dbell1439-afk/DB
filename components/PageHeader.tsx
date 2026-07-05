import Breadcrumbs, { type Crumb } from "./Breadcrumbs";

type Props = {
  title: string;
  intro?: string;
  eyebrow?: string;
  crumbs?: Crumb[];
};

/** Standard page heading block with breadcrumbs, used across interior pages. */
export default function PageHeader({ title, intro, eyebrow, crumbs }: Props) {
  return (
    <div className="bg-gradient-to-b from-navy-50 to-ivory">
      <div className="container-page py-10 sm:py-14">
        {crumbs && (
          <div className="mb-4">
            <Breadcrumbs items={crumbs} />
          </div>
        )}
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-federal">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-3xl text-3xl font-bold sm:text-4xl">{title}</h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
