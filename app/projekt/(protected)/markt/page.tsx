import { ProjectPageHeading } from "@/components/project/project-page-heading";
import { benchmarkPrinciples } from "@/content/project/benchmarks";
import {
  marketIntroduction,
  marketSections,
} from "@/content/project/market";

export default function MarketPage() {
  return (
    <main className="project-main">
      <ProjectPageHeading
        eyebrow="PROJEKT & MARKT"
        title="Ein vorbereitetes Konzept für einen wachsenden Markt."
        introduction={marketIntroduction}
      />
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
