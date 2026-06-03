"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-cream-50">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="Dúvidas frequentes"
          title="Tudo que você precisa saber"
        />

        <div className="mt-12 border-t border-forest-900/12">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-forest-900/12">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-forest-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-700"
                  >
                    <span className="font-display text-lg text-forest-800">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sage-100 text-sage-700 transition-all duration-300",
                        isOpen && "rotate-45 bg-sage-500 text-cream-50",
                      )}
                    >
                      <Plus className="h-5 w-5" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-12 text-pretty leading-relaxed text-ink/70">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
