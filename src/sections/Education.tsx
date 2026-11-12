import { Section } from "../components/Section";
import { education as e } from "../data/education";

export function Education() {
  return (
    <Section id="education" eyebrow="06 · Training ground" title="Summa Cum Laude, ITB">
      <div className="card grid gap-6 p-6 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="font-display text-5xl font-bold text-gradient">{e.gpa.split("/")[0]}</p>
          <p className="font-mono text-xs text-slate-500">GPA / 4.00 · {e.honor}</p>
        </div>
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{e.school}</h3>
          <p className="text-sm">{e.degree} · {e.period}</p>
          <p className="mt-3 text-sm"><b>Thesis:</b> {e.thesis}</p>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {e.coursework.map((c) => <li key={c} className="chip">{c}</li>)}
          </ul>
          <p className="mt-3 text-sm"><b>Languages:</b> {e.languages.join(", ")}</p>
        </div>
      </div>
    </Section>
  );
}
