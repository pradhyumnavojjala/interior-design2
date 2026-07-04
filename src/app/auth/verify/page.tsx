"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


export default function VerifyPage() {
  const router = useRouter();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");

    if (!storedEmail) {
        router.push("/auth");
        return;
    }

    setEmail(storedEmail);
}, [router]);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  function handleChange(value: string, index: number) {
    if (!/^\d?$/.test(value)) return;

    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  }

  async function handleVerify(e: React.FormEvent) {
  e.preventDefault();

  const enteredOTP = otp.join("");

  if (enteredOTP.length !== 6) {
    setError("Please enter the 6-digit verification code.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const response = await fetch("/api/auth/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        otp: enteredOTP,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message);
      return;
    }

    // Save login for 5 days
localStorage.setItem(
  "auth",
  JSON.stringify({
    authenticated: true,
    email,
    loginTime: Date.now(),
  })
);

// Remove old temporary session
sessionStorage.removeItem("authenticated");

if (data.isNewUser) {
  router.push("/auth/details");
} else {
  router.push("/");
}
  } catch (err) {
    console.error(err);
    setError("Something went wrong.");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900/40 p-10 backdrop-blur-xl">

        <Link
          href="/auth"
          className="text-sm text-amber-400 hover:text-amber-300"
        >
          ← Back
        </Link>

        <div className="mt-6">

          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-300">
            Step 2 of 3
          </span>

          <h1
            className="mt-6 text-4xl text-white"
            style={{
              fontFamily:
                "var(--font-heading), var(--font-playfair), serif",
            }}
          >
            Verify Email
          </h1>

          <p className="mt-3 text-zinc-400">
    Enter the 6-digit verification code sent to
    <br />
    <span className="text-amber-400">
        {email}
    </span>
</p>

        </div>

        <form
          onSubmit={handleVerify}
          className="mt-10"
        >

          <div className="flex justify-between gap-3">

            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el;
                }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) =>
                  handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  handleKeyDown(e, index)
                }
                className="h-14 w-14 rounded-xl border border-white/10 bg-zinc-900 text-center text-2xl text-white outline-none transition focus:border-amber-400"
              />
            ))}

          </div>
          {error && (
  <p className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
    {error}
  </p>
)}

          <button
            type="submit"
            disabled={loading}
            className="mt-10 w-full rounded-xl bg-amber-400 py-4 font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300 disabled:opacity-60"
          >
            {loading ? "Verifying..." : "Verify"}
          </button>

        </form>

        <button
          className="mt-6 w-full text-center text-sm text-zinc-400 transition hover:text-amber-400"
        >
          Resend Code
        </button>

      </div>

    </main>
  );
}