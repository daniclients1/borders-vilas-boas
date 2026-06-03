"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./BrandMark";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Button } from "./ui/Button";
import { navLinks, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const leftLinks = navLinks.slice(0, 3);
const rightLinks = navLinks.slice(3);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      // Atualizações idempotentes: só re-renderiza quando o valor muda.
      setScrolled((p) => (y > 24 === p ? p : y > 24));
      setHidden((p) => {
        if (y <= 24) return false; // no topo, sempre visível
        if (y > lastY.current + 4) return true; // descendo → esconde
        if (y < lastY.current - 4) return false; // subindo → mostra
        return p;
      });
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Vira "pílula" de vidro fosco quando rolado (ou com o menu aberto).
  const pill = scrolled || open;
  // Esconde ao descer; reaparece ao subir (não esconde com o menu aberto).
  const hideHeader = hidden && !open;

  const linkCls =
    "rounded-full px-2.5 py-2 text-sm font-medium text-cream-50/85 transition-colors hover:bg-white/10 hover:text-white";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-smooth",
        hideHeader && "-translate-y-[120%]",
      )}
    >
      <div className="px-3 sm:px-4">
        <div
          className={cn(
            "mx-auto transition-all duration-300 ease-smooth",
            pill
              ? "mt-3 max-w-4xl rounded-[1.75rem] bg-forest-900/65 shadow-lift ring-1 ring-white/10 backdrop-blur-lg sm:mt-4"
              : "max-w-[1200px]",
          )}
        >
          {/* Barra */}
          <div className="flex h-16 items-center justify-between px-3 sm:px-5 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-6">
            {/* Navegação à esquerda (desktop) */}
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-0.5 lg:flex lg:justify-self-start"
            >
              {leftLinks.map((l) => (
                <a key={l.href} href={l.href} className={linkCls}>
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Logo centralizado no desktop, à esquerda no mobile */}
            <a
              href="#inicio"
              aria-label="Borders Vilas Boas — início"
              className="rounded-xl lg:justify-self-center"
            >
              <Logo markSize={40} tone="light" />
            </a>

            {/* Navegação à direita (desktop) + botão do menu (mobile) */}
            <div className="flex items-center justify-end gap-0.5 lg:justify-self-end">
              <nav
                aria-label="Navegação principal (continuação)"
                className="hidden items-center gap-0.5 lg:flex"
              >
                {rightLinks.map((l) => (
                  <a key={l.href} href={l.href} className={linkCls}>
                    {l.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                className="grid h-11 w-11 place-items-center rounded-full text-cream-50 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream-50 lg:hidden"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Menu mobile — dentro da pílula */}
          <div
            id="mobile-menu"
            className={cn(
              "overflow-hidden transition-[max-height,opacity] duration-300 ease-smooth lg:hidden",
              open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <div className="flex flex-col gap-1 px-3 pb-4 pt-1">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-cream-50/90 transition-colors hover:bg-white/10"
                >
                  {l.label}
                </a>
              ))}
              <Button
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon className="h-4 w-4" /> Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
