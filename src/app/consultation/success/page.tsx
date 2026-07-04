"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const consultationId =
    searchParams.get("id") || "Not Available";

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-4 sm:px-6 py-8 sm:py-16 selection:bg-amber-400/20 selection:text-amber-300">
      <div className="w-full max-w-3xl rounded-2xl sm:rounded-[36px] border border-white/5 sm:border-white/10 bg-linear-to-b from-zinc-900/40 to-zinc-900/5 p-5 sm:p-12 backdrop-blur-2xl shadow-2xl">

        <div className="mx-auto flex h-16 w-16 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-green-500/15">
          <span className="text-3xl sm:text-5xl">✅</span>
        </div>

        <h1
          className="mt-6 sm:mt-8 text-center text-3xl sm:text-5xl text-white font-medium tracking-tight"
          style={{
            fontFamily:
              "var(--font-heading), var(--font-playfair), serif",
          }}
        >
          Consultation Submitted
        </h1>

        <p className="mt-3 sm:mt-5 text-center text-zinc-400 text-sm sm:text-lg leading-relaxed sm:leading-8">
          Thank you for choosing
          <span className="text-amber-400">
            {" "}Sreenidhi Interiors
          </span>.
          <br className="hidden sm:block" />
          {" "}Our design team has successfully received your consultation request.
        </p>

        {/* REFERENCE CARD */}
        <div className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl border border-amber-400/20 bg-amber-400/10 p-5 sm:p-8 text-center">
          <p className="text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-amber-300 font-medium">
            Consultation Reference
          </p>

          <h2 className="mt-2 sm:mt-4 break-all text-lg sm:text-2xl font-bold text-white tracking-wide">
            {consultationId}
          </h2>
        </div>

        {/* NEXT STEPS LIST */}
        <div className="mt-6 sm:mt-10 rounded-xl sm:rounded-2xl border border-white/5 sm:border-white/10 bg-zinc-900/40 p-5 sm:p-8">
          <h3 className="text-lg sm:text-xl text-white font-medium">
            What happens next?
          </h3>

          <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-xs sm:text-zinc-400 sm:text-base leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span>✅</span>
              <span>Our team will review your consultation request.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span>📞</span>
              <span>We'll contact you using your provided phone number.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span>📅</span>
              <span>Your consultation will be scheduled based on your preferred date.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span>🎨</span>
              <span>Our designers will prepare personalized recommendations.</span>
            </li>
          </ul>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-8 sm:mt-12 grid gap-3 sm:gap-5 sm:grid-cols-2">
          <Link
            href="/"
            className="order-2 sm:order-1 rounded-full border border-white/10 py-3.5 sm:py-4 text-center text-sm sm:text-base font-semibold text-white transition-all duration-300 hover:border-amber-400 hover:text-amber-300 active:scale-[0.98]"
          >
            Back to Home
          </Link>

          <Link
            href="/consultation"
            className="order-1 sm:order-2 rounded-full bg-amber-400 py-3.5 sm:py-4 text-center text-sm sm:text-base font-semibold text-black transition-all duration-300 hover:bg-amber-300 active:scale-[0.98]"
          >
            Book Another Consultation
          </Link>
        </div>

      </div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-950" />}>
      <SuccessContent />
    </Suspense>
  );
}