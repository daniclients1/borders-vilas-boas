"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Revela uma imagem com leve zoom-out ao entrar na viewport (use com pai overflow-hidden). */
export function ZoomReveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ scale: reduce ? 1 : 1.14, opacity: reduce ? 1 : 0.5 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
