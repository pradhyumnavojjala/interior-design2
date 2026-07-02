"use client";

import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Visual top section block */}
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16 py-24 relative z-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-12">

          {/* BRAND MANIFESTO SECTION (4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            <h2
              className="text-3xl font-light tracking-wide text-white"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Luxe<span className="font-serif italic text-amber-400 font-normal">Space</span>
            </h2>

            <p className="max-w-xs text-sm font-light leading-relaxed text-zinc-400 antialiased">
              We orchestrate premium residential, industrial, and legacy commercial canvases built with spatial harmony, functional precision, and enduring architectural beauty.
            </p>
          </div>

          {/* NAVIGATION CORES (2 columns) */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              Navigation
            </h3>

            <ul className="space-y-3 text-sm font-light text-zinc-400">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <Link 
                    href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="inline-block transition-all duration-300 hover:text-amber-400 hover:translate-x-1"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* STUDIO TYPOLOGIES (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              Typologies
            </h3>

            <ul className="space-y-3 text-sm font-light text-zinc-400">
              {["Luxury Residential", "Sanctuary Bedrooms", "Kitchen Architecture", "Executive Workspaces", "Historical Restorations"].map((service) => (
                <li key={service} className="transition-colors duration-300 hover:text-zinc-200">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* OFFICE LOCATIONS & DIRECTIVES (3 columns) */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-semibold">
              The Desk
            </h3>

            <div className="space-y-5 text-sm font-light text-zinc-400">
              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-medium">Headquarters</span>
                <span className="text-zinc-300">Hyderabad, India</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-medium">Direct Comms</span>
                <a href="tel:+919999999999" className="text-zinc-300 hover:text-amber-400 transition-colors duration-300">
                  +91 XXXXX XXXXX
                </a>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-medium">Inquiries</span>
                <a href="mailto:studio@luxespace.design" className="text-zinc-300 hover:text-amber-400 transition-colors duration-300">
                  studio@luxespace.design
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* FOOTER METRICS RUNWAY FRAME */}
      <div className="border-t border-white/5 bg-zinc-950/40 backdrop-blur-md relative z-10">
        <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-6 px-6 sm:px-12 lg:px-16 py-8 md:flex-row">
          
          {/* Copyright lockup */}
          <p className="text-xs font-light tracking-wide text-zinc-500 antialiased">
            © {new Date().getFullYear()} LuxeSpace Studio. All architectural property designs reserved.
          </p>

          {/* SLEEK KINETIC UP-CHEVRON INDICATOR */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-zinc-900/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-zinc-400 transition-all duration-500 hover:border-amber-400/40 hover:text-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.08)]"
          >
            <span>Back to Top</span>
            <span className="transform transition-transform duration-300 group-hover:-translate-y-0.5">↑</span>
          </button>

        </div>
      </div>

    </footer>
  );
}