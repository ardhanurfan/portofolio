import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export function StickyCta() {
  return (
    <div className="divider fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t bg-zinc-50/95 p-3 md:inset-x-auto md:bottom-6 md:right-6 md:rounded-xl md:border md:p-2 md:shadow-lg dark:bg-ink-900/95">
      <a href={profile.cv} download className="btn-ghost flex-1 md:flex-none">
        <FiDownload /> Download CV
      </a>
      <a href="#contact" className="btn-primary flex-1 md:flex-none">
        <FiMail /> Contact me
      </a>
    </div>
  );
}
