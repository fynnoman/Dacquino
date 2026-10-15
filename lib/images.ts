const u = (id: string, w = 2400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const IMG = {
  heroWorkshop: u("photo-1504328345606-18bbc8c9d7d1"),
  heroBoiler: u("photo-1621905251918-48416bd8575a"),
  heroCraft: u("photo-1581094488379-6e07a93a4ee6"),

  heizung: u("photo-1621905251918-48416bd8575a"),
  heizungDetail: u("photo-1558346648-9757f2fa4474"),
  waermepumpe: u("photo-1559131648-16d1f0b2d8db"),
  heizkoerper: u("photo-1626806787461-102c1bfaaea1"),

  bad: u("photo-1552321554-5fefe8c9ef14"),
  badLuxus: u("photo-1600488999580-7a0b2b76bdf6"),
  dusche: u("photo-1552321554-5fefe8c9ef14"),
  waschtisch: u("photo-1570129477492-45c003edd2be"),

  solar: u("photo-1509391366360-2e959784a276"),
  solarRoof: u("photo-1497435334941-8c899ee9e8e9"),
  pv: u("photo-1613665813446-82a78c468a1d"),
  pvFeld: u("photo-1466611653911-95081537e5b7"),

  lueftung: u("photo-1626806819282-2c1dc01a5e0c"),
  lueftungRohre: u("photo-1593811167562-9cef47bfc4a7"),
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
