const features = [
  {
    number: "01",
    title: "Experienced Artisans",
    description:
      "Our award-winning design architects curate personalized structural spaces crafted to capture your personal narrative.",
  },
  {
    number: "02",
    title: "Uncompromising Quality",
    description:
      "We source ultra-premium raw materials and collaborate with elite craftsmen to protect every micro-detail.",
  },
  {
    number: "03",
    title: "Pristine Execution",
    description:
      "Every project lifecycle is planned meticulously down to the minute, guaranteeing timeline delivery without friction.",
  },
  {
    number: "04",
    title: "Client Centric Vision",
    description:
      "Your peace of mind is our benchmark. We maintain complete collaborative transparency through the entire journey.",
  },
];

export default function WhyChooseUs() {
  return (
    // Integrated with the dark luxury palette
    <section className="bg-zinc-950 py-32 border-t border-white/5 relative overflow-hidden">
      
      {/* Subtle geometric structural light gradient leaking from the bottom right */}
      <div className="absolute right-[-20%] bottom-[-20%] z-0 h-140 w-140 bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-start">

          {/* LEFT COLUMN: STICKY BRAND PHILOSOPHY HEADER */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-400 font-medium">
              Our Principles
            </p>

            <h2
              className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Designed With <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Passion & Precision</span>
            </h2>

            <p className="mt-6 max-w-md text-base font-light leading-relaxed text-zinc-400 antialiased">
              Every space is conceptualized as a living, architectural canvas. We balance geometry, materiality, and lighting to evoke raw elegance.
            </p>
            
            {/* Minimalist interactive design note block */}
            <div className="mt-8 hidden lg:flex items-center gap-4 text-xs font-semibold uppercase tracking-wider text-amber-400/70">
              <span className="h-px w-8 bg-amber-400/40" />
              <span>Scroll to uncover our process</span>
            </div>
          </div>

          {/* RIGHT COLUMN: REFINED TEXT LIST ELEMENTS */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature) => (
              <div
                key={feature.number}
                // Group element turns structural interactions into organic motion paths
                className="group relative rounded-3xl border border-white/5 bg-zinc-900/30 p-8 sm:p-10 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-zinc-900/60 hover:border-white/10 hover:shadow-2xl"
              >
                
                {/* Clean inline element layout mapping columns for clear scannability */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-10">
                  
                  {/* Architectural Numeric Counter */}
                  <span 
                    className="text-4xl sm:text-5xl font-light tracking-tight text-zinc-700 transition-colors duration-500 group-hover:text-amber-400 select-none"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {feature.number}
                  </span>

                  {/* Text Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-light tracking-wide text-white transition-colors duration-300 group-hover:text-amber-100">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm sm:text-base font-light leading-relaxed text-zinc-400 antialiased max-w-xl">
                      {feature.description}
                    </p>
                  </div>

                </div>

                {/* Subtle running indicator light trail inside the element card bottom */}
                <span className="absolute bottom-0 left-10 right-10 h-px bg-linear-to-r from-transparent via-amber-400/0 to-transparent transition-all duration-700 group-hover:via-amber-400/30" />

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}