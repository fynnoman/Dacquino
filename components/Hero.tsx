"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "@/lib/images";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const scrimO = useTransform(scrollYProgress, [0, 1], [0.55, 0.95]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const titleO = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const numberY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section
      ref={ref}
      className="relative isolate min-h-[580px] overflow-hidden md:min-h-[700px]"
      style={{ height: "100svh" }}
    >
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMG.heroBoiler})` }}
        />
      </motion.div>

      <motion.div
        style={{ opacity: scrimO }}
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-void-950/60 via-void-950/75 to-void-950"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 800px at 100% 100%, rgba(200,22,29,0.28), transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 technical-lines opacity-50" />
      <div className="pointer-events-none absolute inset-0 -z-10 vignette" />

      <motion.div
        aria-hidden
        style={{ y: numberY }}
        className="pointer-events-none absolute -right-6 top-24 select-none md:top-36"
      >
        <div className="d-stencil text-[18vw] font-black text-white/[0.04] md:text-[12vw]">
          №01
        </div>
      </motion.div>

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-center safe-x pb-14 pt-28 md:pb-24 md:pt-40">
        <motion.h1
          style={{ y: titleY, opacity: titleO }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="d-display text-hero max-w-5xl space-y-1 md:space-y-3"
        >
          <span className="block chrome-text">Wärme.</span>
          <span className="block chrome-text">Wasser.</span>
          <span
            className="block oxide-text"
            style={{ textShadow: "0 0 40px rgba(200,22,29,0.5)" }}
          >
            Energie.
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="mt-7 grid gap-6 md:mt-10 md:grid-cols-[1.4fr_1fr] md:items-end md:gap-10"
        >
          <p className="max-w-xl text-sm leading-relaxed text-bone-200 sm:text-base md:text-lg">
            Meisterbetrieb für Heizung, Sanitär und Solar im kompletten
            Saarland. Giuseppe D&apos;Acquino berät Sie persönlich. Festpreis,
            Termintreue, alles aus einer Hand.
          </p>

          <div className="flex items-end gap-5 sm:gap-6">
            <div className="flex flex-col">
              <span className="vin">Google</span>
              <div className="d-display flex items-baseline gap-2">
                <span className="text-4xl text-bone-50 md:text-5xl">4,9</span>
                <span className="d-stencil text-xs text-bone-300">/ 5</span>
              </div>
              <div className="mt-1 flex items-center gap-1 text-oxide-400">
                {[1, 2, 3, 4, 5].map((n) => (
                  <svg
                    key={n}
                    viewBox="0 0 24 24"
                    width="11"
                    height="11"
                    fill="currentColor"
                  >
                    <path d="M12 2l2.9 7h7.1l-5.8 4.2L18.3 20 12 15.5 5.7 20l2.1-6.8L2 9h7.1z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="h-14 w-px bg-white/10" />
            <div className="flex flex-col">
              <span className="vin">Garantie</span>
              <span className="d-display text-4xl text-bone-50 md:text-5xl">
                24/7
              </span>
              <span className="d-stencil mt-1 text-xs text-bone-300">
                Notdienst
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="mt-8 flex flex-wrap items-center gap-2.5 md:mt-10 md:gap-3"
        >
          <a
            href="#kontakt"
            className="oxide-btn flex-1 justify-center rounded-md px-5 py-3.5 sm:flex-none sm:px-7 sm:py-4"
          >
            Kostenloses Angebot
          </a>
          <a
            href="tel:+4968199276655"
            className="ghost-btn flex-1 justify-center rounded-md px-5 py-3.5 sm:flex-none sm:px-7 sm:py-4"
          >
            0681 / 99276655
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-bone-300 md:flex"
        >
          <span>Scrollen</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="block h-6 w-px bg-white/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
