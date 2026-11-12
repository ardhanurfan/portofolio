import { Suspense, lazy, useCallback, useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { CommandPalette } from "./components/CommandPalette";
import { Navbar } from "./components/Navbar";
import { StickyCta } from "./components/StickyCta";
import { Toast } from "./components/Toast";
import { profile } from "./data/profile";
import { type Command } from "./lib/commands";
import { ExploreProvider, SECTION_IDS, useExplore } from "./lib/explore";
import { useTheme } from "./lib/theme";
import { useKonami } from "./lib/useKonami";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Quest } from "./sections/Quest";
import { Skills } from "./sections/Skills";
import { Trophies } from "./sections/Trophies";

const World = lazy(() => import("./scene/World"));
const GEM_TOTAL = 12;

function hasWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

const NAMES: Record<(typeof SECTION_IDS)[number], string> = {
  hero: "Top",
  about: "About",
  quest: "Experience",
  skills: "Skills",
  trophies: "Awards",
  projects: "Projects",
  education: "Education",
  contact: "Contact",
};

const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

function Shell() {
  const { theme, toggle } = useTheme();
  const { complete } = useExplore();
  const [palette, setPalette] = useState(false);
  const [rewardSeen, setRewardSeen] = useState(false);
  const [egg, setEgg] = useState(false);
  const reduce = useReducedMotion();
  const [world, setWorld] = useState(false);
  const [collected, setCollected] = useState<Set<number>>(new Set());
  useEffect(() => setWorld(!reduce && hasWebGL()), [reduce]);
  const collect = useCallback((id: number) => setCollected((s) => new Set(s).add(id)), []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);

  useKonami(useCallback(() => setEgg(true), []));
  useEffect(() => {
    if (!egg) return;
    const t = setTimeout(() => setEgg(false), 5000);
    return () => clearTimeout(t);
  }, [egg]);

  const commands = useMemo<Command[]>(
    () => [
      ...SECTION_IDS.map((id) => ({ id, label: `Go to ${NAMES[id]}`, keywords: [id, NAMES[id]], run: go(id) })),
      { id: "theme", label: "Toggle theme", keywords: ["dark", "light"], run: toggle },
      { id: "cv", label: "Download CV", keywords: ["resume", "pdf"], run: () => window.open(profile.cv, "_blank") },
      { id: "email", label: "Email Ardhan", keywords: ["contact", "hire", "interview"], run: () => (window.location.href = `mailto:${profile.email}`) },
      { id: "github", label: "Open GitHub", keywords: ["code"], run: () => window.open(profile.links.github, "_blank") },
      { id: "linkedin", label: "Open LinkedIn", keywords: ["profile"], run: () => window.open(profile.links.linkedin, "_blank") },
    ],
    [toggle],
  );

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} onOpenPalette={() => setPalette(true)} />
      {world && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] md:opacity-25 lg:opacity-100">
          <Suspense fallback={null}>
            <World dark={theme === "dark"} collected={collected} onCollect={collect} />
          </Suspense>
        </div>
      )}
      <main className="relative z-10 pb-20 md:pb-0 [@media(max-height:500px)]:pb-0">
        <Hero world={world} gems={collected.size} gemTotal={GEM_TOTAL} />
        <About />
        <Quest />
        <Skills />
        <Trophies />
        <Projects />
        <Education />
        <Contact />
      </main>
      <StickyCta />
      <CommandPalette open={palette} onClose={() => setPalette(false)} commands={commands} />
      <Toast show={complete && !rewardSeen} onClose={() => setRewardSeen(true)}>
        <b>You explored everything.</b> Interested?{" "}
        <a href="#contact" onClick={() => setRewardSeen(true)} className="font-semibold text-accent underline">get in touch</a>.
      </Toast>
      <Toast show={egg} onClose={() => setEgg(false)}>Achievement unlocked: <b>Curious Engineer</b></Toast>
    </>
  );
}

export default function App() {
  return (
    <ExploreProvider>
      <Shell />
    </ExploreProvider>
  );
}
