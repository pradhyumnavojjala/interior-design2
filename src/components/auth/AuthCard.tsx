import EmailForm from "./EmailForm";
import GoogleButton from "./GoogleButton";
import Link from "next/link";

export default function AuthCard() {
  return (
    <div className="flex items-center justify-center bg-zinc-950 p-6 sm:p-12 md:p-16 lg:col-span-5">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-b from-zinc-900/40 to-zinc-900/5 p-8 shadow-2xl backdrop-blur-2xl sm:p-10">

        {/* Top Border */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Step */}
        <div className="mb-3 inline-flex rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-amber-300">
          Step 1 of 3
        </div>

        {/* Heading */}
        <h2
          className="text-3xl font-light tracking-wide text-white"
          style={{
            fontFamily:
              "var(--font-heading), var(--font-playfair), serif",
          }}
        >
          Welcome Back
        </h2>

        <p className="mt-3 text-sm leading-7 text-zinc-400">
          Enter your email address to continue. We'll verify your identity
          before you book a consultation.
        </p>

        {/* Email Form */}
        <EmailForm />

        {/* Divider */}
        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-white/10"></div>

          <span className="mx-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            or
          </span>

          <div className="h-px flex-1 bg-white/10"></div>
        </div>

        {/* Google */}
        <GoogleButton />

        {/* Footer */}
        <p className="mt-8 text-center text-[11px] leading-relaxed text-zinc-500">
          By continuing you agree to our{" "}
          <Link
            href="/terms"
            className="text-zinc-300 underline underline-offset-4 transition hover:text-amber-400"
          >
            Terms
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-zinc-300 underline underline-offset-4 transition hover:text-amber-400"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}