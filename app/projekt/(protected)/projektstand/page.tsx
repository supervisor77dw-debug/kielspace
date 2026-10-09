import { ProjectPageHeading } from "@/components/project/project-page-heading";
import {
  preparedProjectAssets,
  projectRoadmap,
  projectStatus,
  projectWorkstreams,
  statusIntroduction,
} from "@/content/project/status";

export default function ProjectStatusPage() {
  return (
    <main className="project-main">
      <ProjectPageHeading
        eyebrow="PROJEKTSTAND & UMSETZUNG"
        title="Fortgeschritten vorbereitet. Klar dokumentiert."
        introduction={statusIntroduction}
      />

      <section className="workstream-grid" aria-label="Projektstränge">
        {projectWorkstreams.map((stream) => (
          <article className={`workstream-card ${stream.status}`} key={stream.title}>
            <span className={`status-chip ${stream.status}`}>{stream.label}</span>
            <h2>{stream.title}</h2>
            <p>{stream.detail}</p>
          </article>
        ))}
      </section>

      <section className="data-panel roadmap-panel">
        <div className="section-heading compact">
          <span className="section-kicker">PROJEKT-ROADMAP</span>
          <h2>Vom Marktverständnis bis zur Eröffnung</h2>
        </div>
        <ol className="project-roadmap">
          {projectRoadmap.map((step) => (
            <li className={step.status} key={step.label}>
              <span aria-hidden="true" />
              <strong>{step.label}</strong>
              <small>
                {step.status === "complete"
                  ? "Vorbereitet"
                  : step.status === "in_progress"
                    ? "In Bearbeitung"
                    : step.status === "awaiting"
                      ? "Rückmeldung ausstehend"
                      : "Nächste Phase"}
              </small>
            </li>
          ))}
        </ol>
      </section>

      <section className="prepared-panel">
        <div>
          <span className="section-kicker">SUBSTANZIELLE VORARBEIT</span>
          <h2>Bereits vorbereitet</h2>
          <p>
            Die Projektentwicklung baut auf konkreten Analysen, Planungen,
            Angeboten und Praxistests auf.
          </p>
        </div>
        <ul>
          {preparedProjectAssets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <details className="status-details">
        <summary>Detailstatus aller Arbeitspakete</summary>
        <section className="status-matrix" aria-label="Detaillierter Projektstatus">
          <div className="status-row status-head" aria-hidden="true">
            <span>Bereich</span>
            <span>Status</span>
            <span>Aktueller Stand</span>
          </div>
          {projectStatus.map((item) => (
            <article className="status-row" key={item.area}>
              <h2>{item.area}</h2>
              <p>
                <span className={`status-chip ${item.status}`}>{item.label}</span>
              </p>
              <p>{item.detail}</p>
            </article>
          ))}
        </section>
      </details>
    </main>
  );
}
