import Link from "next/link";

type EditionCardProps = {
  label: string;
  name: string;
  description: string;
  highlights: readonly string[];
  downloadLabel: string;
  downloadUrl: string;
  featured?: boolean;
};

export function EditionCard({
  label,
  name,
  description,
  highlights,
  downloadLabel,
  downloadUrl,
  featured = false,
}: EditionCardProps) {
  return (
    <article
      className={featured
        ? "card min-w-0 border border-primary/45 bg-primary/5 text-base-content shadow-xl ring-1 ring-primary/10"
        : "card min-w-0 border border-base-300 bg-base-100 shadow-sm"}
    >
      <div className="card-body min-h-[27rem] p-6 sm:p-7">
        <div>
          <p
            className={featured
              ? "badge border-primary/30 bg-primary/15 font-semibold text-primary"
              : "badge border-success/35 bg-success/20 font-semibold text-success-content"}
          >
            {label}
          </p>
          <h3 className="card-title mt-5 text-2xl">{name}</h3>
          <p className="mt-3 min-h-16 leading-7 text-base-content/70">
            {description}
          </p>
        </div>
        <ul className="my-5 grid gap-3 text-sm">
          {highlights.map((highlight) => (
            <li className="flex gap-3 leading-6" key={highlight}>
              <span className={featured ? "text-primary" : "text-success"} aria-hidden="true">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="card-actions mt-auto">
          <Link className={featured ? "btn btn-primary w-full justify-between" : "btn btn-outline btn-primary w-full justify-between"} href={downloadUrl}>
            {downloadLabel}
            <span aria-hidden="true">↓</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
