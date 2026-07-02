import { NextResponse } from "next/server";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const { email, firstName, lastName, phone } = await request.json();

    if (!email || !firstName || !lastName || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        { status: 400 }
      );
    }

    await addDoc(collection(db, "users"), {
      email: email.toLowerCase(),
      firstName,
      lastName,
      phone,
      createdAt: serverTimestamp(),
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to create user.",
      },
      { status: 500 }
    );
  }
}