import { IMG } from "./images";

export type ServiceDetail = {
  slug: string;
  title: string;
  short: string;
  lead: string;
  hero: string;
  image: string;
  points: { title: string; body: string }[];
};

export const SERVICES: ServiceDetail[] = [
  {
    slug: "heizung",
    title: "Heizung",
    short:
      "Modernisieren, neu planen, nachhaltig heizen. Mit Brennwerttechnik, Wärmepumpen und Hybridsystemen.",
    lead: "Heizsysteme mit Zukunft. Innovative Produkte auf neuestem technischen Stand und mit klarem, preisgekrönten Design. Solide, modular und vernetzt. Für Privat, Wohnungswirtschaft und Gewerbe. Für Neubau und Modernisierung.",
    hero: IMG.heizung,
    image: IMG.heizungDetail,
    points: [
      { title: "Digitale Steuerung", body: "Komfortabler und effizienter. Steuerung per Smartphone, Tablet und PC. Der Gang in den Heizungskeller wird überflüssig." },
      { title: "Gasheizung", body: "Erdgas-Brennwerttechnik zählt zu den effizientesten Heizsystemen. Wirtschaftlich und ausgereift bei der Modernisierung." },
      { title: "Ölheizung", body: "Höchste Effizienz und Kombinierbarkeit mit erneuerbaren Energien machen die moderne Ölheizung weiterhin attraktiv." },
      { title: "Wärmepumpen", body: "Gewinnen Umweltwärme aus Luft, Wasser oder Erdreich und geben sie an das Heizsystem ab. Unerschöpflich und kostenlos." },
      { title: "Fernwärme", body: "Übergabestationen als hydraulische Schnittstelle zur effizienten Energieversorgung. 15 kW bis 30 MW." },
      { title: "Brennstoffzellen", body: "Wärme für Heizung und Trinkwasser. Gleichzeitig wird Strom erzeugt. Die Zukunft des Heizens zieht ins Haus." },
      { title: "Pufferspeicher", body: "Das Herz jeder Heizungsanlage. Überschüssige Wärme wird gespeichert, Temperaturschwankungen ausgeglichen." },
      { title: "Flächenheizung", body: "Kosten reduzieren, Ressourcen schonen und das ganze Jahr über ein angenehmes Raumklima. Viele gute Gründe für die Modernisierung." },
      { title: "Hybridsysteme", body: "Kombiniert mehrere Energiequellen. Nach individuellen Bedürfnissen Schritt für Schritt unkompliziert erweiterbar." },
    ],
  },
  {
    slug: "photovoltaik",
    title: "Photovoltaik",
    short:
      "Effiziente Dach- und Balkonkraftwerke. Weniger Stromrechnung, mehr Unabhängigkeit.",
    lead: "Rentabilität hängt direkt an der Effizienz der Anlage. Je besser Ihr Dach- oder Balkonkraftwerk arbeitet, desto höher Einsparung und Einnahmen. Wir planen so, dass sich die Investition rechnet.",
    hero: IMG.pv,
    image: IMG.solarRoof,
    points: [
      { title: "Planung mit Ertragsprognose", body: "Dachanalyse, Verschattung, Ausrichtung und Lastprofil. Die Anlage wird auf Ihr Haus und Ihren Verbrauch zugeschnitten." },
      { title: "Speicher und Eigenverbrauch", body: "Mit Batteriespeicher wird Sonnenstrom unabhängig von der Tageszeit nutzbar. Eigenverbrauch rauf, Netzbezug runter." },
      { title: "Wallbox und Sektorkopplung", body: "PV, Wärmepumpe, Elektroauto. Wir koppeln Erzeugung, Wärme und Mobilität zu einem System." },
    ],
  },
  {
    slug: "lueftung",
    title: "Lüftung",
    short:
      "Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung. Gegen Schimmel. Für gesundes Raumklima.",
    lead: "Neue oder sanierte Gebäude sind nahezu luftdicht. Die EnEV fordert einen Mindestluftwechsel ohne Zutun der Bewohner. Moderne Lüftung setzt das sicher, effizient und bequem um.",
    hero: IMG.lueftung,
    image: IMG.lueftungRohre,
    points: [
      { title: "Zentrale Wohnraumlüftung", body: "Logavent HRV176 für Ein- und Zweifamilienhäuser. Für Neubau und, je nach Gegebenheit, für die Modernisierung." },
      { title: "Dezentrale Wohnraumlüftung", body: "Logavent HRV126 D mit Wärmerückgewinnung. Entwickelt für die energetische Modernisierung von Ein- und Mehrfamilienhäusern." },
      { title: "Lüftungskonzept nach Maß", body: "Wir erstellen das Konzept für Ihr Gebäude und beraten, ob zentral oder dezentral sinnvoller ist. Auch Klimaanlagen und Klimatechnik." },
    ],
  },
  {
    slug: "sanitaer",
    title: "Bad und Sanitär",
    short:
      "Vom Aufmaß bis zum Traumbad. Barrierefrei, bodengleich, aus einer Hand.",
    lead: "Ein Bad, das in Funktion und Aussehen zu Ihnen und Ihren Räumen passt. Entspannende Wannenbäder, bodengleiche Duschsysteme und barrierearme Bäder sind unsere Spezialität. Alle Gewerke organisieren wir für Sie.",
    hero: IMG.bad,
    image: IMG.badLuxus,
    points: [
      { title: "Bad", body: "Individuelle Planung nach Ihren räumlichen Gegebenheiten. CAD-Entwurf, Fliesen, Sanitärobjekte, Lichtkonzept." },
      { title: "Trinkwasser", body: "Für Vermieter und Hauseigentümer von Mehrfamilienhäusern besonders relevant. Wir beraten zur geänderten Trinkwasserverordnung." },
      { title: "Regenwasser", body: "Nutzung für Wäschewaschen, Toilettenspülung und Gartenbewässerung. Schont Haushaltskasse und Umwelt." },
    ],
  },
  {
    slug: "solar",
    title: "Solar",
    short:
      "Strom und Wärme aus Sonnenenergie. Ausgereifte Technik, die sich rechnet.",
    lead: "Solaranlagen gehören längst zum Standard. Mit Photovoltaik senken Sie die Stromrechnung, mit Solarthermie Warmwasser und Heizkosten. Pufferspeicher und Batteriespeicher machen Energie der Sonne rund um die Uhr nutzbar.",
    hero: IMG.solar,
    image: IMG.pvFeld,
    points: [
      { title: "Solarthermie", body: "Warmwasserbereitung und Heizungsunterstützung. Mit dem passenden Pufferspeicher ganztägig verfügbar." },
      { title: "Photovoltaik", body: "Mit Batteriespeicher wird Solarstrom unabhängig von der Tageszeit. Stromrechnung sinkt, Autarkie steigt." },
      { title: "Speicher", body: "Pufferspeicher für Wärme, Batteriespeicher für Strom. Die Ergänzung, die den Unterschied macht." },
    ],
  },
];

export const SERVICE_BY_SLUG: Record<string, ServiceDetail> = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
);
