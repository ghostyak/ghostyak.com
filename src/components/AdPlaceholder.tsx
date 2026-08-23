type AdPlaceholderProps = {
  slot: string;
};

export function AdPlaceholder({ slot }: AdPlaceholderProps) {
  return (
    <aside
      className="flex min-h-24 w-full items-center justify-center rounded-box border border-dashed border-base-content/25 bg-base-100 px-4 py-6 text-center text-base-content/50"
      aria-label="Advertisement placeholder"
      data-ad-slot={slot}
    >
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.14em]">Advertisement</p>
        <p className="mt-1 text-xs">Google Ads responsive banner · 728 × 90</p>
      </div>
    </aside>
  );
}
