import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Parse the form data
    const body = await request.json();

    // Only extract name and phone (optional others for backward compatibility)
    const {
      name,
      phone,
      // Optional legacy fields
      email,
    } = body;

    // 2. Get credentials from Vercel Environment Variables
    const { ZOHO_EMAIL, ZOHO_APP_PASSWORD } = process.env;

    // Basic validation - Updated to require Name and Phone
    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (Name, Phone).",
        },
        { status: 400 }
      );
    }

    if (!ZOHO_EMAIL || !ZOHO_APP_PASSWORD) {
      return NextResponse.json(
        { success: false, error: "Server error: Email credentials not set." },
        { status: 500 }
      );
    }

    // 3. Create a "transporter"
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_APP_PASSWORD,
      },
    });

    // 4. Define the email options
    // Note: replyTo is set to Zoho Email itself since we might not have a user email
    const mailOptions = {
      from: `3yadti Beta <${ZOHO_EMAIL}>`,
      to: ZOHO_EMAIL,
      replyTo: email || ZOHO_EMAIL,
      subject: "New 3yadti Beta Signup (Name + Phone)",
      // Plain text version
      text: `
        New Beta Partner Request:
        
        Name: ${name}
        Phone: ${phone}
      `,
      // HTML version
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New 3yadti Beta Signup!</h2>
            <hr style="border-top: 1px solid #eee; margin: 15px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
        </div>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    // 6. Return a success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Beta signup email sending error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Internal server error. Please check environment variables or console logs.",
      },
      { status: 500 }
    );
  }
}
