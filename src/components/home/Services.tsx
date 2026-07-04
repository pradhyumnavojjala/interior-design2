import Image from "next/image";

const services = [
  {
    title: "Living Room",
    description: "Elegant, bespoke spaces meticulously designed for seamless entertainment and tactile comfort.",
    image: "/services/living-room.jpg",
  },
  {
    title: "Modular Kitchen",
    description: "Intelligent, high-performance culinary spaces blending state-of-the-art utility with refined finishes.",
    image: "/services/kitchen.jpg",
  },
  {
    title: "Bedroom",
    description: "Serene, sophisticated architectural sanctuaries custom-tailored for rest and deep restoration.",
    image: "/services/bedroom.jpg",
  },
  {
    title: "Office Interior",
    description: "Ergonomic, inspiring workspaces intentionally engineered to amplify focus and productivity.",
    image: "/services/office.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-16">

        {/* SECTION HEADER BLOCK */}
        <div className="mb-12 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-amber-400 font-medium">
              Our Expertise
            </p>

            <h2
              className="mt-3 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.2] sm:leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Designed Around <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Your Lifestyle</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-lg font-light leading-relaxed text-zinc-400 antialiased">
            We curate architectural environments that flawlessly merge structural beauty, raw comfort, and purposeful spatial functionality.
          </p>
        </div>

        {/* SERVICES IMAGES GRID - Set to grid-cols-2 side-by-side on all screens */}
        <div className="grid grid-cols-2 gap-3 sm:gap-8">

          {services.map((service) => (
            <div
              key={service.title}
              className="group relative h-[220px] xs:h-[280px] sm:h-[400px] md:h-[460px] overflow-hidden rounded-xl sm:rounded-3xl border border-white/5 sm:border-white/10 bg-zinc-900 shadow-2xl"
            >

              {/* BACKGROUND CANVAS LAYER */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-85 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:opacity-60"
                />
                
                {/* Advanced Multi-step Overlay Mask */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-colors duration-500 group-hover:from-zinc-950" />
              </div>

              {/* SERVICE CARD INTERFACE */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-3 sm:p-8 lg:p-10">
                
                {/* Text Content Block shifting subtly upwards on hover */}
                <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] sm:group-hover:-translate-y-2">
                  
                  <h3 
                    className="text-base sm:text-2xl lg:text-3xl font-light tracking-wide text-white"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Hidden or tightly clamped on mobile to maintain side-by-side grid health */}
                  <p className="mt-1 sm:mt-3 max-w-md text-[11px] sm:text-base font-light leading-normal sm:leading-relaxed text-zinc-300 opacity-80 line-clamp-2 xs:line-clamp-3 sm:line-clamp-none transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Micro CTA Button revealing dynamically on hover - hidden on mobile for ideal tracking layout */}
                <div className="hidden sm:block mt-6 overflow-hidden h-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-12 group-hover:opacity-100">
                  <button className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-400/5 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-amber-400 backdrop-blur-md transition-all duration-300 hover:bg-amber-500 hover:text-zinc-950 hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    Explore Space
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}