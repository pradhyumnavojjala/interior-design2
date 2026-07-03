import nodemailer from "nodemailer";

console.log("GMAIL_USER:", process.env.GMAIL_USER);
console.log("GMAIL_APP_PASSWORD exists:", !!process.env.GMAIL_APP_PASSWORD);

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendOTP(email: string, otp: string) {
  console.log("========== MAIL START ==========");
  console.log("Sending TO:", email);
  console.log("Using FROM:", process.env.GMAIL_USER);

  try {
    await transporter.verify();
    console.log("✅ SMTP VERIFIED");

    const info = await transporter.sendMail({
      from: `"Sreenidhi Interiors" <${process.env.GMAIL_USER}>`,
      to: email,

      subject: "Your Verification Code",

      text: `
Sreenidhi Interiors

Your verification code is:

${otp}

This code will expire in 5 minutes.

If you did not request this verification code, you can safely ignore this email.
`,

      html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>

<body style="
margin:0;
padding:40px 20px;
background:#f4f4f4;
font-family:Arial,Helvetica,sans-serif;
">

<table align="center"
style="
max-width:500px;
width:100%;
background:#ffffff;
border-radius:14px;
overflow:hidden;
border:1px solid #e5e5e5;
">

<tr>
<td
style="
background:#111827;
padding:28px;
text-align:center;
color:#ffffff;
font-size:26px;
font-weight:bold;
">
Sreenidhi Interiors
</td>
</tr>

<tr>
<td style="padding:35px;">

<p
style="
margin-top:0;
font-size:16px;
color:#333;
">
Hello,
</p>

<p
style="
font-size:15px;
line-height:1.7;
color:#555;
">
Use the verification code below to continue.
</p>

<div
style="
margin:30px 0;
padding:18px;
background:#fff7e6;
border:1px solid #facc15;
border-radius:10px;
text-align:center;
font-size:34px;
font-weight:bold;
letter-spacing:10px;
color:#111;
">
${otp}
</div>

<p
style="
font-size:14px;
color:#666;
line-height:1.7;
">
This code is valid for
<strong>5 minutes</strong>.
</p>

<p
style="
font-size:13px;
color:#888;
margin-top:30px;
">
If you didn't request this code, simply ignore this email.
</p>

</td>
</tr>

<tr>
<td
style="
padding:20px;
background:#fafafa;
text-align:center;
font-size:12px;
color:#888;
">
© ${new Date().getFullYear()} Sreenidhi Interiors
</td>
</tr>

</table>

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