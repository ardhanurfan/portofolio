import { FiDownload, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-2 border-t border-ink-900/25 bg-bone p-3 md:inset-x-auto md:bottom-6 md:right-6 md:border md:p-2 dark:border-bone/25 dark:bg-ink-950">
      <a href={profile.cv} download className="btn-ghost flex-1 md:flex-none">
        <FiDownload /> CV
      </a>
      <a href="#contact" className="btn-primary flex-1 md:flex-none">
        <FiMail /> Let&apos;s talk
      </a>
    </div>
  );
}
