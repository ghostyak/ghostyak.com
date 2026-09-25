import { ArrowUpDown, Copy, EyeOff, FolderClock, HardDrive, History, Pin, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProductLanding } from "@/components/ProductLanding";
import { folderHistory } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { localizedPath } from "@/i18n/routing";
import { siteUrl } from "@/seo";

export async function FolderHistoryProduct({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.folderHistory;
  return <ProductLanding
    id="folder-history"
    name={folderHistory.name}
    badges={<>
      <Badge className="min-h-7 gap-2 rounded-full bg-ink px-3 text-white"><FolderClock className="size-3 text-brand" aria-hidden="true" />{dictionary.home.products.freeBadge}</Badge>
      <Badge variant="outline" className="min-h-7 rounded-full bg-card px-3">{folderHistory.platform}</Badge>
    </>}
    copy={copy}
    screenshots={folderHistory.screenshots.map((screenshot, index) => ({ ...screenshot, ...copy.screenshots[index] }))}
    featureIcons={[ArrowUpDown, Pin, EyeOff, Trash2, History, Copy]}
    highlightIcon={HardDrive}
    productIcon={FolderClock}
    downloadUrl={folderHistory.downloadUrl}
    downloadArchitecture="x64"
    alternateDownload={{ url: folderHistory.arm64DownloadUrl, label: copy.arm64DownloadAction, architecture: "ARM64" }}
    repository={{ url: folderHistory.url, label: dictionary.csvSearch.repositoryAction }}
    viewScreenshot={dictionary.landing.actions.viewScreenshot}
    supportUrl={localizedPath(locale, "/support")}
    supportAction={dictionary.header.support}
    shareUrl={`${siteUrl}${localizedPath(locale, folderHistory.pagePath)}`}
    shareLabels={dictionary.share}
  />;
}
