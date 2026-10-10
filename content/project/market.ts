import type { ContentSection } from "./types";

export const marketIntroduction =
  "KIELSPACE verbindet einen professionell vorbereiteten Markteintritt mit bewusst konservativen Bewertungsannahmen. Die bisherige Analyse zeigt einen etablierten europäischen Self-Storage-Markt, einen weiterhin weniger durchdrungenen deutschen Markt und für Kiel ein plausibles Nachfrage- und Preisumfeld.";

export const germanyDevelopment = [
  {
    label: "Belegung",
    previous: "75,0 %",
    current: "76,3 %",
    previousWidth: 75,
    currentWidth: 76.3,
  },
  {
    label: "Durchschnittsmiete",
    previous: "292 €/m²/Jahr",
    current: "302 €/m²/Jahr",
    previousWidth: 73,
    currentWidth: 75.5,
  },
  {
    label: "Erlös je verfügbarer Fläche",
    previous: "219 €/m²/Jahr",
    current: "231 €/m²/Jahr",
    previousWidth: 73,
    currentWidth: 77,
  },
] as const;

export const historicalMarketDevelopment = [
  { year: "2022", occupancy: "76,0 %", occupancyWidth: 76, rent: "289 €", rentWidth: 92.6 },
  { year: "2023", occupancy: "74,0 %", occupancyWidth: 74, rent: "281,37 €", rentWidth: 90.2 },
  { year: "2024", occupancy: "76,7 %", occupancyWidth: 76.7, rent: "312 €", rentWidth: 100 },
  { year: "2025", occupancy: "75,0 %", occupancyWidth: 75, rent: "292 €", rentWidth: 93.6 },
  { year: "2026", occupancy: "76,3 %", occupancyWidth: 76.3, rent: "302 €", rentWidth: 96.8 },
] as const;

export const historicalMarketArea = [
  { year: "2024", value: "2,075 Mio. m²", width: 71.1 },
  { year: "2025", value: "2,395 Mio. m²", width: 82 },
  { year: "2026", value: "2,920 Mio. m²", width: 100 },
] as const;

export const germanMarketScale = [
  { value: "2,92 Mio. m²", label: "Vermietbare Fläche" },
  { value: "1.394", label: "Standorte" },
  { value: "65", label: "Standorte in der Pipeline" },
  { value: "28", label: "davon im Bau" },
] as const;

export const germanDemandReserve = [
  {
    value: "52,1 %",
    label: "kennen Self Storage noch nicht",
    width: 52.1,
  },
  {
    value: "68,4 %",
    label: "können keinen Standort in ihrer Nähe benennen",
    width: 68.4,
  },
] as const;

export const europeanPriceBenchmarks = [
  {
    label: "KIELSPACE Bewertungsmiete",
    value: "19,50 €",
    detail: "netto/Monat",
    width: 72.9,
    project: true,
  },
  {
    label: "Niederlande 2025",
    value: "20,25 €",
    detail: "243 €/Jahr",
    width: 75.7,
    project: false,
  },
  {
    label: "Deutschland 2025",
    value: "24,33 €",
    detail: "292 €/Jahr",
    width: 91,
    project: false,
  },
  {
    label: "Frankreich 2025",
    value: "24,50 €",
    detail: "294 €/Jahr",
    width: 91.6,
    project: false,
  },
  {
    label: "Europa 2025",
    value: "26,05 €",
    detail: "312,56 €/Jahr",
    width: 97.4,
    project: false,
  },
  {
    label: "Irland 2025",
    value: "26,75 €",
    detail: "321 €/Jahr",
    width: 100,
    project: false,
  },
] as const;

export const ukReferenceMarket = [
  { value: "+5 %", label: "Bestandswachstum" },
  { value: "67,5 Mio. sq ft", label: "Gesamtbestand" },
  { value: "79,6 %", label: "Mature-store occupancy" },
  { value: "94,2 %", label: "Online Booking" },
  { value: "2,6", label: "Mitarbeiter je Standort" },
] as const;

export const marketSections: readonly ContentSection[] = [
  {
    title: "Projektprofil",
    paragraphs: [
      "KIELSPACE entwickelt ein modernes, weitgehend digitalisiertes Self-Storage-Konzept für den Kieler Markt. Marke, Website, Betreiberarchitektur, Herstellerplanung, Wirtschaftlichkeitsrechnung und Finanzierungsunterlagen sind bereits weit fortgeschritten.",
      "Der spätere Markteintritt soll deshalb nicht als erstmaliger Betriebsversuch erfolgen, sondern auf Basis vorbereiteter Prozesse, mehrerer externer Flächen- und Systemvalidierungen sowie einer bereits vor Eröffnung aufgebauten digitalen Vermarktungsstruktur.",
    ],
  },
  {
    title: "Deutschland und Kiel",
    paragraphs: [
      "Deutschland weist gegenüber reiferen europäischen Märkten weiterhin eine geringere Marktdurchdringung auf. Für Kiel zeigt die bisherige Wettbewerbsanalyse eine überschaubare Zahl professioneller Anbieter und weiterhin Entwicklungspotenzial.",
      "Das Projekt zielt schwerpunktmäßig auf private Haushalte und wohnortnahe Nachfrage. Branchen- und Anbietergespräche weisen darauf hin, dass private Nutzer den wesentlichen Anteil der Self-Storage-Nachfrage stellen; diese Aussage wird als Branchenindikator und nicht als eigenständig erhobene Kieler Statistik verwendet.",
    ],
  },
  {
    title: "Zielgruppen und Nachfrageanlässe",
    paragraphs: [
      "Typische private Nutzungssituationen sind Umzug, Renovierung, Haushaltsverkleinerung, Trennung, Studium, Nachlass, saisonale Lagerung und allgemeiner zusätzlicher Platzbedarf. Gewerbliche Nutzer ergänzen die Nachfrage unter anderem mit Archiv-, Waren-, Material- und Saisonlagerung.",
      "KIELSPACE wird deshalb auf einfache digitale Erreichbarkeit, flexible Größen, transparente Preise und einen weitgehend automatisierten Zugang ausgerichtet.",
    ],
  },
  {
    title: "Konservative Modellierung und professioneller Lease-up",
    paragraphs: [
      "Die Wirtschaftlichkeitsrechnung trennt einen konservativen Bankfall, einen professionell betriebenen Basisfall und einen Markt-/Potenzialfall. So bleibt die Grundtragfähigkeit unabhängig von optimistischen Vorvermietungsannahmen prüfbar.",
      "Im Basisfall wird berücksichtigt, dass Vorvermarktung, CRM, automatisierte Kommunikation, Dynamic Pricing und ein vorbereiteter digitaler Buchungsprozess den Vermietungsaufbau beschleunigen können. Betreibererfahrungen aus dem Stora-Umfeld nennen etwa 55 % Belegung nach sieben bis acht Monaten bei professionellen größeren Betreibern; dieser Wert wird ausdrücklich als Betreiberbenchmark und nicht als unabhängige Marktstatistik eingeordnet.",
    ],
  },
];
