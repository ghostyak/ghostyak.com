import { ArrowUpDown, CalendarRange, Filter, Languages, ShieldCheck, Sheet, TableProperties, Rows3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductLanding } from "@/components/ProductLanding";
import { csvSearchEngine } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";

// The MFT screenshot leads; the file-open screen follows the features.
const screenshotOrder = [1, 0];

export async function CsvSearchProduct({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.csvSearch;
  return <ProductLanding
    id="csv-search-engine"
    name={csvSearchEngine.name}
    badges={<>
      <Badge className="min-h-7 gap-2 rounded-full bg-ink px-3 text-white"><TableProperties className="size-3 text-brand" aria-hidden="true" />{copy.category}</Badge>
      <Badge variant="outline" className="min-h-7 rounded-full bg-card px-3">DFIR</Badge>
      <Badge variant="outline" className="min-h-7 rounded-full bg-card px-3">{csvSearchEngine.platform}</Badge>
      <Badge variant="outline" className="min-h-7 rounded-full border-transparent bg-brand px-3 text-ink">{copy.licenseBadge}</Badge>
    </>}
    copy={copy}
    screenshots={screenshotOrder.map(index => ({ ...csvSearchEngine.screenshots[index], ...copy.screenshots[index] }))}
    featureIcons={[Filter, CalendarRange, ArrowUpDown, Rows3, Sheet, Languages]}
    highlightIcon={ShieldCheck}
    productIcon={TableProperties}
    downloadUrl={csvSearchEngine.downloadUrl}
    repository={{ url: csvSearchEngine.url, label: copy.repositoryAction }}
    viewScreenshot={dictionary.landing.actions.viewScreenshot}
  />;
}
