import {
  Home,
  ScrollText,
  Stethoscope,
  Sparkles,
  HeartHandshake,
  Award,
  PawPrint,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { values } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  Home,
  ScrollText,
  Stethoscope,
  Sparkles,
  HeartHandshake,
  Award,
};

export function Values() {
  return (
    <Section id="diferenciais" className="bg-cream-50">
      <Container>
        <SectionHeading
          eyebrow="Por que a Borders Vilas Boas"
          title="Cuidado de verdade, do primeiro latido ao para sempre"
          description="Cada detalhe é pensado para entregar um Border Collie saudável, equilibrado e pronto para amar a nova família."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => {
            const Icon = icons[v.icon] ?? PawPrint;
            return (
              <Reveal key={v.title} delay={(i % 3) * 0.08}>
                <div className="flex gap-5 border-t border-forest-900/12 pt-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sage-100 text-sage-700">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-forest-800">
                      {v.title}
                    </h3>
                    <p className="mt-2 text-pretty text-sm leading-relaxed text-ink/65">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
