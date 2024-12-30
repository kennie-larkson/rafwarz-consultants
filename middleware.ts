import { NextResponse, NextRequest } from "next/server";
import { authMiddleware } from "./app/api/admin/middlewares/authMiddleware"; // Adjust the import path as necessary

export function middleware(request: NextRequest) {
  console.log("Middleware executed"); // Log to verify execution
  return authMiddleware(request); // Call the authMiddleware
}

// Apply the middleware to the /admin route
export const config = {
  matcher: ["/admin/:path*"], // Protect all routes under /admin
};
