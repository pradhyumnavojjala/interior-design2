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
    // Swapped pure white to deep luxury zinc-950
    <section className="bg-zinc-950 py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">

        {/* SECTION HEADER BLOCK */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-400 font-medium">
              Our Expertise
            </p>

            <h2
              className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Designed Around <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Your Lifestyle</span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg font-light leading-relaxed text-zinc-400 antialiased">
            We curate architectural environments that flawlessly merge structural beauty, raw comfort, and purposeful spatial functionality.
          </p>
        </div>

        {/* SERVICES IMAGES GRID */}
        {/* Upgraded layout to a 4-column balanced layout on massive screens */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-2">

          {services.map((service, index) => (
            <div
              key={service.title}
              // Uses group triggers to orchestrate complex nested hover states fluidly
              className="group relative h-[460px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
            >

              {/* BACKGROUND CANVAS LAYER */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-85 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 group-hover:opacity-60"
                />
                
                {/* Advanced Multi-step Overlay Mask */}
                <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-colors duration-500 group-hover:from-zinc-950" />
              </div>

              {/* SERVICE CARD INTERFACE */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 sm:p-10">
                
                {/* Text Content Block shifting subtly upwards on hover */}
                <div className="transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2">
                  
                  <h3 
                    className="text-2xl sm:text-3xl font-light tracking-wide text-white"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {service.title}
                  </h3>

                  {/* Description height collapses gracefully, showing details cleanly on focus */}
                  <p className="mt-3 max-w-md text-sm sm:text-base font-light leading-relaxed text-zinc-300 opacity-80 line-clamp-2 md:line-clamp-none transition-opacity duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Micro CTA Button revealing dynamically on hover */}
                <div className="mt-6 overflow-hidden h-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-12 group-hover:opacity-100">
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