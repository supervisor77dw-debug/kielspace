import type { ContentSection } from "./types";

export const operatingChain = [
  "Interessent",
  "Lead",
  "Angebot / Auswahl",
  "Buchung",
  "Vertrag",
  "Zahlung",
  "Zugang",
  "laufende Verwaltung",
  "Auszug",
] as const;

export const operatingComponents = [
  "professionelle KIELSPACE-Website",
  "digitales Lead-Management",
  "CRM",
  "automatisierte Kundenkommunikation",
  "Online-Buchung",
  "digitale Vertragsprozesse",
  "automatisierte Abrechnung und Zahlungen",
  "Mahn- und Sperrprozesse",
  "elektronische Zugangskontrolle",
  "Dynamic Pricing",
  "Reporting und Kennzahlen",
  "API- und Webhook-Anbindung",
] as const;

export const validatedSoftwareAreas = [
  "CRM mit Kontakten, Leads und Deals",
  "Aufgaben- und Aktivitätenverwaltung",
  "automatisierte E-Mail-Prozesse",
  "Buchungs- und Kundenprozesse",
  "Preismanagement",
  "Dynamic Pricing",
  "Rechnungs- und Mahnwesen",
  "Kundenportal",
  "Reporting",
  "Entwicklerbereich mit Public API und Webhooks",
] as const;

export const operationsSections: readonly ContentSection[] = [
  {
    title: "Digitales Betriebskonzept",
    paragraphs: [
      "KIELSPACE wird als weitgehend automatisierter Self-Storage-Betrieb vorbereitet. Der operative Zielprozess reicht von der ersten Anfrage über Buchung, Vertrag, Zahlung und Zugang bis zur laufenden Verwaltung und zum Auszug.",
      "Die eigene KIELSPACE-Website bleibt die Marken-, Nutzer- und Vermarktungsoberfläche. Operative Funktionen sollen über eine zentrale Betriebssoftware sowie API- und Webhook-Schnittstellen angebunden werden. Dadurch bleibt die Kundenerfahrung in der eigenen Marke, während Verfügbarkeit, Preise, Verträge, Zahlungen und Statusänderungen zentral verarbeitet werden können.",
    ],
  },
  {
    title: "Software-Vorvalidierung",
    paragraphs: [
      "Stora wird derzeit als mögliche zentrale Betriebsplattform in einem Testaccount praktisch geprüft. Bereits angesehen wurden CRM, Kontakte, Leads und Deals, Aufgaben, automatisierte E-Mail-Prozesse, Preismanagement, Dynamic Pricing, Buchungs- und Kundenprozesse, Rechnungs- und Mahnwesen, Kundenportal sowie Reporting.",
      "Der Entwicklerbereich mit Public API und Webhooks ist im Testaccount sichtbar. Für die praktische API-Prüfung wurde eine höhere Testfreigabe angefragt. Ziel ist, vor einer finalen Systementscheidung nicht nur Funktionsbeschreibungen zu vergleichen, sondern die tatsächlich benötigten End-to-End-Prozesse praktisch zu validieren.",
    ],
  },
  {
    title: "Operative Vorvalidierung über den Parkierungsbetrieb",
    paragraphs: [
      "Zusätzlich wird geprüft, Teile der späteren Software- und Prozessarchitektur bereits im bestehenden Parkierungsbetrieb einzusetzen. Damit können CRM, Buchung, Zahlung, Kundenkommunikation und Verwaltungsabläufe bereits vor dem Self-Storage-Start unter realen Bedingungen getestet werden.",
      "Die daraus entstehenden Kennzahlen und Praxiserfahrungen sollen systematisch dokumentiert werden. Relevante Größen sind insbesondere Leads, Conversion, Zahlungsquote, Mahnfälle, manueller Supportaufwand, Automatisierungsgrad und Bearbeitungszeiten. Diese Daten können später als zusätzlicher Nachweis der operativen Vorbereitung gegenüber Banken und Investoren dienen.",
    ],
  },
  {
    title: "Vorvermarktung und professioneller Lease-up",
    paragraphs: [
      "Die Vermarktung soll nicht erst mit Fertigstellung beginnen. Die technische Website-Struktur, Interessentenregistrierung und spätere CRM-Anbindung werden deshalb bereits vor dem eigentlichen Eröffnungszeitpunkt vorbereitet.",
      "Damit entsteht ein strukturierter Vorvermietungsprozess mit eigener Lead-Basis. Das Wirtschaftlichkeitsmodell trennt bewusst einen konservativen Bankfall von einem professionellen Betreiberfall, um diese operative Vorbereitung nachvollziehbar abzubilden, ohne sie zur Voraussetzung der Grundtragfähigkeit zu machen.",
    ],
  },
];
