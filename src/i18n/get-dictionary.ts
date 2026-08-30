import "server-only";

import type ko from "@/i18n/dictionaries/ko";
import type { PublishedLocale } from "@/i18n/locales";

type WidenDictionary<T> = T extends string
  ? string
  : T extends readonly unknown[]
    ? { readonly [K in keyof T]: WidenDictionary<T[K]> }
    : T extends object
      ? { readonly [K in keyof T]: WidenDictionary<T[K]> }
      : T;

export type Dictionary = WidenDictionary<typeof ko>;

const dictionaries: Record<PublishedLocale, () => Promise<Dictionary>> = {
  ko: () => import("@/i18n/dictionaries/ko").then((module) => module.default as Dictionary),
  en: () => import("@/i18n/dictionaries/en").then((module) => module.default),
  ja: () => import("@/i18n/dictionaries/ja").then((module) => module.default),
  zh: () => import("@/i18n/dictionaries/zh").then((module) => module.default),
  es: () => import("@/i18n/dictionaries/es").then((module) => module.default),
  de: () => import("@/i18n/dictionaries/de").then((module) => module.default),
  fr: () => import("@/i18n/dictionaries/fr").then((module) => module.default),
  pt: () => import("@/i18n/dictionaries/pt").then((module) => module.default),
  it: () => import("@/i18n/dictionaries/it").then((module) => module.default),
};

export function getDictionary(locale: PublishedLocale) {
  return dictionaries[locale]();
}
