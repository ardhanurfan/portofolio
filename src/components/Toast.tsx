import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export function Toast({ show, children, onClose }: { show: boolean; children: ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          className="card fixed bottom-24 right-4 z-50 flex w-[calc(100%-32px)] max-w-sm items-center gap-3 p-4 text-sm shadow-lg md:right-6"
        >
          <div className="flex-1">{children}</div>
          <button onClick={onClose} aria-label="Dismiss" className="muted hover:text-accent">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
