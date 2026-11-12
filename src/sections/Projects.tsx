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
    <Section id="projects" eyebrow="05 · Side quests" title="Things I've built">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {tags.map((t) => (
          <button key={t} aria-pressed={t === tag} onClick={() => setTag(t)} className={`chip capitalize ${t === tag ? "!border-indigo-500 bg-indigo-500 text-white" : ""}`}>
            {t}
          </button>
        ))}
      </div>
      {shown.length === 0 && <p className="mt-8 text-sm text-slate-500">No projects with this tag yet.</p>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.id} className="card overflow-hidden transition hover:-translate-y-1">
            <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="p-5">
              <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm">{p.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => <li key={t} className="chip font-mono !text-[10px]">{t}</li>)}
              </ul>
              <div className="mt-4 flex gap-4 text-sm font-semibold">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-indigo-500"><FiGithub /> Code</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-indigo-500"><FiExternalLink /> View</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
