"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="fixed left-1/2 z-40 -translate-x-1/2"
          style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
        >
          <div className="panel-hard flex items-center gap-1.5 rounded-full p-1.5 sm:gap-2 sm:p-2">
            <a
              href="tel:+4968199276655"
              className="oxide-btn rounded-full px-4 py-2.5 text-[11px] sm:px-5 sm:text-[12px]"
            >
              <span className="relative mr-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              <span className="hidden sm:inline">0681 / </span>99276655
            </a>
            <a
              href="#kontakt"
              className="ghost-btn rounded-full px-4 py-2.5 text-[11px] sm:px-5 sm:text-[12px]"
            >
              Angebot
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
