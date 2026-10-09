import type { ProjectStatusItem } from "./types";

export const statusIntroduction =
  "KIELSPACE befindet sich in einer fortgeschrittenen Vorbereitungs- und Vorvalidierungsphase. Markt, Flächen, Herstellerlösungen, digitale Betriebsprozesse, Finanzierung und Vermarktung sind bereits substanziell bearbeitet. Die verbleibenden Schritte betreffen vor allem finale Anbieterentscheidungen, behördliche Rückmeldungen, technische Detailvalidierungen und die anschließende Umsetzung.";

export const projectStatus: readonly ProjectStatusItem[] = [
  { area: "Marke & Positionierung", status: "complete", label: "Abgeschlossen", detail: "KIELSPACE, Grunddesign, Positionierung und digitale Markenarchitektur definiert.", updatedAt: "2026-10-09" },
  { area: "Domain & digitale Projektplattform", status: "in_progress", label: "In Umsetzung", detail: "kielspace.de ist reserviert; öffentliche Vorschau und geschützter Projektbereich sind technisch vorbereitet. Produktivschaltung erst nach Freigabe.", updatedAt: "2026-10-09" },
  { area: "Vorvermarktung & Lead-Erfassung", status: "in_progress", label: "In Umsetzung", detail: "Standortneutrale Vorschauseite und Interessentenregistrierung vorbereitet; spätere Übergabe an das operative Backend ist vorgesehen.", updatedAt: "2026-10-09" },
  { area: "Marktanalyse Kiel", status: "complete", label: "Abgeschlossen", detail: "Lokaler Wettbewerb, Preispositionierung und Nachfrage untersucht; laufende Fortschreibung vorgesehen.", updatedAt: "2026-10-09" },
  { area: "Deutschland-/Europa-Benchmark", status: "complete", label: "Abgeschlossen", detail: "Deutsche und europäische Vergleichsmärkte ausgewertet und in die Bewertungs- und Szenariologik übernommen.", updatedAt: "2026-10-09" },
  { area: "Hersteller- & Flächenvalidierung", status: "complete", label: "Abgeschlossen", detail: "Drei unabhängige Herstellerplanungen bestätigen rund 1.685 bis 1.712 m² vermietbare Fläche; Bankbasis bleibt 1.686 m².", updatedAt: "2026-10-09" },
  { area: "Storage-System / Ausbau", status: "review", label: "In Prüfung", detail: "Konkretes Braun-Angebot liegt vor; Leistungsumfang und Vergleich mit weiteren Systemlösungen werden final abgeglichen.", updatedAt: "2026-10-09" },
  { area: "PMS / Betriebssoftware", status: "review", label: "In Prüfung", detail: "Mehrere Lösungen wurden verglichen; Stora befindet sich in praktischer Testphase, Kinnovis bleibt als Vergleichslösung dokumentiert.", updatedAt: "2026-10-09" },
  { area: "Stora-Funktionstest", status: "in_progress", label: "In Umsetzung", detail: "CRM, Leads/Deals, Buchungslogik, Preismanagement, Dynamic Pricing, E-Mail-Automation, Reporting und Entwicklerbereich praktisch geprüft.", updatedAt: "2026-10-09" },
  { area: "Public API / Webhooks", status: "awaiting", label: "Rückmeldung ausstehend", detail: "Advanced-Freischaltung für den praktischen Schnittstellen- und Webhook-Test angefragt.", updatedAt: "2026-10-09" },
  { area: "Zutritt & Schließsystem", status: "review", label: "In Prüfung", detail: "PTI, OpenTech, Sensorberg und weitere Integrationsoptionen untersucht; finale System- und Integrationsentscheidung offen.", updatedAt: "2026-10-09" },
  { area: "Parkierungs-Pilotbetrieb", status: "review", label: "In Prüfung", detail: "Ein Vorbetrieb ausgewählter digitaler Prozesse im bestehenden Parkierungsbetrieb wird als operative Validierung geprüft.", updatedAt: "2026-10-09" },
  { area: "Wirtschaftlichkeitsmodell", status: "in_progress", label: "In Umsetzung", detail: "Konservativ-, Basis- und Markt-Szenario vorhanden; OPEX in Fixkosten, variable Komponenten und Lease-up-Marketing getrennt.", updatedAt: "2026-10-09" },
  { area: "Investoren- & Bankunterlagen", status: "in_progress", label: "In Umsetzung", detail: "Markt, Lease-up, OPEX, Vorvalidierung, Finanzierung und Projektstatus werden laufend fortgeschrieben.", updatedAt: "2026-10-09" },
  { area: "Genehmigung", status: "awaiting", label: "Rückmeldung ausstehend", detail: "Bauvoranfrage ist registriert; behördliche Rückmeldung steht noch aus.", updatedAt: "2026-10-09" },
  { area: "KfW / WPB", status: "review", label: "In Prüfung", detail: "Beraterindikation positiv; finale Förderqualifizierung und formale Bestätigung durch EEE/gBzA bzw. Finanzierungspartner ausstehend.", updatedAt: "2026-10-09" },
  { area: "Parkdeck / UG-Fachplanung", status: "in_progress", label: "In Umsetzung", detail: "Budgets und technische Grundstruktur liegen vor; Fachangebote und Ausführungsdetails werden weiter konkretisiert.", updatedAt: "2026-10-09" },
  { area: "Bau- & Ausführungsplanung", status: "next", label: "Nächster Schritt", detail: "Finalisierung nach Hersteller-, Zutritts-, Genehmigungs- und Fachplanungsentscheidungen.", updatedAt: "2026-10-09" },
  { area: "Produktivschaltung", status: "next", label: "Nächster Schritt", detail: "kielspace.de wird erst nach inhaltlicher Abnahme, finalem Zugriffsschutz und ausdrücklicher Freigabe produktiv geschaltet.", updatedAt: "2026-10-09" },
];
