import { FiAward, FiExternalLink } from "react-icons/fi";
import { Section } from "../components/Section";
import { awards } from "../data/awards";

const rank = { gold: "1st place", silver: "2nd place", bronze: "3rd place", finalist: "Top 9 finalist" } as const;

export function Trophies() {
  return (
    <Section id="trophies" eyebrow="Awards" title="Four placements, two first places" lead="Hackathons and national competitions where the work was judged against the best teams.">
      <div className="grid gap-4 md:grid-cols-2">
        {awards.map((a) => (
          <article key={a.id} className="card flex gap-4 p-6">
            <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-xl ${a.place === "gold" ? "bg-gold/15 text-gold" : "bg-zinc-100 text-zinc-500 dark:bg-white/10"}`}>
              <FiAward aria-hidden />
            </span>
            <div>
              <p className="muted">{rank[a.place]} · {a.year}</p>
              <h3 className="ink text-lg font-semibold leading-snug">{a.event}</h3>
              <p className="mt-2 text-sm leading-relaxed">{a.blurb}</p>
              {a.link && (
                <a href={a.link.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
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
