import type { ProjectStatusItem } from "./types";

export const statusIntroduction =
  "Das Projekt befindet sich in einer fortgeschrittenen Vorbereitungsphase. Ein wesentlicher Teil der Markt-, Betreiber-, Flächen-, Software- und Finanzierungsfragen wurde bereits bearbeitet oder extern plausibilisiert. Die verbleibenden Schritte betreffen überwiegend finale Anbieterentscheidungen, behördliche Rückmeldungen und die technische Umsetzung.";

export const projectStatus: readonly ProjectStatusItem[] = [
  { area: "Marke KIELSPACE", status: "complete", label: "Abgeschlossen", detail: "Markenname, Grunddesign und Positionierung definiert.", updatedAt: "2026-10-09" },
  { area: "Domain kielspace.de", status: "complete", label: "Abgeschlossen", detail: "Domain für die spätere Produktivschaltung vorbereitet.", updatedAt: "2026-10-09" },
  { area: "KIELSPACE Website", status: "in_progress", label: "In Umsetzung", detail: "Professionelle Next.js-Vorschauseite wird umgesetzt.", updatedAt: "2026-10-09" },
  { area: "Öffentliche Vorvermarktung", status: "next", label: "Nächster Schritt", detail: "Landingpage und Interessentenregistrierung vorbereiten.", updatedAt: "2026-10-09" },
  { area: "Marktanalyse Kiel", status: "complete", label: "Abgeschlossen", detail: "Lokaler Wettbewerb, Preispositionierung und Nachfrage untersucht; Fortschreibung läuft.", updatedAt: "2026-10-09" },
  { area: "Deutschland-/Europa-Benchmark", status: "complete", label: "Abgeschlossen", detail: "Deutsche und europäische Vergleichsmärkte analysiert; Fortschreibung läuft.", updatedAt: "2026-10-09" },
  { area: "Herstellerplanung", status: "in_progress", label: "In Umsetzung", detail: "Mehrere unabhängige Storage-Layouts liegen vor.", updatedAt: "2026-10-09" },
  { area: "Flächenvalidierung", status: "in_progress", label: "In Umsetzung", detail: "Herstellerplanungen bestätigen vergleichbare vermietbare Flächen.", updatedAt: "2026-10-09" },
  { area: "Storage-System", status: "review", label: "In Prüfung", detail: "Konkrete Angebote und Scope-Vergleich laufen.", updatedAt: "2026-10-09" },
  { area: "PMS / Betriebssoftware", status: "review", label: "In Prüfung", detail: "Stora und weitere Lösungen untersucht.", updatedAt: "2026-10-09" },
  { area: "Stora-Testaccount", status: "in_progress", label: "In Umsetzung", detail: "CRM, Buchung, Preismanagement und Automationen werden praktisch getestet.", updatedAt: "2026-10-09" },
  { area: "API / Webhooks", status: "awaiting", label: "Rückmeldung ausstehend", detail: "Advanced-Testzugang zur praktischen API-Prüfung angefragt.", updatedAt: "2026-10-09" },
  { area: "Zutrittslösung", status: "review", label: "In Prüfung", detail: "Verschiedene technische Systeme und Integrationen untersucht.", updatedAt: "2026-10-09" },
  { area: "Dynamic Pricing", status: "review", label: "In Prüfung", detail: "Funktionalität vorhanden; KIELSPACE-Regelwerk wird entwickelt.", updatedAt: "2026-10-09" },
  { area: "Parkierungs-Pilotbetrieb", status: "review", label: "In Prüfung", detail: "Möglicher operativer Vorbetrieb über die spätere Softwarearchitektur.", updatedAt: "2026-10-09" },
  { area: "Genehmigungsplanung", status: "in_progress", label: "In Umsetzung", detail: "Behördliches Verfahren läuft.", updatedAt: "2026-10-09" },
  { area: "Finanzierung", status: "in_progress", label: "In Umsetzung", detail: "Investoren- und Bankunterlagen werden laufend fortgeschrieben.", updatedAt: "2026-10-09" },
  { area: "Wirtschaftlichkeitsmodell", status: "in_progress", label: "In Umsetzung", detail: "Konservatives, Basis- und Markt-Szenario vorhanden.", updatedAt: "2026-10-09" },
  { area: "Bau-/Ausführungsplanung", status: "in_progress", label: "In Umsetzung", detail: "Abhängig von finalen Hersteller- und Fachplanungsentscheidungen.", updatedAt: "2026-10-09" },
];
