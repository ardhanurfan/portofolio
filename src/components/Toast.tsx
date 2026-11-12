import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";

export function Toast({ show, children, onClose }: { show: boolean; children: ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="card fixed bottom-24 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-sm -translate-x-1/2 items-center gap-3 !bg-white p-4 text-sm md:bottom-24 dark:!bg-ink-800"
        >
          <div className="flex-1">{children}</div>
          <button onClick={onClose} aria-label="Dismiss" className="text-slate-400 hover:text-slate-700">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
