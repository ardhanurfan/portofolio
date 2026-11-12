import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Section } from "../components/Section";
import { experience } from "../data/experience";

export function Quest() {
  const [open, setOpen] = useState<string>("mekari");
  const total = experience.length;
  const reduce = useReducedMotion();
  const ease = [0.32, 0.72, 0, 1] as const;
  return (
    <Section id="quest" eyebrow="Experience" title="Career path" lead="Seven roles across SaaS, fintech, healthcare and central banking. Each one is a level, open one for the details.">
      <ol className="space-y-3 lg:ml-[30%]">
        {experience.map((r, i) => {
          const isOpen = open === r.id;
          return (
            <li key={r.id} className="card transition-shadow duration-300 hover:shadow-md">
              <button className="flex w-full items-start gap-4 p-5 text-left" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? "" : r.id)}>
                <span className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-accent/10 leading-none text-accent">
                  <span className="text-[9px] font-medium uppercase tracking-wide">Lvl</span>
                  <span className="text-sm font-semibold tabular-nums">{total - i}</span>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="ink block text-lg font-semibold leading-snug">{r.role}</span>
                  <span className="block text-sm font-medium text-accent">{r.org}</span>
                  <span className="muted mt-0.5 block">{r.period} · {r.location}</span>
                </span>
                <FiChevronDown aria-hidden className={`mt-1 shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`} />
              </button>
              {r.xp.length > 0 && (
                <ul className="flex flex-wrap gap-2 px-5 pb-5">
                  {r.xp.map((x) => (
                    <li key={x.label} className="chip">
                      <b className="ink font-semibold">{x.value}</b> {x.label}
                    </li>
                  ))}
                </ul>
              )}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="details"
                    initial={reduce ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
                    transition={{ height: { duration: 0.4, ease }, opacity: { duration: 0.25 } }}
                    style={{ overflow: "hidden" }}
                  >
                    <ul className="divider list-disc space-y-2 border-t py-5 pl-10 pr-5 text-sm leading-relaxed">
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
