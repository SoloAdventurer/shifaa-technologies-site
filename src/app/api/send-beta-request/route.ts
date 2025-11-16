import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Parse the form data
    const body = await request.json();
    // Destructure new optional fields: phone and country
    const { name, email, phone, country, clinicName, currentSystem } = body;

    // 2. Get credentials from Vercel Environment Variables
    const { ZOHO_EMAIL, ZOHO_APP_PASSWORD } = process.env;

    // Basic validation
    if (!name || !email || !currentSystem) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields (Name, Email, Current System).",
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

    // 3. Create a "transporter" (the object that sends the email)
    // We configure this to use Zoho's SMTP server
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com", // Zoho Mail SMTP server
      port: 465, // Port for SSL
      secure: true, // Use SSL
      auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_APP_PASSWORD,
      },
    });

    // 4. Define the email options
    const mailOptions = {
      from: `3yadti Beta <${ZOHO_EMAIL}>`, // Sender (your company)
      to: ZOHO_EMAIL, // Receiver (you)
      replyTo: email, // Set the 'reply-to' to the user's email
      subject: "New 3yadti Beta Signup!",
      // Plain text version of the email
      text: `
        New Beta Partner Request:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Country/Nationality: ${country || "Not provided"}
        Clinic: ${clinicName || "Not provided"}
        Current System: ${currentSystem}
      `,
      // HTML version of the email
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
            <h2>New 3yadti Beta Signup!</h2>
            <hr style="border-top: 1px solid #eee; margin: 15px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
            <p><strong>Country/Nationality:</strong> ${
              country || "Not provided"
            }</p>
            <p><strong>Clinic:</strong> ${clinicName || "Not provided"}</p>
            <p><strong>Current System:</strong> ${currentSystem}</p>
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
