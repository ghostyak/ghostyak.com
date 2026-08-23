import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { defaultLocale, locales } from "@/locales";

export function proxy(request: NextRequest) {
  const preferredLanguages = (request.headers.get("accept-language") ?? "")
    .toLowerCase()
    .split(",")
    .map((language) => language.trim().split(";")[0]);
  const locale = preferredLanguages
    .map((language) => language.split("-")[0])
    .find((language) => locales.some((locale) => locale === language)) ?? defaultLocale;

  return NextResponse.redirect(new URL(`/${locale}`, request.url), 302);
}

export const config = {
  matcher: "/",
};
