import { useEffect, useState } from "react";
import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export function StickyCta() {
  const [hidden, setHidden] = useState(false);

  // get out of the way while the contact form is on screen
  useEffect(() => {
    const el = document.getElementById("contact");
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setHidden(e.isIntersecting), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={`divider fixed inset-x-0 bottom-0 z-30 flex [@media(max-height:500px)]:hidden gap-2 border-t bg-zinc-50/95 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition duration-300 md:inset-x-auto md:bottom-6 md:right-6 md:rounded-xl md:border md:p-2 md:shadow-lg dark:bg-ink-900/95 ${hidden ? "pointer-events-none translate-y-full opacity-0 md:translate-y-4" : ""}`}
      aria-hidden={hidden}
    >
      <a href={profile.cv} target="_blank" rel="noreferrer" tabIndex={hidden ? -1 : 0} className="btn-ghost flex-1 md:flex-none">
        <FiDownload /> Download CV
      </a>
      <a href="#contact" tabIndex={hidden ? -1 : 0} className="btn-primary flex-1 md:flex-none">
        <FiMail /> Contact me
      </a>
    </div>
  );
}
