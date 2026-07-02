"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SuccessContent() {
  const searchParams = useSearchParams();

  const consultationId =
    searchParams.get("id") || "Not Available";

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-3xl rounded-[36px] border border-white/10 bg-zinc-900/40 p-12 backdrop-blur-2xl shadow-2xl">

        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-500/15">
          <span className="text-5xl">✅</span>
        </div>

        <h1
          className="mt-8 text-center text-5xl text-white"
          style={{
            fontFamily:
              "var(--font-heading), var(--font-playfair), serif",
          }}
        >
          Consultation Submitted
        </h1>

        <p className="mt-5 text-center text-zinc-400 text-lg leading-8">
          Thank you for choosing
          <span className="text-amber-400">
            {" "}Sreenidhi Interiors
          </span>.
          <br />
          Our design team has successfully received your consultation request.
        </p>

        <div className="mt-12 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
            Consultation Reference
          </p>

          <h2 className="mt-4 break-all text-2xl font-bold text-white">
            {consultationId}
          </h2>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/40 p-8">
          <h3 className="text-xl text-white">
            What happens next?
          </h3>

          <ul className="mt-6 space-y-4 text-zinc-400">
            <li>✅ Our team will review your consultation request.</li>
            <li>📞 We'll contact you using your provided phone number.</li>
            <li>📅 Your consultation will be scheduled based on your preferred date.</li>
            <li>🎨 Our designers will prepare personalized recommendations.</li>
          </ul>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          <Link
            href="/"
            className="rounded-full border border-white/10 py-4 text-center font-semibold text-white transition hover:border-amber-400 hover:text-amber-300"
          >
            Back to Home
          </Link>

          <Link
            href="/consultation"
            className="rounded-full bg-amber-400 py-4 text-center font-semibold text-black transition hover:bg-amber-300"
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