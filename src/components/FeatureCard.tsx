interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

export function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <article className="card border border-base-300 bg-base-100 shadow-sm">
      <div className="card-body gap-3 p-6">
        <span className="badge badge-info badge-soft font-bold">{number}</span>
        <h3 className="card-title mt-2 text-lg">{title}</h3>
        <p className="leading-7 text-base-content/70">{description}</p>
      </div>
    </article>
  );
}
