import { ArrowUpRight, Download, TableProperties } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ScreenshotSlideshow } from "@/components/ScreenshotSlideshow";
import { PageHero, heroActionClassName } from "@/components/PageHero";
import { csvSearchEngine } from "@/data/products";
import { getDictionary } from "@/i18n/get-dictionary";
import type { PublishedLocale } from "@/i18n/locales";
import { cn } from "@/lib/utils";

export async function CsvSearchProduct({ locale }: { locale: PublishedLocale }) {
  const dictionary = await getDictionary(locale);
  const copy = dictionary.csvSearch;
  return <main id="main-content" className="mx-auto max-w-7xl px-4 pb-16 [overflow-wrap:anywhere] sm:px-8 sm:pb-24">
    <PageHero
      eyebrow={<>
        <Badge className="min-h-7 gap-2 rounded-full bg-ink px-3 text-white"><TableProperties className="size-3" aria-hidden="true" />{copy.category}</Badge>
        <Badge variant="outline" className="min-h-7 rounded-full bg-card px-3">DFIR</Badge>
        <Badge variant="outline" className="min-h-7 rounded-full bg-card px-3">{csvSearchEngine.platform}</Badge>
      </>}
      title={csvSearchEngine.name}
      description={copy.description}
      actions={<>
        <a className={cn(buttonVariants({ size: "lg", className: heroActionClassName }))} href={csvSearchEngine.downloadUrl}>
          <Download aria-hidden="true" />{copy.downloadAction}
        </a>
        <a className={cn(buttonVariants({ variant: "outline", size: "lg", className: heroActionClassName }))} href={csvSearchEngine.url} target="_blank" rel="noreferrer">
          {copy.repositoryAction}<ArrowUpRight aria-hidden="true" />
        </a>
      </>}
    />
    <ScreenshotSlideshow
      slides={csvSearchEngine.screenshots.map((screenshot, index) => ({ src: screenshot.src, ...copy.screenshots[index] }))}
      labels={dictionary.carousel}
      viewAction={dictionary.landing.actions.viewScreenshot}
      controlsLabel={dictionary.boxes.carousel.controlsLabel}
    />
  </main>;
}
