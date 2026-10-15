import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-4 pt-40">
      <span className="tape-label red">404</span>
      <h1 className="d-display mt-6 text-5xl md:text-7xl">
        Seite nicht gefunden.
      </h1>
      <p className="mt-5 max-w-xl text-bone-100">
        Vielleicht wurde die Seite verschoben oder umbenannt. Zurück zur
        Startseite.
      </p>
      <Link href="/" className="oxide-btn mt-8 rounded-md px-6 py-3">
        Zur Startseite
      </Link>
    </section>
  );
}
