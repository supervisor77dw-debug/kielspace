import { ProjectPageHeading } from "@/components/project/project-page-heading";
import { ProjectKpiStrip } from "@/components/project/project-kpi-strip";
import {
  operatingChain,
  operationsKpis,
  operationsSections,
  parkingValidationChain,
  systemConnections,
  validatedSoftwareAreas,
} from "@/content/project/operations";

export default function OperationsPage() {
  return (
    <main className="project-main">
      <ProjectPageHeading
        eyebrow="SELF STORAGE & BETRIEBSKONZEPT"
        title="Digital vom ersten Interesse bis zum Auszug."
        introduction="KIELSPACE wird als weitgehend automatisierter Self-Storage-Betrieb mit durchgängigen digitalen Prozessen vorbereitet."
      />

      <ProjectKpiStrip items={operationsKpis} label="Betriebskennzahlen" />

      <section className="data-panel operating-process">
        <div className="section-heading compact">
          <span className="section-kicker">END-TO-END-PROZESS</span>
          <h2>Digital vom ersten Interesse bis zum Auszug</h2>
        </div>
        <ol className="process-flow">
          {operatingChain.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <figure className="data-panel architecture-panel">
        <figcaption>
          <span className="section-kicker">SYSTEMARCHITEKTUR</span>
          <h2>KIELSPACE Kundenschicht und operative Plattform</h2>
        </figcaption>
        <div className="architecture-stack">
          <div className="architecture-node customer-layer">
            <span>Kundenschicht</span>
            <strong>Eigene KIELSPACE-Website</strong>
            <small>Marke, Vermarktung und Nutzererlebnis</small>
          </div>
          <span className="architecture-connector" aria-hidden="true" />
          <div className="architecture-node platform-layer">
            <span>Operative Kernschicht</span>
            <strong>Zentrale Betriebssoftware / PMS</strong>
            <small>Anbieterentscheidung nach Abschluss der Validierung</small>
          </div>
          <span className="architecture-connector" aria-hidden="true" />
          <div className="architecture-connections">
            {systemConnections.map((connection) => (
              <div key={connection}>{connection}</div>
            ))}
          </div>
        </div>
        <p className="architecture-note">
          Stora wird als mögliche Plattform praktisch geprüft, ist aber nicht
          final beauftragt. Weitere Lösungen bleiben Bestandteil des
          Systemvergleichs.
        </p>
      </figure>

      <section className="data-panel validation-panel">
        <div className="section-heading compact">
          <span className="section-kicker">SOFTWARE-VALIDIERUNG</span>
          <h2>Geprüfte Funktionen und offene Entscheidungen</h2>
        </div>
        <div className="validation-matrix">
          {validatedSoftwareAreas.map((item) => (
            <article key={item.area}>
              <h3>{item.area}</h3>
              <span className={`status-chip ${item.kind}`}>{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="parking-validation">
        <div>
          <span className="section-kicker">OPERATIVE VORVALIDIERUNG</span>
          <h2>Parkierungsbetrieb als operative Vorvalidierung</h2>
        </div>
        <ol>
          {parkingValidationChain.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="section-heading compact detail-heading">
        <span className="section-kicker">EINORDNUNG</span>
        <h2>Betriebsmodell und Vorvermarktung</h2>
      </div>
      <div className="editorial-grid">
        {operationsSections.map((section) => (
          <section className="editorial-card" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
