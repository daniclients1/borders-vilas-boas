import {
  MessageCircle,
  PawPrint,
  BookmarkCheck,
  Heart,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { steps } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  MessageCircle,
  PawPrint,
  BookmarkCheck,
  Heart,
};

export function HowItWorks() {
  return (
    <Section id="como-funciona" className="bg-cream-50">
      <Container>
        <SectionHeading
          eyebrow="Como funciona"
          title="Do primeiro oi até o seu novo melhor amigo"
          description="Um caminho simples e acolhedor, com a gente do seu lado em cada passo."
        />

        <div className="relative mt-16">
          {/* Linha conectora (desktop) */}
          <div
            className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-forest-900/15 lg:block"
            aria-hidden
          />
          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = icons[step.icon] ?? PawPrint;
              return (
                <Reveal key={step.title} delay={(i % 4) * 0.1}>
                  <a
                    href={step.href}
                    aria-label={`${step.title} — ir para a seção`}
                    className="group block rounded-2xl text-center outline-none focus-visible:ring-2 focus-visible:ring-forest-700 focus-visible:ring-offset-4 focus-visible:ring-offset-cream-50"
                  >
                    <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage-100 text-sage-700 ring-4 ring-cream-50 transition-all duration-300 ease-smooth group-hover:-translate-y-1.5 group-hover:bg-sage-500 group-hover:text-cream-50 group-hover:shadow-lift">
                      <Icon className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="mt-4 block text-xs font-semibold uppercase tracking-widest2 text-sage-600">
                      Passo 0{i + 1}
                    </span>
                    <h3 className="mt-1 inline-flex items-center gap-1 font-display text-xl text-forest-800 transition-colors duration-300 group-hover:text-sage-700">
                      {step.title}
                      <ArrowUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </h3>
                    <p className="mx-auto mt-2 max-w-xs text-pretty text-sm leading-relaxed text-ink/65">
                      {step.text}
                    </p>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
