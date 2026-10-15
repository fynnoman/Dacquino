"use client";

import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { BUSINESS } from "@/lib/business";
import { IMG } from "@/lib/images";

const EASE = [0.23, 1, 0.32, 1] as const;

export default function ContactSection() {
  return (
    <section id="kontakt" className="relative overflow-hidden py-16 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(${IMG.heroWorkshop})`,
          filter: "grayscale(1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void-950 via-void-950/90 to-void-950" />
      <div className="pointer-events-none absolute inset-0 technical-lines opacity-25" />
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-oxide-500/15 blur-[160px] md:h-96 md:w-96" />

      <div className="relative mx-auto max-w-[1440px] safe-x">
        <div className="grid gap-6 md:grid-cols-[1fr_1.3fr] md:items-end md:gap-8">
          <div>
            <span className="tape-label red">Kontakt</span>
            <h2 className="d-display text-mega mt-5 md:mt-6">
              <span className="block">Lassen Sie</span>
              <span className="block chrome-text">uns reden.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-bone-200 sm:text-base md:text-right">
            Beschreiben Sie uns Ihr Vorhaben. Wir melden uns zügig und machen
            einen Termin aus. Oder rufen Sie direkt an.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: EASE }}
          className="mt-10 grid gap-4 md:mt-14 md:grid-cols-[1.3fr_1fr] md:gap-6"
        >
          <ContactForm />

          <div className="space-y-4 md:space-y-6">
            <div className="panel-hard rounded-xl p-5 sm:p-7">
              <span className="tape-label">Erreichbarkeit</span>
              <h3 className="d-display mt-4 text-xl sm:text-2xl md:mt-5 md:text-3xl">
                {BUSINESS.name}
              </h3>
              <p className="mt-3 text-sm text-bone-100 sm:text-base md:mt-4">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.postal} {BUSINESS.address.city}
              </p>
              <div className="mt-5 space-y-2 md:mt-6">
                <a
                  className="flex items-center justify-between gap-3 border-b border-[#1f1f26] pb-2 text-bone-100 hover:text-white"
                  href={`tel:${BUSINESS.phoneTel}`}
                >
                  <span className="vin">Telefon</span>
                  <span className="d-stencil text-xs font-bold tracking-[0.1em] sm:text-sm">
                    {BUSINESS.phone}
                  </span>
                </a>
                <a
                  className="flex items-center justify-between gap-3 text-bone-100 hover:text-white"
                  href={`mailto:${BUSINESS.email}`}
                >
                  <span className="vin">E-Mail</span>
                  <span className="d-stencil text-xs font-bold tracking-[0.1em] sm:text-sm">
                    {BUSINESS.email}
                  </span>
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-[#1f1f26] bg-void-900 p-5 sm:p-7">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-oxide-500/20 blur-[80px]" />
              <span className="tape-label red">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                </span>
                Notdienst
              </span>
              <h3 className="d-display mt-4 text-xl sm:text-2xl md:mt-5 md:text-3xl">
                In Notfällen
                <br />
                <span className="chrome-text">rund um die Uhr.</span>
              </h3>
              <p className="mt-3 text-sm text-bone-200 md:mt-4">
                Für unsere Kundinnen und Kunden rund um die Uhr erreichbar.
                Bitte nur in echten Notfällen.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
