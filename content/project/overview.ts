export const projectOverview = {
  eyebrow: "Geschütztes Investment- und Projektmemorandum",
  title: "KIELSPACE · Investoren- & Projektportal",
  introduction:
    "Markt, Wirtschaftlichkeit, Betriebsmodell und Umsetzungsstand eines weit fortgeschritten vorbereiteten Self-Storage-Projekts in Kiel.",
  kpis: [
    {
      value: "1.686 m²",
      label: "Vermietbare Bankfläche",
      detail: "konservative Modellbasis",
    },
    {
      value: "3",
      label: "Herstellerplanungen",
      detail: "unabhängige Flächenvalidierung",
    },
    {
      value: "19,50 €/m²",
      label: "Bewertungsmiete",
      detail: "netto je Monat",
    },
    {
      value: "85 %",
      label: "Modellbelegung",
      detail: "stabilisierter Ansatz",
    },
    {
      value: "24/7",
      label: "Betriebskonzept",
      detail: "digitaler Zugang",
    },
  ],
  entries: [
    {
      href: "/projekt/markt",
      number: "01",
      title: "Projekt & Markt",
      description:
        "Marktgängigkeit, lokale Positionierung, europäische Benchmarks und konservative Modellannahmen.",
    },
    {
      href: "/projekt/betriebskonzept",
      number: "02",
      title: "Self Storage & Betriebskonzept",
      description:
        "Digitaler End-to-End-Prozess, Software-Vorvalidierung, API-Architektur und operativer Vorbetrieb.",
    },
    {
      href: "/projekt/projektstand",
      number: "03",
      title: "Projektstand & Umsetzung",
      description:
        "Bereits angestoßene Arbeitspakete, externe Validierungen, offene Entscheidungen und nächste Meilensteine.",
    },
    {
      href: "/projekt/website",
      number: "04",
      title: "KIELSPACE Website · vollständiger Entwurf",
      description:
        "Aktueller vollständiger Entwicklungsstand der späteren KIELSPACE-Kundenwebsite mit Raumgrößen, Preislogik, Visualisierungen, Anlieferung, Buchungsprozess und Kundenerlebnis.",
    },
  ],
} as const;
