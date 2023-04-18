import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { domain } from "./domain";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(
    domain + request.nextUrl.pathname + request.nextUrl.search
  );
}

export const config = {
  matcher: [
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}