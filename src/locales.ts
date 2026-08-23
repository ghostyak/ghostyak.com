export const locales = ["ko", "en", "ja", "zh", "es", "de", "fr", "pt", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
  zh: "中文",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  pt: "Português (Brasil)",
  it: "Italiano",
};

export const htmlLanguages: Record<Locale, string> = {
  ko: "ko-KR",
  en: "en",
  ja: "ja-JP",
  zh: "zh-CN",
  es: "es-ES",
  de: "de-DE",
  fr: "fr-FR",
  pt: "pt-BR",
  it: "it-IT",
};

export const openGraphLocales: Record<Locale, string> = {
  ko: "ko_KR",
  en: "en_US",
  ja: "ja_JP",
  zh: "zh_CN",
  es: "es_ES",
  de: "de_DE",
  fr: "fr_FR",
  pt: "pt_BR",
  it: "it_IT",
};

export const languageAlternates: Record<string, string> = {
  "ko-KR": "/ko",
  en: "/en",
  "ja-JP": "/ja",
  "zh-CN": "/zh",
  "es-ES": "/es",
  "de-DE": "/de",
  "fr-FR": "/fr",
  "pt-BR": "/pt",
  "it-IT": "/it",
  "x-default": `/${defaultLocale}`,
};

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}
