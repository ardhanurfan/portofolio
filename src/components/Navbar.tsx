import { FiCommand, FiMoon, FiSun } from "react-icons/fi";
import { useExplore } from "../lib/explore";
import type { Theme } from "../lib/theme";

const links = [
  ["quest", "Quest"],
  ["skills", "Skills"],
  ["trophies", "Trophies"],
  ["projects", "Projects"],
  ["contact", "Contact"],
] as const;

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenPalette: () => void;
}

export function Navbar({ theme, onToggleTheme, onOpenPalette }: Props) {
  const { percent } = useExplore();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200/60 bg-paper/80 backdrop-blur dark:border-white/10 dark:bg-ink-950/80">
      <div
        role="progressbar"
        aria-label="Explored"
        aria-valuenow={percent}
        aria-valuemin={0}
        aria-valuemax={100}
        className="absolute inset-x-0 top-0 h-0.5"
      >
        <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <nav className="container flex h-16 items-center justify-between">
        <a href="#hero" aria-label="Home" className="flex items-center gap-2 font-display text-lg font-bold text-slate-900 dark:text-white">
          <img src="/logo.png" alt="" className="h-8 w-8 rounded-md object-contain" />
          <span className="hidden sm:inline">Ardhan</span>
        </a>
        <ul className="hidden items-center gap-6 text-sm md:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a className="hover:text-indigo-500" href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <span className="hidden font-mono text-xs text-slate-500 sm:block" aria-live="polite">{percent}% explored</span>
          <button onClick={onOpenPalette} aria-label="Open command palette" className="btn-ghost !px-3 !py-2">
            <FiCommand /> <span className="hidden text-xs sm:inline">K</span>
          </button>
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="btn-ghost !px-3 !py-2">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
