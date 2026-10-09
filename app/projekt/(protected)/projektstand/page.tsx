import { ProjectPageHeading } from "@/components/project/project-page-heading";
import {
  projectStatus,
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
      <section className="status-matrix" aria-label="Projektstatus">
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
    </main>
  );
}
