import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { sendOTP } from "@/lib/mail";

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  try {
    console.log("========== SEND OTP START ==========");

    const { email } = await request.json();
    console.log("Email:", email);

    const normalizedEmail = email?.trim().toLowerCase();
    console.log("Normalized:", normalizedEmail);

    if (!normalizedEmail) {
      console.log("No email provided");
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        { status: 400 }
      );
    }

    const otp = generateOTP();
    console.log("OTP:", otp);

    const expiresAt = Date.now() + 5 * 60 * 1000;

    console.log("Saving to Firestore...");
    await setDoc(doc(db, "verificationCodes", normalizedEmail), {
      code: otp,
      expiresAt,
      createdAt: serverTimestamp(),
    });
    console.log("Firestore Success");

    console.log("Calling sendOTP...");
    await sendOTP(normalizedEmail, otp);
    console.log("sendOTP Finished");

    return NextResponse.json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.error("Send OTP Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}