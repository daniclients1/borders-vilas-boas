import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-14 sm:py-16 lg:py-20", className)}
    >
      {children}
    </section>
  );
}
