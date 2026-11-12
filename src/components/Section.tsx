import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useSectionVisit } from "./useSectionVisit";

interface Props {
  id: string;
  index: string;
  eyebrow: string;
  title: ReactNode;
  children: ReactNode;
}

export function Section({ id, index, eyebrow, title, children }: Props) {
  const ref = useSectionVisit<HTMLElement>(id);
  const reduce = useReducedMotion();
  return (
    <section id={id} ref={ref} className="container py-24 md:py-36">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <p className="label flex items-center gap-3">
          <span className="text-signal">[{index}]</span> {eyebrow}
          <span aria-hidden className="h-px flex-1 bg-ink-900/20 dark:bg-bone/20" />
        </p>
        <h2 className="ink mt-4 max-w-4xl font-display text-5xl leading-[0.95] md:text-7xl">{title}</h2>
        <div className="mt-12">{children}</div>
      </motion.div>
    </section>
  );
}
