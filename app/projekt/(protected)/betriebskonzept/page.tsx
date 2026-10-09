import { ProjectPageHeading } from "@/components/project/project-page-heading";
import {
  operatingChain,
  operatingComponents,
  operationsSections,
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

      <section className="process-panel">
        <h2>Vorgesehene Prozesskette</h2>
        <ol>
          {operatingChain.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <div className="editorial-grid">
        {operationsSections.map((section) => (
          <section className="editorial-card" key={section.title}>
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.title === "Digitales Betriebskonzept" ? (
              <ul>
                {operatingComponents.map((component) => (
                  <li key={component}>{component}</li>
                ))}
              </ul>
            ) : null}
            {section.title === "Software-Vorvalidierung" ? (
              <ul>
                {validatedSoftwareAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </div>
    </main>
  );
}
