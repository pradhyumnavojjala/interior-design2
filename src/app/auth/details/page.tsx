"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  function validate() {
    const newErrors = {
      firstName: "",
      lastName: "",
      phone: "",
    };

    let valid = true;

    if (!form.firstName.trim()) {
      newErrors.firstName = "First name is required.";
      valid = false;
    }

    if (!form.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
      valid = false;
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required.";
      valid = false;
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }

 async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  if (!validate()) return;

  const email = sessionStorage.getItem("email");

  if (!email) {
    router.replace("/auth");
    return;
  }

  try {
    setLoading(true);

    const response = await fetch("/api/auth/create-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message);
      return;
    }

    // Temporary session
    sessionStorage.setItem("authenticated", "true");

    sessionStorage.setItem("firstName", form.firstName);
sessionStorage.setItem("lastName", form.lastName);
sessionStorage.setItem("email", email);
sessionStorage.setItem("phone", form.phone);
sessionStorage.setItem("authenticated", "true");


    // Don't allow going back to Details
    router.replace("/consultation");
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
}

  return (
    <main className="min-h-screen bg-zinc-950 flex items-center justify-center px-6">

      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-zinc-900/40 p-10 backdrop-blur-xl">

        <Link
          href="/auth"
          className="text-sm text-amber-400 hover:text-amber-300"
        >
          ← Back
        </Link>

        <div className="mt-6">

          <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-300">
            Step 3 of 3
          </span>

          <h1
            className="mt-6 text-4xl text-white"
            style={{
              fontFamily:
                "var(--font-heading), var(--font-playfair), serif",
            }}
          >
            Complete Your Profile
          </h1>

          <p className="mt-3 text-zinc-400">
            We need a few details before continuing.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-5"
        >

          <div>

            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">
              First Name
            </label>

            <input
              value={form.firstName}
              onChange={(e) =>
                setForm({
                  ...form,
                  firstName: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-amber-400"
            />

            {errors.firstName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.firstName}
              </p>
            )}

          </div>

          <div>

            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">
              Last Name
            </label>

            <input
              value={form.lastName}
              onChange={(e) =>
                setForm({
                  ...form,
                  lastName: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-amber-400"
            />

            {errors.lastName && (
              <p className="mt-2 text-sm text-red-400">
                {errors.lastName}
              </p>
            )}

          </div>

          <div>

            <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-zinc-400">
              Phone Number
            </label>

            <input
              type="tel"
              value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-white outline-none focus:border-amber-400"
            />

            {errors.phone && (
              <p className="mt-2 text-sm text-red-400">
                {errors.phone}
              </p>
            )}

          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full rounded-xl bg-amber-400 py-4 font-semibold uppercase tracking-[0.2em] text-black transition hover:bg-amber-300 disabled:opacity-70"
          >
            {loading ? "Please wait..." : "Continue"}
          </button>

        </form>

      </div>

    </main>
  );
}