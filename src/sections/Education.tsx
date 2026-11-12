import { Section } from "../components/Section";
import { education as e } from "../data/education";

export function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Bandung Institute of Technology">
      <div className="card grid gap-8 p-6 md:grid-cols-[auto_1fr] md:p-8">
        <div>
          <p className="ink text-6xl font-semibold tracking-tight tabular-nums">{e.gpa.split("/")[0]}</p>
          <p className="muted mt-1">GPA / 4.00 · {e.honor}</p>
        </div>
        <div>
          <h3 className="ink text-xl font-semibold">{e.degree}</h3>
          <p className="muted">{e.school} · {e.period}</p>
          <p className="mt-4 text-sm"><b className="ink">Thesis:</b> {e.thesis}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {e.coursework.map((c) => <li key={c} className="chip">{c}</li>)}
          </ul>
          <p className="mt-4 text-sm"><b className="ink">Languages:</b> {e.languages.join(", ")}</p>
        </div>
      </div>
    </Section>
  );
}
