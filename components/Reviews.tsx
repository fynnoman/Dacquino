"use client";

import { motion } from "framer-motion";
import { IMG } from "@/lib/images";

const EASE = [0.23, 1, 0.32, 1] as const;

const REVIEWS = [
  {
    q: "Neue Gastherme in zwei Tagen eingebaut, saubere Arbeit, alles mitgenommen. Giuseppe war selbst mit vor Ort und hat alles erklärt.",
    n: "Thomas W.",
    r: "Modernisierung · Saarbrücken",
    s: 5,
  },
  {
    q: "Bad komplett neu, bodengleiche Dusche, Fliesen bis zur Decke. Keine Überraschungen beim Festpreis, Terminplan hat gehalten.",
    n: "Sabine K.",
    r: "Badsanierung · Völklingen",
    s: 5,
  },
  {
    q: "PV-Anlage mit Speicher und Wallbox. Beratung ehrlich, Montage sauber. Erträge sogar leicht über Prognose.",
    n: "Markus H.",
    r: "Photovoltaik · Dillingen",
    s: 5,
  },
];

export default function Reviews() {
  return (
    <section id="stimmen" className="relative overflow-hidden py-16 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${IMG.heroWorkshop})`,
          filter: "grayscale(1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-950/85 to-void-950" />
      <div className="pointer-events-none absolute inset-0 technical-lines-h opacity-30" />

      <div className="relative mx-auto max-w-[1440px] safe-x">
        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-8">
          <div>
            <span className="tape-label red">Stimmen</span>
            <h2 className="d-display text-mega mt-5 md:mt-6">
              <span className="block">Was unsere</span>
              <span className="block chrome-text">Kunden sagen.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-bone-200 sm:text-base md:text-right">
            Rückmeldungen aus echten Projekten im Saarland und in Teilen
            Rheinland-Pfalz.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-5">
          {REVIEWS.map((rv, i) => (
            <motion.figure
              key={rv.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, delay: i * 0.08, ease: EASE }}
              className="panel-hard relative overflow-hidden rounded-xl p-5 sm:p-7 md:p-8"
            >
              <div className="flex items-center gap-1 text-oxide-400">
                {Array.from({ length: rv.s }).map((_, j) => (
                  <svg
                    key={j}
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="currentColor"
                  >
                    <path d="M12 2l2.9 7h7.1l-5.8 4.2L18.3 20 12 15.5 5.7 20l2.1-6.8L2 9h7.1z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-bone-100 sm:text-base md:mt-5 md:text-lg">
                „{rv.q}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-[#1f1f26] pt-5 md:mt-7">
                <div>
                  <div className="d-stencil text-sm font-bold uppercase tracking-[0.1em] text-bone-50">
                    {rv.n}
                  </div>
                  <div className="vin mt-1">{rv.r}</div>
                </div>
                <span className="tape-label">Google</span>
              </figcaption>
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-oxide-500 via-oxide-400 to-transparent"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
