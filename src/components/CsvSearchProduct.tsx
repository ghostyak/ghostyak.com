import { ArrowUpDown, CalendarRange, Filter, Languages, ShieldCheck, Sheet, TableProperties, Rows3 } from "lucide-react";
import { ProductLanding } from "@/components/ProductLanding";
import { csvSearchEngine } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { siteUrl } from "@/seo";

// The MFT screenshot leads; the file-open screen follows the features.
const screenshotOrder = [1, 0];

export async function CsvSearchProduct({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.csvSearch;
  return <ProductLanding
    id="csv-search-engine"
    name={csvSearchEngine.name}
    copy={copy}
    screenshots={screenshotOrder.map(index => ({ ...csvSearchEngine.screenshots[index], ...copy.screenshots[index] }))}
    featureIcons={[Filter, CalendarRange, ArrowUpDown, Rows3, Sheet, Languages]}
    highlightIcon={ShieldCheck}
    productIcon={TableProperties}
    downloadUrl={csvSearchEngine.downloadUrl}
    downloadArchitecture="x64"
    repository={{ url: csvSearchEngine.url, label: copy.repositoryAction }}
    viewScreenshot={dictionary.landing.actions.viewScreenshot}
    shareUrl={`${siteUrl}${localizedPath(locale, csvSearchEngine.pagePath)}`}
    shareLabels={dictionary.share}
  />;
}
