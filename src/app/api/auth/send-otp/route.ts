import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { sendOTP } from "@/lib/mail";

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail) {
      return NextResponse.json(
        {
          success: false,
          message: "Email is required.",
        },
        {
          status: 400,
        }
      );
    }

    const otp = generateOTP();

    // Store as NUMBER (milliseconds)
    const expiresAt = Date.now() + 5 * 60 * 1000;

    await setDoc(doc(db, "verificationCodes", normalizedEmail), {
      code: otp,
      expiresAt,
      createdAt: serverTimestamp(),
    });

    await sendOTP(normalizedEmail, otp);

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
      {
        status: 500,
      }
    );
  }
}