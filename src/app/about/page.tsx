"use client";

import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Award,
  Users,
  Compass,
  Sparkles,
  CheckCircle2,
  Target,
  Eye,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute -top-60 -left-40 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-yellow-500/5 blur-3xl" />

      </div>

      {/* ================= HERO ================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

          <div className="max-w-4xl">

            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300">

              <Sparkles size={14} />

              Luxury Interior Design Studio

            </p>

            <h1 className="mt-8 text-5xl font-light leading-tight sm:text-6xl lg:text-7xl">

              Creating

              <span className="text-amber-400">

                {" "}
                Timeless Spaces

              </span>

              <br />

              That Feel Like Home

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

              At Sreenidhi Interiors, we believe every home tells a story.
              Our mission is to transform ordinary spaces into elegant,
              functional, and inspiring environments that perfectly reflect
              your lifestyle and personality.

            </p>

            <div className="mt-12 flex flex-wrap gap-4">

              <Link
                href="/consultation"
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300"
              >

                Start Consultation

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-8 py-4 text-white transition hover:border-amber-400 hover:text-amber-300"
              >

                View Portfolio

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= STATS ================= */}

      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">

        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:grid-cols-4">

          <div>

            <h2 className="text-4xl font-light text-amber-400">

              250+

            </h2>

            <p className="mt-2 text-zinc-400">

              Projects Completed

            </p>

          </div>

          <div>

            <h2 className="text-4xl font-light text-amber-400">

              180+

            </h2>

            <p className="mt-2 text-zinc-400">

              Happy Clients

            </p>

          </div>

          <div>

            <h2 className="text-4xl font-light text-amber-400">

              8+

            </h2>

            <p className="mt-2 text-zinc-400">

              Years Experience

            </p>

          </div>

          <div>

            <h2 className="text-4xl font-light text-amber-400">

              100%

            </h2>

            <p className="mt-2 text-zinc-400">

              Client Satisfaction

            </p>

          </div>

        </div>

      </section>

            {/* ================= OUR STORY ================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Our Story
              </p>

              <h2 className="mt-5 text-5xl font-light">
                Designing More Than
                <span className="text-amber-400"> Beautiful Homes</span>
              </h2>

              <p className="mt-8 text-zinc-400 leading-8">
                Sreenidhi Interiors was founded with one simple belief:
                exceptional interiors should combine luxury, comfort,
                and functionality.
              </p>

              <p className="mt-6 text-zinc-400 leading-8">
                Every project begins with understanding our client's
                lifestyle, preferences, and dreams. We then transform
                those ideas into timeless interiors that elevate
                everyday living.
              </p>

              <p className="mt-6 text-zinc-400 leading-8">
                Whether it's a modern apartment, a luxury villa,
                or a commercial workspace, our team approaches every
                project with passion, creativity, and meticulous attention
                to detail.
              </p>

            </div>

            <div className="grid gap-6">

              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">

                <Building2 className="text-amber-400" size={42} />

                <h3 className="mt-6 text-2xl font-light">
                  Elegant Designs
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  Every design balances aesthetics, practicality,
                  and timeless sophistication.
                </p>

              </div>

              <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">

                <Award className="text-amber-400" size={42} />

                <h3 className="mt-6 text-2xl font-light">
                  Premium Quality
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  We work with trusted materials and expert craftsmanship
                  to ensure lasting excellence.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="relative z-10 bg-white/[0.02] border-y border-white/5">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-10">

              <Target
                className="text-amber-400"
                size={48}
              />

              <h3 className="mt-6 text-3xl font-light">
                Our Mission
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">

                To create inspiring spaces that perfectly blend
                beauty, innovation, comfort, and functionality,
                while providing every client with an exceptional
                design experience.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-10">

              <Eye
                className="text-amber-400"
                size={48}
              />

              <h3 className="mt-6 text-3xl font-light">
                Our Vision
              </h3>

              <p className="mt-6 leading-8 text-zinc-400">

                To become one of India's most trusted luxury
                interior design studios, recognized for
                innovation, creativity, and uncompromising
                quality.

              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ================= WHY CHOOSE US ================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="text-center max-w-3xl mx-auto">

            <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
              Why Choose Us
            </p>

            <h2 className="mt-5 text-5xl font-light">
              Excellence in Every
              <span className="text-amber-400"> Detail</span>
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: <Compass className="text-amber-400" size={34} />,
                title: "Creative Planning",
                desc: "Every project starts with thoughtful planning and personalized concepts.",
              },
              {
                icon: <Users className="text-amber-400" size={34} />,
                title: "Client First",
                desc: "Your lifestyle and vision remain at the center of every decision.",
              },
              {
                icon: <Award className="text-amber-400" size={34} />,
                title: "Premium Finish",
                desc: "Luxury materials and attention to detail ensure timeless interiors.",
              },
              {
                icon: <CheckCircle2 className="text-amber-400" size={34} />,
                title: "On-Time Delivery",
                desc: "Professional project management keeps everything on schedule.",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8 transition hover:border-amber-400/50 hover:-translate-y-2"
              >

                {item.icon}

                <h3 className="mt-6 text-2xl font-light">
                  {item.title}
                </h3>

                <p className="mt-4 text-zinc-400 leading-7">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= FOUNDER ================= */}

      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="grid gap-16 lg:grid-cols-2 items-center">

            <div className="aspect-square rounded-[40px] border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">

              <Users
                size={120}
                className="text-amber-400/70"
              />

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Meet The Team
              </p>

              <h2 className="mt-5 text-5xl font-light">
                Passion Meets
                <span className="text-amber-400"> Precision</span>
              </h2>

              <p className="mt-8 leading-8 text-zinc-400">

                Behind every successful project is a passionate team
                dedicated to delivering spaces that inspire.
                From concept development to final execution,
                we ensure every detail reflects elegance,
                quality, and functionality.

              </p>

              <p className="mt-6 leading-8 text-zinc-400">

                Our collaborative approach allows us to transform
                your vision into reality while maintaining the
                highest standards of craftsmanship and professionalism.

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-5xl px-6 py-28">

          <div className="rounded-[40px] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-zinc-900 p-16 text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">
              Let's Build Something Beautiful
            </p>

            <h2 className="mt-6 text-5xl font-light leading-tight">

              Ready to Transform
              <br />

              <span className="text-amber-400">
                Your Dream Space?
              </span>

            </h2>

            <p className="mt-8 max-w-2xl mx-auto text-zinc-400 leading-8">

              Book a consultation today and let our designers
              craft a home that perfectly reflects your personality,
              lifestyle, and aspirations.

            </p>

            <Link
              href="/consultation"
              className="mt-12 inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 font-semibold text-black transition hover:bg-amber-300"
            >

              Book Consultation

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}