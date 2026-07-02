"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "919347017561";

  const message =
    "Hello Sreenidhi Interiors! I would like to know more about your interior design services.";

  const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] animate-bounce">
        <MessageCircle
          className="text-white"
          size={34}
          strokeWidth={2.3}
        />
      </div>

      <span className="absolute right-20 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}