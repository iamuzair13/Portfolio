import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { BusinessEmail, budget, projectDetails, referance } = await req.json();

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // default sender
      to: "uzair.works3@gmail.com", // 👈 your email where you want to receive submissions
      subject: "New Contact Form Submission 🚀",
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Business Email:</strong> ${BusinessEmail}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails}</p>
        <p><strong>Reference:</strong> ${referance}</p>
      `,
    });

    return NextResponse.json({ success: true, msg: "Email sent successfully ✅" });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to send email ❌", error },
      { status: 500 }
    );
  }
}
