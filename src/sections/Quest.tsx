import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Section } from "../components/Section";
import { experience } from "../data/experience";

export function Quest() {
  const [open, setOpen] = useState<string>("mekari");
  const reduce = useReducedMotion();
  const total = experience.length;
  return (
    <Section id="quest" eyebrow="02 · Career quest" title="Seven levels cleared">
      <ol className="relative space-y-6 border-l border-slate-300 pl-6 md:pl-10 dark:border-white/20">
        {experience.map((r, i) => {
          const isOpen = open === r.id;
          return (
            <motion.li
              key={r.id}
              initial={reduce ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-5 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 font-mono text-xs font-bold text-white md:-left-[57px]">
                {total - i}
              </span>
              <div className="card p-5">
                <button
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? "" : r.id)}
                >
                  <span>
                    <span className="block font-display text-lg font-bold text-slate-900 dark:text-white">{r.role}</span>
                    <span className="block text-sm text-indigo-600 dark:text-indigo-300">{r.org}</span>
                    <span className="block font-mono text-xs text-slate-500">{r.period} · {r.location}</span>
                  </span>
                  <span aria-hidden className="text-slate-400">{isOpen ? "−" : "+"}</span>
                </button>
                {r.xp.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {r.xp.map((x) => (
                      <li key={x.label} className="chip font-mono">
                        <b className="text-slate-900 dark:text-white">{x.value}</b> {x.label}
                      </li>
                    ))}
                  </ul>
                )}
                {isOpen && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
                    {r.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
