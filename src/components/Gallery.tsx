import { InstagramIcon } from "./InstagramIcon";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Photo } from "./ui/Photo";
import { Button } from "./ui/Button";
import { galleryTiles, site } from "@/lib/site";

function MarqueeRow({
  tiles,
  size,
  reverse = false,
}: {
  tiles: typeof galleryTiles;
  size: "full" | "small";
  reverse?: boolean;
}) {
  const doubled = [...tiles, ...tiles];
  const wClass = size === "full" ? "w-60 sm:w-72" : "w-40 sm:w-48";
  const animClass = reverse ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div className="group relative">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-cream-50 to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-cream-50 to-transparent sm:w-24"
        aria-hidden
      />
      <ul
        className="flex w-max animate-marquee pb-4 group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {doubled.map((tile, i) => {
          const clone = i >= tiles.length;
          return (
            <li key={i} className="mr-4 shrink-0" aria-hidden={clone || undefined}>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={clone ? -1 : undefined}
                className={`group/tile relative block aspect-square ${wClass} overflow-hidden rounded-3xl`}
              >
                <Photo fill tone={tile.tone} scrim="bottom" label={null} />
                <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-cream-50/85 text-forest-800 opacity-0 backdrop-blur transition-opacity duration-300 group-hover/tile:opacity-100">
                  <InstagramIcon className="h-4 w-4" branded />
                </span>
                <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-cream-50">
                  {tile.label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Gallery() {
  const reversed = [...galleryTiles].reverse();

  return (
    <Section id="galeria" className="overflow-hidden bg-cream-50">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="eyebrow justify-center">
          <span className="h-px w-7 bg-sage-400" aria-hidden />
          Galeria
        </span>
        <h2 className="font-display text-3xl leading-tight text-forest-800 sm:text-4xl">
          Acompanhe o dia a dia no Instagram
        </h2>
        <Button
          href={site.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          <InstagramIcon className="h-4 w-4" branded /> {site.instagram.handle}
        </Button>
      </Container>

      <div className="mt-10 flex flex-col gap-4">
        <MarqueeRow tiles={galleryTiles} size="full" />
        <MarqueeRow tiles={reversed} size="small" reverse />
      </div>
    </Section>
  );
}
