export const sourceLocale = "ko" as const;
export const localeHeaderName = "x-ghostyak-locale";
export const pathnameHeaderName = "x-ghostyak-pathname";
export const localeCookieName = "ghostyak_locale";

export const localeConfig = {
  ko: { label: "한국어", htmlLanguage: "ko-KR", openGraphLocale: "ko_KR", published: true },
  en: { label: "English", htmlLanguage: "en", openGraphLocale: "en_US", published: true },
  ja: { label: "日本語", htmlLanguage: "ja-JP", openGraphLocale: "ja_JP", published: true },
  zh: { label: "中文", htmlLanguage: "zh-CN", openGraphLocale: "zh_CN", published: true },
  es: { label: "Español", htmlLanguage: "es-ES", openGraphLocale: "es_ES", published: true },
  de: { label: "Deutsch", htmlLanguage: "de-DE", openGraphLocale: "de_DE", published: true },
  fr: { label: "Français", htmlLanguage: "fr-FR", openGraphLocale: "fr_FR", published: true },
  pt: { label: "Português (Brasil)", htmlLanguage: "pt-BR", openGraphLocale: "pt_BR", published: true },
  it: { label: "Italiano", htmlLanguage: "it-IT", openGraphLocale: "it_IT", published: true },
} as const;

export type KnownLocale = keyof typeof localeConfig;

export const publishedLocales = ["ko", "en", "ja", "zh", "es", "de", "fr", "pt", "it"] as const satisfies readonly KnownLocale[];
export type PublishedLocale = (typeof publishedLocales)[number];

export const translatedLocales = ["en", "ja", "zh", "es", "de", "fr", "pt", "it"] as const;
export type TranslatedLocale = (typeof translatedLocales)[number];

export function isPublishedLocale(value: string): value is PublishedLocale {
  return (publishedLocales as readonly string[]).includes(value);
}

export function isTranslatedLocale(value: string): value is TranslatedLocale {
  return (translatedLocales as readonly string[]).includes(value);
}
