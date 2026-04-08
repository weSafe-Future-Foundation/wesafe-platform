import { NextRequest, NextResponse } from "next/server";
import { Pool } from "pg";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = "info@wesafefuture.org";
const FROM_EMAIL = "weSafe Contact Form <noreply@wesafefuture.org>";

// Direct PostgreSQL connection — no Prisma engine binary needed
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 1,
});

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  subject: string;
  message: string;
}

// Map form inquiry types to database ContactType enum values
function mapInquiryType(inquiryType: string): string {
  const mapping: Record<string, string> = {
    "General Question": "GENERAL",
    "Event Registration": "GENERAL",
    "Sponsorship": "SPONSORSHIP",
    "Volunteering": "VOLUNTEER",
    "Career Opportunity": "GENERAL",
    "Technical Support": "GENERAL",
    "Other": "GENERAL",
  };
  return mapping[inquiryType] || "GENERAL";
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Save to database using direct PostgreSQL (no Prisma engine needed)
    try {
      await pool.query(
        `INSERT INTO contact_forms (id, name, email, phone, type, subject, message, is_read, created_at)
         VALUES (gen_random_uuid()::text, $1, $2, $3, $4::"ContactType", $5, $6, false, NOW())`,
        [
          body.name,
          body.email,
          body.phone || null,
          mapInquiryType(body.inquiryType),
          body.subject,
          body.message,
        ]
      );
      console.log("Contact form saved to database successfully");
    } catch (dbError) {
      // Log but don't fail — email should still send
      console.error("Failed to save contact form to database:", dbError);
    }

    // Send notification email to weSafe team
    if (RESEND_API_KEY) {
      const notificationRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [CONTACT_TO_EMAIL],
          subject: `[Contact Form] ${body.inquiryType}: ${body.subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1558A8, #22C55E); padding: 24px; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
              </div>
              <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Name:</td>
                    <td style="padding: 8px 0; color: #4b5563;">${body.name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                    <td style="padding: 8px 0;"><a href="mailto:${body.email}" style="color: #1558A8;">${body.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                    <td style="padding: 8px 0; color: #4b5563;">${body.phone || "Not provided"}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Inquiry Type:</td>
                    <td style="padding: 8px 0; color: #4b5563;">${body.inquiryType}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: bold; color: #374151;">Subject:</td>
                    <td style="padding: 8px 0; color: #4b5563;">${body.subject}</td>
                  </tr>
                </table>
                <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
                <h3 style="color: #374151; margin: 0 0 8px;">Message:</h3>
                <div style="background: white; padding: 16px; border-radius: 8px; border: 1px solid #e5e7eb; color: #4b5563; white-space: pre-wrap;">${body.message}</div>
              </div>
            </div>
          `,
        }),
      });

      if (!notificationRes.ok) {
        const errorData = await notificationRes.json();
        console.error("Resend API error:", errorData);
        return NextResponse.json(
          { error: "Failed to send message. Please try again." },
          { status: 500 }
        );
      }

      // Send confirmation email to the person who submitted
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: FROM_EMAIL,
          to: [body.email],
          subject: "We received your message — weSafe Future Foundation",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1558A8, #22C55E); padding: 24px; border-radius: 12px 12px 0 0;">
                <h1 style="color: white; margin: 0; font-size: 20px;">Thank You, ${body.name}!</h1>
              </div>
              <div style="padding: 24px; background: #f9fafb; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 12px 12px;">
                <p style="color: #4b5563; line-height: 1.6;">
                  We have received your message regarding <strong>"${body.subject}"</strong> and our team will get back to you within 24 hours.
                </p>
                <p style="color: #4b5563; line-height: 1.6;">
                  If your matter is urgent, please reach out to us directly at <a href="mailto:info@wesafefuture.org" style="color: #1558A8;">info@wesafefuture.org</a>.
                </p>
                <hr style="margin: 16px 0; border: none; border-top: 1px solid #e5e7eb;" />
                <p style="color: #9ca3af; font-size: 13px;">
                  Care Today, Sustain Tomorrow<br/>
                  weSafe Future Foundation<br/>
                  <a href="https://wesafefuture.org" style="color: #1558A8;">wesafefuture.org</a>
                </p>
              </div>
            </div>
          `,
        }),
      });
    } else {
      console.error("RESEND_API_KEY is not configured");
    }

    return NextResponse.json(
      { message: "Message sent successfully! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}
