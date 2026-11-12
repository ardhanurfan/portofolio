import { Section } from "../components/Section";

const points = [
  ["Reliable by default", "RFCs, ≥90% unit and SUT test coverage, 100% documentation coverage, and on-call with under-60s acknowledgement."],
  ["AI-accelerated engineering", "AI-assisted ATDD, testing, troubleshooting and RFC reviews; engineers build test automation themselves instead of relying on QA."],
  ["Full-stack range", "Backend in Go and PHP, Vue/React frontends, Flutter mobile, and ESP32 IoT, proven by two first-place hackathon wins."],
];

export function About() {
  return (
    <Section id="about" eyebrow="01 · Player profile" title="Engineer who ships and keeps it running">
      <div className="grid gap-4 md:grid-cols-3">
        {points.map(([t, d]) => (
          <div key={t} className="card p-6">
            <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">{t}</h3>
            <p className="mt-2 text-sm">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
