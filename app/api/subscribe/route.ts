import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { sendSubscriptionNotification } from "../../lib/emailService";

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

    // Validate required fields
    if (
      !company_name ||
      !contact_person ||
      !email ||
      !phone ||
      !business_sector ||
      !annual_revenue
    ) {
      return NextResponse.json(
        { error: "All fields are required except message" },
        { status: 400 }
      );
    }

    // Insert the subscription request
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
        ${message || ""}
      )
    `;

    // Send email notification to admin with all details
    const adminEmail = process.env.EMAIL_FROM;
    console.log(adminEmail);

    await sendSubscriptionNotification(`${adminEmail}`, {
      company_name,
      contact_person,
      email,
      phone,
      business_sector,
      annual_revenue,
      message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing subscription:", error);
    return NextResponse.json(
      { error: "Failed to process subscription" },
      { status: 500 }
    );
  }
}
