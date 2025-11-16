// app/api/send-beta-request/route.ts
import { NextResponse } from "next/server";
import * as nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Parse the form data
    const body = await request.json();
    const { name, email, clinicName, currentSystem } = body;

    // 2. Get credentials from Vercel Environment Variables
    const { ZOHO_EMAIL, ZOHO_APP_PASSWORD } = process.env;

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
        Clinic: ${clinicName}
        Current System: ${currentSystem}
      `,
      // HTML version of the email
      html: `
        <h2>New 3yadti Beta Signup!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Clinic:</strong> ${clinicName || "Not provided"}</p>
        <p><strong>Current System:</strong> ${currentSystem}</p>
      `,
    };

    // 5. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Email sending failed" },
      { status: 500 }
    );
  }
}
