import { FiCpu, FiLayers, FiShield } from "react-icons/fi";
import { Section } from "../components/Section";

const points = [
  { icon: FiShield, t: "Reliable by default", d: "RFC-driven delivery with ≥90% unit and SUT coverage, 100% documentation coverage, and on-call response under 60 seconds to acknowledge." },
  { icon: FiCpu, t: "AI-accelerated engineering", d: "AI-assisted ATDD, testing, troubleshooting and RFC reviews. Engineers build the test automation themselves instead of relying on QA." },
  { icon: FiLayers, t: "Full-stack range", d: "Go and PHP backends, Vue and React frontends, Flutter mobile and ESP32 IoT, proven by two first-place hackathon wins." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="An engineer who ships, and keeps it running." lead="Experience across backend, web, mobile and IoT, now maintaining a no-code SaaS platform used by single- and multi-tenant clients.">
      <div className="grid gap-4 md:grid-cols-3">
        {points.map(({ icon: Icon, t, d }) => (
          <div key={t} className="card p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent"><Icon /></span>
            <h3 className="ink mt-4 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
