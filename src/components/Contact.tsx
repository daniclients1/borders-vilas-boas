"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { site, waLink } from "@/lib/site";
import { Container } from "./ui/Container";
import { Photo } from "./ui/Photo";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const composed = `Olá! Meu nome é ${name.trim() || "[seu nome]"}. ${
    message.trim() ||
    "Gostaria de saber mais sobre os Border Collies da Borders Vilas Boas."
  }`;

  const send = () =>
    window.open(waLink(composed), "_blank", "noopener,noreferrer");

  return (
    <section
      id="contato"
      className="relative isolate scroll-mt-20 overflow-hidden"
    >
      <Photo fill tone="forest" scrim="full" label={null} />

      <Container className="relative z-10 py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Convite + canais */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest2 text-sage-300">
              <span className="h-px w-7 bg-sage-400" aria-hidden />
              Contato
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream-50 sm:text-4xl lg:text-5xl">
              Vamos encontrar o seu Border Collie?
            </h2>
            <p className="mt-5 max-w-md text-pretty text-lg leading-relaxed text-cream-100/85">
              Chama a gente no WhatsApp ou no Instagram. Será um prazer
              apresentar nossos cães e tirar todas as suas dúvidas.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-cream-50/10 transition-colors hover:bg-white/10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#1FA855] text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest2 text-cream-100/60">
                    WhatsApp
                  </span>
                  <span className="font-semibold text-cream-50">
                    {site.whatsapp.display}
                  </span>
                </span>
              </a>

              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-cream-50/10 transition-colors hover:bg-white/10"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-white/10">
                  <InstagramIcon className="h-6 w-6" branded />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest2 text-cream-100/60">
                    Instagram
                  </span>
                  <span className="font-semibold text-cream-50">
                    {site.instagram.handle}
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4 p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/10 text-sage-300">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest2 text-cream-100/60">
                    Endereço
                  </span>
                  <span className="font-semibold text-cream-50">
                    {site.address.street}
                  </span>
                  <span className="block text-sm text-cream-100/70">
                    {site.address.neighborhood} — {site.address.city}
                  </span>
                  <span className="block text-sm text-cream-100/50">
                    {site.address.zip}
                  </span>
                </span>
              </div>
            </div>
          </div>

          {/* Compositor de mensagem */}
          <Reveal>
            <div className="rounded-[2rem] bg-cream-50/95 p-8 shadow-lift backdrop-blur sm:p-10">
              <h3 className="font-display text-2xl text-forest-800">
                Manda uma mensagem rapidinha
              </h3>
              <p className="mt-2 text-sm text-ink/60">
                Preencha e a gente abre o WhatsApp já com o seu recado pronto.
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-forest-800"
                  >
                    Seu nome
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="w-full rounded-2xl border border-forest-900/10 bg-white px-4 py-3 text-forest-900 placeholder:text-ink/40 transition-colors focus:border-sage-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-msg"
                    className="mb-1.5 block text-sm font-medium text-forest-800"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tenho interesse em um filhote de Border Collie…"
                    className="w-full resize-none rounded-2xl border border-forest-900/10 bg-white px-4 py-3 text-forest-900 placeholder:text-ink/40 transition-colors focus:border-sage-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage-400"
                  />
                </div>
                <Button
                  onClick={send}
                  variant="whatsapp"
                  size="lg"
                  className="w-full"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Enviar pelo WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Google Maps */}
        <Reveal>
          <div className="mt-14 overflow-hidden rounded-[2rem] shadow-lift ring-1 ring-cream-50/10">
            <iframe
              title="Localização Borders Vilas Boas"
              src={`https://maps.google.com/maps?q=${site.address.mapsQuery}&hl=pt-BR&z=15&output=embed`}
              width="100%"
              height="380"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block border-0"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
