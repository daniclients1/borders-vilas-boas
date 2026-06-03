import { cn } from "@/lib/utils";

/** Um ramo de oliveira (cresce para cima, no eixo -y). Reaproveitado nos dois lados. */
function OliveSprig() {
  return (
    <g fill="#586845">
      <path
        d="M0 0 Q -5 -26 0 -52"
        stroke="#586845"
        strokeWidth="2.2"
        fill="none"
        strokeLinecap="round"
      />
      <ellipse cx="-7" cy="-9" rx="3" ry="7.2" transform="rotate(-52 -7 -9)" />
      <ellipse cx="-8" cy="-23" rx="3.1" ry="7.4" transform="rotate(-50 -8 -23)" />
      <ellipse cx="-6.5" cy="-37" rx="2.8" ry="6.6" transform="rotate(-46 -6.5 -37)" />
      <ellipse cx="7" cy="-15" rx="3" ry="7.2" transform="rotate(52 7 -15)" />
      <ellipse cx="8" cy="-29" rx="3.1" ry="7.4" transform="rotate(50 8 -29)" />
      <ellipse cx="6.5" cy="-42" rx="2.8" ry="6.4" transform="rotate(46 6.5 -42)" />
      <ellipse cx="0" cy="-53" rx="2.6" ry="6.6" />
    </g>
  );
}

/**
 * Selo da marca — recriação vetorial do logo (badge sálvia + creme +
 * Border Collie + texto curvo + ramos de oliveira). Vetor = nítido em
 * qualquer tamanho. Refine com base no arquivo original em /public quando
 * disponível.
 */
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
    <svg
      viewBox="0 0 240 240"
      role="img"
      aria-label={title}
      className={className}
      style={style}
    >
      <defs>
        <path id="bm-top" d="M 30 120 A 90 90 0 0 1 210 120" fill="none" />
        <path id="bm-bottom" d="M 36 120 A 84 84 0 0 0 204 120" fill="none" />
      </defs>

      {/* aros do selo */}
      <circle cx="120" cy="120" r="118" fill="#3A4733" />
      <circle cx="120" cy="120" r="113" fill="#7F9265" />
      <circle
        cx="120"
        cy="120"
        r="83"
        fill="#F5EFE2"
        stroke="#3A4733"
        strokeWidth="3"
      />

      {/* texto curvo */}
      <text
        fill="#26331E"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={700}
        letterSpacing="7"
        fontSize="23"
      >
        <textPath href="#bm-top" startOffset="50%" textAnchor="middle">
          BORDERS
        </textPath>
      </text>
      <text
        fill="#26331E"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontWeight={700}
        letterSpacing="5"
        fontSize="18"
      >
        <textPath href="#bm-bottom" startOffset="50%" textAnchor="middle">
          VILAS BOAS
        </textPath>
      </text>

      {/* ramos de oliveira flanqueando as laterais (vãos entre os textos) */}
      <g transform="translate(42 152) rotate(-12) scale(0.9)">
        <OliveSprig />
      </g>
      <g transform="translate(198 152) rotate(12) scale(0.9)">
        <OliveSprig />
      </g>

      {/* Border Collie */}
      <g transform="translate(120 122)">
        {/* orelhas */}
        <ellipse
          cx="-31"
          cy="-33"
          rx="12"
          ry="20"
          fill="#26261F"
          transform="rotate(-26 -31 -33)"
        />
        <ellipse
          cx="31"
          cy="-33"
          rx="12"
          ry="20"
          fill="#26261F"
          transform="rotate(26 31 -33)"
        />
        {/* cabeça */}
        <ellipse cx="0" cy="-4" rx="40" ry="38" fill="#26261F" />
        {/* faixa branca (blaze) */}
        <path
          d="M 0 -40 C 11 -20 11 -2 8 16 C 5 30 -5 30 -8 16 C -11 -2 -11 -20 0 -40 Z"
          fill="#F7F4EC"
        />
        {/* focinho branco */}
        <ellipse cx="0" cy="22" rx="19" ry="16" fill="#F7F4EC" />
        {/* sobrancelhas tan (toque tricolor) */}
        <ellipse cx="-15" cy="-15" rx="4" ry="2.6" fill="#A87F3F" transform="rotate(-18 -15 -15)" />
        <ellipse cx="15" cy="-15" rx="4" ry="2.6" fill="#A87F3F" transform="rotate(18 15 -15)" />
        {/* olhos */}
        <ellipse cx="-18" cy="-6" rx="5.5" ry="6.5" fill="#6B4B2A" />
        <ellipse cx="18" cy="-6" rx="5.5" ry="6.5" fill="#6B4B2A" />
        <circle cx="-16.5" cy="-8" r="1.6" fill="#F7F4EC" />
        <circle cx="19.5" cy="-8" r="1.6" fill="#F7F4EC" />
        {/* nariz */}
        <ellipse cx="0" cy="15" rx="6.5" ry="5.5" fill="#26261F" />
        {/* boca sorridente */}
        <path
          d="M 0 20 q -7 7 -13 3 M 0 20 q 7 7 13 3"
          stroke="#26261F"
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* linguinha */}
        <path d="M -4.5 24 q 4.5 11 9 0 z" fill="#E29A9A" />
      </g>
    </svg>
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
