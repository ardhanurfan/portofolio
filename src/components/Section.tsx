import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useSectionVisit } from "./useSectionVisit";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, lead, children }: Props) {
  const ref = useSectionVisit<HTMLElement>(id);
  const reduce = useReducedMotion();
  return (
    <section id={id} ref={ref} className="container py-20 md:py-28">
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="h2 mt-2 max-w-3xl">{title}</h2>
        {lead && <p className="mt-4 max-w-2xl text-lg">{lead}</p>}
        <div className="mt-10">{children}</div>
      </motion.div>
    </section>
  );
}
