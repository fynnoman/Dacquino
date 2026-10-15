"use client";

const BRANDS = [
  "Buderus",
  "Bosch Thermotechnik",
  "Viessmann",
  "Vaillant",
  "Grohe",
  "Hansgrohe",
  "Villeroy & Boch",
  "Duravit",
  "Kaldewei",
  "Wolf",
  "Stiebel Eltron",
  "Keramag",
];

const KEYWORDS = [
  "Wärmepumpe",
  "Brennwerttechnik",
  "Festpreis",
  "Barrierefrei",
  "Photovoltaik",
  "Hybridsystem",
  "Wartung",
  "Notdienst",
  "Pufferspeicher",
  "Flächenheizung",
  "Trinkwasser",
  "Regenwasser",
  "Energieberatung",
  "Förderung",
];

export default function Marquee() {
  return (
    <section className="relative overflow-hidden border-y border-[#1f1f26] bg-void-900/60 py-8 md:py-10">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void-950 to-transparent md:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void-950 to-transparent md:w-32" />

      <div className="relative overflow-hidden">
        <div className="marquee flex min-w-max items-center gap-8 whitespace-nowrap md:gap-14">
          {[...BRANDS, ...BRANDS].map((b, i) => (
            <span
              key={`${b}-${i}`}
              className="d-display flex items-center gap-6 text-[clamp(26px,5vw,52px)] text-bone-50/85 md:gap-10"
            >
              {b}
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-oxide-500 md:h-2 md:w-2" />
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-4 overflow-hidden md:mt-5">
        <div className="marquee-fast flex min-w-max items-center gap-7 whitespace-nowrap md:gap-10">
          {[...KEYWORDS, ...KEYWORDS].map((k, i) => (
            <span
              key={`${k}-${i}`}
              className="d-stencil flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-bone-300 md:gap-6 md:text-[13px] md:tracking-[0.25em]"
            >
              {k}
              <span className="h-1 w-1 rotate-45 bg-oxide-400" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
