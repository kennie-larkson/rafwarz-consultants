import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      company_name,
      contact_person,
      email,
      phone,
      business_sector,
      annual_revenue,
      message,
    } = await request.json();

    await sql`
      INSERT INTO rafwarz_subscription_requests (
        company_name,
        contact_person,
        email,
        phone,
        business_sector,
        annual_revenue,
        message
      ) VALUES (
        ${company_name},
        ${contact_person},
        ${email},
        ${phone},
        ${business_sector},
        ${annual_revenue},
        ${message}
      )
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscription error:", error);
    return NextResponse.json(
      { error: "Failed to submit subscription request" },
      { status: 500 }
    );
  }
}
