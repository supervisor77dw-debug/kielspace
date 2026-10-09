import type { ProjectStatusItem } from "./types";

export const statusIntroduction =
  "Das Projekt befindet sich in einer fortgeschrittenen Vorbereitungs- und Vorvalidierungsphase. Markt, Flächen, Herstellerlösungen, digitale Betriebsprozesse, Finanzierung und Vermarktung wurden bereits substanziell bearbeitet. Die verbleibenden Schritte betreffen überwiegend finale Anbieterentscheidungen, behördliche Rückmeldungen, technische Detailvalidierungen und die anschließende Umsetzung.";

export const projectStatus: readonly ProjectStatusItem[] = [
  { area: "Marke KIELSPACE", status: "complete", label: "Abgeschlossen", detail: "Markenname, Grunddesign und Positionierung definiert.", updatedAt: "2026-10-09" },
  { area: "Domain kielspace.de", status: "complete", label: "Abgeschlossen", detail: "Domain reserviert und für die spätere Produktivschaltung vorgesehen; derzeit noch nicht live.", updatedAt: "2026-10-09" },
  { area: "Next.js-Migration", status: "complete", label: "Abgeschlossen", detail: "Bestehende KIELSPACE-Seite auf Next.js 16 mit App Router migriert; geschützter Projektbereich technisch umgesetzt.", updatedAt: "2026-10-09" },
  { area: "Staging / Investorenzugang", status: "in_progress", label: "In Umsetzung", detail: "Separater Staging-Branch und Vercel-Preview bereitgestellt; Investor-Content wird laufend redaktionell fortgeschrieben.", updatedAt: "2026-10-09" },
  { area: "Öffentliche Vorschauseite", status: "in_progress", label: "In Umsetzung", detail: "Standortneutrale öffentliche Vorschauseite und Interessentenregistrierung vorbereitet; Produktivschaltung erst nach Freigabe.", updatedAt: "2026-10-09" },
  { area: "Interessenten-API", status: "in_progress", label: "In Umsetzung", detail: "Lead-Endpunkt vorhanden; spätere Übergabe an Stora bzw. finalen Provider ohne Frontend-Neubau vorbereitet.", updatedAt: "2026-10-09" },
  { area: "Marktanalyse Kiel", status: "complete", label: "Abgeschlossen", detail: "Lokaler Wettbewerb, Preispositionierung und Nachfrage untersucht; laufende Fortschreibung vorgesehen.", updatedAt: "2026-10-09" },
  { area: "Deutschland-/Europa-Benchmark", status: "complete", label: "Abgeschlossen", detail: "Deutsche und europäische Vergleichsmärkte einschließlich reifer Märkte ausgewertet; Benchmarks in Finanzierungslogik übernommen.", updatedAt: "2026-10-09" },
  { area: "Herstellerplanung", status: "complete", label: "Abgeschlossen", detail: "Drei unabhängige Herstellerplanungen liegen vor und bestätigen einen engen Korridor der vermietbaren Fläche.", updatedAt: "2026-10-09" },
  { area: "Flächenvalidierung", status: "complete", label: "Abgeschlossen", detail: "Herstellerplanungen bestätigen rund 1.685 bis 1.712 m² vermietbare Fläche; konservative Bankbasis bleibt 1.686 m².", updatedAt: "2026-10-09" },
  { area: "Storage-System", status: "review", label: "In Prüfung", detail: "Konkretes Braun-Angebot liegt vor; Scope- und Like-for-like-Vergleich mit weiteren Systemen läuft.", updatedAt: "2026-10-09" },
  { area: "PMS / Betriebssoftware", status: "review", label: "In Prüfung", detail: "Stora, Kinnovis und weitere Lösungen wurden untersucht; Stora befindet sich in praktischer Testphase.", updatedAt: "2026-10-09" },
  { area: "Stora-Testaccount", status: "in_progress", label: "In Umsetzung", detail: "CRM, Leads/Deals, Buchung, Preismanagement, Dynamic Pricing, E-Mail-Automation, Reporting und Entwicklerbereich praktisch geprüft.", updatedAt: "2026-10-09" },
  { area: "API / Webhooks", status: "awaiting", label: "Rückmeldung ausstehend", detail: "Advanced-Freischaltung für den praktischen Public-API- und Webhook-Test angefragt.", updatedAt: "2026-10-09" },
  { area: "Zutrittslösung", status: "review", label: "In Prüfung", detail: "PTI, OpenTech, Sensorberg und weitere Integrationsoptionen wurden untersucht; finale Architekturentscheidung offen.", updatedAt: "2026-10-09" },
  { area: "Dynamic Pricing", status: "in_progress", label: "In Umsetzung", detail: "Funktionalität in Stora vorhanden; KIELSPACE-Regelwerk und Belegungsstaffeln werden modelliert.", updatedAt: "2026-10-09" },
  { area: "Parkierungs-Pilotbetrieb", status: "review", label: "In Prüfung", detail: "Einsatz der späteren Betriebssoftware im bestehenden Parkierungsbetrieb wird als operative Vorvalidierung vorbereitet.", updatedAt: "2026-10-09" },
  { area: "Wirtschaftlichkeitsmodell", status: "in_progress", label: "In Umsetzung", detail: "Konservativ-, Basis- und Markt-Szenario vorhanden; OPEX inzwischen in Fix-, variable und Lease-up-Komponenten getrennt.", updatedAt: "2026-10-09" },
  { area: "Investoren- / Bankmemorandum", status: "in_progress", label: "In Umsetzung", detail: "Markt, Lease-up, OPEX, operative Vorvalidierung und Projektstatus werden laufend fortgeschrieben.", updatedAt: "2026-10-09" },
  { area: "Genehmigungsplanung", status: "awaiting", label: "Rückmeldung ausstehend", detail: "Bauvoranfrage ist registriert; behördliche Rückmeldung steht noch aus.", updatedAt: "2026-10-09" },
  { area: "KfW / WPB", status: "review", label: "In Prüfung", detail: "Beraterindikation positiv; finale Förderqualifizierung und formale Bestätigung durch EEE/gBzA bzw. Finanzierungspartner ausstehend.", updatedAt: "2026-10-09" },
  { area: "Parkdeck / UG-Fachplanung", status: "in_progress", label: "In Umsetzung", detail: "Budgets und technische Grundstruktur liegen vor; Fachangebote und Ausführungsdetails werden weiter konkretisiert.", updatedAt: "2026-10-09" },
  { area: "Bau-/Ausführungsplanung", status: "next", label: "Nächster Schritt", detail: "Finalisierung nach Hersteller-, Zutritts-, Genehmigungs- und Fachplanungsentscheidungen.", updatedAt: "2026-10-09" },
  { area: "Produktivschaltung kielspace.de", status: "next", label: "Nächster Schritt", detail: "Erst nach inhaltlicher Abnahme, finalem Zugriffsschutz und ausdrücklicher Freigabe; bis dahin keine DNS-/Production-Umstellung.", updatedAt: "2026-10-09" },
];
