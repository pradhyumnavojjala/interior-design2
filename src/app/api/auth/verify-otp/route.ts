import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const { email, otp } = await request.json();

    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedEmail || !otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Email and OTP are required.",
        },
        {
          status: 400,
        }
      );
    }

    const otpRef = doc(db, "verificationCodes", normalizedEmail);
    const otpSnap = await getDoc(otpRef);

    if (!otpSnap.exists()) {
      return NextResponse.json(
        {
          success: false,
          message: "OTP not found.",
        },
        {
          status: 404,
        }
      );
    }

    const data = otpSnap.data();

    // Expired?
    if (Date.now() > data.expiresAt) {
      await deleteDoc(otpRef);

      return NextResponse.json(
        {
          success: false,
          message: "OTP has expired.",
        },
        {
          status: 400,
        }
      );
    }

    // Wrong OTP?
    if (data.code !== otp) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid OTP.",
        },
        {
          status: 400,
        }
      );
    }

    // Delete OTP after successful verification
    await deleteDoc(otpRef);

    // Check if user already exists
    const usersRef = collection(db, "users");

    const q = query(usersRef, where("email", "==", normalizedEmail));

    const userSnapshot = await getDocs(q);

    return NextResponse.json({
      success: true,
      isNewUser: userSnapshot.empty,
      message: "OTP verified successfully.",
    });
  } catch (error) {
    console.error("Verify OTP Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}