"use client";

import { motion } from "framer-motion";
import { REASONS } from "@/lib/business";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function Reasons() {
  return (
    <section className="relative mx-auto max-w-[1440px] safe-x py-16 md:py-32">
      <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:items-start md:gap-14">
        <div className="md:sticky md:top-28">
          <span className="tape-label red">10 gute Gründe</span>
          <h2 className="d-display text-mega mt-5 md:mt-6">
            <span className="block">Handwerk,</span>
            <span className="block text-stroke-bone">auf das man</span>
            <span className="block chrome-text">sich verlässt.</span>
          </h2>
          <p className="mt-6 max-w-md text-sm text-bone-200 sm:text-base md:mt-7">
            Traditionelles Handwerk und modernste Technik. Besonders stark in
            Badsanierung, Heizungsmodernisierung, Photovoltaik und
            Wohnraumlüftung.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 md:mt-7">
            {[
              "Meisterbetrieb",
              "Festpreis",
              "Aus einer Hand",
              "Termintreue",
            ].map((chip) => (
              <span
                key={chip}
                className="d-stencil rounded-full border border-[#22232a] bg-void-800 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-bone-200"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <ul className="relative grid gap-0 overflow-hidden rounded-xl border border-[#1f1f26] bg-void-900">
          {REASONS.map((r, i) => (
            <motion.li
              key={r.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.04,
                ease: EASE,
              }}
              className="group relative flex items-start gap-4 border-b border-[#17171c] p-5 last:border-b-0 sm:gap-6 sm:p-6 md:p-8"
            >
              <div className="flex flex-col items-center">
                <span className="d-display text-4xl text-bone-50/80 transition-colors duration-500 group-hover:text-oxide-400 sm:text-5xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-2 h-8 w-px bg-white/10 sm:h-10" />
              </div>
              <div className="flex-1">
                <h3 className="d-display text-xl sm:text-2xl md:text-3xl">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-bone-200 sm:mt-3 md:text-base">
                  {r.body}
                </p>
              </div>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 bg-oxide-500 transition-transform duration-500 ease-apple group-hover:scale-x-100"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
