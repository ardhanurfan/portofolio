import { useState } from "react";
import { Section } from "../components/Section";
import { skillGroups } from "../data/skills";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with" lead="Pick a branch. The bars show my relative proficiency, from familiar to daily driver.">
      <div role="tablist" aria-label="Skill branches" className="flex flex-wrap gap-2">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === active}
            onClick={() => setActive(g.id)}
            className={g.id === active ? "btn bg-accent text-accent-ink" : "btn-ghost"}
          >
            {g.name}
          </button>
        ))}
      </div>
      <ul role="tabpanel" className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {group.skills.map((s) => (
          <li key={s.name} className="card flex items-center gap-3 p-4">
            <s.icon aria-hidden className="h-6 w-6 shrink-0 text-zinc-700 dark:text-zinc-200" />
            <div className="min-w-0">
              <p className="ink truncate text-sm font-medium">{s.name}</p>
              <p className="mt-1.5 flex gap-1" aria-label={`Level ${s.level} of 3`}>
                {[1, 2, 3].map((n) => (
                  <span key={n} className={`h-1.5 w-5 rounded-full ${n <= s.level ? "bg-accent" : "bg-zinc-200 dark:bg-white/20"}`} />
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
