"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#projekte", label: "Projekte" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#stimmen", label: "Stimmen" },
  { href: "#standort", label: "Standort" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-500 ease-apple ${
          scrolled ? "pt-2" : "pt-4"
        }`}
      >
        <div className="mx-auto max-w-[1440px] safe-x">
          <div
            className={`relative flex items-center justify-between gap-4 rounded-xl border border-[#1f1f26] bg-void-900/70 px-4 py-2.5 shadow-panel backdrop-blur-xl transition-all duration-500 ease-apple`}
          >
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3">
              <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-md border border-black/40 bg-gradient-to-b from-oxide-300 to-oxide-700 shadow-oxide sm:h-10 sm:w-10">
                <span className="d-stencil text-sm font-black text-white">
                  GD
                </span>
                <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="d-stencil text-xs font-bold tracking-[0.14em] sm:text-sm">
                  GD D&apos;ACQUINO
                </span>
                <span className="vin hidden sm:inline">
                  Heizung · Sanitär · Solar
                </span>
              </span>
            </Link>

            <nav className="hidden items-center xl:flex">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="d-stencil rounded-md px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-bone-200 transition hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-2 xl:flex">
              <a
                href="tel:+4968199276655"
                className="ghost-btn rounded-md px-3 py-2 text-[12px]"
              >
                0681 / 99276655
              </a>
              <a
                href="#kontakt"
                className="oxide-btn rounded-md px-4 py-2 text-[12px]"
              >
                Angebot
              </a>
            </div>

            <button
              aria-label="Menü"
              onClick={() => setOpen((o) => !o)}
              className="ghost-btn rounded-md p-2 xl:hidden"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            className="mx-auto mt-2 max-w-[1440px] safe-x xl:hidden"
          >
            <div className="panel-hard rounded-xl p-3">
              <div className="grid grid-cols-2 gap-1">
                {LINKS.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="d-stencil rounded-md px-3 py-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-bone-200 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <a
                  href="tel:+4968199276655"
                  className="ghost-btn flex-1 rounded-md px-3 py-3 text-center text-[12px]"
                >
                  Anrufen
                </a>
                <a
                  href="#kontakt"
                  onClick={() => setOpen(false)}
                  className="oxide-btn flex-1 rounded-md px-3 py-3 text-center text-[12px]"
                >
                  Angebot
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
