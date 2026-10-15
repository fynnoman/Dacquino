"use client";

import { motion } from "framer-motion";
import { SERVICES } from "@/lib/services";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function ServicesGrid() {
  return (
    <section
      id="leistungen"
      className="relative mx-auto max-w-[1440px] safe-x py-16 md:py-32"
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-8">
        <div>
          <span className="tape-label">
            <span className="h-1 w-1 rounded-full bg-oxide-500" />
            Leistungen
          </span>
          <h2 className="d-display text-mega mt-5 md:mt-6">
            <span className="block chrome-text">Alles rund</span>
            <span className="block">ums Haus.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-bone-200 sm:text-base md:text-right">
          Vom Heizungstausch bis zum Traumbad. Von Photovoltaik auf dem Dach
          bis zur Wohnraumlüftung mit Wärmerückgewinnung. Ein Partner, ein
          Ansprechpartner.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-xl border border-[#1f1f26] md:mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.06, ease: EASE }}
              className="group relative overflow-hidden border-b border-r border-[#1f1f26] bg-void-900"
            >
              <a href="#kontakt" className="relative block">

                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[1400ms] ease-apple group-hover:scale-110"
                    style={{ backgroundImage: `url(${s.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void-950 via-void-950/55 to-transparent" />
                  <div className="pointer-events-none absolute inset-0 technical-lines opacity-30" />
                  <div
                    className="pointer-events-none absolute -right-6 -bottom-8 select-none d-display text-[110px] font-black text-white/[0.07] sm:text-[160px] md:-right-8 md:-bottom-10 md:text-[180px]"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="absolute left-4 top-4 md:left-5 md:top-5">
                    <span className="tape-label">
                      <span className="text-oxide-400">●</span>
                      {s.slug.toUpperCase()}
                    </span>
                  </div>
                </div>

                <div className="relative p-5 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="d-display text-2xl sm:text-3xl md:text-4xl">
                      {s.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#2a2a32] bg-white/5 transition-all duration-500 ease-apple group-hover:border-oxide-500 group-hover:bg-oxide-500 group-hover:text-white md:h-10 md:w-10">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="transition-transform duration-500 ease-apple group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        <path
                          d="M7 17L17 7M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-bone-200 md:mt-4">
                    {s.short}
                  </p>
                  <div className="mt-4 flex items-center gap-2 md:mt-5">
                    <span className="vin">Beratung anfragen</span>
                    <span className="h-px w-8 bg-oxide-500 md:w-10" />
                  </div>
                </div>

                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-oxide-500 transition-transform duration-500 ease-apple group-hover:scale-x-100"
                />
              </a>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.35, ease: EASE }}
            className="relative border-b border-r border-[#1f1f26] bg-void-800/40 p-5 md:p-7"
          >
            <span className="tape-label red">+ Mehr</span>
            <h3 className="d-display mt-5 text-2xl sm:text-3xl md:text-4xl">
              Wartung
              <br />
              <span className="chrome-text">& Notdienst.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bone-200 md:mt-4">
              Wartung mit Dichtheitskontrolle. 24-Stunden-Notdienst zu fairen
              Preisen für alle unsere Kunden.
            </p>
            <div className="mt-5 flex flex-wrap gap-2 md:mt-6">
              <a
                href="#kontakt"
                className="ghost-btn rounded-md px-4 py-2.5 text-[11px]"
              >
                Beratung
              </a>
              <a
                href="tel:+4968199276655"
                className="oxide-btn rounded-md px-4 py-2.5 text-[11px]"
              >
                Notdienst
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
