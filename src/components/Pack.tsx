import { Sparkles } from "lucide-react";
import { Container } from "./ui/Container";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { Photo } from "./ui/Photo";
import { pack } from "@/lib/site";

export function Pack() {
  return (
    <section
      id="plantel"
      className="scroll-mt-20 bg-cream-50 pt-14 pb-10 sm:pt-16 lg:pt-20 lg:pb-14"
    >
      <Container>
        <SectionHeading
          eyebrow="Nosso plantel"
          title="Conheça quem dá vida à Borders Vilas Boas"
          description="Cada um com seu nome, seu olhar e seu jeitinho — são eles que cuidam, brincam e dão origem aos nossos filhotes."
        />
      </Container>

      {/* Retratos verticais de ponta a ponta */}
      <div className="mt-14 grid grid-cols-2 lg:grid-cols-4">
        {pack.map((dog, i) => (
          <Reveal key={dog.name} delay={(i % 4) * 0.08}>
            <article className="group relative aspect-[3/4] overflow-hidden">
              <Photo
                fill
                tone={dog.tone}
                scrim="bottom"
                label={null}
                className="transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                <span className="text-[0.66rem] font-semibold uppercase tracking-widest2 text-sage-200">
                  {dog.role} · {dog.coat}
                </span>
                <h3 className="mt-1 font-display text-3xl text-cream-50 drop-shadow">
                  {dog.name}
                </h3>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-cream-100/90">
                  <Sparkles className="h-4 w-4 text-sage-200" />
                  {dog.trait}
                </p>
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-smooth group-hover:mt-2 group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <span className="overflow-hidden text-sm leading-relaxed text-cream-100/85">
                    {dog.bio}
                  </span>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Container>
        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-ink/55">
            Em breve, as fotos reais de cada um deles por aqui. 🐾
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
