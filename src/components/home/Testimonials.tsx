const testimonials = [
  {
    name: "Rahul Sharma",
    location: "Hyderabad",
    project: "The Jubilee Hills Villa",
    review:
      "The entire architectural experience was seamless. The board completely transformed our sprawling space into a modern, raw, and elegant sanctuary that far exceeded our expectations.",
  },
  {
    name: "Priya Reddy",
    location: "Bengaluru",
    project: "Indiranagar Penthouse",
    review:
      "Uncompromising execution, strict adherence to chronological deadlines, and flawless material selection. They didn't just build an interior; they created an atmospheric masterpiece.",
  },
  {
    name: "Arjun Patel",
    location: "Vijayawada",
    project: "Executive Corporate HQ",
    review:
      "Their micro-level attention to natural lighting vectors and material texture contrast is truly world-class. Every spatial layer feels completely tailored, luxurious, and functional.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-zinc-950 py-32 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">

        {/* HEADLINE MATRIX */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-400 font-medium">
              Endorsements
            </p>

            <h2
              className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Voices Of Our <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Patrons</span>
            </h2>
          </div>

          <p className="max-w-xs text-sm font-light leading-relaxed text-zinc-400 antialiased">
            True luxury is validated through the spatial realities and peaceful satisfaction of those who live within our architectural canvas.
          </p>
        </div>

        {/* EDITORIAL REVIEWS GRID */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between rounded-3xl border border-white/5 bg-zinc-900/20 p-8 sm:p-10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-zinc-900/50 hover:border-white/10 hover:shadow-2xl"
            >
              
              {/* Massive Structural Background Quotation Mark */}
              <span 
                className="absolute top-2 right-6 text-8xl font-serif text-white/[0.02] select-none transition-colors duration-500 group-hover:text-amber-400/[0.04]"
                style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
              >
                “
              </span>

              {/* TOP TRACK: RATING & STATEMENT */}
              <div className="relative z-10 space-y-6">
                
                {/* Micro Verified Commission Badge instead of plain yellow stars */}
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.03] px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-amber-400">
                  <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
                  5.0 Pristine Score
                </div>

                {/* Review Body Text */}
                <p className="text-base font-light leading-relaxed text-zinc-300 antialiased italic group-hover:text-zinc-200 transition-colors duration-300">
                  "{item.review}"
                </p>
              </div>

              {/* BOTTOM TRACK: COLLECTIVE PROFILE DATA */}
              <div className="mt-12 pt-6 border-t border-white/5 flex flex-col gap-1 relative z-10">
                <h3 
                  className="text-xl font-light tracking-wide text-white"
                  style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                >
                  {item.name}
                </h3>
                
                <div className="flex items-center justify-between text-xs font-light text-zinc-400 tracking-wide">
                  <span>{item.location}, IN</span>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-amber-400/70 transition-colors duration-300">
                    {item.project}
                  </span>
                </div>
              </div>

              {/* Micro ambient linear light streak tracing the bottom edge of cards on hover */}
              <span className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-amber-400/0 to-transparent transition-all duration-700 group-hover:via-amber-400/20" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}