import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload, FiMail, FiMenu, FiMoon, FiSearch, FiSun, FiX } from "react-icons/fi";
import { profile } from "../data/profile";
import { SECTION_IDS, useExplore } from "../lib/explore";
import type { Theme } from "../lib/theme";

const links = [
  ["about", "About"],
  ["quest", "Experience"],
  ["skills", "Skills"],
  ["trophies", "Awards"],
  ["projects", "Projects"],
  ["education", "Education"],
  ["contact", "Contact"],
] as const;

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

export function Navbar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const { percent, visited } = useExplore();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  // close the menu first, then scroll once its closing animation has finished
  const goTo = (id: string) => {
    setOpen(false);
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
      history.replaceState(null, "", `#${id}`);
    }, reduce ? 0 : 320);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="divider fixed inset-x-0 top-0 z-40 border-b bg-zinc-50/95 dark:bg-ink-950/95">
      <div
        role="progressbar"
        aria-label="Sections explored"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="absolute inset-x-0 bottom-0 h-0.5 sm:hidden"
      >
        <div className="h-full bg-accent transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <nav className="container flex h-16 items-center justify-between gap-4" aria-label="Main">
        <a href="#hero" aria-label="Home" className="ink flex items-center gap-2.5 font-semibold">
          <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
          <span className="hidden sm:inline">Ardhan Nur Urfan</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.filter(([id]) => id !== "about" && id !== "education").map(([id, label]) => (
            <li key={id}>
              <a className="rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-200/70 dark:hover:bg-white/10" href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <div className="mr-1 hidden items-center gap-2 sm:flex" title="Portfolio explored">
            <div className="flex gap-1" aria-hidden>
              {SECTION_IDS.map((id) => (
                <span key={id} className={`h-1.5 w-3 rounded-full ${visited.has(id) ? "bg-accent" : "bg-zinc-300 dark:bg-white/20"}`} />
              ))}
            </div>
            <span className="muted w-9 text-right tabular-nums" aria-live="polite">{percent}%</span>
          </div>
          <button onClick={onOpenPalette} aria-label="Search sections and actions" className="btn-ghost !px-3 !py-2">
            <FiSearch /> <span className="hidden text-xs text-zinc-500 lg:inline">⌘K</span>
          </button>
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="btn-ghost !px-3 !py-2">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="btn-ghost !px-3 !py-2 lg:hidden"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="divider overflow-hidden border-t bg-zinc-50 lg:hidden dark:bg-ink-950"
          >
            <div className="container max-h-[calc(100dvh-4rem)] overflow-y-auto py-3">
              <ul>
                {links.map(([id, label]) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        goTo(id);
                      }}
                      className="ink flex items-center justify-between rounded-lg px-3 py-3.5 text-base font-medium hover:bg-zinc-200/70 dark:hover:bg-white/10"
                    >
                      {label}
                      <span aria-hidden className={`h-2 w-2 rounded-full ${visited.has(id) ? "bg-accent" : "bg-zinc-300 dark:bg-white/20"}`} />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-2 grid grid-cols-2 gap-2 pb-2 sm:max-w-md">
                <a href={profile.cv} target="_blank" rel="noreferrer" className="btn-ghost"><FiDownload /> CV</a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    goTo("contact");
                  }}
                  className="btn-primary"
                >
                  <FiMail /> Contact
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
