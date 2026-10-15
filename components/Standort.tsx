"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "@/lib/images";
import { BUSINESS } from "@/lib/business";

const EASE = [0.23, 1, 0.32, 1] as const;

const HOURS = [
  ["Mo", "07:30 – 17:00"],
  ["Di", "07:30 – 17:00"],
  ["Mi", "07:30 – 17:00"],
  ["Do", "07:30 – 17:00"],
  ["Fr", "07:30 – 15:00"],
  ["Sa", "nach Vereinbarung"],
  ["So", "geschlossen"],
];

const DAY_NAMES = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];

export default function Standort() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const today = DAY_NAMES[new Date().getDay()];

  return (
    <section
      id="standort"
      ref={ref}
      className="relative overflow-hidden py-16 md:py-32"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${IMG.heroWorkshop})`,
            filter: "grayscale(0.9) brightness(0.5)",
          }}
        />
      </motion.div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void-950 via-void-950/80 to-void-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 technical-lines opacity-30" />

      <div className="relative mx-auto max-w-[1440px] safe-x">
        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-8">
          <div>
            <span className="tape-label">Standort</span>
            <h2 className="d-display text-mega mt-5 md:mt-6">
              <span className="block">Immer</span>
              <span className="block chrome-text">in Ihrer Nähe.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-bone-200 sm:text-base md:text-right">
            Zentral in Saarbrücken. Einsatzgebiet komplettes Saarland und Teile
            Rheinland-Pfalz. Vor-Ort-Beratung, auch samstags nach Absprache.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="panel-hard overflow-hidden rounded-xl p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="vin">Adresse</span>
                <h3 className="d-display mt-3 text-2xl sm:text-3xl md:text-4xl">
                  GD D&apos;Acquino
                </h3>
                <p className="mt-3 text-bone-100 md:mt-4">
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.postal} {BUSINESS.address.city}
                </p>
              </div>
              <span className="tape-label red">GPS</span>
            </div>

            <div className="mt-7 space-y-3 md:mt-8">
              <a
                href="tel:+4968199276655"
                className="group flex items-center justify-between gap-4 border-b border-[#1f1f26] pb-3"
              >
                <span className="vin">Telefon</span>
                <span className="d-stencil text-xs font-bold tracking-[0.1em] text-bone-50 transition-colors group-hover:text-oxide-400 sm:text-sm">
                  0681 / 99276655
                </span>
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="group flex items-center justify-between gap-4 border-b border-[#1f1f26] pb-3"
              >
                <span className="vin">E-Mail</span>
                <span className="d-stencil text-xs font-bold tracking-[0.1em] text-bone-50 transition-colors group-hover:text-oxide-400 sm:text-sm">
                  info@gd-heizung.de
                </span>
              </a>
              <div className="flex items-center justify-between gap-4">
                <span className="vin">Gebiet</span>
                <span className="d-stencil text-xs font-bold uppercase tracking-[0.1em] text-bone-50 sm:text-sm">
                  Saarland + RLP
                </span>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <span className="vin">Notfall</span>
              <a
                href="tel:+4968199276655"
                className="oxide-btn mt-3 flex w-full items-center justify-center rounded-md px-5 py-4 md:px-6"
              >
                <span className="relative mr-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/80 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Notdienst jetzt rufen
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="panel-hard overflow-hidden rounded-xl"
          >
            <div className="relative border-b border-[#1f1f26] p-6 sm:p-8 md:p-10">
              <span className="vin">Öffnungszeiten</span>
              <h3 className="d-display mt-3 text-2xl sm:text-3xl md:text-4xl">
                Wann wir da sind.
              </h3>

              <ul className="mt-6 divide-y divide-[#1f1f26] border-y border-[#1f1f26] md:mt-7">
                {HOURS.map(([d, h]) => {
                  const isToday = today === d;
                  return (
                    <li
                      key={d}
                      className={`flex items-center justify-between py-2.5 md:py-3 ${
                        isToday
                          ? "-mx-6 bg-oxide-500/10 px-6 sm:-mx-8 sm:px-8 md:-mx-10 md:px-10"
                          : ""
                      }`}
                    >
                      <span
                        className={`d-stencil text-sm font-bold uppercase tracking-[0.14em] ${
                          isToday ? "text-oxide-400" : "text-bone-200"
                        }`}
                      >
                        {d}
                        {isToday && (
                          <span className="ml-2 vin text-oxide-400">
                            · Heute
                          </span>
                        )}
                      </span>
                      <span className="d-mono text-xs text-bone-100 sm:text-sm">
                        {h}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="corner-brackets relative aspect-[16/10] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${IMG.haus})`,
                  filter: "grayscale(0.3) contrast(1.1) brightness(0.75)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-void-950/40 via-transparent to-void-950/60" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
