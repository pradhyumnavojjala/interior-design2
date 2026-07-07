"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
const [firstName, setFirstName] = useState("");
const [email, setEmail] = useState("");

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const authData = localStorage.getItem("auth");
  
    if (!authData) return;
  
    const auth = JSON.parse(authData);
  
    const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;
  
    if (
      auth.authenticated &&
      Date.now() - auth.loginTime < FIVE_DAYS
    ) {
      setLoggedIn(true);
      setEmail(auth.email || "");
      setFirstName(auth.firstName || "");
    } else {
      localStorage.removeItem("auth");
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setProfileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleLogout() {
    localStorage.removeItem("auth");
    window.location.href = "/";
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full animate-fade-in">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mt-4 sm:mt-6 flex h-20 items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 sm:px-8 backdrop-blur-xl">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-light tracking-wide text-white transition hover:text-amber-400"
            style={{
              fontFamily:
                "var(--font-heading), var(--font-playfair), serif",
            }}
          >
            Sreenidhi
            <span className="font-serif italic text-amber-400">
              Interiors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative py-1 text-xs font-medium uppercase tracking-wider text-zinc-200 transition hover:text-amber-400"
              >
                {item.name}

                <span className="absolute -bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-amber-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            <Link
  href={loggedIn ? "/consultation" : "/auth"}
  className="rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-zinc-950 transition hover:scale-105 hover:bg-amber-400"
>
  Book Consultation
</Link>

            <div
              className="relative"
              ref={profileRef}
            >

              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:border-amber-400 hover:text-amber-400"
              >
                {loggedIn && firstName ? (
  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-500 text-lg font-bold text-black">
    {firstName.charAt(0).toUpperCase()}
  </div>
) : (
  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white">
    👤
  </div>
)}
              </button>

              {profileOpen && (

                <div className="absolute right-0 mt-4 w-60 rounded-2xl border border-white/10 bg-zinc-900 p-2 shadow-2xl">

                  {!loggedIn ? (

                    <Link
                      href="/auth"
                      className="block rounded-xl px-4 py-3 text-white transition hover:bg-zinc-800"
                    >
                      Sign In
                    </Link>

                  ) : (

                    <>
                      <div className="mb-2 rounded-xl bg-zinc-800/50 p-4">

  <p className="text-lg font-semibold text-white">
    {firstName}
  </p>

  <p className="mt-1 text-sm text-zinc-400">
    {email}
  </p>

</div>

<div className="my-2 h-px bg-white/10" />

                      <Link
                        href="/profile"
                        className="block rounded-xl px-4 py-3 text-white transition hover:bg-zinc-800"
                      >
                        My Profile
                      </Link>

                      <Link
                        href="/consultation/history"
                        className="block rounded-xl px-4 py-3 text-white transition hover:bg-zinc-800"
                      >
                        My Consultations
                      </Link>

                      <Link
                        href="/settings"
                        className="block rounded-xl px-4 py-3 text-white transition hover:bg-zinc-800"
                      >
                        Settings
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="w-full rounded-xl px-4 py-3 text-left text-red-400 transition hover:bg-zinc-800"
                      >
                        Logout
                      </button>
                    </>

                  )}

                </div>

              )}

            </div>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          >
            <div className="relative flex h-4 w-5 flex-col justify-between">

              <span
                className={`h-px w-full bg-white transition ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition ${
                  isOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-px w-full bg-white transition ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />

            </div>
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-x-4 top-28 rounded-3xl border border-white/10 bg-zinc-950/95 p-8 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          isOpen
            ? "visible opacity-100 scale-100"
            : "invisible opacity-0 scale-95"
        }`}
      >

        <nav className="flex flex-col items-center gap-6">

          {navLinks.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg uppercase tracking-widest text-zinc-200 hover:text-amber-400"
            >
              {item.name}
            </Link>

          ))}

          <div className="my-4 h-px w-full bg-white/10" />

          <Link
            href={loggedIn ? "/consultation" : "/auth"}
            onClick={() => setIsOpen(false)}
            className="w-full rounded-full bg-amber-500 py-4 text-center text-sm font-semibold uppercase tracking-wider text-zinc-950 hover:bg-amber-400"
          >
            Book Consultation
          </Link>

        </nav>

      </div>

    </header>
  );
}