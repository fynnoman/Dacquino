"use client";

import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function EmergencyBanner() {
  return (
    <section className="relative mx-auto max-w-[1440px] safe-x py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative grid gap-8 overflow-hidden rounded-xl border border-[#1f1f26] bg-void-900 p-6 sm:p-10 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-10 md:p-16"
      >
        <div
          className="absolute inset-y-0 right-0 w-full bg-cover bg-center opacity-20 mix-blend-luminosity md:w-1/2 md:opacity-45"
          style={{ backgroundImage: `url(${IMG.notdienst})` }}
        />
        <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-transparent via-void-950/80 to-void-950 md:w-1/2 md:via-void-950/70" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-oxide-500/25 blur-[120px] md:h-72 md:w-72" />
        <div className="pointer-events-none absolute inset-0 technical-lines opacity-20" />

        <div className="relative">
          <span className="tape-label red">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            24/7 Notdienst
          </span>
          <h3 className="d-display mt-5 text-balance text-3xl sm:text-4xl md:mt-6 md:text-6xl">
            <span className="block">Heizung kalt?</span>
            <span className="block chrome-text">Wir sind da.</span>
          </h3>
          <p className="mt-4 max-w-md text-sm text-bone-200 sm:text-base md:mt-5">
            Wasserschaden, Gasgeruch, Heizung aus. In echten Notfällen
            erreichen Sie unseren Notdienst rund um die Uhr. Zu fairen Preisen.
          </p>
        </div>
        <div className="relative flex flex-col gap-2.5 md:items-end md:gap-3">
          <a
            href="tel:+4968199276655"
            className="oxide-btn justify-center rounded-md px-5 py-3.5 sm:px-7 sm:py-4"
          >
            Jetzt anrufen · 0681 / 99276655
          </a>
          <a
            href="#kontakt"
            className="ghost-btn justify-center rounded-md px-5 py-3.5 sm:px-7 sm:py-4"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </motion.div>
    </section>
  );
}
