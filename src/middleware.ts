import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AppRoutes, ApiConfig } from "./lib/constants";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get(ApiConfig.AUTH_COOKIE_NAME)?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = !pathname.startsWith(AppRoutes.LOGIN);

  if (!authToken && isProtectedRoute) {
    const loginUrl = new URL(AppRoutes.LOGIN, request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (authToken && pathname.startsWith(AppRoutes.LOGIN)) {
    const redirectUrl = new URL(AppRoutes.COMPANIES, request.url);
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
