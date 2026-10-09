import type { ContentSection } from "./types";

export const operatingChain = [
  "Interessent",
  "Lead",
  "Auswahl",
  "Buchung",
  "Vertrag",
  "Zahlung",
  "Zugang",
  "Verwaltung",
  "Auszug",
] as const;

export const operatingComponents = [
  "eigene KIELSPACE-Website",
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
  "Preismanagement und Dynamic Pricing",
  "Rechnungs- und Mahnwesen",
  "Kundenportal",
  "Reporting",
  "Public API und Webhooks",
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
    title: "Software-Vorvalidierung",
    paragraphs: [
      "Stora wird derzeit als mögliche zentrale Betriebsplattform praktisch getestet. Bereits geprüft wurden CRM, Leads und Deals, Aufgaben, automatisierte E-Mail-Prozesse, Buchungs- und Kundenprozesse, Preismanagement, Dynamic Pricing, Rechnungs- und Mahnwesen, Kundenportal und Reporting.",
      "Der Entwicklerbereich mit Public API und Webhooks ist im Testaccount sichtbar. Für die praktische Schnittstellenprüfung wurde eine höhere Testfreigabe angefragt. Ziel ist, vor einer finalen Systementscheidung nicht nur Funktionslisten, sondern die tatsächlich benötigten End-to-End-Prozesse zu validieren.",
    ],
  },
  {
    title: "Operative Vorvalidierung",
    paragraphs: [
      "Geprüft wird außerdem, Teile der späteren Software- und Prozessarchitektur bereits im bestehenden Parkierungsbetrieb einzusetzen. Damit könnten CRM, Buchung, Zahlung, Kundenkommunikation und Verwaltungsabläufe vor dem eigentlichen Self-Storage-Start unter realen Bedingungen erprobt werden.",
      "Die dabei entstehenden Kennzahlen sollen strukturiert dokumentiert werden. Relevant sind insbesondere Leads, Conversion, Zahlungsquote, Mahnfälle, manueller Supportaufwand, Automatisierungsgrad und Bearbeitungszeiten. Damit entsteht vor Eröffnung ein zusätzlicher operativer Erfahrungsnachweis.",
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
