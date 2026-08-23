import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const preferredLanguages = (request.headers.get("accept-language") ?? "")
    .toLowerCase()
    .split(",")
    .map((language) => language.trim().split(";")[0]);
  const locale = preferredLanguages
    .map((language) => language.split("-")[0])
    .find((language) => ["ko", "en", "ja", "zh"].includes(language)) ?? "en";

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
