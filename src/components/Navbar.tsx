import { FiCommand, FiMoon, FiSun } from "react-icons/fi";
import { SECTION_IDS, useExplore } from "../lib/explore";
import type { Theme } from "../lib/theme";

const links = [
  ["quest", "Experience"],
  ["skills", "Skills"],
  ["trophies", "Awards"],
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
    <header className="divider fixed inset-x-0 top-0 z-40 border-b bg-zinc-50/95 dark:bg-ink-950/95">
      <nav className="container flex h-16 items-center justify-between gap-4">
        <a href="#hero" aria-label="Home" className="ink flex items-center gap-2.5 font-semibold">
          <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
          <span className="hidden sm:inline">Ardhan Nur Urfan</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map(([id, label]) => (
            <li key={id}>
              <a className="rounded-md px-3 py-2 text-sm font-medium hover:bg-zinc-200/70 dark:hover:bg-white/10" href={`#${id}`}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <div
            role="progressbar"
            aria-label="Sections explored"
            aria-valuenow={percent}
            aria-valuemin={0}
            aria-valuemax={100}
            className="mr-1 hidden items-center gap-2 sm:flex"
            title="Portfolio explored"
          >
            <div className="flex gap-1" aria-hidden>
              {SECTION_IDS.map((id) => (
                <span key={id} className={`h-1.5 w-3 rounded-full ${visited.has(id) ? "bg-accent" : "bg-zinc-300 dark:bg-white/20"}`} />
              ))}
            </div>
            <span className="muted w-9 text-right tabular-nums" aria-live="polite">{percent}%</span>
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
