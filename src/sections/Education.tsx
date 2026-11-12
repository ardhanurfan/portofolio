import { Section } from "../components/Section";
import { education as e } from "../data/education";

export function Education() {
  return (
    <Section id="education" index="06" eyebrow="Training ground" title={<>Summa Cum Laude, <em>ITB.</em></>}>
      <div className="card grid gap-8 p-6 md:grid-cols-[1fr_2fr] md:p-8">
        <div>
          <p className="font-display text-8xl leading-none text-signal">{e.gpa.split("/")[0]}</p>
          <p className="label mt-2">GPA / 4.00 · {e.honor}</p>
        </div>
        <div>
          <h3 className="font-display text-3xl font-normal ink">{e.school}</h3>
          <p className="text-sm">{e.degree} · {e.period}</p>
          <p className="mt-3 text-sm"><b>Thesis:</b> {e.thesis}</p>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {e.coursework.map((c) => <li key={c} className="chip">{c}</li>)}
          </ul>
          <p className="mt-3 text-sm"><b>Languages:</b> {e.languages.join(", ")}</p>
        </div>
      </div>
    </Section>
  );
}
