import Link from "next/link";

import { projectOverview } from "@/content/project/overview";

export default function ProjectOverviewPage() {
  return (
    <main className="project-main">
      <section className="project-hero">
        <p className="eyebrow dark">{projectOverview.eyebrow}</p>
        <h1>{projectOverview.title}</h1>
        <p>{projectOverview.introduction}</p>
      </section>
      <section className="project-entry-grid" aria-label="Projektbereiche">
        {projectOverview.entries.map((entry) => (
          <Link href={entry.href} key={entry.href}>
            <span>{entry.number}</span>
            <h2>{entry.title}</h2>
            <p>{entry.description}</p>
            <strong>Öffnen</strong>
          </Link>
        ))}
      </section>
    </main>
  );
}
