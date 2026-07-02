"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Lock,
  Camera,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function ProfilePage() {
const [profile, setProfile] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  pinCode: "",
});

useEffect(() => {
  setProfile({
    firstName: sessionStorage.getItem("firstName") || "",
    lastName: sessionStorage.getItem("lastName") || "",
    email: sessionStorage.getItem("email") || "",
    phone: sessionStorage.getItem("phone") || "",
    address: "",
    city: "",
    state: "",
    pinCode: "",
  });
}, []);
  return (
    <main className="min-h-screen bg-zinc-950 text-white overflow-hidden">

      {/* Background */}

      <div className="fixed inset-0 pointer-events-none">

        <div className="absolute -top-44 -left-32 h-[520px] w-[520px] rounded-full bg-amber-500/5 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-[650px] w-[650px] rounded-full bg-yellow-500/5 blur-3xl" />

      </div>

      {/* Hero */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="max-w-4xl">

            <p className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-300">

              <Sparkles size={14} />

              My Account

            </p>

            <h1 className="mt-8 text-5xl font-light sm:text-6xl lg:text-7xl">

              Manage
              <span className="text-amber-400">
                {" "}Your Profile
              </span>

            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

              Update your personal information,
              keep your contact details current,
              and manage your account securely.

            </p>

          </div>

        </div>

      </section>

      {/* Profile */}

      <section className="relative z-10">

        <div className="mx-auto max-w-7xl px-6 pb-24">

          <div className="grid gap-10 lg:grid-cols-[350px_1fr]">

            {/* LEFT CARD */}

            <div className="rounded-[32px] border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-xl">

              <div className="flex flex-col items-center">

                <div className="relative">

                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-amber-400/40">

                    <Image
                      src="/profile/default-avatar.jpg"
                      alt="Profile"
                      fill
                      className="object-cover"
                    />

                  </div>

                  <button className="absolute bottom-2 right-2 rounded-full bg-amber-400 p-3 text-black transition hover:bg-amber-300">

                    <Camera size={18} />

                  </button>

                </div>

                <h2 className="mt-8 text-3xl font-light">

                  {profile.firstName} {profile.lastName}

                </h2>

                <p className="mt-2 text-zinc-400">

                  {profile.email}

                </p>

                <div className="mt-8 w-full space-y-5">

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">

                    <Mail className="text-amber-400" />

                    <div>

                      <p className="text-xs uppercase tracking-widest text-zinc-500">

                        Email

                      </p>

                      <p className="text-sm">

                        {profile.email}

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">

                    <Phone className="text-amber-400" />

                    <div>

                      <p className="text-xs uppercase tracking-widest text-zinc-500">

                        Phone

                      </p>

                      <p className="text-sm">

                        {profile.phone}

                      </p>

                    </div>

                  </div>

                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 p-4">

                    <MapPin className="text-amber-400" />

                    <div>

                      <p className="text-xs uppercase tracking-widest text-zinc-500">

                        Location

                      </p>

                      <p className="text-sm">

                        Hyderabad, India

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="space-y-8">

              {/* ================= PERSONAL INFORMATION ================= */}

              <div className="rounded-[32px] border border-white/10 bg-zinc-900/40 p-10 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <User className="text-amber-400" />

                  <h2 className="text-3xl font-light">

                    Personal Information

                  </h2>

                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2">

                  <div>

                    <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                      First Name

                    </label>

                    <input
                      value={profile.firstName}
onChange={(e)=>
setProfile({
...profile,
firstName:e.target.value
})
}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                    />

                  </div>

                  <div>

                    <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                      Last Name

                    </label>

                    <input
                      value={profile.lastName}
onChange={(e)=>
setProfile({
...profile,
lastName:e.target.value
})
}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                    />

                  </div>

                  <div>

                    <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                      Email Address

                    </label>

                    <input
                     value={profile.email}
onChange={(e)=>
setProfile({
...profile,
email:e.target.value
})
}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                    />

                  </div>

                  <div>

                    <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                      Phone Number

                    </label>

                    <input
                      value={profile.phone}
onChange={(e)=>
setProfile({
...profile,
phone:e.target.value
})
}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                    />

                  </div>

                </div>

                <button className="mt-10 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300">

                  Save Personal Information

                </button>

              </div>

              {/* ================= ADDRESS ================= */}

              <div className="rounded-[32px] border border-white/10 bg-zinc-900/40 p-10 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <MapPin className="text-amber-400" />

                  <h2 className="text-3xl font-light">

                    Address Information

                  </h2>

                </div>

                <div className="mt-10 space-y-6">

                  <div>

                    <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                      Address

                    </label>

                    <input
                      defaultValue="123 Luxury Street"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                    />

                  </div>

                  <div className="grid gap-6 md:grid-cols-3">

                    <div>

                      <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                        City

                      </label>

                      <input
                        defaultValue="Hyderabad"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                      />

                    </div>

                    <div>

                      <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                        State

                      </label>

                      <input
                        defaultValue="Telangana"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                      />

                    </div>

                    <div>

                      <label className="mb-3 block text-sm uppercase tracking-widest text-zinc-500">

                        PIN Code

                      </label>

                      <input
                        defaultValue="500001"
                        className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                      />

                    </div>

                  </div>

                </div>

                <button className="mt-10 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300">

                  Save Address

                </button>

              </div>

                            {/* ================= SECURITY ================= */}

              <div className="rounded-[32px] border border-white/10 bg-zinc-900/40 p-10 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <Lock className="text-amber-400" />

                  <h2 className="text-3xl font-light">

                    Security

                  </h2>

                </div>

                <p className="mt-5 max-w-2xl text-zinc-400 leading-8">

                  Keep your account secure by updating your password regularly.
                  We recommend using a strong password with uppercase letters,
                  lowercase letters, numbers, and special characters.

                </p>

                <div className="mt-10 grid gap-6">

                  <input
                    type="password"
                    placeholder="Current Password"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                  />

                  <input
                    type="password"
                    placeholder="New Password"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                  />

                  <input
                    type="password"
                    placeholder="Confirm New Password"
                    className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 outline-none transition focus:border-amber-400"
                  />

                </div>

                <button className="mt-10 rounded-full bg-amber-400 px-8 py-4 font-semibold text-black transition hover:bg-amber-300">

                  Change Password

                </button>

              </div>

              {/* ================= ACCOUNT ACTIONS ================= */}

              <div className="rounded-[32px] border border-red-500/20 bg-red-500/5 p-10">

                <h2 className="text-3xl font-light text-red-300">

                  Account Actions

                </h2>

                <p className="mt-5 max-w-2xl leading-8 text-zinc-400">

                  You can log out of your account or permanently delete it.
                  Deleting your account cannot be undone.

                </p>

                <div className="mt-10 flex flex-wrap gap-5">

                  <button
                    className="rounded-full border border-white/10 px-8 py-4 transition hover:border-amber-400 hover:text-amber-300"
                  >

                    Logout

                  </button>

                  <button
                    className="rounded-full bg-red-600 px-8 py-4 font-semibold transition hover:bg-red-500"
                  >

                    Delete Account

                  </button>

                </div>

              </div>

              {/* ================= CTA ================= */}

              <div className="overflow-hidden rounded-[36px] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-zinc-900 to-black p-12 text-center">

                <p className="text-sm uppercase tracking-[0.35em] text-amber-300">

                  Thank You For Choosing

                </p>

                <h2 className="mt-6 text-5xl font-light">

                  Sreenidhi
                  <span className="text-amber-400">

                    {" "}Interiors

                  </span>

                </h2>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

                  Your profile helps us personalize your experience and
                  makes booking future consultations even faster.

                </p>

                <div className="mt-12">

                  <Link
                    href="/consultation"
                    className="inline-flex items-center gap-3 rounded-full bg-amber-400 px-10 py-5 font-semibold text-black transition hover:bg-amber-300"
                  >

                    Book Consultation

                    <ArrowRight size={20} />

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}