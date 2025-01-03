import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid"; // Install uuid package
import { sendInviteEmail } from "../../../lib/emailService"; // Import the email sending function

export async function POST(request: Request) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const token = uuidv4(); // Generate a unique token

  try {
    await sql`
      INSERT INTO rafwarz_admin_invites (email, token)
      VALUES (${email}, ${token})
    `;

    // Send the invitation email
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
