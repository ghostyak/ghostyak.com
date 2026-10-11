import { NextResponse, type NextRequest } from "next/server";
import {
  isPublishedLocale,
  defaultLocale,
  localeHeaderName,
  pathnameHeaderName,
} from "./i18n/locales";
import { localizedPath, unlocalizedPath } from "./i18n/routing";

// Picks the visitor's best published language from Accept-Language. Crawlers
// that send no header, and languages we don't publish, get the default locale.
function preferredLocale(header: string | null) {
  const ranked = (header ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...parameters] = part.trim().split(";");
      const quality = parameters.map((parameter) => parameter.trim()).find((parameter) => parameter.startsWith("q="));
      return { language: tag.split("-")[0].toLowerCase(), quality: quality ? Number(quality.slice(2)) : 1 };
    })
    .filter(({ quality }) => quality > 0)
    .sort((a, b) => b.quality - a.quality);
  return ranked.map(({ language }) => language).find(isPublishedLocale) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const original = new URL(request.url);
  // A self-hosted Next server may expose its internal hostname in request.url.
  const host = request.headers.get("host");
  if (host === "ghostyak.com" || host === "www.ghostyak.com") {
    original.hostname = host;
    original.port = "";
  }
  const { pathname } = original;
  const cleanPath = pathname.replace(/\/+$/, "") || "/";
  const segment = cleanPath.split("/")[1];
  const pathLocale = isPublishedLocale(segment) ? segment : null;
  const locale = pathLocale ?? defaultLocale;
  const contentPath = unlocalizedPath(cleanPath);
  // Native URL avoids NextURL preserving the incoming trailingSlash flag.
  const destination = new URL(original);
  destination.pathname = cleanPath;

  // The bare entry point has no content of its own, so it sends each visitor
  // to their language. Prefixed URLs are never negotiated.
  const isEntryPoint = cleanPath === "/";
  if (isEntryPoint) {
    destination.pathname = localizedPath(preferredLocale(request.headers.get("accept-language")), "/");
  }

  // Historical unprefixed content was English. Never negotiate its language.
  if (!pathLocale && /^\/(product|blog|support)(\/|$)/.test(cleanPath)) {
    destination.pathname = localizedPath(defaultLocale, cleanPath as `/${string}`);
  }

  // Resolve old aliases directly, including the former standalone download page.
  if (/^\/products\/boxes(\/|$)/.test(contentPath)) {
    destination.pathname = localizedPath(locale, "/product/boxes");
    if (contentPath === "/products/boxes/download") destination.hash = "download";
  }
  if (contentPath === "/product/boxes/download") {
    destination.pathname = localizedPath(locale, "/product/boxes");
    destination.hash = "download";
  }

  // Limit normalization to this site's public hosts; keep previews/local dev usable.
  if (["ghostyak.com", "www.ghostyak.com"].includes(original.hostname)) {
    destination.protocol = "https:";
    destination.hostname = "www.ghostyak.com";
    destination.port = "";
  }

  if (destination.href !== original.href) {
    if (!isEntryPoint) return NextResponse.redirect(destination, 308);
    // Temporary and uncached: the destination depends on the visitor's language.
    const response = NextResponse.redirect(destination, 307);
    response.headers.set("Vary", "Accept-Language");
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, locale);
  requestHeaders.set(pathnameHeaderName, pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|language|_next).*)"],
};
