import { TableProperties } from "lucide-react";
import { ProductCard } from "@/components/ProductCard";
import { csvSearchEngine } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";

const columnWidths = ["w-10", "w-16", "w-12", "w-20"];

export function CsvSearchCard({ copy, locale, viewAction }: {
  copy: Dictionary["csvSearch"];
  locale: PublishedLocale;
  viewAction: string;
}) {
  return <ProductCard
    id="csv-search-engine"
    name={csvSearchEngine.name}
    badges={[{ label: copy.category, tone: "category" }, { label: "DFIR" }, { label: csvSearchEngine.platform }]}
    description={copy.description}
    action={{ label: viewAction, href: localizedPath(locale, csvSearchEngine.pagePath) }}
    preview={<div className="relative flex h-full items-center justify-center bg-accent p-6" aria-hidden="true">
      <div className="absolute inset-x-8 top-8 grid gap-2 opacity-60 sm:inset-x-12">
        {[0, 1, 2, 3, 4, 5].map(row => <div key={row} className="flex gap-2">{columnWidths.map(width => <span key={width} className={`h-2.5 ${width} rounded-full ${row === 0 ? "bg-ink/25" : row === 3 ? "bg-brand" : "bg-ink/10"}`} />)}</div>)}
      </div>
      <div className="relative flex items-center gap-4 rounded-2xl bg-card px-7 py-5 shadow-lg shadow-ink/10">
        <TableProperties className="size-11 stroke-[1.25] text-brand-foreground" />
        <span className="text-4xl font-semibold tracking-tight">CSV</span>
      </div>
    </div>}
  />;
}
