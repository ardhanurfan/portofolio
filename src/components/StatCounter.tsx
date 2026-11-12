import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  value: number;
  prefix?: string;
  suffix?: string;
  label?: string;
  hint?: string;
  className?: string;
}

const decimals = (n: number) => (Number.isInteger(n) ? 0 : (String(n).split(".")[1] ?? "").length);

export function StatCounter({ value, prefix = "", suffix = "", label, hint, className = "" }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const d = decimals(value);
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, value, { duration: 1.4, ease: "easeOut", onUpdate: setN });
    return () => c.stop();
  }, [inView, reduce, value]);

  return (
    <div className={className} title={hint}>
      <span ref={ref} className="ink block font-display text-5xl leading-none md:text-6xl">
        {prefix}
        {n.toFixed(d)}
        <span className="text-signal">{suffix}</span>
      </span>
      {label && <p className="label mt-2">{label}</p>}
      {hint && <p className="sr-only">{hint}</p>}
    </div>
  );
}
