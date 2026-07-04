import Image from "next/image";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential",
    image: "/projects/project1.jpg",
    // Desktop layout shifts are isolated to lg screens; mobile scales smoothly
    desktopClass: "lg:h-125", 
  },
  {
    title: "Modern Minimalist Kitchen",
    category: "Kitchen",
    image: "/projects/project2.jpg",
    desktopClass: "lg:h-96 lg:mt-12",
  },
  {
    title: "Premium Sanctuary Bedroom",
    category: "Bedroom",
    image: "/projects/project3.jpg",
    desktopClass: "lg:h-125 lg:-mt-12",
  },
  {
    title: "Executive Office Workspace",
    category: "Commercial",
    image: "/projects/project4.jpg",
    desktopClass: "lg:h-96",
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 py-16 sm:py-24 md:py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-12 lg:px-16">

        {/* HEADER SECTION */}
        <div className="mb-12 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-amber-400 font-medium">
              Portfolio
            </p>

            <h2
              className="mt-3 sm:mt-5 text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-[1.2] sm:leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Our Recent <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Featured Work</span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-lg font-light leading-relaxed text-zinc-400 antialiased">
            Explore some of our beautifully custom-crafted interiors that combine high-end spatial creativity, pristine physics, and timeless structural architecture.
          </p>
        </div>

        {/* RESPONSIVE PORTFOLIO GRID - side-by-side grid-cols-2 on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8 items-start">

          {projects.map((project) => (
            <div
              key={project.title}
              // Uses a clean uniform height tracking system on mobile (h-[220px] to h-[320px]) and maps layouts nicely on large viewports
              className={`group relative w-full h-[220px] xs:h-[280px] sm:h-[360px] ${project.desktopClass} overflow-hidden rounded-xl sm:rounded-3xl border border-white/5 sm:border-white/10 bg-zinc-900 shadow-2xl transition-transform duration-500`}
            >
              
              {/* CANVAS IMAGE LAYER */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />

              {/* GRADIENT MASK */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* OVERLAY INTERFACE LINKS */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-3 sm:p-8">
                
                {/* Category Pill Tag (Kept fluid and lightweight on tablet/desktop viewports) */}
                <div className="hidden sm:block transform -translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full border border-amber-400/30 bg-zinc-950/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Typography Block */}
                <div className="sm:transform sm:translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] sm:group-hover:translate-y-0">
                  
                  {/* Native fallback category for static rendering layouts */}
                  <span className="text-[9px] sm:text-[10px] font-medium tracking-widest uppercase text-amber-400/80 sm:group-hover:opacity-0 transition-all duration-300 block mb-0.5">
                    {project.category}
                  </span>

                  <h3 
                    className="text-sm sm:text-2xl font-light tracking-wide text-white leading-tight"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Micro action details link block wrapper */}
                  <div className="hidden sm:block mt-4 overflow-hidden h-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-6 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
                      View Space Details 
                      <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  </div>

                </div>

              </div>

              {/* INVISIBLE LINK CLICK TARGET OVERLAY */}
              <a href={`/gallery/${project.title.toLowerCase().replace(/\s+/g, '-')}`} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}