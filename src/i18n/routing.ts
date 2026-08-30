import { sourceLocale, type KnownLocale } from "@/i18n/locales";

export function localizedPath(locale: KnownLocale, path: `/${string}` | "/") {
  if (locale === sourceLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function formatMessage(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
