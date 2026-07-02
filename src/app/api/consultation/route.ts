import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import nodemailer from "nodemailer";
import path from "path";
import fs from "fs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

const data = JSON.parse(
  formData.get("consultation") as string
);

console.log(data);

const uploadedAttachments: {
  filename: string;
  content: Buffer;
}[] = [];

for (const [key, value] of formData.entries()) {
  if (key === "consultation") continue;

  if (value instanceof File) {
    const bytes = await value.arrayBuffer();

    uploadedAttachments.push({
      filename: value.name,
      content: Buffer.from(bytes),
    });
  }
}

    const {
  customer,
  project,
  property,
  schedule,
} = data;

    const docRef = await addDoc(
      collection(db, "consultations"),
      {
        ...data,
        status: "Pending",
        createdAt: serverTimestamp(),
      }
    );

    const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
pass: process.env.GMAIL_APP_PASSWORD,
  },
});

await transporter.sendMail({
  from: process.env.GMAIL_USER,
to: process.env.GMAIL_USER,

  subject: `🏡 New Consultation from ${customer.firstName} ${customer.lastName}`,

html: `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
body{
    margin:0;
    padding:40px;
    background:#ececec;
    font-family:Arial,Helvetica,sans-serif;
}

.wrapper{
    max-width:760px;
    margin:auto;
    background:#111111;
    border-radius:18px;
    overflow:hidden;
    color:white;
    border:1px solid #2b2b2b;
}

.header{
    background:linear-gradient(135deg,#111,#1d1d1d);
    padding:50px;
    text-align:center;
}

.logo{
    font-size:42px;
    font-weight:bold;
    color:white;
}

.logo span{
    color:#d9a441;
    font-style:italic;
}

.tagline{
    color:#bfbfbf;
    margin-top:10px;
    letter-spacing:3px;
    font-size:13px;
}

.title{
    background:#d9a441;
    color:#111;
    text-align:center;
    padding:18px;
    font-size:22px;
    font-weight:bold;
}

.section{
    padding:35px;
    border-bottom:1px solid #2b2b2b;
}

.section h2{
    margin-top:0;
    color:#d9a441;
    font-size:22px;
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    padding:12px 0;
    border-bottom:1px solid #2c2c2c;
}

.label{
    width:180px;
    color:#999;
    font-weight:bold;
}

.services{
    margin-top:15px;
    padding-left:18px;
}

.services li{
    margin:8px 0;
}

.footer{
    text-align:center;
    padding:35px;
    background:#0d0d0d;
    color:#8b8b8b;
    font-size:13px;
}

.note{
    background:#1b1b1b;
    padding:18px;
    border-left:5px solid #d9a441;
    margin-top:18px;
    border-radius:10px;
}

</style>
</head>

<body>

<div class="wrapper">

<div class="header">

<div class="logo">
Sreenidhi<span>Interiors</span>
</div>

<div class="tagline">
CRAFTED FOR YOU
</div>

</div>

<div class="title">
🏡 NEW CONSULTATION REQUEST
</div>

<div class="section">

<h2>👤 Customer Information</h2>

<table>

<tr>
<td class="label">Full Name</td>
<td>${customer.firstName} ${customer.lastName}</td>
</tr>

<tr>
<td class="label">Email</td>
<td>${customer.email}</td>
</tr>

<tr>
<td class="label">Phone</td>
<td>${customer.phone}</td>
</tr>

</table>

</div>

<div class="section">

<h2>🎨 Project Details</h2>

<table>

<tr>
<td class="label">Project Type</td>
<td>${project.projectType}</td>
</tr>

<tr>
<td class="label">Budget</td>
<td>${project.budget}</td>
</tr>

<tr>
<td class="label">Timeline</td>
<td>${project.timeline}</td>
</tr>

</table>

<h3 style="color:#d9a441;margin-top:30px;">
Selected Services
</h3>

<ul class="services">

${project.services
.map((service: any)=>`<li>${service}</li>`)
.join("")}

</ul>

${
project.notes
?`
<div class="note">
<b>Client Notes</b><br><br>
${project.notes}
</div>
`
:""
}

</div>

<div class="section">

<h2>🏠 Property Details</h2>

<table>

<tr>
<td class="label">Owner</td>
<td>${property.ownerName || "-"}</td>
</tr>

<tr>
<td class="label">Address</td>
<td>${property.address}</td>
</tr>

<tr>
<td class="label">City</td>
<td>${property.city}</td>
</tr>

<tr>
<td class="label">State</td>
<td>${property.state}</td>
</tr>

<tr>
<td class="label">PIN Code</td>
<td>${property.pinCode}</td>
</tr>

<tr>
<td class="label">Floors</td>
<td>${property.floors || "-"}</td>
</tr>

<tr>
<td class="label">BHK</td>
<td>${property.bhk || "-"}</td>
</tr>

<tr>
<td class="label">Parking</td>
<td>${property.parking || "-"}</td>
</tr>

</table>

</div>

<div class="section">

<h2>📅 Consultation Schedule</h2>

<table>

<tr>
<td class="label">Preferred Date</td>
<td>${schedule.preferredDate}</td>
</tr>

<tr>
<td class="label">Preferred Time</td>
<td>${schedule.preferredTime}</td>
</tr>

<tr>
<td class="label">Consultation Type</td>
<td>${schedule.consultationType || "-"}</td>
</tr>

<tr>
<td class="label">Language</td>
<td>${schedule.language || "-"}</td>
</tr>

</table>

</div>

<div class="section">

<h2>📷 Attachments</h2>

<p>
<strong>${uploadedAttachments.length}</strong>
image(s) uploaded by the customer.
All uploaded files are attached to this email.
</p>

</div>

<div class="footer">

<b>Sreenidhi Interiors</b>

<br><br>

Generated automatically from the consultation website.

<br><br>

Submission ID :
${docRef.id}

</div>

</div>

</body>
</html>
`,

  attachments: uploadedAttachments,
});

    return NextResponse.json({
      success: true,
      id: docRef.id,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save consultation.",
      },
      {
        status: 500,
      }
    );
  }
}