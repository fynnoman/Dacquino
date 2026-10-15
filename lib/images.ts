const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const LOGO = "/images/logo-gd.png";

export const IMG = {
  heroWorkshop: u("photo-1504328345606-18bbc8c9d7d1"),
  heroBoiler: "/images/heizung.jpg",
  heroCraft: u("photo-1581094488379-6e07a93a4ee6"),

  heizung: "/images/heizung.jpg",
  heizungDetail: "/images/heizung.jpg",
  waermepumpe: u("photo-1559131648-16d1f0b2d8db"),
  heizkoerper: u("photo-1626806787461-102c1bfaaea1"),

  bad: "/images/sanitaer.jpg",
  badLuxus: "/images/sanitaer.jpg",
  dusche: "/images/sanitaer.jpg",
  waschtisch: u("photo-1570129477492-45c003edd2be"),

  solar: "/images/solar.png",
  solarRoof: "/images/photovoltaik.png",
  pv: "/images/photovoltaik.png",
  pvFeld: "/images/solar.png",

  lueftung: "/images/lueftung.jpg",
  lueftungRohre: "/images/lueftung.jpg",
  klima: u("photo-1631545308456-30e8f24c7bbe"),

  werkstatt: u("photo-1504328345606-18bbc8c9d7d1"),
  tools: u("photo-1530124566582-a618bc2615dc"),
  haende: u("photo-1486262715619-67b85e0b08d3"),
  rohre: u("photo-1621905251918-48416bd8575a"),
  blueprint: u("photo-1503387762-592deb58ef4e"),

  haus: u("photo-1572120360610-d971b9d7767c"),
  hausBau: u("photo-1600585154340-be6161a56a0c"),
  neubau: u("photo-1600566753086-00f18fe6ba66"),

  portrait: u("photo-1507003211169-0a1dd7228f2d"),
  team: u("photo-1521737604893-d14cc237f11d"),
  meister: u("photo-1581094488379-6e07a93a4ee6"),

  foerderung: u("photo-1554224155-6726b3ff858f"),
  dokumente: u("photo-1554224154-26032fced8bd"),

  notdienst: u("photo-1581094488379-6e07a93a4ee6"),
  wartung: u("photo-1558346648-9757f2fa4474"),
};
