import { useState } from "react";
import { Section } from "../components/Section";
import { skillGroups } from "../data/skills";

export function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];
  return (
    <Section id="skills" index="03" eyebrow="Skill tree" title={<>Pick a branch, <em>check the level.</em></>}>
      <div role="tablist" aria-label="Skill branches" className="flex flex-wrap gap-2">
        {skillGroups.map((g) => (
          <button
            key={g.id}
            role="tab"
            aria-selected={g.id === active}
            onClick={() => setActive(g.id)}
            className={g.id === active ? "btn border-ink-950 bg-signal text-ink-950" : "btn-ghost"}
          >
            {g.name}
          </button>
        ))}
      </div>
      <ul role="tabpanel" className="mt-6 grid grid-cols-2 gap-px border border-ink-900/25 bg-ink-900/25 sm:grid-cols-3 md:grid-cols-4 dark:border-bone/25 dark:bg-bone/25">
        {group.skills.map((s) => (
          <li key={s.name} className="flex items-center gap-3 bg-bone p-4 dark:bg-ink-900">
            {s.icon ? <img src={s.icon} alt="" className="h-7 w-7" loading="lazy" /> : <span className="hair h-7 w-7" aria-hidden />}
            <div className="min-w-0">
              <p className="ink truncate text-sm font-semibold">{s.name}</p>
              <p className="mt-1 flex gap-0.5" aria-label={`Level ${s.level} of 3`}>
                {[1, 2, 3].map((n) => (
                  <span key={n} className={`h-2 w-4 ${n <= s.level ? "bg-signal" : "bg-ink-900/15 dark:bg-bone/15"}`} />
                ))}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
