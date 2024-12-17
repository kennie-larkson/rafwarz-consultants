import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const token = request.cookies.get("rafwarz-admin-auth-token"); // Assuming you store the token in a cookie

  if (isAdminRoute && !token) {
    // Redirect to login if trying to access admin without a token
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// Apply middleware to admin routes
export const config = {
  matcher: ["/admin/:path*"],
};
