import { useState } from "react";
import { Section } from "../components/Section";
import { experience } from "../data/experience";

export function Quest() {
  const [open, setOpen] = useState<string>("mekari");
  const total = experience.length;
  return (
    <Section id="quest" index="02" eyebrow="Career quest" title={<>Seven levels, <em>cleared.</em></>}>
      <ol className="space-y-3 lg:ml-[30%]">
        {experience.map((r, i) => {
          const isOpen = open === r.id;
          return (
            <li key={r.id} className="card">
              <button
                className="flex w-full items-start gap-4 p-5 text-left"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? "" : r.id)}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-signal font-mono text-sm font-medium text-ink-950">
                  {String(total - i).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="ink block font-display text-2xl leading-tight">{r.role}</span>
                  <span className="block text-sm text-signal">{r.org}</span>
                  <span className="label mt-1 block">{r.period} · {r.location}</span>
                </span>
                <span aria-hidden className="label">{isOpen ? "−" : "+"}</span>
              </button>
              {r.xp.length > 0 && (
                <ul className="flex flex-wrap gap-2 px-5 pb-5">
                  {r.xp.map((x) => (
                    <li key={x.label} className="chip">
                      <b className="ink font-medium">{x.value}</b> {x.label}
                    </li>
                  ))}
                </ul>
              )}
              {isOpen && (
                <ul className="hair list-disc space-y-2 border-0 border-t py-5 pl-10 pr-5 text-sm leading-relaxed">
                  {r.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
