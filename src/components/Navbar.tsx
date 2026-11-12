import { FiCommand, FiMoon, FiSun } from "react-icons/fi";
import { SECTION_IDS, useExplore } from "../lib/explore";
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
  const { percent, visited } = useExplore();
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink-900/25 bg-bone dark:border-bone/25 dark:bg-ink-950">
      <nav className="container flex h-16 items-center justify-between gap-4">
        <a href="#hero" aria-label="Home" className="ink flex items-center gap-3 font-display text-2xl">
          <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
          <span className="hidden sm:inline">Ardhan</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a className="label hover:text-signal" href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div
            role="progressbar"
            aria-label="Sections explored"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="hidden items-center gap-2 sm:flex"
          >
            <div className="flex gap-0.5" aria-hidden>
              {SECTION_IDS.map((id) => (
                <span key={id} className={`h-3 w-1.5 ${visited.has(id) ? "bg-signal" : "bg-ink-900/20 dark:bg-bone/20"}`} />
              ))}
            </div>
            <span className="label w-10 text-right" aria-live="polite">{percent}%</span>
          </div>
          <button onClick={onOpenPalette} aria-label="Open command palette" className="btn-ghost !px-3 !py-2">
            <FiCommand /> <span className="hidden sm:inline">K</span>
          </button>
          <button onClick={onToggleTheme} aria-label="Toggle theme" className="btn-ghost !px-3 !py-2">
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
