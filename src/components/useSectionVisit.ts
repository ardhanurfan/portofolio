import { useEffect, useRef } from "react";
import { useExplore } from "../lib/explore";

export function useSectionVisit<T extends HTMLElement>(id: string) {
  const ref = useRef<T>(null);
  const { visit } = useExplore();
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") return visit(id);
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          visit(id);
          io.disconnect();
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [id, visit]);
  return ref;
}
