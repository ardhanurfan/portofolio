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
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[15vh] backdrop-blur-sm" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
        className="card w-full max-w-lg overflow-hidden !bg-white dark:!bg-ink-800"
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
          placeholder="Type a command… (try “cv”, “projects”, “theme”)"
          className="w-full border-b border-slate-200 bg-transparent px-4 py-3 text-sm outline-none dark:border-white/10"
        />
        <ul className="max-h-72 overflow-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-slate-500">No results</li>}
          {results.map((c, i) => (
            <li key={c.id}>
              <button
                onClick={() => run(c)}
                onMouseEnter={() => setIdx(i)}
                className={`w-full rounded-lg px-3 py-2 text-left text-sm ${i === idx ? "bg-indigo-500/15 text-indigo-600 dark:text-indigo-300" : ""}`}
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
