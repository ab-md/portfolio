import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "همه فیلدها الزامی هستن" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"فرم تماس پورتفولیو" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL,
      replyTo: email,
      subject: `پیام جدید از ${name}`,
      text: `نام: ${name}\nایمیل: ${email}\n\nپیام:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height:1.6;">
          <p><strong>نام:</strong> ${name}</p>
          <p><strong>ایمیل:</strong> ${email}</p>
          <p><strong>پیام:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("خطا در ارسال ایمیل:", error);
    return NextResponse.json(
      { error: "ارسال پیام با خطا مواجه شد" },
      { status: 500 }
    );
  }
}
