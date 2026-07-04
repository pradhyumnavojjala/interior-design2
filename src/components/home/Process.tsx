const steps = [
  {
    number: "01",
    title: "Initial Curation",
    description:
      "Submit your spatial requirements via our private portal. Our architectural board evaluates the scope to align on conceptual viability.",
  },
  {
    number: "02",
    title: "Spatial Assessment",
    description:
      "We orchestrate an on-site evaluation to analyze natural lighting vectors, architectural limitations, structural proportions, and raw dimensions.",
  },
  {
    number: "03",
    title: "Schematic Blueprinting",
    description:
      "Our designers craft high-fidelity spatial layouts, source premium materiality boards, and curate detailed architectural plans matching your lifestyle.",
  },
  {
    number: "04",
    title: "Master Construction",
    description:
      "Elite craftsmen transform the finalized schematics into structural reality, implementing precision engineering and pristine finishing touchpoints.",
  },
];

export default function Process() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-16">
        
        {/* CENTERED HEADLINE COMPOSITION */}
        <div className="mb-12 sm:mb-24 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-amber-400 font-medium">
            Execution Blueprint
          </p>

          <h2
            className="mt-3 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.2] sm:leading-tight"
            style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
          >
            From Concept <br />
            <span className="font-serif italic text-amber-100/90 font-normal">To Living Masterpiece</span>
          </h2>

          <p className="mx-auto mt-4 sm:mt-6 max-w-xl text-xs sm:text-base font-light leading-relaxed text-zinc-400 antialiased">
            A linear, high-transparency methodology keeping your architectural investment protected and informed from initial blueprinting to handover.
          </p>
        </div>

        {/* REFINED TIMELINE LINEWAY LAYOUT */}
        <div className="relative">
          
          {/* Connecting Laser Line Tracker (Desktop Horizontal Runway exclusively) */}
          <div className="absolute top-[34px] left-8 right-8 hidden h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent lg:block" />

          {/* Grid layout shifts to grid-cols-2 side-by-side on mobile */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-start rounded-xl sm:rounded-3xl border border-white/5 lg:border-none bg-zinc-900/20 lg:bg-transparent p-4 lg:p-0 pt-4"
              >
                
                {/* TIMELINE INDICATOR NODE */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  {/* Outer Node Ring scaled dynamically down for mobile screen layout */}
                  <div className="relative flex h-10 w-10 sm:h-[68px] w-10 sm:w-[68px] shrink-0 items-center justify-between rounded-lg sm:rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                    
                    {/* Inner glowing core */}
                    <span className="absolute inset-1 sm:inset-2 scale-75 rounded-md sm:rounded-xl bg-zinc-950 transition-transform duration-500 group-hover:scale-100" />
                    
                    {/* Centered Node Number */}
                    <span 
                      className="relative z-10 mx-auto text-xs sm:text-sm font-medium text-zinc-400 transition-colors duration-500 group-hover:text-amber-400"
                      style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                    >
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* TEXT CONTENT INTERFACE */}
                <div className="mt-4 sm:mt-8 relative w-full">
                  
                  {/* Backdrop Number layer hidden on small breakpoints to maximize line pacing readability */}
                  <span 
                    className="hidden sm:block absolute -top-12 -left-2 text-7xl font-bold text-white/[0.01] select-none transition-colors duration-700 group-hover:text-amber-400/[0.02]"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {step.number}
                  </span>

                  <h3 className="text-sm sm:text-xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-amber-100">
                    {step.title}
                  </h3>

                  <p className="mt-1 sm:mt-3 text-[11px] sm:text-sm font-light leading-normal sm:leading-relaxed text-zinc-400 antialiased line-clamp-3 xs:line-clamp-none">
                    {step.description}
                  </p>
                </div>

                {/* Vertical running accent line */}
                <span className="absolute left-0 bottom-0 top-16 w-px bg-linear-to-b from-transparent via-amber-400/0 to-transparent transition-all duration-500 group-hover:via-amber-400/20" />

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}