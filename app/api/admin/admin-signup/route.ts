import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt"; // Install bcrypt package

export async function POST(request: Request) {
  const { email, password, token } = await request.json();

  if (!email || !password || !token) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  try {
    // Check if the token is valid
    const { rows } = await sql`
      SELECT * FROM rafwarz_admin_invites WHERE email = ${email} AND token = ${token} AND status = 'pending'
    `;

    if (rows.length === 0) {
      return NextResponse.json(
        { error: "Invalid or expired token" },
        { status: 400 }
      );
    }

    // Hash the password and save the user to the database
    const hashedPassword = await bcrypt.hash(password, 10);
    await sql`
      INSERT INTO rafwarz_admin_users (email, password)
      VALUES (${email}, ${hashedPassword})
    `;

    // Update the invited user status
    await sql`
      UPDATE rafwarz_admin_invites SET status = 'accepted' WHERE email = ${email}
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ error: "Failed to sign up" }, { status: 500 });
  }
}
