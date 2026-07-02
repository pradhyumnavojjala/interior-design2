"use client";

import Link from "next/link";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">

      {/* BACKGROUND */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute -top-52 -left-32 h-[500px] w-[500px] rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[650px] w-[650px] rounded-full bg-yellow-500/5 blur-3xl" />

      </div>

      {/* HERO */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 py-28 lg:py-36">

          <div className="max-w-4xl">

            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300">

              <Sparkles size={14} />

              Let's Build Something Beautiful

            </p>

            <h1 className="mt-8 text-5xl sm:text-6xl lg:text-7xl font-light leading-tight">

              We'd Love
              <span className="text-amber-400">
                {" "}To Hear
              </span>

              <br />

              From You

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

              Whether you're planning your dream home,
              renovating an existing space,
              or simply exploring possibilities,
              our designers are here to guide you every step
              of the way.

            </p>

          </div>

        </div>

      </section>

      {/* CONTACT INFO */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 pb-24">

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {/* Phone */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">

              <Phone
                className="text-amber-400"
                size={38}
              />

              <h3 className="mt-6 text-2xl font-light">
                Phone
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">
                +91 98765 43210
              </p>

            </div>

            {/* Email */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">

              <Mail
                className="text-amber-400"
                size={38}
              />

              <h3 className="mt-6 text-2xl font-light">
                Email
              </h3>

              <p className="mt-4 text-zinc-400 break-all">

                sreenidhiinteriorsanddesign@gmail.com

              </p>

            </div>

            {/* Address */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">

              <MapPin
                className="text-amber-400"
                size={38}
              />

              <h3 className="mt-6 text-2xl font-light">
                Office
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">

                Hyderabad,
                Telangana,
                India

              </p>

            </div>

            {/* Hours */}

            <div className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8">

              <Clock
                className="text-amber-400"
                size={38}
              />

              <h3 className="mt-6 text-2xl font-light">
                Working Hours
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">

                Mon - Sat

                <br />

                9:00 AM - 7:00 PM

              </p>

            </div>

          </div>

        </div>

      </section>

            {/* ================= CONTACT FORM ================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* FORM */}

            <div className="rounded-[36px] border border-white/10 bg-zinc-900/40 p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Send Us A Message
              </p>

              <h2 className="mt-5 text-4xl font-light">

                Let's Start Your
                <span className="text-amber-400">
                  {" "}Dream Project
                </span>

              </h2>

              <form className="mt-10 space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400"
                />

                <textarea
                  rows={6}
                  placeholder="Tell us about your dream home..."
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-amber-400 resize-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300"
                >

                  Send Message

                  <ArrowRight size={18} />

                </button>

              </form>

            </div>

            {/* FAQ */}

            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-amber-400">
                Frequently Asked Questions
              </p>

              <div className="mt-10 space-y-6">

                {[
                  {
                    q: "How long does an interior project take?",
                    a: "Depending on the size and complexity, projects usually take between 1 to 6 months."
                  },
                  {
                    q: "Do you offer online consultations?",
                    a: "Yes. We provide both online and in-person consultations."
                  },
                  {
                    q: "Can you work within my budget?",
                    a: "Absolutely. We customize every design according to your budget and requirements."
                  },
                  {
                    q: "Do you handle complete execution?",
                    a: "Yes. From planning to final installation, we manage the complete project."
                  }
                ].map((item) => (

                  <div
                    key={item.q}
                    className="rounded-3xl border border-white/10 bg-zinc-900/40 p-8"
                  >

                    <h3 className="text-xl font-light">

                      {item.q}

                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">

                      {item.a}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MAP ================= */}

      <section className="relative z-10 border-y border-white/5 bg-white/[0.02]">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <p className="text-center text-sm uppercase tracking-[0.3em] text-amber-400">

            Visit Our Studio

          </p>

          <h2 className="mt-5 text-center text-5xl font-light">

            Our
            <span className="text-amber-400">
              {" "}Location
            </span>

          </h2>

          <div className="mt-14 overflow-hidden rounded-[32px] border border-white/10">

            <iframe
              src="https://maps.google.com/maps?q=Hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="border-0"
            />

          </div>

        </div>

      </section>

            {/* ================= CTA ================= */}

      <section className="relative z-10">

        <div className="mx-auto max-w-6xl px-6 py-28">

          <div className="overflow-hidden rounded-[40px] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-zinc-900 to-black p-14 text-center">

            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">

              Your Dream Space Starts Here

            </p>

            <h2 className="mt-6 text-5xl font-light leading-tight">

              Ready To Transform
              <br />

              <span className="text-amber-400">

                Your Home?

              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">

              Schedule your consultation today and let our designers
              create interiors that perfectly balance elegance,
              comfort and functionality.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/consultation"
                className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 font-semibold text-black transition hover:bg-amber-300"
              >

                Book Consultation

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 px-10 py-5 transition hover:border-amber-400 hover:text-amber-300"
              >

                Back To Home

              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="relative z-10 border-t border-white/10 bg-black/40">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 text-center md:flex-row">

          <div>

            <h3 className="text-2xl font-light">

              Sreenidhi
              <span className="text-amber-400">

                Interiors

              </span>

            </h3>

            <p className="mt-3 text-sm text-zinc-500">

              Luxury Interior Design Studio

            </p>

          </div>

          <div className="flex gap-8 text-sm text-zinc-400">

            <Link
              href="/"
              className="transition hover:text-amber-300"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="transition hover:text-amber-300"
            >
              About
            </Link>

            <Link
              href="/services"
              className="transition hover:text-amber-300"
            >
              Services
            </Link>

            <Link
              href="/consultation"
              className="transition hover:text-amber-300"
            >
              Consultation
            </Link>

          </div>

        </div>

      </footer>

    </main>
  );
}