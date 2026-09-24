"use client";

import { Check, Globe2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { localeConfig, publishedLocales, type PublishedLocale } from "@/i18n/locales";
import { unlocalizedPath } from "@/i18n/routing";

export function LanguageSwitcher({ currentLocale, currentPath, label }: { currentLocale: PublishedLocale; currentPath: string; label: string }) {
  const contentPath = unlocalizedPath(currentPath);
  return <DropdownMenu modal={false}>
    <DropdownMenuTrigger asChild>
      <Button variant="ghost" className="min-h-11 gap-2 rounded-full px-3" aria-label={label + ": " + localeConfig[currentLocale].label}>
        <Globe2 className="size-4" aria-hidden="true" /><span className="hidden md:inline">{localeConfig[currentLocale].label}</span>
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-52 rounded-2xl p-2 shadow-xl shadow-ink/10">
      {publishedLocales.map(locale => <DropdownMenuItem asChild key={locale} className="min-h-11 rounded-lg px-3">
        <a href={`/language/${locale}?returnTo=${encodeURIComponent(contentPath)}`} hrefLang={localeConfig[locale].htmlLanguage} lang={localeConfig[locale].htmlLanguage} aria-current={locale === currentLocale ? "page" : undefined}>
          <span className="flex-1">{localeConfig[locale].label}</span>{locale === currentLocale && <Check className="size-4 text-brand-foreground" aria-hidden="true" />}
        </a>
      </DropdownMenuItem>)}
    </DropdownMenuContent>
  </DropdownMenu>;
}
