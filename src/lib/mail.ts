import nodemailer from "nodemailer";

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
  user: process.env.GMAIL_USER,
  pass: process.env.GMAIL_APP_PASSWORD,
}
});

export async function sendOTP(email: string, otp: string) {
  console.log("========== MAIL START ==========");
  console.log("Sending TO:", email);
  console.log("Using FROM:", process.env.GMAIL_USER);

  try {
    console.log("Verifying SMTP connection...");
    await transporter.verify();
    console.log("✅ SMTP VERIFIED");

    const otpDigits = otp.split("");

    console.log("Calling sendMail()...");

    const info = await transporter.sendMail({
      from: `"Sreenidhi Interiors" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: `Your Sreenidhi Interiors Verification Code — [${otp}]`,
      text: `Your verification code is: ${otp}. This code expires in 5 minutes.`,
      html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
      </head>
      <body style="background:#09090b;color:white;font-family:Arial,sans-serif;padding:40px;">
        <h2>Sreenidhi Interiors</h2>
        <p>Your verification code is:</p>

        <h1 style="letter-spacing:8px;color:#fbbf24;">
          ${otpDigits.join(" ")}
        </h1>

        <p>This OTP expires in <b>5 minutes</b>.</p>
      </body>
      </html>
      `,
    });

    console.log("✅ EMAIL SENT");
    console.log("Message ID:", info.messageId);
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Response:", info.response);

    return info;
  } catch (err) {
    console.error("❌ MAIL ERROR");
    console.error(err);

    throw err;
  }
}