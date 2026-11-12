import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useSectionVisit } from "./useSectionVisit";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: Props) {
  const ref = useSectionVisit<HTMLElement>(id);
  const reduce = useReducedMotion();
  return (
    <section id={id} ref={ref} className="container py-20 md:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-indigo-500">{eyebrow}</p>
        <h2 className="mt-2 font-display text-3xl font-bold text-slate-900 md:text-5xl dark:text-white">{title}</h2>
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
