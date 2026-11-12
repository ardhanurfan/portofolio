/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

export const SECTION_IDS = [
  "hero",
  "about",
  "quest",
  "skills",
  "trophies",
  "projects",
  "education",
  "contact",
] as const;

const KEY = "explore:v1";

export function loadVisited(storage?: Storage): Set<string> {
  try {
    const raw = (storage ?? localStorage).getItem(KEY);
    if (!raw) return new Set();
    const arr: unknown = JSON.parse(raw);
    if (!Array.isArray(arr)) return new Set();
    return new Set(arr.filter((x): x is string => typeof x === "string" && (SECTION_IDS as readonly string[]).includes(x)));
  } catch {
    return new Set();
  }
}

export function addVisit(set: Set<string>, id: string): Set<string> {
  if (!(SECTION_IDS as readonly string[]).includes(id) || set.has(id)) return set;
  return new Set(set).add(id);
}

export const percentOf = (set: Set<string>) => Math.round((set.size / SECTION_IDS.length) * 100);

interface Ctx {
  visited: Set<string>;
  percent: number;
  complete: boolean;
  visit: (id: string) => void;
}
const ExploreCtx = createContext<Ctx | null>(null);

export function ExploreProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited] = useState<Set<string>>(() => loadVisited());
  const visit = useCallback((id: string) => {
    setVisited((prev) => {
      const next = addVisit(prev, id);
      if (next !== prev) {
        try {
          localStorage.setItem(KEY, JSON.stringify([...next]));
        } catch {
          /* ignore */
        }
      }
      return next;
    });
  }, []);
  const value = useMemo(
    () => ({ visited, percent: percentOf(visited), complete: visited.size === SECTION_IDS.length, visit }),
    [visited, visit],
  );
  return <ExploreCtx.Provider value={value}>{children}</ExploreCtx.Provider>;
}

export function useExplore() {
  const c = useContext(ExploreCtx);
  if (!c) throw new Error("useExplore outside ExploreProvider");
  return c;
}
