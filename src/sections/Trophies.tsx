import { FiAward, FiExternalLink } from "react-icons/fi";
import { Section } from "../components/Section";
import { awards } from "../data/awards";

const tone = {
  gold: "from-amber-400 to-yellow-600",
  silver: "from-slate-300 to-slate-500",
  bronze: "from-orange-400 to-amber-700",
  finalist: "from-indigo-400 to-cyan-500",
} as const;

export function Trophies() {
  return (
    <Section id="trophies" eyebrow="04 · Trophy cabinet" title="4 placements, 2 first-place wins">
      <div className="grid gap-4 md:grid-cols-2">
        {awards.map((a) => (
          <article key={a.id} className="card group flex gap-4 p-5 transition hover:-translate-y-1">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br text-2xl text-white shadow-lg ${tone[a.place]}`}>
              <FiAward aria-hidden />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{a.title} <span className="font-mono text-xs font-normal text-slate-500">{a.year}</span></h3>
              <p className="text-sm text-indigo-600 dark:text-indigo-300">{a.event}</p>
              <p className="mt-2 text-sm">{a.blurb}</p>
              {a.link && (
                <a href={a.link.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold hover:text-indigo-500">
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
