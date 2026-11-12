import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { StatCounter } from "../components/StatCounter";
import { useSectionVisit } from "../components/useSectionVisit";
import { profile } from "../data/profile";

export function Hero() {
  const ref = useSectionVisit<HTMLElement>("hero");
  return (
    <section id="hero" ref={ref} className="relative overflow-hidden pt-32 pb-16 md:pt-44">
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-violet-500/15 to-cyan-400/25 blur-3xl" />
      <div className="container relative grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="chip inline-flex items-center gap-2 font-mono">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Open to opportunities · {profile.location}
          </p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] text-slate-900 md:text-7xl dark:text-white">
            {profile.name}
            <span className="mt-2 block text-gradient">{profile.role}, {profile.company}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg">{profile.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Invite me to interview</a>
            <a href={profile.cv} download className="btn-ghost"><FiDownload /> Download CV</a>
            <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-ghost !px-3"><FiGithub /></a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-ghost !px-3"><FiLinkedin /></a>
          </div>
        </div>
        <div className="mx-auto w-56 md:w-full md:max-w-xs">
          <img src="/avatar.png" alt="Portrait of Ardhan Nur Urfan" className="animate-float rounded-3xl border border-slate-200 shadow-2xl dark:border-white/10" width={400} height={400} />
        </div>
      </div>
      <div className="container relative mt-14">
        <div className="card grid grid-cols-2 gap-6 p-6 md:grid-cols-5">
          {profile.stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
        <a href="#about" className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-indigo-500">
          Start the quest <FiArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
