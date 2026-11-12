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
          className="card fixed bottom-24 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-sm -translate-x-1/2 items-center gap-3 p-4 text-sm shadow-[4px_4px_0_0_#ff4d1c]"
        >
          <div className="flex-1">{children}</div>
          <button onClick={onClose} aria-label="Dismiss" className="label hover:text-signal">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
