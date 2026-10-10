import { type NextRequest, NextResponse } from "next/server";

import {
  SESSION_COOKIE_NAME,
  verifySessionToken,
} from "@/lib/auth/session";

const INVESTOR_PORTAL_HOSTS = new Set([
  "kielspace-invest.vercel.app",
  "kielspace-investor.vercel.app",
  "kielspace-portal.vercel.app",
]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get("host")?.split(":")[0].toLowerCase();

  if (pathname === "/" && hostname && INVESTOR_PORTAL_HOSTS.has(hostname)) {
    return NextResponse.redirect(new URL("/projekt/login", request.url));
  }

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (pathname === "/projekt/login") {
    return NextResponse.next();
  }

  const token = request.cookies.get(SESSION_COOKIE_NAME)?.value;
  if (!verifySessionToken(token)) {
    const loginUrl = new URL("/projekt/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/projekt/:path*"],
};
