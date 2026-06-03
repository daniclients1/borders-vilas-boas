"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Photo } from "./ui/Photo";
import { testimonials } from "@/lib/site";
import { cn } from "@/lib/utils";

const N = testimonials.length;
const photoTones = ["sage", "tan", "cream", "forest", "sage", "tan"] as const;

/** Distância circular (mais curta) entre o índice i e o ativo. */
function circularOffset(i: number, active: number) {
  let d = (((i - active) % N) + N) % N; // 0..N-1
  if (d > N / 2) d -= N;
  return d;
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [vw, setVw] = useState(1280);
  const reduce = useReducedMotion();
  const paused = useRef(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % N);
    }, 6000);
    return () => clearInterval(id);
  }, [reduce]);

  const compact = vw < 640;
  const W = compact ? 266 : 312;
  const H = compact ? 444 : 462;
  const spacing = compact ? 162 : 230;

  const go = (dir: number) => setActive((a) => (a + dir + N) % N);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    paused.current = true;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) go(diff > 0 ? 1 : -1);
    touchStartX.current = null;
    paused.current = false;
  };

  return (
    <Section id="depoimentos" className="overflow-hidden bg-cream-100">
      <Container>
        <SectionHeading
          eyebrow="Depoimentos"
          title="Famílias que já levaram um Border pra casa"
          description="Histórias de quem encontrou um companheiro para a vida na Borders Vilas Boas."
        />
      </Container>

      <div
        className="relative mx-auto mt-12"
        style={{ height: H + 24 }}
        onMouseEnter={() => (paused.current = true)}
        onMouseLeave={() => (paused.current = false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        role="group"
        aria-roledescription="carrossel de depoimentos"
        aria-label="Depoimentos de famílias"
      >
        {testimonials.map((t, i) => {
          const offset = circularOffset(i, active);
          const abs = Math.abs(offset);
          const visible = abs <= 2;
          const isCenter = offset === 0;
          const tilt = i % 2 === 0 ? "rotate-[-2.2deg]" : "rotate-[2.2deg]";
          return (
            <motion.figure
              key={t.name}
              className={cn(
                "absolute left-1/2 top-1/2 flex flex-col items-center overflow-hidden rounded-3xl border border-forest-900/5 bg-white px-6 pb-7 pt-8 text-center",
                isCenter ? "shadow-lift" : "shadow-soft",
                !isCenter && visible && "cursor-pointer",
              )}
              style={{
                width: W,
                height: H,
                pointerEvents: visible ? "auto" : "none",
              }}
              initial={false}
              animate={{
                x: -W / 2 + offset * spacing,
                y: -H / 2,
                scale: abs === 0 ? 1 : abs === 1 ? 0.84 : 0.68,
                opacity: visible ? (abs === 0 ? 1 : abs === 1 ? 0.85 : 0.45) : 0,
                filter:
                  abs === 0 ? "blur(0px)" : abs === 1 ? "blur(2px)" : "blur(4px)",
                zIndex: 30 - abs,
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={!isCenter && visible ? () => setActive(i) : undefined}
              aria-hidden={!isCenter}
            >
              {/* Foto estilo Polaroid (substitua pela foto real da família) */}
              <div
                className={cn(
                  "bg-white p-2 pb-5 shadow-lift ring-1 ring-forest-900/5",
                  tilt,
                )}
              >
                <Photo
                  ratio="1 / 1"
                  tone={photoTones[i % photoTones.length]}
                  label={null}
                  rounded="rounded-none"
                  className="w-24 sm:w-28"
                />
              </div>

              <div className="mt-5 flex gap-0.5 text-tan-400" aria-label="5 de 5 estrelas">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>

              <blockquote className="mt-3 line-clamp-5 text-pretty text-[0.92rem] leading-relaxed text-ink/75">
                “{t.quote}”
              </blockquote>

              <figcaption className="mt-auto w-full border-t border-forest-900/10 pt-4">
                <span className="block font-semibold text-forest-800">
                  {t.name}
                </span>
                <span className="block text-xs text-ink/55">
                  {t.role} · {t.location}
                </span>
              </figcaption>
            </motion.figure>
          );
        })}

        {/* Fades nas bordas — dissolvem os cards laterais */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-40 w-14 bg-gradient-to-r from-cream-100 to-transparent sm:w-28"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-40 w-14 bg-gradient-to-l from-cream-100 to-transparent sm:w-28"
          aria-hidden
        />
      </div>

      {/* Controles */}
      <Container className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Depoimento anterior"
          className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/15 text-forest-800 transition-colors hover:bg-forest-800/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ir para o depoimento ${i + 1}`}
              aria-current={i === active}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                i === active
                  ? "w-6 bg-sage-500"
                  : "w-2 bg-forest-900/20 hover:bg-forest-900/40",
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próximo depoimento"
          className="grid h-11 w-11 place-items-center rounded-full border border-forest-900/15 text-forest-800 transition-colors hover:bg-forest-800/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </Container>
    </Section>
  );
}
