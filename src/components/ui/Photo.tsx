import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "forest" | "sage" | "cream" | "tan";
type Scrim = "none" | "bottom" | "full" | "left";

const gradients: Record<Tone, string> = {
  forest:
    "bg-[linear-gradient(135deg,#1F271C_0%,#2C3727_45%,#52613F_100%)]",
  sage: "bg-[linear-gradient(135deg,#52613F_0%,#7F9265_55%,#9AAC7E_100%)]",
  cream:
    "bg-[linear-gradient(135deg,#ECE3D0_0%,#D2DAC1_55%,#E7EBDD_100%)]",
  tan: "bg-[linear-gradient(135deg,#D3B47E_0%,#E4CFA8_55%,#ECE3D0_100%)]",
};

const scrims: Record<Scrim, string> = {
  none: "",
  bottom:
    "bg-gradient-to-t from-forest-900/85 via-forest-900/15 to-transparent",
  full: "bg-gradient-to-t from-forest-900/85 via-forest-900/50 to-forest-900/35",
  left: "bg-gradient-to-r from-forest-900/85 via-forest-900/45 to-transparent",
};

const isDarkTone = (t: Tone) => t === "forest" || t === "sage";

// Textura de patinhas (data-URI, sem colisão de IDs). Clara p/ fundos escuros, escura p/ claros.
const pawLight =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='84' viewBox='0 0 84 84'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Cellipse cx='42' cy='54' rx='12' ry='10'/%3E%3Cellipse cx='25' cy='35' rx='5.5' ry='8'/%3E%3Cellipse cx='36' cy='27' rx='5.5' ry='8.5'/%3E%3Cellipse cx='48' cy='27' rx='5.5' ry='8.5'/%3E%3Cellipse cx='59' cy='35' rx='5.5' ry='8'/%3E%3C/g%3E%3C/svg%3E\")";
const pawDark =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='84' height='84' viewBox='0 0 84 84'%3E%3Cg fill='%232C3727' fill-opacity='0.07'%3E%3Cellipse cx='42' cy='54' rx='12' ry='10'/%3E%3Cellipse cx='25' cy='35' rx='5.5' ry='8'/%3E%3Cellipse cx='36' cy='27' rx='5.5' ry='8.5'/%3E%3Cellipse cx='48' cy='27' rx='5.5' ry='8.5'/%3E%3Cellipse cx='59' cy='35' rx='5.5' ry='8'/%3E%3C/g%3E%3C/svg%3E\")";

type PhotoProps = {
  ratio?: string;
  /** Preenche um pai posicionado (fundo full-bleed) em vez de usar proporção. */
  fill?: boolean;
  tone?: Tone;
  scrim?: Scrim;
  rounded?: string;
  /** Legenda discreta. `null` esconde; `undefined` mostra "Foto em breve". */
  label?: string | null;
  className?: string;
  children?: React.ReactNode;
};

/**
 * Placeholder fotográfico de marca. Gradiente em duotone (verde/creme) +
 * textura de patinhas + brilho + vinheta — parece um tratamento intencional,
 * não uma caixa vazia. Troque por <Image> do next/image (mesma proporção)
 * quando as fotos reais chegarem.
 */
export function Photo({
  ratio = "4 / 5",
  fill = false,
  tone = "sage",
  scrim = "none",
  rounded = "rounded-[1.75rem]",
  label,
  className,
  children,
}: PhotoProps) {
  const dark = isDarkTone(tone);
  return (
    <div
      className={cn(
        "isolate overflow-hidden",
        fill ? "absolute inset-0" : "relative",
        !fill && rounded,
        className,
      )}
      style={fill ? undefined : { aspectRatio: ratio }}
    >
      <div className={cn("absolute inset-0", gradients[tone])} />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: dark ? pawLight : pawDark,
          backgroundSize: "84px 84px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(120% 85% at 22% 12%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(130% 120% at 82% 112%, rgba(0,0,0,0.30), transparent 60%)",
        }}
      />
      {scrim !== "none" && (
        <div className={cn("absolute inset-0", scrims[scrim])} />
      )}
      {label !== null && (
        <div className="absolute inset-0 grid place-content-center gap-2 text-center">
          <Camera
            className={cn(
              "mx-auto h-7 w-7",
              dark ? "text-cream-50/40" : "text-forest-800/30",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "text-[0.62rem] font-semibold uppercase tracking-widest2",
              dark ? "text-cream-50/45" : "text-forest-800/35",
            )}
          >
            {label ?? "Foto em breve"}
          </span>
        </div>
      )}
      {children}
    </div>
  );
}
