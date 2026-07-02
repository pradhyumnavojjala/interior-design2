import Image from "next/image";

export default function Hero() {
  return (
    // Changed h-screen to min-h-screen so content never clips on small mobile screens
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-950 flex flex-col justify-center">

      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0 scale-105 animate-[slow-pan_25s_ease-out_infinite_alternate]">
        <Image
          src="/hero.jpg"
          alt="Luxury Interior Main"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>

      {/* GRADIENT OVERLAYS */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-zinc-950 via-zinc-950/70 to-transparent" />
      <div className="absolute inset-0 z-10 bg-linear-to-t from-zinc-950 via-transparent to-zinc-950/30" />

      {/* DECORATIVE BLUR LIGHT SOURCE */}
      <div className="absolute left-[-10%] top-[-10%] z-10 h-125 w-125 bg-amber-500/10 blur-[150px] animate-pulse" />

      {/* HERO MAIN CONTENT CONTAINER */}
      {/* Added responsive padding top/bottom so it spaces correctly when expanding on mobile */}
      <div className="relative z-20 flex w-full items-center py-24 md:py-0 md:h-screen">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-12 lg:px-16 gap-12">

          {/* LEFT CONTENT BLOCK */}
<div className="max-w-2xl animate-fade-in-up">
            
            <span className="inline-block rounded-full border border-amber-400/20 bg-amber-400/5 px-5 py-2 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-amber-300 backdrop-blur-md">
              Premium Interior Design
            </span>

            <h1
              className="mt-6 text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.05]"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Sreenidhi <br />
              Interiors <br />
              <span className="font-serif italic text-amber-400 font-normal">Crafted For You</span>
            </h1>

            <p className="mt-6 max-w-lg text-base sm:text-lg font-light leading-relaxed text-zinc-300 antialiased">
              We transform ordinary spaces into timeless masterpieces that blend 
              unparalleled elegance, tactile comfort, and effortless modern functionality.
            </p>

            {/* Interactive Luxury Buttons */}
            <div className="mt-10 flex flex-wrap gap-4 sm:gap-5">
              <button className="group relative overflow-hidden rounded-full bg-amber-500 px-9 py-4 text-sm font-semibold tracking-wider uppercase text-zinc-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_35px_rgba(245,158,11,0.25)]">
                Book Consultation
              </button>

              <button className="rounded-full border border-white/20 bg-white/5 px-9 py-4 text-sm font-semibold tracking-wider uppercase text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-zinc-950">
                View Projects
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: ADVANCED INTERIOR GALLERY GRID */}
<div className="hidden lg:grid w-120 grid-cols-12 gap-4 relative animate-fade-in-up [animation-delay:0.5s]">
            
            {/* Embedded Floating Metrics Box */}
            <div className="absolute -left-16 bottom-12 z-30 rounded-2xl border border-white/10 bg-zinc-950/80 p-6 backdrop-blur-xl shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-amber-400">500+</h3>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400">Happy Clients</p>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <h3 className="text-2xl font-bold text-white">1200+</h3>
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400">Projects Done</p>
                </div>
              </div>
            </div>

            {/* Collage Image 1: Main Tall Image */}
            <div className="col-span-7 relative h-105 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/hero-grid-1.webp"
                alt="Living Room Detail"
                fill
                sizes="30vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Collage Image 2: Top Right Small */}
            <div className="col-span-5 relative h-47.5 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl mt-8">
              <Image
                src="/hero-grid-2.webp"
                alt="Kitchen Interior"
                fill
                sizes="20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

            {/* Collage Image 3: Bottom Right Small */}
            <div className="col-span-5 relative h-52.5 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
              <Image
                src="/hero-grid-3.webp"
                alt="Luxury Material Detail"
                fill
                sizes="20vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>

          </div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      {/* Changed absolute bottom behavior to hidden on mobile displays to avoid layout overlay collisions */}
      <div className="hidden md:block absolute bottom-8 left-1/2 z-20 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1.8s_forwards]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.4em] text-zinc-400 font-light">SCROLL</span>
          <div className="h-10 w-px bg-linear-to-b from-amber-400 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll-line_2s_infinite]" />
          </div>
        </div>
      </div>

    </section>
  );
}