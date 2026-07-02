import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const {
  customer,
  project,
  property,
  schedule,
} = body;

await transporter.sendMail({
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_USER,

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
    background:#f4f4f4;
    font-family:Arial,Helvetica,sans-serif;
}
.container{
    max-width:750px;
    margin:auto;
    background:#ffffff;
    border-radius:12px;
    overflow:hidden;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
}
.header{
    background:#111827;
    color:white;
    text-align:center;
    padding:35px;
}
.header h1{
    margin:0;
    font-size:30px;
}
.header p{
    color:#d1d5db;
    margin-top:8px;
}

.section{
    padding:25px 35px;
}

.section h2{
    border-left:5px solid #f59e0b;
    padding-left:12px;
    color:#111827;
}

table{
    width:100%;
    border-collapse:collapse;
}

td{
    padding:10px 0;
    border-bottom:1px solid #ececec;
}

.label{
    font-weight:bold;
    width:180px;
}

.footer{
    background:#111827;
    color:white;
    text-align:center;
    padding:18px;
    font-size:13px;
}
</style>
</head>

<body>

<div class="container">

<div class="header">
<h1>SREENIDHI INTERIORS</h1>
<p>New Consultation Received</p>
</div>

<div class="section">

<h2>Customer Details</h2>

<table>
<tr><td class="label">Name</td><td>${customer.firstName} ${customer.lastName}</td></tr>
<tr><td class="label">Email</td><td>${customer.email}</td></tr>
<tr><td class="label">Phone</td><td>${customer.phone}</td></tr>
</table>

</div>

<div class="section">

<h2>Project</h2>

<table>
<tr><td class="label">Project Type</td><td>${project.projectType}</td></tr>
<tr><td class="label">Budget</td><td>${project.budget}</td></tr>
<tr><td class="label">Timeline</td><td>${project.timeline}</td></tr>
<tr><td class="label">Property Size</td><td>${project.propertySize}</td></tr>
<tr><td class="label">Services</td><td>${project.services.join(", ")}</td></tr>
<tr><td class="label">Notes</td><td>${project.notes || "None"}</td></tr>
</table>

</div>

<div class="section">

<h2>Property Details</h2>

<table>
<tr><td class="label">Owner</td><td>${property.ownerName}</td></tr>
<tr><td class="label">Address</td><td>${property.address}</td></tr>
<tr><td class="label">City</td><td>${property.city}</td></tr>
<tr><td class="label">State</td><td>${property.state}</td></tr>
<tr><td class="label">Pincode</td><td>${property.pinCode}</td></tr>
<tr><td class="label">Floors</td><td>${property.floors}</td></tr>
<tr><td class="label">BHK</td><td>${property.bhk}</td></tr>
<tr><td class="label">Parking</td><td>${property.parking}</td></tr>
</table>

</div>

<div class="section">

<h2>Consultation Schedule</h2>

<table>
<tr><td class="label">Preferred Date</td><td>${schedule.preferredDate}</td></tr>
<tr><td class="label">Preferred Time</td><td>${schedule.preferredTime}</td></tr>
<tr><td class="label">Consultation Type</td><td>${schedule.consultationType}</td></tr>
<tr><td class="label">Language</td><td>${schedule.language}</td></tr>
</table>

</div>

<div class="footer">
Generated automatically by the Sreenidhi Interiors Consultation System
</div>

</div>

</body>
</html>
`,
});

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );

  }
}