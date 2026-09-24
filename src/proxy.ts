import { NextResponse, type NextRequest } from "next/server";
import {
  isPublishedLocale,
  defaultLocale,
  localeHeaderName,
  pathnameHeaderName,
} from "./i18n/locales";
import { localizedPath, unlocalizedPath } from "./i18n/routing";

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

  // Historical unprefixed content was English. Never negotiate its language.
  if (!pathLocale && (cleanPath === "/" || /^\/(product|blog|support)(\/|$)/.test(cleanPath))) {
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
    return NextResponse.redirect(destination, 308);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(localeHeaderName, locale);
  requestHeaders.set(pathnameHeaderName, pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ["/((?!api|language|_next).*)"],
};
