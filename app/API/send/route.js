import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { to, subject, message } = await req.json();

    // setup transporter using Mailtrap
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io", // from Mailtrap dashboard
      port: 587,
      auth: {
        user: process.env.MAILTRAP_USER, // set in .env.local
        pass: process.env.MAILTRAP_PASS, // set in .env.local
      },
    });

    await transporter.sendMail({
      from: '"Website Contact" <test@example.com>', // from email
      to, // receiver (you can use your Gmail here too, but will only see in Mailtrap inbox)
      subject,
      html: `<p>${message}</p>`,
    });

    return NextResponse.json({ success: true, msg: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Mailtrap error:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to send email ❌" },
      { status: 500 }
    );
  }
}
