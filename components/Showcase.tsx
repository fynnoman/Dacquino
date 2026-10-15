"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { IMG } from "@/lib/images";

const EASE = [0.23, 1, 0.32, 1] as const;

const ITEMS = [
  {
    tag: "Modernisierung",
    title: "Brennwert, Hybrid, Wärmepumpe.",
    body: "Wir modernisieren Ihre Heizung so, dass sie zu Ihrem Haus passt. Mit transparenter Beratung, Festpreis und Fördermittel-Check.",
    img: IMG.heizung,
    meta: [
      ["System", "Gas · Öl · Wärmepumpe · Hybrid"],
      ["Ersparnis", "bis zu 30 %"],
      ["Marken", "Buderus · Bosch · Viessmann"],
    ],
    href: "#kontakt",
    cta: "Beratung anfragen",
  },
  {
    tag: "Bäder",
    title: "Vom Aufmaß bis zum Traumbad.",
    body: "Bodengleiche Duschen, barrierearme Bäder, Komplettrenovierung. Wir organisieren alle Gewerke – von der Fliese bis zur Beleuchtung.",
    img: IMG.badLuxus,
    meta: [
      ["Leistung", "CAD-Planung · Alle Gewerke"],
      ["Spezial", "Barrierefrei · Bodengleich"],
      ["Marken", "Grohe · Villeroy & Boch · Duravit"],
    ],
    href: "#kontakt",
    cta: "Beratung anfragen",
  },
  {
    tag: "Energie",
    title: "Dach- & Balkonkraftwerke, Speicher.",
    body: "Photovoltaik mit Ertragsprognose, Batteriespeicher, Sektorkopplung mit Wärmepumpe und Wallbox. Alles verzahnt.",
    img: IMG.solarRoof,
    meta: [
      ["Technik", "PV · Speicher · Wallbox"],
      ["Ertrag", "Dach · Balkon · Flächen"],
      ["Service", "Planung · Montage · Wartung"],
    ],
    href: "#kontakt",
    cta: "Beratung anfragen",
  },
];

export default function Showcase() {
  return (
    <section
      id="projekte"
      className="relative mx-auto max-w-[1440px] safe-x py-16 md:py-32"
    >
      <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-8">
        <div>
          <span className="tape-label">
            <span className="h-1 w-1 rounded-full bg-oxide-500" />
            Projekte
          </span>
          <h2 className="d-display text-mega mt-5 md:mt-6">
            <span className="block">Unsere</span>
            <span className="block chrome-text">Arbeit.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm text-bone-200 sm:text-base md:text-right">
          Heizung, Bad und Solar. Beispiele unserer Projekte im Saarland.
        </p>
      </div>

      <div className="mt-12 space-y-16 md:mt-16 md:space-y-32">
        {ITEMS.map((it, i) => (
          <ShowcaseRow key={it.title} item={it} index={i} />
        ))}
      </div>
    </section>
  );
}

function ShowcaseRow({
  item,
  index,
}: {
  item: (typeof ITEMS)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["8%", "-12%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);

  return (
    <div ref={ref} className="grid gap-8 md:grid-cols-12 md:items-center md:gap-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: EASE }}
        className={`relative col-span-12 overflow-hidden rounded-xl border border-[#1f1f26] md:col-span-8 ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <div className="corner-brackets relative aspect-[16/10] overflow-hidden">
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${item.img})` }}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40" />
          <div className="pointer-events-none absolute inset-0 technical-lines opacity-25" />
          <div className="absolute left-5 top-5">
            <span className="tape-label">
              {item.tag}
            </span>
          </div>
          <div
            className="pointer-events-none absolute -bottom-5 -right-3 select-none d-display text-[100px] font-black text-white/[0.07] sm:text-[140px] md:-bottom-6 md:-right-4 md:text-[180px]"
            aria-hidden
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, delay: 0.1, ease: EASE }}
        className={`col-span-12 md:col-span-4 ${reverse ? "md:order-1" : ""}`}
      >
        <h3 className="d-display text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          {item.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-bone-200 sm:text-base md:mt-5">
          {item.body}
        </p>

        <ul className="mt-6 divide-y divide-[#1f1f26] border-y border-[#1f1f26] md:mt-7">
          {item.meta.map(([k, v]) => (
            <li
              key={k}
              className="flex items-baseline justify-between gap-4 py-3"
            >
              <span className="vin">{k}</span>
              <span className="d-stencil text-sm font-semibold uppercase tracking-[0.1em] text-bone-100">
                {v}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={item.href}
          className="oxide-btn mt-6 inline-flex rounded-md px-5 py-3 text-[12px] md:mt-8"
        >
          {item.cta}
          <span>→</span>
        </a>
      </motion.div>
    </div>
  );
}
