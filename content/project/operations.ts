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
      "KIELSPACE wird als weitgehend automatisierter Self-Storage-Betrieb vorbereitet.",
    ],
  },
  {
    title: "Software-Vorvalidierung",
    paragraphs: [
      "Derzeit wird Stora als mögliche zentrale Betriebsplattform praktisch getestet.",
      "Ziel ist eine Architektur, bei der die eigene KIELSPACE-Website die Marken-, SEO- und Nutzeroberfläche bildet und das operative Backend über geeignete Schnittstellen angebunden wird.",
    ],
  },
  {
    title: "Operative Vorvalidierung",
    paragraphs: [
      "Es wird geprüft, wesentliche digitale Prozesse bereits im bestehenden Parkierungsbetrieb praktisch einzusetzen. Dadurch können Buchungs-, Zahlungs-, CRM-, Kommunikations- und Verwaltungsprozesse bereits vor dem eigentlichen Self-Storage-Start unter realen Bedingungen getestet werden.",
      "Die daraus entstehenden Erfahrungswerte sollen systematisch dokumentiert und später auch gegenüber Finanzierungspartnern und Investoren verwendet werden.",
    ],
  },
];
