import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-zinc-950">
      {/* Background Image with a subtle scale-in animation */}
      <div className="absolute inset-0 transform scale-105 animate-[subtle-zoom_20s_ease-out_forwards]">
        <Image
          src="/hero.jpg"
          alt="Luxury Interior"
          fill
          priority
          className="object-cover opacity-85"
        />
      </div>

      {/* Sophisticated Gradient Overlay (Darker at the bottom/left for text readability) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950/90 via-zinc-950/50 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 lg:px-16">
          <div className="max-w-3xl space-y-6 md:space-y-8">
            
            {/* Subtitle with refined tracking and fade-in */}
            <p className="text-xs sm:text-sm uppercase tracking-[0.5em] text-amber-400/90 font-medium animate-fade-in">
              Premium Interior Design
            </p>

            {/* Typography upgrade: adjusted tracking and leading */}
            <h1 className="font-playfair text-5xl font-light tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl leading-[1.15] md:leading-[1.1]">
              Luxury <br />
              Interiors <br />
              <span className="font-serif italic text-amber-100/90">Crafted For You</span>
            </h1>

            {/* Description with better line-height and constrained width */}
            <p className="max-w-lg text-base sm:text-lg font-light leading-relaxed text-zinc-300/90 antialiased">
              Transform your home into a timeless masterpiece with elegant, 
              functional, and personalized interior designs.
            </p>

            {/* Interactive, sleek luxury buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="group relative overflow-hidden rounded-full bg-amber-500 px-8 py-4 text-sm font-semibold tracking-wider uppercase text-zinc-950 transition-all duration-300 hover:bg-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                Book Consultation
              </button>

              <button className="rounded-full border border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-zinc-950">
                View Projects
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Elegant bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white font-light">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}