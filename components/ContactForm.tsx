"use client";

import { useState } from "react";

const TOPICS = [
  "Heizung",
  "Photovoltaik",
  "Lüftung",
  "Sanitär",
  "Solar",
  "Wartung",
  "Förderung",
  "Sonstiges",
];

export default function ContactForm() {
  const [topic, setTopic] = useState("Heizung");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Anfrage über die Website: ${topic}`
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name") || ""}\n` +
        `E-Mail: ${data.get("email") || ""}\n` +
        `Telefon: ${data.get("telefon") || ""}\n` +
        `Thema: ${topic}\n\n` +
        `Nachricht:\n${data.get("nachricht") || ""}`
    );
    window.location.href = `mailto:info@gd-heizung.de?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="panel-hard rounded-xl p-5 sm:p-7 md:p-10">
      <span className="tape-label red">Anfrage</span>

      <div className="mt-6 md:mt-7">
        <span className="vin">Thema wählen</span>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTopic(t)}
              className={`d-stencil rounded-md border px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-apple active:scale-[0.97] sm:px-4 sm:text-[11px] ${
                topic === t
                  ? "border-oxide-500 bg-oxide-500/15 text-oxide-300"
                  : "border-[#22232a] bg-white/3 text-bone-200 hover:bg-white/8"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="vin">Name</span>
          <input
            name="name"
            required
            className="d-stencil mt-2 w-full rounded-md border border-[#22232a] bg-void-800 px-4 py-3 text-sm uppercase tracking-[0.08em] text-bone-50 outline-none transition focus:border-oxide-500 focus:bg-void-700"
          />
        </label>
        <label className="block">
          <span className="vin">E-Mail</span>
          <input
            name="email"
            type="email"
            required
            className="d-stencil mt-2 w-full rounded-md border border-[#22232a] bg-void-800 px-4 py-3 text-sm tracking-[0.04em] text-bone-50 outline-none transition focus:border-oxide-500 focus:bg-void-700"
          />
        </label>
        <label className="block md:col-span-2">
          <span className="vin">Telefon</span>
          <input
            name="telefon"
            className="d-stencil mt-2 w-full rounded-md border border-[#22232a] bg-void-800 px-4 py-3 text-sm tracking-[0.08em] text-bone-50 outline-none transition focus:border-oxide-500 focus:bg-void-700"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="vin">Nachricht</span>
        <textarea
          name="nachricht"
          rows={6}
          required
          className="mt-2 w-full rounded-md border border-[#22232a] bg-void-800 px-4 py-3 text-sm leading-relaxed text-bone-50 outline-none transition focus:border-oxide-500 focus:bg-void-700"
        />
      </label>

      <label className="mt-5 flex items-start gap-3 text-sm text-bone-200">
        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-white/30 bg-void-800 accent-oxide-500"
        />
        <span>
          Ich habe die Datenschutzerklärung gelesen und bin mit der
          Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage
          einverstanden.
        </span>
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-2.5 md:mt-7 md:gap-3">
        <button
          type="submit"
          className="oxide-btn flex-1 justify-center rounded-md px-5 py-3.5 sm:flex-none sm:px-6"
        >
          Anfrage senden
        </button>
        <a
          href="tel:+4968199276655"
          className="ghost-btn flex-1 justify-center rounded-md px-5 py-3.5 sm:flex-none sm:px-6"
        >
          Lieber anrufen
        </a>
        {sent && (
          <span className="vin text-oxide-400">Mailprogramm öffnet sich</span>
        )}
      </div>
    </form>
  );
}
