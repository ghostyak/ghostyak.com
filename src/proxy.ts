import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const preferredLanguage = request.headers.get("accept-language") ?? "";
  const locale = preferredLanguage.toLowerCase().includes("ko") ? "ko" : "en";

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

export const config = {
  matcher: "/",
};
