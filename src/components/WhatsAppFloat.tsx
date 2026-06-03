"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export function WhatsAppFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className={cn(
        "group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#1FA855] text-white shadow-lift transition-all duration-300 ease-smooth hover:scale-110 hover:bg-[#1b9a4c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1FA855] focus-visible:ring-offset-2",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0",
      )}
    >
      <span className="relative grid h-10 w-10 place-items-center">
        <span className="absolute inset-0 animate-[ping_2.4s_ease-in-out_infinite] rounded-full bg-white/30" />
        <WhatsAppIcon className="relative h-6 w-6" />
      </span>
    </a>
  );
}
