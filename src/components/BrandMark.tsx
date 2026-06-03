import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandMark({
  className,
  style,
  title = "Borders Vilas Boas",
}: {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}) {
  return (
    <span
      className={cn("block overflow-hidden rounded-full", className)}
      style={style}
      role="img"
      aria-label={title}
    >
      <Image
        src="/bordercollielogo.jpeg"
        alt=""
        width={240}
        height={240}
        className="h-full w-full object-cover"
        priority
      />
    </span>
  );
}

/** Selo + nome, para cabeçalho e rodapé. `tone` adapta o texto a fundos claros/escuros. */
export function Logo({
  className,
  markSize = 44,
  showText = true,
  tone = "dark",
}: {
  className?: string;
  markSize?: number;
  showText?: boolean;
  tone?: "dark" | "light";
}) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <BrandMark
        style={{ width: markSize, height: markSize }}
        className="shrink-0 drop-shadow-sm"
      />
      {showText && (
        <span className="leading-none">
          <span
            className={cn(
              "block font-display text-[1.05rem] font-semibold tracking-tight transition-colors",
              light ? "text-cream-50" : "text-forest-800",
            )}
          >
            Borders Vilas Boas
          </span>
          <span
            className={cn(
              "mt-1 block text-[0.6rem] font-semibold uppercase tracking-widest2 transition-colors",
              light ? "text-cream-100/85" : "text-sage-600",
            )}
          >
            Canil de Border Collies
          </span>
        </span>
      )}
    </span>
  );
}
