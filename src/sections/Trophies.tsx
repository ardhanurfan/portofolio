import { FiExternalLink } from "react-icons/fi";
import { Section } from "../components/Section";
import { awards } from "../data/awards";

const rank = { gold: "1ST", silver: "2ND", bronze: "3RD", finalist: "TOP 9" } as const;

export function Trophies() {
  return (
    <Section id="trophies" index="04" eyebrow="Trophy cabinet" title={<>Four placements, <em>two first places.</em></>}>
      <div className="grid gap-px border border-ink-900/25 bg-ink-900/25 md:grid-cols-2 dark:border-bone/25 dark:bg-bone/25">
        {awards.map((a) => (
          <article key={a.id} className="flex gap-5 bg-bone p-6 dark:bg-ink-900">
            <div className={`flex h-16 w-16 shrink-0 items-center justify-center font-mono text-sm font-medium ${a.place === "gold" ? "bg-volt text-ink-950" : "hair ink"}`}>
              {rank[a.place]}
            </div>
            <div>
              <h3 className="ink font-display text-2xl leading-tight">{a.title} <span className="label">{a.year}</span></h3>
              <p className="text-sm text-signal">{a.event}</p>
              <p className="mt-2 text-sm leading-relaxed">{a.blurb}</p>
              {a.link && (
                <a href={a.link.url} target="_blank" rel="noreferrer" className="label mt-3 inline-flex items-center gap-1 hover:text-signal">
                  {a.link.label} <FiExternalLink />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
