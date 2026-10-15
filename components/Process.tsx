"use client";

import { motion } from "framer-motion";

const EASE = [0.23, 1, 0.32, 1] as const;

const STEPS = [
  { k: "01", t: "Erstgespräch", b: "Sie schildern Ihr Vorhaben. Wir hören zu, stellen Rückfragen, Vor-Ort-Termin." },
  { k: "02", t: "Aufmaß & Planung", b: "Wir nehmen Maß und erarbeiten Vorschläge für Technik, Design und Ablauf." },
  { k: "03", t: "Festpreis", b: "Transparente Kostenaufstellung. Keine Überraschungen. Keine versteckten Posten." },
  { k: "04", t: "Umsetzung", b: "Montage, Koordination aller Fremdgewerke, saubere Baustelle, Terminmanagement." },
  { k: "05", t: "Service", b: "Übergabe, Einweisung und Wartungsplan. Für ein langes Geräteleben." },
];

export default function Process() {
  return (
    <section
      id="ablauf"
      className="relative mx-auto max-w-[1440px] safe-x py-16 md:py-32"
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-8">
        <div>
          <span className="tape-label">Ablauf</span>
          <h2 className="d-display text-mega mt-5 md:mt-6">
            <span className="block">So arbeiten</span>
            <span className="block chrome-text">wir mit Ihnen.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-bone-200 sm:text-base md:text-right">
          Fünf Schritte, klar beschrieben. Jede Entscheidung nachvollziehbar.
          Jeder Termin verbindlich.
        </p>
      </div>

      <div className="relative mt-10 overflow-hidden rounded-xl border border-[#1f1f26] md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              className="relative overflow-hidden border-b border-[#1f1f26] bg-void-900 p-5 last:border-b-0 sm:p-7 md:border-b-0 md:border-r md:p-8 md:last:border-r-0"
            >
              <div
                className="pointer-events-none absolute -right-3 -top-5 select-none d-display text-[80px] font-black text-white/[0.05] md:-right-4 md:-top-6 md:text-[120px]"
                aria-hidden
              >
                {s.k}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-oxide-500" />
                <span className="vin">Schritt {s.k}</span>
              </div>
              <h3 className="d-display mt-3 text-xl sm:text-2xl md:mt-4 md:text-3xl">
                {s.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-200 md:mt-3">
                {s.b}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
