import type { ContentSection } from "./types";

export const operatingChain = [
  "Website",
  "Lead / CRM",
  "Auswahl / Preis",
  "Buchung",
  "Vertrag",
  "Zahlung",
  "Zugang",
  "Verwaltung",
  "Auszug",
] as const;

export const operationsKpis = [
  { value: "24/7", label: "Zugang", detail: "digital und kontrolliert" },
  { value: "Digital First", label: "Kundenprozess", detail: "durchgängig vorbereitet" },
  { value: "API / Webhooks", label: "Schnittstellen", detail: "Freischaltung im Test ausstehend" },
  {
    value: "Automatisiert",
    label: "Low-Staff-Betrieb",
    detail: "weitgehend digital organisiert",
  },
] as const;

export const systemConnections = [
  "CRM",
  "Payment",
  "Zutritt",
  "Reporting",
  "API / Webhooks",
] as const;

export const validatedSoftwareAreas = [
  { area: "CRM / Leads / Deals", status: "Geprüft", kind: "complete" },
  { area: "E-Mail-Automation", status: "Geprüft", kind: "complete" },
  { area: "Preismanagement / Dynamic Pricing", status: "Geprüft", kind: "complete" },
  { area: "Buchungslogik", status: "Geprüft", kind: "complete" },
  { area: "Kundenportal", status: "Geprüft", kind: "complete" },
  { area: "Reporting", status: "Geprüft", kind: "complete" },
  {
    area: "Public API / Webhooks",
    status: "Freischaltung / Test ausstehend",
    kind: "awaiting",
  },
  {
    area: "Zutrittssystem",
    status: "Finale Auswahl offen",
    kind: "review",
  },
] as const;

export const parkingValidationChain = [
  "Reale Kunden",
  "CRM",
  "Zahlung",
  "Kommunikation",
  "Kennzahlen",
  "Übertragung auf Self Storage",
] as const;

export const operationsSections: readonly ContentSection[] = [
  {
    title: "Digitales End-to-End-Betriebskonzept",
    paragraphs: [
      "KIELSPACE wird als weitgehend automatisierter Self-Storage-Betrieb vorbereitet. Der Zielprozess reicht von der ersten Anfrage über Auswahl, Buchung, Vertrag, Zahlung und Zugang bis zur laufenden Verwaltung und zum Auszug.",
      "Die eigene KIELSPACE-Website bleibt die Marken-, Nutzer- und Vermarktungsoberfläche. Operative Funktionen sollen über eine zentrale Betriebssoftware mit API- und Webhook-Schnittstellen angebunden werden. Verfügbarkeit, Preise, Verträge, Zahlungen und Statusänderungen können dadurch zentral verarbeitet werden, ohne die Kundenerfahrung aus der eigenen Marke herauszulösen.",
    ],
  },
  {
    title: "Vorvermarktung und Lease-up",
    paragraphs: [
      "Die Vermarktung soll bewusst vor Fertigstellung beginnen. Öffentliche Vorschauseite, Interessentenregistrierung, CRM-Anbindung und spätere automatisierte Kommunikation werden deshalb frühzeitig vorbereitet.",
      "So entsteht eine eigene Lead-Basis bereits vor Eröffnung. Das Wirtschaftlichkeitsmodell bildet diesen professionellen Ansatz im Basisfall ab, ohne ihn zur Voraussetzung der konservativen Grundtragfähigkeit zu machen.",
    ],
  },
];
