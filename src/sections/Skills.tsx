import { useState } from "react";
import { Section } from "../components/Section";
import { skillGroups } from "../data/skills";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];
  return (
    <Section id="skills" eyebrow="03 · Skill tree" title="Pick a branch">
      <div role="tablist" aria-label="Skill branches" className="flex flex-wrap gap-2">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === active}
            onClick={() => setActive(g.id)}
            className={`btn ${g.id === active ? "bg-indigo-500 text-white" : "border border-slate-300 dark:border-white/20"}`}
          >
            {g.name}
          </button>
        ))}
      </div>
      <ul role="tabpanel" className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {group.skills.map((s) => (
          <li key={s.name} className="card flex items-center gap-3 p-3">
            {s.icon ? <img src={s.icon} alt="" className="h-7 w-7" loading="lazy" /> : <span className="h-7 w-7 rounded-md bg-indigo-500/15" aria-hidden />}
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{s.name}</p>
              <p className="flex gap-1" aria-label={`Level ${s.level} of 3`}>
                {[1, 2, 3].map((n) => (
                  <span key={n} className={`h-1.5 w-4 rounded-full ${n <= s.level ? "bg-gradient-to-r from-indigo-500 to-cyan-400" : "bg-slate-200 dark:bg-white/10"}`} />
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
