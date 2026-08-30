export const sourceLocale = "ko" as const;

export const localeConfig = {
  ko: { label: "한국어", htmlLanguage: "ko-KR", openGraphLocale: "ko_KR", published: true },
  en: { label: "English", htmlLanguage: "en", openGraphLocale: "en_US", published: false },
  ja: { label: "日本語", htmlLanguage: "ja-JP", openGraphLocale: "ja_JP", published: false },
  zh: { label: "中文", htmlLanguage: "zh-CN", openGraphLocale: "zh_CN", published: false },
  es: { label: "Español", htmlLanguage: "es-ES", openGraphLocale: "es_ES", published: false },
  de: { label: "Deutsch", htmlLanguage: "de-DE", openGraphLocale: "de_DE", published: false },
  fr: { label: "Français", htmlLanguage: "fr-FR", openGraphLocale: "fr_FR", published: false },
  pt: { label: "Português (Brasil)", htmlLanguage: "pt-BR", openGraphLocale: "pt_BR", published: false },
  it: { label: "Italiano", htmlLanguage: "it-IT", openGraphLocale: "it_IT", published: false },
} as const;

export type KnownLocale = keyof typeof localeConfig;

export const publishedLocales = [sourceLocale] as const;
export type PublishedLocale = (typeof publishedLocales)[number];

export const pendingTranslationLocales = [
  "en", "ja", "zh", "es", "de", "fr", "pt", "it",
] as const satisfies readonly KnownLocale[];

export function isPublishedLocale(value: string): value is PublishedLocale {
  return publishedLocales.some((locale) => locale === value);
}
