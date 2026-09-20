import { ArrowRight, TableProperties } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { csvSearchEngine } from "@/data/products";
import type { Dictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function CsvSearchCard({ copy, locale, viewAction }: {
  copy: Dictionary["csvSearch"];
  locale: PublishedLocale;
  viewAction: string;
}) {
  return <Card className="gap-0 overflow-hidden rounded-2xl py-0 shadow-none">
    <article id="csv-search-engine" className="flex h-full scroll-mt-24 flex-col">
      <div className="flex h-60 shrink-0 items-center justify-center gap-4 bg-accent/60 p-6" aria-hidden="true">
        <TableProperties className="size-14 stroke-1 text-primary" />
        <span className="text-5xl font-semibold tracking-tight text-foreground/80">CSV</span>
      </div>
      <CardContent className="flex flex-1 flex-col items-start p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-tight">{csvSearchEngine.name}</h2>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{copy.category}</Badge>
            <Badge variant="outline">DFIR</Badge>
            <Badge variant="outline">{csvSearchEngine.platform}</Badge>
          </div>
          <p className="mb-6 mt-4 text-sm leading-7 text-muted-foreground">{copy.description}</p>
          <a className={cn(buttonVariants({ variant: "outline", className: "mt-auto h-auto min-h-11 max-w-full whitespace-normal py-3" }))} href={localizedPath(locale, csvSearchEngine.pagePath)}>
            {viewAction}<ArrowRight aria-hidden="true" />
          </a>
      </CardContent>
    </article>
  </Card>;
}
