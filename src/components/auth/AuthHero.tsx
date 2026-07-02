import Image from "next/image";
import Link from "next/link";

export default function AuthHero() {
  return (
    <div className="relative hidden overflow-hidden border-r border-white/5 lg:col-span-7 lg:flex flex-col justify-between p-16">

      {/* Background Image */}
      <Image
        src="/auth/auth.jpg"
        alt="Luxury modern architectural interior"
        fill
        priority
        className="object-cover object-center scale-[1.02]"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/20" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Logo */}
      <div className="relative z-10">
        <Link
          href="/"
          className="text-xl font-light tracking-widest text-white transition hover:opacity-80"
          style={{
            fontFamily:
              "var(--font-heading), var(--font-playfair), serif",
          }}
        >
          Luxe
          <span className="font-serif italic text-amber-400">
            Space
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-xl">

        <span className="inline-flex rounded-full border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300 backdrop-blur-md">
          Studio Portal
        </span>

        <h1
          className="mt-8 text-6xl font-light leading-[1.1] tracking-tight text-white"
          style={{
            fontFamily:
              "var(--font-heading), var(--font-playfair), serif",
          }}
        >
          Orchestrating
          <br />

          <span className="font-serif italic font-normal text-amber-100">
            Legacy Environments.
          </span>
        </h1>

        <p className="mt-8 max-w-md text-sm leading-8 text-zinc-400">
          Log in to access your active spatial portfolios,
          premium material selections and project consultations.
        </p>

      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

    </div>
  );
}