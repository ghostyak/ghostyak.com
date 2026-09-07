import { defaultLocale, isPublishedLocale, type PublishedLocale } from "@/i18n/locales";

export function localizedPath(locale: PublishedLocale, path: `/${string}` | "/") {
  if (locale === defaultLocale) return path;
  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

export function unlocalizedPath(pathname: string) {
  const segments = pathname.split("/");
  if (segments[1] && isPublishedLocale(segments[1]) && segments[1] !== defaultLocale) {
    const path = `/${segments.slice(2).join("/")}`;
    return path === "/" ? "/" : path.replace(/\/$/, "");
  }
  return pathname || "/";
}

export function formatMessage(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (message, [key, value]) => message.replaceAll(`{${key}}`, String(value)),
    template,
  );
}
