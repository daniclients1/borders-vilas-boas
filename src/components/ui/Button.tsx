import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp" | "outline";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-cream-50 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-forest-700 text-cream-50 shadow-soft hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-lift focus-visible:ring-forest-700 active:translate-y-0",
  secondary:
    "border border-forest-700/25 bg-cream-50/70 text-forest-800 backdrop-blur hover:-translate-y-0.5 hover:border-forest-700/40 hover:bg-cream-100 focus-visible:ring-forest-700 active:translate-y-0",
  ghost: "text-forest-800 hover:bg-forest-800/5 focus-visible:ring-forest-700",
  outline:
    "border border-cream-50/40 bg-white/5 text-cream-50 backdrop-blur hover:-translate-y-0.5 hover:bg-white/15 focus-visible:ring-cream-50 active:translate-y-0",
  whatsapp:
    "bg-[#1FA855] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#1b9a4c] hover:shadow-lift focus-visible:ring-[#1FA855] active:translate-y-0",
};

const sizes = {
  md: "min-h-[44px] px-5 py-2.5 text-sm",
  lg: "min-h-[44px] px-7 py-3.5 text-[0.95rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type Props = CommonProps &
  (
    | ({ href: string } & Omit<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        "className" | "children"
      >)
    | ({ href?: undefined } & Omit<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        "className" | "children"
      >)
  );

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
