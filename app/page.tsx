import Hero from "@/components/Hero";
import StatBand from "@/components/StatBand";
import ServicesGrid from "@/components/ServicesGrid";
import Showcase from "@/components/Showcase";
import StickyScaleImage from "@/components/StickyScaleImage";
import Reasons from "@/components/Reasons";
import Process from "@/components/Process";
import Marquee from "@/components/Marquee";
import Reviews from "@/components/Reviews";
import Standort from "@/components/Standort";
import EmergencyBanner from "@/components/EmergencyBanner";
import ContactSection from "@/components/ContactSection";
import { IMG } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <Marquee />
      <ServicesGrid />

      <StickyScaleImage
        src={IMG.heizung}
        overline="Heizungsmodernisierung"
        title="Bis zu 30 % weniger Heizenergie."
        body="Sie möchten Ihre alte Heizung modernisieren oder neu planen. Wir finden das System, das zu Ihrem Haus passt. Gas, Öl, Wärmepumpe oder Hybrid. Immer effizient. Immer durchdacht."
      >
        <a
          href="#kontakt"
          className="oxide-btn inline-flex rounded-md px-6 py-3.5"
        >
          Beratung anfragen
        </a>
      </StickyScaleImage>

      <Showcase />
      <Reasons />
      <Process />

      <StickyScaleImage
        src={IMG.solarRoof}
        overline="Energie & Solar"
        title="Sonne nutzen. Rechnung senken."
        body="Photovoltaik gegen die Stromrechnung. Solarthermie gegen die Heizkosten. Mit modernen Speichern wird Energie der Sonne rund um die Uhr nutzbar."
        reverse
      >
        <a
          href="#kontakt"
          className="oxide-btn inline-flex rounded-md px-6 py-3.5"
        >
          Beratung anfragen
        </a>
      </StickyScaleImage>

      <Reviews />
      <Standort />
      <EmergencyBanner />
      <ContactSection />
    </>
  );
}
