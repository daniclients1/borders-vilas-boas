import Image from "next/image";
import { PawPrint } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { ZoomReveal } from "./ui/ZoomReveal";
import { Button } from "./ui/Button";

export function About() {
  return (
    <section id="sobre" className="scroll-mt-20 bg-cream-50">
      <div className="grid items-stretch lg:grid-cols-2">
        {/* Imagem sangra até a borda esquerda */}
        <div className="relative min-h-[56vh] overflow-hidden lg:min-h-[640px]">
          <ZoomReveal className="absolute inset-0">
            <Image
              src="/sobre.jpg"
              alt="Border Collie da Borders Vilas Boas"
              fill
              className="object-cover [object-position:50%_25%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </ZoomReveal>
        </div>

        {/* Texto */}
        <div className="flex items-center">
          <div className="mx-auto w-full max-w-xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-7 bg-sage-400" aria-hidden />
                Conheça a raça
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight text-forest-800 sm:text-4xl lg:text-[2.75rem]">
                Um companheiro inteligente, leal e cheio de energia
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest2 text-sage-600">
                Família. Pedigree. Saúde.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-ink/70 sm:text-lg">
                <p>
                  O Border Collie é considerado o cão mais inteligente do mundo —
                  ativo, dócil e profundamente ligado à família. Para florescer,
                  ele precisa de convívio, estímulo e muito carinho.
                </p>
                <p>
                  É exatamente isso que oferecemos: filhotes criados dentro de
                  casa, com pedigree, saúde acompanhada de perto e socialização
                  desde os primeiros dias.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8">
                <Button href="#plantel" variant="secondary">
                  <PawPrint className="h-4 w-4" /> Conhecer o plantel
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
