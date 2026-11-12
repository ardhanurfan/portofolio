import { Suspense, lazy, useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { StatCounter } from "../components/StatCounter";
import { useSectionVisit } from "../components/useSectionVisit";
import { profile } from "../data/profile";

const HeroScene = lazy(() => import("../scene/HeroScene"));
const TOTAL = 12;

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export function Hero() {
  const ref = useSectionVisit<HTMLElement>("hero");
  const reduce = useReducedMotion();
  const [scene3d, setScene3d] = useState(false);
  const [collected, setCollected] = useState<Set<number>>(new Set());
  useEffect(() => setScene3d(!reduce && hasWebGL()), [reduce]);
  const collect = useCallback((id: number) => setCollected((s) => new Set(s).add(id)), []);
  return (
    <section id="hero" ref={ref} className="relative overflow-hidden pt-32 pb-16 md:pt-44">
      {scene3d && (
        <div className="absolute inset-0 z-0 opacity-40 md:opacity-100">
          <Suspense fallback={null}>
            <HeroScene collected={collected} onCollect={collect} />
          </Suspense>
          <div className="pointer-events-none absolute right-4 top-24 rounded-full border border-slate-300 bg-paper/80 px-3 py-1 font-mono text-xs backdrop-blur dark:border-white/20 dark:bg-ink-900/80" aria-live="polite">
            💎 {collected.size}/{TOTAL} {collected.size === TOTAL ? "· Gem Hunter unlocked 🏆" : "· click the gems"}
          </div>
        </div>
      )}
      <div aria-hidden className="pointer-events-none absolute -top-32 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/25 via-violet-500/15 to-cyan-400/25 blur-3xl" />
      <div className="container pointer-events-none relative z-10">
        <div className="pointer-events-auto max-w-2xl">
          <div className="flex items-center gap-3">
            <img src="/avatar.png" alt="Portrait of Ardhan Nur Urfan" width={56} height={56} className="h-14 w-14 rounded-full border border-slate-300 object-cover dark:border-white/20" />
          <p className="chip inline-flex items-center gap-2 font-mono">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Open to opportunities · {profile.location}
          </p>
          </div>
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
      </div>
      <div className="container pointer-events-none relative z-10 mt-14">
        <div className="card pointer-events-auto grid grid-cols-2 gap-6 p-6 md:grid-cols-5">
          {profile.stats.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>
        <a href="#about" className="pointer-events-auto mt-8 flex items-center justify-center gap-2 text-sm text-slate-500 hover:text-indigo-500">
          Start the quest <FiArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
