import { ProjectPageHeading } from "@/components/project/project-page-heading";
import { benchmarkPrinciples } from "@/content/project/benchmarks";
import {
  europeanPriceBenchmarks,
  germanDemandReserve,
  germanMarketScale,
  germanyDevelopment,
  marketIntroduction,
  marketSections,
  ukReferenceMarket,
} from "@/content/project/market";

export default function MarketPage() {
  return (
    <main className="project-main">
      <ProjectPageHeading
        eyebrow="PROJEKT & MARKT"
        title="Wachsender deutscher Markt. Konservative Projektannahmen. Professionell vorbereiteter Markteintritt."
        introduction={marketIntroduction}
      />

      <div className="market-visuals">
        <figure className="data-panel development-chart">
          <figcaption>
            <span className="section-kicker">CHART A · DEUTSCHLAND</span>
            <h2>Marktentwicklung 2025 → 2026</h2>
          </figcaption>
          <div className="development-list">
            {germanyDevelopment.map((metric) => (
              <div className="development-metric" key={metric.label}>
                <h3>{metric.label}</h3>
                <div className="comparison-row">
                  <span>2025</span>
                  <div className="bar-track">
                    <span
                      className="bar-fill previous"
                      style={{ width: `${metric.previousWidth}%` }}
                    />
                  </div>
                  <strong>{metric.previous}</strong>
                </div>
                <div className="comparison-row">
                  <span>2026</span>
                  <div className="bar-track">
                    <span
                      className="bar-fill current"
                      style={{ width: `${metric.currentWidth}%` }}
                    />
                  </div>
                  <strong>{metric.current}</strong>
                </div>
              </div>
            ))}
          </div>
          <p className="source-note">
            Quelle: CBRE / Verband deutscher Self Storage Unternehmen,
            Branchenreport 2026
          </p>
        </figure>

        <figure className="data-panel market-scale-panel">
          <figcaption>
            <span className="section-kicker">CHART B · DEUTSCHER MARKT</span>
            <h2>Substanzielle Größe. Weiterhin hohe Penetrationsreserve.</h2>
          </figcaption>
          <dl className="market-scale-grid">
            {germanMarketScale.map((item) => (
              <div key={item.label}>
                <dd>{item.value}</dd>
                <dt>{item.label}</dt>
              </div>
            ))}
          </dl>
          <div className="awareness-grid">
            {germanDemandReserve.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <div className="percentage-track" aria-hidden="true">
                  <span style={{ width: `${item.width}%` }} />
                </div>
              </div>
            ))}
          </div>
          <p className="source-note">
            Quelle: CBRE / Verband deutscher Self Storage Unternehmen,
            Branchenreport 2026
          </p>
        </figure>

        <figure className="data-panel price-chart">
          <figcaption>
            <span className="section-kicker">CHART C · PREISBENCHMARKS</span>
            <h2>Bewertungsmiete bewusst unter den Vergleichswerten</h2>
            <p>Monatliche Nettomiete je m², Jahreswerte auf Monate umgerechnet.</p>
          </figcaption>
          <div className="price-bars">
            {europeanPriceBenchmarks.map((benchmark) => (
              <div
                className={benchmark.project ? "price-row project-value" : "price-row"}
                key={benchmark.label}
              >
                <div>
                  <span>{benchmark.label}</span>
                  <strong>{benchmark.value}</strong>
                  <small>{benchmark.detail}</small>
                </div>
                <div className="price-track" aria-hidden="true">
                  <span style={{ width: `${benchmark.width}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="market-growth-callout">
            <strong>+5,4 %</strong>
            <span>Mietniveau Europa 2025</span>
          </div>
          <p className="chart-caveat">
            Vergleichsmärkte dienen der Plausibilisierung und
            Potenzialbetrachtung und stellen keine Kiel-Prognose dar.
          </p>
          <p className="source-note">
            Quellen: CBRE / VdSSU Branchenreport 2026; FEDESSA / CBRE European
            Self Storage Industry Report 2025
          </p>
        </figure>

        <figure className="data-panel uk-panel">
          <figcaption>
            <span className="section-kicker">CHART D · REFERENZMARKT UK</span>
            <h2>Reifer Markt mit digitalisiertem Betrieb</h2>
          </figcaption>
          <dl className="uk-kpi-grid">
            {ukReferenceMarket.map((item) => (
              <div key={item.label}>
                <dd>{item.value}</dd>
                <dt>{item.label}</dt>
              </div>
            ))}
          </dl>
          <p className="source-note">
            Quelle: Cushman &amp; Wakefield / SSA UK Annual Report 2026
          </p>
        </figure>
      </div>

      <div className="section-heading compact">
        <span className="section-kicker">PROJEKTEINORDNUNG</span>
        <h2>Kiel, Zielgruppen und professioneller Lease-up</h2>
      </div>
      <div className="editorial-grid">
        {marketSections.map((section) => (
          <section className="editorial-card" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
      <aside className="benchmark-panel">
        <p className="eyebrow">MODELLGRUNDSÄTZE</p>
        <ul>
          {benchmarkPrinciples.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
