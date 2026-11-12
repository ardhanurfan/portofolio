import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { StatCounter } from "../components/StatCounter";
import { useSectionVisit } from "../components/useSectionVisit";
import { profile } from "../data/profile";

interface Props {
  world: boolean;
  gems: number;
  gemTotal: number;
}

const coarse = typeof window !== "undefined" && !!window.matchMedia?.("(pointer: coarse)").matches;

export function Hero({ world, gems, gemTotal }: Props) {
  const ref = useSectionVisit<HTMLElement>("hero");
  return (
    <section id="hero" ref={ref} className="relative pt-32 pb-16 md:pt-40">
      {world && (
        <p className="muted divider pointer-events-none absolute right-4 top-24 rounded-full border bg-white px-3 py-1.5 dark:bg-ink-900" aria-live="polite">
          Gems <span className="font-semibold text-accent tabular-nums">{gems}</span>/{gemTotal}
          {gems === gemTotal ? " · Gem Hunter unlocked" : ` · ${coarse ? "tap" : "click"} the gems`}
        </p>
      )}
      <div className="container pointer-events-none relative z-10">
        <div className="pointer-events-auto max-w-2xl xl:max-w-3xl">
          <div className="flex items-center gap-3">
            <img src="/avatar.png" alt="Portrait of Ardhan Nur Urfan" width={56} height={56} className="h-14 w-14 rounded-full object-cover ring-2 ring-white dark:ring-white/10" />
            <p className="muted">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Available for new opportunities · {profile.location}
            </p>
          </div>
          <h1 className="ink mt-6 text-[2.75rem] font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl xl:text-8xl">{profile.name}</h1>
          <p className="mt-4 text-2xl font-medium text-accent md:text-3xl">
            {profile.role} at {profile.company}
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Schedule an interview</a>
            <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-ghost"><FiDownload /> Download CV</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-ghost !px-3"><FiGithub /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-ghost !px-3"><FiLinkedin /></a>
          </div>
        </div>
      </div>
      <div className="container pointer-events-none relative z-10 mt-16">
        <div className="card pointer-events-auto grid grid-cols-2 gap-y-6 p-6 lg:grid-cols-5 lg:divide-x lg:divide-zinc-200 lg:dark:divide-white/10">
          {profile.stats.map((s) => (
            <StatCounter key={s.label} {...s} className="last:col-span-2 lg:px-6 lg:first:pl-0 lg:last:col-span-1 lg:last:pr-0" />
          ))}
        </div>
        <a href="#about" className="muted pointer-events-auto mt-8 flex items-center justify-center gap-2 hover:text-accent">
          Scroll to explore <FiArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
