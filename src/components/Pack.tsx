"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Photo } from "./ui/Photo";
import { pack } from "@/lib/site";
import { cn } from "@/lib/utils";

const photoVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 50 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -50 }),
};

const infoVariants = {
  enter: { opacity: 0, y: 14 },
  center: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
};

const transition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

export function Pack() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (i: number) => {
    if (i === active) return;
    setDir(i > active ? 1 : -1);
    setActive(i);
  };

  const dog = pack[active];

  return (
    <section id="plantel" className="scroll-mt-20 bg-cream-50">
      {/* Heading */}
      <Container className="pb-8 pt-14 sm:pt-16 lg:pb-12 lg:pt-20">
        <SectionHeading
          eyebrow="Nosso plantel"
          title="Conheça quem dá vida à Borders Vilas Boas"
          description="Cada um com seu nome, seu olhar e seu jeitinho — são eles que cuidam, brincam e dão origem aos nossos filhotes."
        />
      </Container>

      {/* ══════════ MOBILE ══════════════════════════════════════ */}
      <div className="lg:hidden">
        {/* Tabs em pílula */}
        <div
          className="flex gap-2 overflow-x-auto px-5 pb-5"
          role="tablist"
          aria-label="Selecionar cão"
        >
          {pack.map((d, i) => (
            <button
              key={d.name}
              type="button"
              role="tab"
              aria-selected={i === active}
              onClick={() => go(i)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700",
                i === active
                  ? "bg-forest-800 text-cream-50 shadow-soft"
                  : "bg-forest-900/8 text-forest-800 hover:bg-forest-900/12",
              )}
            >
              {d.name}
            </button>
          ))}
        </div>

        {/* Foto */}
        <div className="relative aspect-[3/4] max-h-[72vh] overflow-hidden">
          <AnimatePresence custom={dir}>
            <motion.div
              key={`m-photo-${active}`}
              custom={dir}
              variants={photoVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0"
            >
              <Photo fill tone={dog.tone} scrim="bottom" label={null} />
            </motion.div>
          </AnimatePresence>

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-forest-900/88 via-forest-900/45 to-transparent"
            aria-hidden
          />

          <div className="absolute inset-x-0 bottom-0 p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={`m-info-${active}`}
                variants={infoVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ...transition, delay: 0.1 }}
              >
                <span className="text-[0.62rem] font-semibold uppercase tracking-widest2 text-sage-300">
                  {dog.role} · {dog.coat}
                </span>
                <h3 className="mt-1 font-display text-4xl text-cream-50">
                  {dog.name}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm font-medium text-cream-100/85">
                  <Sparkles className="h-4 w-4 text-sage-300" />
                  {dog.trait}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bio abaixo da foto */}
        <div className="bg-cream-50 px-6 py-6">
          <AnimatePresence mode="wait">
            <motion.p
              key={`m-bio-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="text-base leading-relaxed text-ink/70"
            >
              {dog.bio}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      {/* ══════════ DESKTOP ═════════════════════════════════════ */}
      <div className="hidden lg:block">
        <Container className="pb-16 lg:pb-20">
          <div className="grid grid-cols-2 items-stretch gap-14 xl:gap-20">

            {/* Foto — contida e arredondada */}
            <div className="relative h-[520px] overflow-hidden rounded-3xl">
              <AnimatePresence custom={dir}>
                <motion.div
                  key={`d-photo-${active}`}
                  custom={dir}
                  variants={photoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="absolute inset-0"
                >
                  <Photo fill tone={dog.tone} scrim="bottom" label={null} />
                </motion.div>
              </AnimatePresence>

              {/* Gradiente suave para o overlay de nome */}
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-forest-900/80 to-transparent"
                aria-hidden
              />

              {/* Nome + role sobre a foto */}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`d-name-${active}`}
                    variants={infoVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ ...transition, delay: 0.1 }}
                  >
                    <span className="text-[0.62rem] font-semibold uppercase tracking-widest2 text-sage-300">
                      {dog.role} · {dog.coat}
                    </span>
                    <h3 className="mt-1 font-display text-4xl text-cream-50">
                      {dog.name}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Painel de informações */}
            <div className="flex flex-col justify-center">
              {/* Contador */}
              <span className="text-[0.62rem] font-semibold uppercase tracking-widest2 text-sage-500">
                {String(active + 1).padStart(2, "0")} / {String(pack.length).padStart(2, "0")}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={`d-info-${active}`}
                  variants={infoVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ ...transition, delay: 0.08 }}
                >
                  <p className="mt-4 flex items-center gap-2 text-sm font-medium text-sage-600">
                    <Sparkles className="h-4 w-4 text-sage-400" />
                    {dog.trait}
                  </p>
                  <p className="mt-5 text-lg leading-relaxed text-ink/70">
                    {dog.bio}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navegação entre os cães */}
              <div className="mt-10 flex flex-wrap gap-2 border-t border-forest-900/10 pt-8">
                {pack.map((d, i) => (
                  <button
                    key={d.name}
                    type="button"
                    onClick={() => go(i)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700",
                      i === active
                        ? "bg-forest-800 text-cream-50 shadow-soft"
                        : "bg-forest-900/8 text-forest-800 hover:bg-forest-900/12",
                    )}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Nota de rodapé */}
      <Container>
        <Reveal>
          <p className="pb-10 pt-2 text-center text-sm text-ink/50 lg:pb-16">
            Em breve, as fotos reais de cada um deles por aqui. 🐾
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
