import { useMemo, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { Section } from "../components/Section";
import { projects } from "../data/projects";
import { filterProjects } from "../lib/filterProjects";

const LABELS: Record<string, string> = { ai: "AI", iot: "IoT" };
const tags = ["all", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export function Projects() {
  const [tag, setTag] = useState("all");
  const shown = useMemo(() => filterProjects(projects, tag), [tag]);
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work" lead="Products and prototypes across AI tooling, web, mobile and IoT. Filter by type.">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {tags.map((t) => (
          <button key={t} aria-pressed={t === tag} onClick={() => setTag(t)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${t === tag ? "bg-accent text-accent-ink" : "border divider hover:bg-zinc-100 dark:hover:bg-white/10"}`}>
            {LABELS[t] ?? t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>
      {shown.length === 0 && <p className="muted mt-8">No projects with this tag yet.</p>}
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <article key={p.id} className="card group overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
            <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="p-5">
              <h3 className="ink text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm leading-relaxed">{p.desc}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => <li key={t} className="chip">{t}</li>)}
              </ul>
              <div className="mt-4 flex gap-4 text-sm font-medium">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent"><FiGithub /> Code</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-accent"><FiExternalLink /> View</a>}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
