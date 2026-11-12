import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { StatCounter } from "../components/StatCounter";
import { useSectionVisit } from "../components/useSectionVisit";
import { profile } from "../data/profile";

interface Props {
  world: boolean;
  gems: number;
  gemTotal: number;
}

export function Hero({ world, gems, gemTotal }: Props) {
  const ref = useSectionVisit<HTMLElement>("hero");
  return (
    <section id="hero" ref={ref} className="relative pt-32 pb-16 md:pt-44">
      {world && (
        <p className="label pointer-events-none absolute right-4 top-24 border border-ink-900/25 bg-bone px-3 py-1.5 dark:border-bone/25 dark:bg-ink-950" aria-live="polite">
          Gems <span className="text-signal">{String(gems).padStart(2, "0")}</span>/{gemTotal}
          {gems === gemTotal ? " · Gem Hunter" : " · click to collect"}
        </p>
      )}
      <div className="container pointer-events-none relative z-10">
        <div className="pointer-events-auto max-w-3xl">
          <div className="flex items-center gap-4">
            <img src="/avatar.png" alt="Portrait of Ardhan Nur Urfan" width={64} height={64} className="h-16 w-16 border border-ink-900/25 object-cover dark:border-bone/25" />
            <p className="label">
              Status: <span className="text-signal">open to roles</span>
              <br />
              {profile.location}
            </p>
          </div>
          <h1 className="ink mt-8 font-display text-7xl leading-[0.9] md:text-9xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-4xl italic text-signal md:text-5xl">
            {profile.role}, {profile.company}
          </p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">{profile.summary}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Invite me to interview</a>
            <a href={profile.cv} download className="btn-ghost"><FiDownload /> Download CV</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-ghost !px-3"><FiGithub /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-ghost !px-3"><FiLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="container pointer-events-none relative z-10 mt-20">
        <div className="card pointer-events-auto grid grid-cols-2 gap-px !bg-ink-900/25 lg:grid-cols-5 dark:!bg-bone/25">
          {profile.stats.map((s) => (
            <StatCounter key={s.label} {...s} className="bg-bone p-5 last:col-span-2 lg:last:col-span-1 dark:bg-ink-900" />
          ))}
        </div>
        <a href="#about" className="label pointer-events-auto mt-8 flex items-center justify-center gap-2 hover:text-signal">
          Start the quest <FiArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
