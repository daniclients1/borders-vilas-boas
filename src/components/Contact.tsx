"use client";

import { useState } from "react";
import { MapPin, ArrowUpRight } from "lucide-react";
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

            <div className="mt-8 divide-y divide-cream-50/8">
              {/* WhatsApp */}
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 transition-opacity hover:opacity-80"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#1FA855]">
                  <WhatsAppIcon className="h-5 w-5 text-white" />
                </span>
                <div className="flex-1">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-widest2 text-sage-400">
                    WhatsApp
                  </span>
                  <span className="block font-semibold text-cream-50">
                    {site.whatsapp.display}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-cream-50/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream-50/70" />
              </a>

              {/* Instagram — gradiente oficial no fundo, ícone branco */}
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 py-5 transition-opacity hover:opacity-80"
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #833AB4 0%, #C13584 35%, #FD1D1D 70%, #FCAF45 100%)",
                  }}
                >
                  <InstagramIcon className="h-5 w-5 text-white" />
                </span>
                <div className="flex-1">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-widest2 text-sage-400">
                    Instagram
                  </span>
                  <span className="block font-semibold text-cream-50">
                    {site.instagram.handle}
                  </span>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-cream-50/30 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cream-50/70" />
              </a>

              {/* Endereço */}
              <div className="flex items-start gap-4 py-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sage-700/60">
                  <MapPin className="h-5 w-5 text-sage-300" />
                </span>
                <div>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-widest2 text-sage-400">
                    Endereço
                  </span>
                  <span className="block font-semibold text-cream-50">
                    {site.address.street}
                  </span>
                  <span className="block text-sm text-cream-100/70">
                    {site.address.neighborhood} — {site.address.city}
                  </span>
                  <span className="block text-sm text-cream-100/50">
                    {site.address.zip}
                  </span>
                </div>
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
            <div className="h-64 sm:h-96">
              <iframe
                title="Localização Borders Vilas Boas"
                src={`https://maps.google.com/maps?q=${site.address.mapsQuery}&hl=pt-BR&z=15&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
