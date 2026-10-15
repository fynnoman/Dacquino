"use client";

import { motion } from "framer-motion";

const STATS = [
  { k: "100 %", t: "Meisterbetrieb", h: "Qualität" },
  { k: "24/7", t: "Notdienst", h: "Erreichbar" },
  { k: "ø 30 %", t: "Energieersparnis", h: "Technik" },
  { k: "Saarland", t: "+ Teile RLP", h: "Einsatzgebiet" },
];

export default function StatBand() {
  return (
    <section className="relative mx-auto -mt-14 max-w-[1440px] safe-x pb-10 md:-mt-20">
      <div className="panel-hard relative grid grid-cols-2 overflow-hidden rounded-xl md:grid-cols-4">
        <div className="pointer-events-none absolute inset-0 technical-lines-h opacity-50" />
        {STATS.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              delay: i * 0.07,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="relative border-b border-[#1f1f26] p-5 last:border-b-0 sm:p-7 md:border-b-0 md:p-9"
          >
            {i > 0 && (
              <span className="pointer-events-none absolute left-0 top-6 bottom-6 hidden w-px bg-white/8 md:block" />
            )}
            {i === 2 && (
              <span className="pointer-events-none absolute left-0 top-0 bottom-0 hidden w-px bg-white/8 md:hidden" />
            )}
            <span className="vin">{s.h}</span>
            <div className="d-display mt-2 text-3xl text-bone-50 sm:text-4xl md:mt-3 md:text-5xl">
              {s.k}
            </div>
            <div className="mt-2 flex items-center gap-2 md:mt-3">
              <span className="h-px w-5 bg-oxide-500 md:w-6" />
              <span className="d-stencil text-[10px] uppercase tracking-[0.2em] text-bone-300 md:text-[11px] md:tracking-[0.22em]">
                {s.t}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
