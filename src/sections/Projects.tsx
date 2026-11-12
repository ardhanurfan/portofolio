import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Section } from "../components/Section";
import { projects } from "../data/projects";
import { filterProjects } from "../lib/filterProjects";

const tags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export function Projects() {
  const [tag, setTag] = useState("all");
  const shown = useMemo(() => filterProjects(projects, tag), [tag]);
  return (
    <Section id="projects" index="05" eyebrow="Side quests" title={<>Things I&apos;ve built, <em>for fun and for pay.</em></>}>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {tags.map((t) => (
          <button key={t} aria-pressed={t === tag} onClick={() => setTag(t)} className={`chip capitalize ${t === tag ? "!border-ink-950 bg-signal text-ink-950" : "hover:border-signal"}`}>
            {t}
          </button>
        ))}
      </div>
      {shown.length === 0 && <p className="mt-8 text-sm text-ink-700/70 dark:text-bone/60">No projects with this tag yet.</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.id} className="card group overflow-hidden transition hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0_0_#ff4d1c]">
            <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-2xl font-normal ink">{p.title}</h3>
              <p className="mt-1 text-sm">{p.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => <li key={t} className="chip !text-[10px]">{t}</li>)}
              </ul>
              <div className="label mt-4 flex gap-4">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-signal"><FiGithub /> Code</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-signal"><FiExternalLink /> View</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
