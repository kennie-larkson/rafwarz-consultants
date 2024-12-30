import { NextResponse, NextRequest } from "next/server";
import { jwtVerify } from "jose"; // Import jwtVerify from jose
import { getJwtSecretKey } from "../../../lib/config"; // Import your secret key from a config file

export async function authMiddleware(request: NextRequest) {
  console.log("Auth Middleware executed"); // Log to verify execution

  const token = request.cookies.get("rafwarz-admin-auth-token")?.value; // Access the value directly

  if (!token) {
    console.log("No token found, redirecting to login.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token using jose
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(getJwtSecretKey())
    ); // Use your secret key to verify the token
  } catch (error) {
    console.error("Token verification error:", error); // Log the error
    console.log("Invalid token, redirecting to login.");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); // Proceed to the requested page
}
