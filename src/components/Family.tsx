import { PawPrint } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { ZoomReveal } from "./ui/ZoomReveal";
import { Counter } from "./ui/Counter";

type Stat = { v: string; k?: string; count?: number; suffix?: string };

const stats: Stat[] = [
  { count: 100, suffix: "%", v: "criados dentro de casa" },
  { k: "Pedigree", v: "em todos os filhotes" },
  { k: "Suporte", v: "para toda a vida" },
];

export function Family() {
  return (
    <section id="familia" className="scroll-mt-20 bg-cream-100/60">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="order-2 flex items-center lg:order-1">
          <div className="mx-auto w-full max-w-xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
            <Reveal>
              <span className="eyebrow">
                <span className="h-px w-7 bg-sage-400" aria-hidden />
                A família por trás das patinhas
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl leading-tight text-forest-800 sm:text-4xl lg:text-[2.75rem]">
                Criados no meio do nosso movimento
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-5 space-y-4 text-pretty text-base leading-relaxed text-ink/70 sm:text-lg">
                <p>
                  Os nossos Border Collies não vivem isolados — eles dormem
                  pertinho, brincam no quintal e crescem no meio da rotina da
                  casa. Cada cão tem nome, jeito próprio e um lugar no coração da
                  família.
                </p>
                <p>
                  Quando um filhote chega à sua nova casa, continuamos por perto:
                  acompanhamos cada família para sempre, com orientação sobre
                  adestramento, alimentação e cuidados.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-forest-900/10 pt-8">
                {stats.map((s) => (
                  <div key={s.v}>
                    <dt className="font-display text-2xl text-forest-800">
                      {s.count != null ? (
                        <Counter to={s.count} suffix={s.suffix ?? ""} />
                      ) : (
                        s.k
                      )}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink/60">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>

        <div className="relative order-1 min-h-[56vh] overflow-hidden lg:order-2 lg:min-h-[640px]">
          <ZoomReveal className="absolute inset-0">
            <img
              src="/familia.jpg"
              alt="Família com Border Collie da Borders Vilas Boas"
              className="h-full w-full object-cover [object-position:50%_25%]"
            />
          </ZoomReveal>
          <div className="absolute bottom-6 right-6 max-w-[17rem] rounded-3xl border border-white/10 bg-forest-900/80 p-6 shadow-lift backdrop-blur-md sm:bottom-8 sm:right-8">
            <PawPrint className="h-5 w-5 text-sage-300" />
            <p className="mt-3 font-display text-lg italic leading-snug text-cream-50">
              &ldquo;Aqui cada filhote nasce cercado de gente que ama.&rdquo;
            </p>
            <span className="mt-3 block text-xs font-semibold uppercase tracking-widest2 text-sage-300/80">
              Borders Vilas Boas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
