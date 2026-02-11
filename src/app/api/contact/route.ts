import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import twilio from "twilio";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, projectType, message } = await request.json();

    if (!name || !email || !projectType || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const projectLabels: Record<string, string> = {
      refurbishment: "Full House Refurbishment",
      kitchen: "Kitchen Installation",
      bathroom: "Bathroom Renovation",
      extension: "Extension",
      "interior-design": "Interior Design",
      other: "Other",
    };

    const projectLabel = projectLabels[projectType] || projectType;

    // Send email via Resend
    await resend.emails.send({
      from: `AMEX Website <${process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"}>`,
      to: "Eamonn@amexltd.co.uk",
      subject: `New Inquiry: ${projectLabel} - from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #001a4d; border-bottom: 2px solid #cc0000; padding-bottom: 10px;">
            New Website Inquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #333;">Project Type:</td>
              <td style="padding: 8px 0;">${projectLabel}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <h3 style="margin: 0 0 8px; color: #333;">Project Details:</h3>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    // Send SMS via Twilio
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN && process.env.TWILIO_PHONE_NUMBER) {
      const twilioClient = twilio(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_AUTH_TOKEN
      );

      await twilioClient.messages.create({
        body: `New AMEX inquiry from ${name} (${email}). Project: ${projectLabel}. Check your email for full details.`,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: "+447449397233",
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
