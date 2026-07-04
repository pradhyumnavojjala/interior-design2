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
    <section className="bg-zinc-950 py-16 sm:py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-16">

        {/* HEADLINE MATRIX */}
        <div className="mb-12 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-amber-400 font-medium">
              Endorsements
            </p>

            <h2
              className="mt-3 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.2] sm:leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Voices Of Our <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Patrons</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs sm:text-sm font-light leading-relaxed text-zinc-400 antialiased">
            True luxury is validated through the spatial realities and peaceful satisfaction of those who live within our architectural canvas.
          </p>
        </div>

        {/* EXACT SIDE-BY-SIDE 2-COLUMN GRID ON MOBILE */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between rounded-xl sm:rounded-3xl border border-white/5 bg-zinc-900/20 p-4 sm:p-10 backdrop-blur-md transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-zinc-900/50 hover:border-white/10 hover:shadow-2xl"
            >
              
              {/* Massive Structural Background Quotation Mark */}
              <span 
                className="absolute top-1 right-4 text-5xl sm:text-8xl font-serif text-white/[0.02] select-none transition-colors duration-500 group-hover:text-amber-400/[0.04]"
                style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
              >
                “
              </span>

              {/* TOP TRACK: RATING & STATEMENT */}
              <div className="relative z-10 space-y-3 sm:space-y-6">
                
                {/* Micro Verified Commission Badge */}
                <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/[0.03] px-2 py-0.5 sm:py-1 text-[8px] sm:text-[9px] font-semibold uppercase tracking-widest text-amber-400">
                  <span className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
                  5.0 Score
                </div>

                {/* Review Body Text - Clean layout clamp to protect mobile line pacing */}
                <p className="text-xs sm:text-base font-light leading-normal sm:leading-relaxed text-zinc-300 antialiased italic group-hover:text-zinc-200 transition-colors duration-300 line-clamp-5 xs:line-clamp-none">
                  "{item.review}"
                </p>
              </div>

              {/* BOTTOM TRACK: COLLECTIVE PROFILE DATA */}
              <div className="mt-6 sm:mt-12 pt-3 sm:pt-6 border-t border-white/5 flex flex-col gap-0.5 sm:gap-1 relative z-10">
                <h3 
                  className="text-sm sm:text-xl font-light tracking-wide text-white"
                  style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                >
                  {item.name}
                </h3>
                
                <div className="flex flex-col xs:flex-row xs:items-center justify-between text-[10px] sm:text-xs font-light text-zinc-400 tracking-wide gap-0.5 xs:gap-0">
                  <span>{item.location}, IN</span>
                  <span className="text-[8px] sm:text-[10px] uppercase tracking-wider text-zinc-500 group-hover:text-amber-400/70 transition-colors duration-300 truncate max-w-[110px] xs:max-w-none">
                    {item.project}
                  </span>
                </div>
              </div>

              {/* Micro ambient linear light streak tracing the bottom edge of cards on hover */}
              <span className="absolute bottom-0 left-4 sm:left-8 right-4 sm:right-8 h-px bg-linear-to-r from-transparent via-amber-400/0 to-transparent transition-all duration-700 group-hover:via-amber-400/20" />

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}