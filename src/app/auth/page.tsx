"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import AuthHero from "@/components/auth/AuthHero";
import AuthCard from "@/components/auth/AuthCard";

export default function AuthPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) return;

    try {
      const session = JSON.parse(auth);

      const FIVE_DAYS = 5 * 24 * 60 * 60 * 1000;

      if (
        session.authenticated &&
        Date.now() - session.loginTime < FIVE_DAYS
      ) {
        router.replace("/");
      } else {
        localStorage.removeItem("auth");
      }
    } catch {
      localStorage.removeItem("auth");
    }
  }, [router]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950">
      {/* Ambient Glow */}
      <div className="absolute right-0 top-1/2 z-0 hidden h-[600px] w-full max-w-2xl -translate-y-1/2 bg-radial from-amber-500/[0.02] via-transparent to-transparent blur-3xl lg:block" />

      <div className="relative z-10 grid min-h-screen lg:grid-cols-12">
        <AuthHero />
        <AuthCard />
      </div>
    </main>
  );
}