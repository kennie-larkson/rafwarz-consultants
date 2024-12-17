import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { rows } = await sql`
      SELECT * FROM rafwarz_admin_invites
      ORDER BY invited_at DESC
    `;

    return NextResponse.json(rows);
  } catch (error) {
    console.error("Failed to fetch invitees:", error);
    return NextResponse.json(
      { error: "Failed to fetch invitees" },
      { status: 500 }
    );
  }
}
