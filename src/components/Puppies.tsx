import { Check } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { Photo } from "./ui/Photo";
import { Button } from "./ui/Button";
import { puppyIncludes, waLink } from "@/lib/site";

const puppyMessage =
  "Olá! Gostaria de saber sobre a disponibilidade de filhotes de Border Collie da Borders Vilas Boas. 🐾";

export function Puppies() {
  return (
    <section
      id="filhotes"
      className="relative isolate scroll-mt-20 overflow-hidden"
    >
      <Photo fill tone="forest" scrim="left" label={null} />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-sage-300">
              <span className="h-px w-7 bg-sage-400" aria-hidden />
              Filhotes
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
              Um novo melhor amigo a caminho
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-cream-100/85">
              Nossas ninhadas são planejadas com carinho e acompanhadas de perto.
              Cada filhote leva uma base de amor, saúde e socialização — e você,
              total tranquilidade.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {puppyIncludes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sage-500 text-cream-50">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-cream-100/90">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                href={waLink(puppyMessage)}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                size="lg"
              >
                <WhatsAppIcon className="h-5 w-5" /> Consultar disponibilidade
              </Button>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-cream-100/80">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-sage-300" />
                Ninhadas sob consulta
              </span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
