"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="rounded-full border border-white/10 px-6 py-3 text-white transition hover:border-amber-400 hover:text-amber-400"
    >
      ← Back
    </button>
  );
}