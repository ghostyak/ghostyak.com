import { NextResponse, type NextRequest } from "next/server";
import { isPublishedLocale, localeCookieName } from "@/i18n/locales";
import { localizedPath, unlocalizedPath } from "@/i18n/routing";

const oneYearInSeconds = 60 * 60 * 24 * 365;

export async function GET(request: NextRequest, { params }: { params: Promise<{ locale: string }> }) {
  const locale = (await params).locale;
  if (!isPublishedLocale(locale)) return NextResponse.json({ error: "Unsupported locale" }, { status: 404 });

  const requestedPath = request.nextUrl.searchParams.get("returnTo") ?? "/";
  const safePath = requestedPath.startsWith("/") && !requestedPath.startsWith("//") ? unlocalizedPath(requestedPath) : "/";
  const destination = new URL(localizedPath(locale, safePath as `/${string}` | "/"), request.url);
  const response = NextResponse.redirect(destination, 303);
  response.cookies.set(localeCookieName, locale, {
    maxAge: oneYearInSeconds,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
  return response;
}
