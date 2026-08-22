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
    <article className={`edition-card${featured ? " edition-card-featured" : ""}`}>
      <div>
        <p className="edition-label">{label}</p>
        <h3>{name}</h3>
        <p className="edition-description">{description}</p>
      </div>
      <ul>
        {highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
      <a className="edition-button" href={downloadUrl}>
        {downloadLabel}
        <span aria-hidden="true">↓</span>
      </a>
    </article>
  );
}
