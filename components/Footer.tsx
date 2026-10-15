import Image from "next/image";
import { BUSINESS } from "@/lib/business";
import { LOGO } from "@/lib/images";

export default function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-[#1f1f26] bg-void-950 md:mt-28">
      <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-oxide-500/12 blur-[120px]" />
      <div className="pointer-events-none absolute inset-0 technical-lines-h opacity-25" />

      <div className="relative mx-auto max-w-[1440px] safe-x py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative inline-flex h-12 w-16 items-center justify-center">
                <Image
                  src={LOGO}
                  alt="GD D'Acquino Logo"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </span>
              <span className="d-stencil text-sm font-bold uppercase tracking-[0.14em]">
                {BUSINESS.name}
              </span>
            </div>
            <p className="d-display mt-5 max-w-md text-4xl sm:text-5xl md:mt-6 md:text-6xl">
              Wärme. Wasser.
              <br />
              <span className="chrome-text">Energie.</span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone-200 md:mt-7">
              {BUSINESS.tagline}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
            <div className="panel-hard rounded-xl p-5 sm:p-6">
              <span className="vin">Adresse</span>
              <div className="d-stencil mt-3 text-sm font-bold uppercase tracking-[0.12em] text-bone-50">
                GD D&apos;Acquino GmbH
              </div>
              <p className="mt-2 text-sm text-bone-100">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.postal} {BUSINESS.address.city}
              </p>
            </div>
            <div className="panel-hard rounded-xl p-5 sm:p-6">
              <span className="vin">Kontakt</span>
              <a
                href={`tel:${BUSINESS.phoneTel}`}
                className="d-stencil mt-3 block text-sm font-bold tracking-[0.12em] text-bone-50 hover:text-oxide-400"
              >
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="mt-2 block text-sm text-bone-100 hover:text-white"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[#1f1f26] pt-6 md:mt-16 md:flex-row md:items-center md:gap-4">
          <p className="vin">
            © {new Date().getFullYear()} {BUSINESS.name} · Meisterbetrieb
            Saarbrücken
          </p>
          <p className="vin">{BUSINESS.area}</p>
        </div>
      </div>
    </footer>
  );
}
