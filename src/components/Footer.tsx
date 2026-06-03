import { MapPin } from "lucide-react";
import { InstagramIcon } from "./InstagramIcon";
import { BrandMark } from "./BrandMark";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Container } from "./ui/Container";
import { navLinks, site, waLink } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-cream-100">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1.2fr]">
          <div>
            <span className="inline-flex items-center gap-3">
              <BrandMark style={{ width: 48, height: 48 }} />
              <span className="font-display text-lg font-semibold text-cream-50">
                Borders Vilas Boas
              </span>
            </span>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-cream-100/65">
              Canil familiar de Border Collies. Filhotes criados com amor,
              pedigree e muita socialização.
            </p>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="text-xs font-semibold uppercase tracking-widest2 text-sage-300">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-cream-100/75 transition-colors hover:text-cream-50"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest2 text-sage-300">
              Fale com a gente
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-cream-100/75 transition-colors hover:text-cream-50"
                >
                  <WhatsAppIcon className="h-4 w-4 text-sage-300" />
                  {site.whatsapp.display}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-cream-100/75 transition-colors hover:text-cream-50"
                >
                  <InstagramIcon className="h-4 w-4" branded />
                  {site.instagram.handle}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-cream-100/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-300" />
                <span>
                  <span className="block">{site.address.street}</span>
                  <span className="block opacity-75">{site.address.neighborhood} — {site.address.city}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 pt-6 text-xs text-cream-100/55 sm:flex-row">
          <p>
            © {year} Borders Vilas Boas. Todos os direitos reservados.
          </p>
          <p>Feito com 🤍 para quem ama Border Collies.</p>
        </div>
      </Container>
    </footer>
  );
}
