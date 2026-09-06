import { NextResponse, type NextRequest } from "next/server";
import { isRenewalPreview } from "./lib/renewal-preview";
import {
  isPublishedLocale,
  localeCookieName,
  localeHeaderName,
  pathnameHeaderName,
  sourceLocale,
  type PublishedLocale,
} from "./i18n/locales";

function localeFromPath(pathname: string): PublishedLocale | null {
  const segment = pathname.split("/")[1];
  return segment && isPublishedLocale(segment) ? segment : null;
}

function localeFromAcceptLanguage(value: string | null): PublishedLocale {
  if (!value) return sourceLocale;

  const requested = value
    .split(",")
    .map((part) => {
      const [languageTag, ...parameters] = part.trim().split(";");
      const quality = parameters.find((parameter) => parameter.trim().startsWith("q="));
      return { languageTag: languageTag.toLowerCase(), quality: quality ? Number(quality.split("=")[1]) : 1 };
    })
    .filter(({ languageTag, quality }) => languageTag !== "*" && Number.isFinite(quality) && quality > 0)
    .sort((a, b) => b.quality - a.quality);

  for (const { languageTag } of requested) {
    const language = languageTag.split("-")[0];
    if (isPublishedLocale(language)) return language;
  }

  return sourceLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (isRenewalPreview(pathname)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(localeHeaderName, sourceLocale);
    requestHeaders.set(pathnameHeaderName, pathname);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }
  const pathLocale = localeFromPath(pathname);

  if (pathLocale === sourceLocale) {
    const destination = request.nextUrl.clone();
    destination.pathname = pathname === `/${sourceLocale}` ? "/" : pathname.slice(sourceLocale.length + 1);
    return NextResponse.redirect(destination, 308);
  }

  if (pathLocale) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set(localeHeaderName, pathLocale);
    requestHeaders.set(pathnameHeaderName, pathname);
    return NextResponse.next({ request: { headers: requestHeaders } });
  }

  const cookieLocale = request.cookies.get(localeCookieName)?.value;
  const preferredLocale = cookieLocale && isPublishedLocale(cookieLocale)
    ? cookieLocale
    : localeFromAcceptLanguage(request.headers.get("accept-language"));

  if (preferredLocale !== sourceLocale) {
    const destination = request.nextUrl.clone();
    destination.pathname = pathname === "/" ? `/${preferredLocale}` : `/${preferredLocale}${pathname}`;
    return NextResponse.redirect(destination);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, sourceLocale);
  requestHeaders.set(pathnameHeaderName, pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|language|_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml|.*\\..*).*)"],
};
