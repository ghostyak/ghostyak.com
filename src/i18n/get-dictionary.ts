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
};

export function getDictionary(locale: PublishedLocale) {
  return dictionaries[locale]();
}
