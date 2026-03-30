// app/api/contact/route.ts

import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { sendContactNotification } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, company, serviceInterest, message } =
      await req.json();

    // Validate required fields
    if (!name || !email || !message || !serviceInterest) {
      return NextResponse.json(
        { error: "Name, email, service interest, and message are required" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address" },
        { status: 400 },
      );
    }

    // Store in database
    const result = await query(
      `INSERT INTO contact_submissions (name, email, phone, company, service_interest, message, status)
       VALUES ($1, $2, $3, $4, $5, $6, 'new')
       RETURNING id`,
      [name, email, phone || null, company || null, serviceInterest, message],
    );

    const submissionId = result[0]?.id;

    // Send email notifications (don't wait for response, but don't block the API)
    sendContactNotification({
      name,
      email,
      phone,
      company,
      serviceInterest,
      message,
    }).catch((error) => {
      console.error("Error sending email notifications:", error);
    });

    return NextResponse.json({
      success: true,
      id: submissionId,
      message:
        "Thank you for contacting us. We will get back to you within 24 hours.",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 },
    );
  }
}
