import Link from "next/link";

const metrics = [
  { value: "500+", label: "Curated Estates" },
  { value: "1.2K", label: "Spaces Realized" },
  { value: "8+", label: "Years of Practice" },
];

export default function ConsultationCTA() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Top-centered ultra-wide structural ambient lighting field */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-0 h-[500px] w-full max-w-7xl bg-radial from-amber-500/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-12 lg:px-16">
        
        {/* ASYMMETRIC RUNWAY CONTAINER */}
        <div className="relative rounded-2xl sm:rounded-[40px] border border-white/5 bg-linear-to-b from-zinc-900/30 to-zinc-900/5 p-5 sm:p-12 md:p-20 backdrop-blur-xl overflow-hidden shadow-2xl">
          
          {/* Subtle horizontal design baseline grid wireframe */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

          <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:items-center relative z-10">
            
            {/* LEFT COLUMN: MAIN CALL TO ACTION INTEL */}
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-amber-400 font-medium">
                  Let's Build Together
                </p>

                <h2
                  className="mt-4 sm:mt-6 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.2] sm:leading-[1.1]"
                  style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                >
                  Ready To Begin Your <br />
                  <span className="font-serif italic text-amber-100/90 font-normal">Spatial Metamorphosis?</span>
                </h2>

                <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-base font-light leading-relaxed text-zinc-400 antialiased">
                  Whether you are detailing a high-end private residence, designing a legacy workspace, or seeking elite material curation—our board is prepared to protect your vision with absolute structural precision.
                </p>
              </div>

              {/* ARCHITECTURAL INTERACTIVE CONTROLS */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                
                {/* Primary Premium Link Frame */}
                <Link
                  href="/consultation"
                  className="group relative w-full sm:w-auto inline-flex items-center justify-center overflow-hidden rounded-full bg-amber-400 px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-black transition-all duration-500 hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]"
                >
                  {/* Internal kinetic mirror slash */}
                  <span className="absolute inset-0 translate-x-[-100%] bg-linear-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-[100%]" />
                  <span className="relative z-10 flex items-center gap-2">
                    Secure Commission Deck
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>

                {/* Secondary Ghost Link Frame */}
                <Link
                  href="/gallery"
                  className="group w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.02] px-6 sm:px-8 py-3.5 sm:py-4 text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-black hover:border-white"
                >
                  <span className="flex items-center gap-2">
                    Explore Studio Works
                  </span>
                </Link>

              </div>
            </div>

            {/* RIGHT COLUMN: SIDE-BY-SIDE METRICS ROW ON MOBILE */}
            <div className="lg:col-span-4 lg:border-l lg:border-white/5 lg:pl-12 w-full pt-4 lg:pt-0 border-t border-white/5 lg:border-t-0">
              <div className="grid grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-10">
                {metrics.map((metric) => (
                  <div 
                    key={metric.label} 
                    className="group flex flex-col justify-center border-l border-zinc-800 lg:border-l-0 pl-3 sm:pl-6 lg:border-b lg:border-white/5 lg:pb-6 lg:pl-0 first:border-0 lg:first:border-b last:border-0 last:pb-0"
                  >
                    <h3 
                      className="text-xl sm:text-5xl font-light tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400 select-none"
                      style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                    >
                      {metric.value}
                    </h3>
                    <p className="mt-1 text-[9px] sm:text-xs font-light uppercase tracking-widest text-zinc-400 group-hover:text-amber-100/70 transition-colors duration-300 leading-tight">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}