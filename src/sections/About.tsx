import { Section } from "../components/Section";

const points = [
  ["Reliable by default", "RFCs, ≥90% unit and SUT test coverage, 100% documentation coverage, and on-call with under-60s acknowledgement."],
  ["AI-accelerated engineering", "AI-assisted ATDD, testing, troubleshooting and RFC reviews. Engineers build the test automation themselves instead of relying on QA."],
  ["Full-stack range", "Backend in Go and PHP, Vue and React frontends, Flutter mobile, ESP32 IoT, proven by two first-place hackathon wins."],
];

export function About() {
  return (
    <Section id="about" index="01" eyebrow="Player profile" title={<>An engineer who ships, <em>and keeps it running.</em></>}>
      <div className="grid gap-px border border-ink-900/25 bg-ink-900/25 md:grid-cols-3 dark:border-bone/25 dark:bg-bone/25">
        {points.map(([t, d], i) => (
          <div key={t} className="bg-bone p-6 dark:bg-ink-900">
            <p className="label text-signal">0{i + 1}</p>
            <h3 className="ink mt-3 font-display text-3xl">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
