import Image from "next/image";

const projects = [
  {
    title: "Luxury Living Room",
    category: "Residential",
    image: "/projects/project1.jpg",
    heightClass: "h-125", // Tall grid track
  },
  {
    title: "Modern Minimalist Kitchen",
    category: "Kitchen",
    image: "/projects/project2.jpg",
    heightClass: "h-96 lg:mt-12", // Staggered offset
  },
  {
    title: "Premium Sanctuary Bedroom",
    category: "Bedroom",
    image: "/projects/project3.jpg",
    heightClass: "h-125 lg:-mt-12", // Negative margin shifts layout uniquely
  },
  {
    title: "Executive Office Workspace",
    category: "Commercial",
    image: "/projects/project4.jpg",
    heightClass: "h-96", // Regular track
  },
];

export default function Projects() {
  return (
    <section className="bg-zinc-950 py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">

        {/* HEADER SECTION */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.5em] text-amber-400 font-medium">
              Portfolio
            </p>

            <h2
              className="mt-5 text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]"
              style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
            >
              Our Recent <br />
              <span className="font-serif italic text-amber-100/90 font-normal">Featured Work</span>
            </h2>
          </div>

          <p className="max-w-md text-base sm:text-lg font-light leading-relaxed text-zinc-400 antialiased">
            Explore some of our beautifully custom-crafted interiors that combine high-end spatial creativity, pristine physics, and timeless structural architecture.
          </p>
        </div>

        {/* ASYMMETRICAL STAGGERED PORTFOLIO GRID */}
        {/* Changed from standard grid-cols-4 into a beautifully balanced staggered column layout */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-start">

          {projects.map((project) => (
            <div
              key={project.title}
              // Combines standard styling with custom heights to create the editorial magazine flow
              className={`group relative w-full ${project.heightClass} overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl transition-transform duration-500`}
            >
              
              {/* CANVAS IMAGE LAYER */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
              />

              {/* GRADIENT MASK (Dims out to enhance contrast smoothly on cursor hover) */}
              <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* OVERLAY INTERFACE LINKS */}
              <div className="absolute inset-0 z-10 flex flex-col justify-between p-8">
                
                {/* Category Pill Tag (Slides into frame on entry) */}
                <div className="transform -translate-y-4 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="rounded-full border border-amber-400/30 bg-zinc-950/80 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-amber-400 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Typography Block & Micro Interaction Controls */}
                <div className="transform translate-y-6 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0">
                  
                  {/* Category fallback shown natively before mouse-hover reveals full card metrics */}
                  <span className="text-[10px] font-medium tracking-widest uppercase text-amber-400/80 group-hover:hidden transition-all duration-300">
                    {project.category}
                  </span>

                  <h3 
                    className="mt-1 text-xl sm:text-2xl font-light tracking-wide text-white leading-tight"
                    style={{ fontFamily: "var(--font-heading), var(--font-playfair), serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Sleek contextual action link emerging beautifully from container base */}
                  <div className="mt-4 overflow-hidden h-0 opacity-0 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-6 group-hover:opacity-100">
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