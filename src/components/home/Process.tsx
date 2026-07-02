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
    <section className="bg-zinc-950 py-32 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        
        {/* CENTERED HEADLINE COMPOSITION */}
        <div className="mb-28 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-amber-400 font-medium">
            Execution Blueprint
          </p>

          <h2
            className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl leading-tight"
            style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
          >
            From Concept <br />
            <span className="font-serif italic text-amber-100/90 font-normal">To Living Masterpiece</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm sm:text-base font-light leading-relaxed text-zinc-400 antialiased">
            A linear, high-transparency methodology keeping your architectural investment protected and informed from initial blueprinting to handover.
          </p>
        </div>

        {/* REFINED TIMELINE LINEWAY LAYOUT */}
        <div className="relative">
          
          {/* Connecting Laser Line Tracker (Desktop Horizontal Runway) */}
          <div className="absolute top-[34px] left-8 right-8 hidden h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent lg:block" />

          <div className="grid gap-12 sm:gap-16 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-start pt-2"
              >
                
                {/* TIMELINE INDICATOR NODE */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  {/* Outer Node Ring */}
                  <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-between rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-500 group-hover:border-amber-400/50 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.1)]">
                    
                    {/* Inner glowing core that scales up dramatically on hover */}
                    <span className="absolute inset-2 scale-75 rounded-xl bg-zinc-950 transition-transform duration-500 group-hover:scale-100" />
                    
                    {/* Centered Node Number */}
                    <span 
                      className="relative z-10 mx-auto text-sm font-medium text-zinc-400 transition-colors duration-500 group-hover:text-amber-400"
                      style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Mobile Connecting Line Fallback */}
                  <div className="h-px w-full bg-zinc-800 md:hidden" />
                </div>

                {/* TEXT CONTENT INTERFACE */}
                <div className="mt-8 relative w-full">
                  
                  {/* Huge Translucent Backdrop Number to create a luxury layered spatial effect */}
                  <span 
                    className="absolute -top-12 -left-2 text-7xl font-bold text-white/[0.01] select-none transition-colors duration-700 group-hover:text-amber-400/[0.02]"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {step.number}
                  </span>

                  <h3 className="text-xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-amber-100">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm font-light leading-relaxed text-zinc-400 antialiased">
                    {step.description}
                  </p>
                </div>

                {/* Left decorative linear accent showing state changes per column */}
                <span className="absolute left-0 bottom-0 top-20 w-px bg-linear-to-b from-transparent via-amber-400/0 to-transparent transition-all duration-500 group-hover:via-amber-400/20" />

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}