import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { sendInviteEmail } from "../../../lib/emailService";

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const token = uuidv4();

  try {
    await sql`
      INSERT INTO rafwarz_admin_invites (email, token)
      VALUES (${email}, ${token})
    `;

    await sendInviteEmail(email, token);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending invite:", error);
    return NextResponse.json(
      { error: "Failed to send invite" },
      { status: 500 }
    );
  }
}
