import { useEffect, useMemo, useRef, useState } from "react";
import { searchCommands, type Command } from "../lib/commands";

interface Props {
  open: boolean;
  onClose: () => void;
  commands: Command[];
}

export function CommandPalette({ open, onClose, commands }: Props) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const results = useMemo(() => searchCommands(commands, q), [commands, q]);

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      input.current?.focus();
    }
  }, [open]);
  useEffect(() => setIdx(0), [q]);

  if (!open) return null;
  const run = (c?: Command) => {
    if (!c) return;
    onClose();
    c.run();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-zinc-950/40 p-4 pt-[15vh]" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="card w-full max-w-lg overflow-hidden shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
          else if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, results.length - 1)); }
          else if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
          else if (e.key === "Enter") run(results[idx]);
          else if (e.key === "Tab") { e.preventDefault(); input.current?.focus(); }
        }}
      >
        <input
          ref={input}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search: cv, projects, theme, email…"
          className="w-full divider w-full border-b bg-transparent px-4 py-3.5 text-sm outline-none"
        />
        <ul className="max-h-72 overflow-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-ink-700/70 dark:text-bone/60">No results</li>}
          {results.map((c, i) => (
            <li key={c.id}>
              <button
                onClick={() => run(c)}
                onMouseEnter={() => setIdx(i)}
                className={`w-full rounded-md px-3 py-2 text-left text-sm ${i === idx ? "bg-accent text-accent-ink" : ""}`}
              >
                {c.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
