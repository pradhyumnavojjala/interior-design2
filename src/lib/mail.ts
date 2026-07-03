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
  const otpDigits = otp.split("");

const info = await transporter.sendMail({
    from: `"Sreenidhi Interiors" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `Your Sreenidhi Interiors Verification Code — [${otp}]`,
    text: `Your verification code is: ${otp}. This code expires in 5 minutes.`,
    html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="color-scheme" content="dark light" />
        <meta name="supported-color-schemes" content="dark light" />
        <title>Sreenidhi Interiors Verification</title>
        <style type="text/css">
          body, table, td, a { text-size-adjust: 100%; -webkit-text-size-adjust: 100%; }
          table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse !important; }
          body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; background-color: #09090b; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
          
          @media (prefers-color-scheme: dark) {
            .email-bg { background-color: #09090b !important; }
            .card-bg { background-color: #141416 !important; border-color: #27272a !important; }
            .main-text { color: #f4f4f5 !important; }
            .sub-text { color: #a1a1aa !important; }
          }

          /* FLUID MOBILE RESPONSIVE SCALING */
          @media screen and (max-width: 480px) {
            .card-padding { padding: 30px 20px !important; }
            .otp-digit { 
              font-size: 22px !important; 
              height: 50px !important; 
              line-height: 50px !important; 
            }
          }
        </style>
      </head>
      <body class="email-bg" style="margin: 0; padding: 0; background-color: #09090b;">
        
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-bg" style="background-color: #09090b;">
          <tr>
            <td align="center" style="padding: 20px 12px;">
              
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="card-bg" style="max-width: 460px; background-color: #141416; border: 1px solid #27272a; border-radius: 24px; overflow: hidden;">
                
                <tr>
                  <td align="center" class="card-padding" style="padding: 35px 40px 25px 40px; border-bottom: 1px solid #27272a;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-family: 'Playfair Display', Georgia, serif; font-size: 24px; font-weight: 300; letter-spacing: 4px; color: #ffffff;">
                          Sreenidhi<span style="color: #fbbf24; font-style: italic;">Interiors</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="card-padding" style="padding: 40px 40px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      
                      <tr>
                        <td class="main-text" style="font-size: 18px; font-weight: 400; color: #ffffff; padding-bottom: 10px; font-family: 'Playfair Display', Georgia, serif;">
                          Verify Your Access
                        </td>
                      </tr>

                      <tr>
                        <td class="sub-text" style="font-size: 13px; font-weight: 300; line-height: 1.5; color: #a1a1aa; padding-bottom: 30px;">
                          Initialization sequence requested. Use the secure single-session verification code below to validate your login.
                        </td>
                      </tr>

                      <tr>
                        <td align="center" style="padding-bottom: 30px;">
                          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 340px; margin: 0 auto;">
                            <tr>
                              ${otpDigits
                                .map(
                                  (digit) => `
                                  <td align="center" valign="middle" class="otp-digit" style="width: 14%; height: 56px; line-height: 56px; background-color: #fbbf24; border-radius: 10px; font-size: 24px; font-weight: 700; color: #000000; font-family: 'Courier New', Courier, monospace; font-weight: bold; padding: 0;">
                                    ${digit}
                                  </td>
                                  <td width="3%"></td> `
                                )
                                .join("")}
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <tr>
                        <td align="center" class="sub-text" style="font-size: 11px; font-weight: 400; tracking-wide; text-transform: uppercase; letter-spacing: 1.5px; color: #71717a; padding-bottom: 25px; border-bottom: 1px solid #27272a;">
                          ⏱️ Security window expires in 5 minutes
                        </td>
                      </tr>

                      <tr>
                        <td class="sub-text" style="font-size: 11px; font-weight: 300; line-height: 1.5; color: #52525b; padding-top: 25px; text-align: center;">
                          Security monitoring alert. If this framework validation request was not initialized by your workspace engine, you can safely disregard this token tracking envelope.
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

              </table>
              
            </td>
          </tr>
        </table>

      </body>
      </html>
    `,
  });
  console.log("EMAIL SENT");
  console.log("Accepted:", info.accepted);
  console.log("Rejected:", info.rejected);
  console.log("Response:", info.response);
  
}