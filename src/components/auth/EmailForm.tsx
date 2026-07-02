"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EmailForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  setError("");

  if (!email.trim()) {
    setError("Please enter your email.");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email.");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/auth/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.message || "Failed to send OTP.");
      return;
    }

    // Temporary (remove later)
    console.log("OTP:", data.otp);

    // Save email for the verify page
    sessionStorage.setItem("email", email);

    router.push("/auth/verify");

  } catch (error) {
    console.error(error);
    setError("Something went wrong.");
  } finally {
    setLoading(false);
  }
}

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">

      <div>

        <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.25em] text-zinc-400">
          Email Address
        </label>

        <input
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-zinc-900/60 px-5 py-4 text-white placeholder-zinc-500 outline-none transition-all duration-300 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20"
        />

        {error && (
          <p className="mt-2 text-sm text-red-400">
            {error}
          </p>
        )}

      </div>

      <button
        type="submit"
        disabled={loading}
        className="group relative w-full overflow-hidden rounded-xl bg-amber-400 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black transition-all duration-300 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <span className="relative z-10">
          {loading ? "Loading..." : "Continue"}
        </span>

      </button>

    </form>
  );
}