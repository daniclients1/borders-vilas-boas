"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "./ui/Container";
import { Photo } from "./ui/Photo";

/**
 * Para ativar o vídeo: coloque o arquivo em /public/hero.mp4
 * (mp4 H.264 recomendado — compatível com todos os navegadores).
 * Formatos extras (webm/ogg) são opcionais para melhor compressão.
 */
const VIDEO_SRC = "/hero-loop.mp4";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] w-full items-center justify-center overflow-hidden"
    >
      {/* Fundo: vídeo em loop (substitui o placeholder quando o arquivo existir) */}
      <div className="absolute inset-0">
        {!reduce ? (
          <video
            src={VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            aria-hidden="true"
            onError={(e) => {
              // Se o vídeo não existir ainda, esconde o elemento silenciosamente.
              (e.target as HTMLVideoElement).style.display = "none";
            }}
          />
        ) : null}

        {/* Placeholder (visível enquanto o vídeo carrega / não existe / reduz-mov) */}
        <Photo
          fill
          tone="forest"
          label={null}
          className="absolute inset-0 -z-10"
        />

        {/* Gradiente de leitura sobre o vídeo */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-forest-900/75 via-forest-900/40 to-forest-900/30"
          aria-hidden
        />
      </div>

      {/* Conteúdo centralizado */}
      <Container className="relative z-10 pt-20 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl"
        >
          <motion.h1
            variants={item}
            className="font-display text-3xl font-black uppercase leading-[1.07] tracking-wide text-cream-50 [text-shadow:0_2px_24px_rgba(0,0,0,0.35)] sm:text-5xl lg:text-6xl"
          >
            Border Collies criados como parte da família
          </motion.h1>
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl font-display text-xl italic text-cream-100/90 [text-shadow:0_1px_12px_rgba(0,0,0,0.4)] sm:text-2xl"
          >
            Pedigree, saúde e muito carinho — no coração de Santa Catarina
          </motion.p>
        </motion.div>
      </Container>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-cream-50/60 transition-colors hover:text-cream-50"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>

      {/* Curva SVG suave — transição do hero para a seção clara */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="block w-full"
          style={{ height: "48px" }}
          aria-hidden="true"
        >
          <path
            d="M0,48 C360,8 1080,8 1440,48 L1440,48 L0,48 Z"
            fill="#FBF8F1"
          />
        </svg>
      </div>
    </section>
  );
}
