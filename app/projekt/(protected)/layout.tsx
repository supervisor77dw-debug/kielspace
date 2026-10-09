import type { ReactNode } from "react";

import { ProjectHeader } from "@/components/project/project-header";
import { projectMeta } from "@/content/project/meta";
import { requireProjectSession } from "@/lib/auth/session";

export default async function ProtectedProjectLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireProjectSession();

  return (
    <div className="project-shell">
      <ProjectHeader />
      {children}
      <footer className="project-footer">
        <span>Vertrauliche Projektdokumentation</span>
        <span>
          Projektstand: {projectMeta.dataAsOf} · Version {projectMeta.version}
        </span>
      </footer>
    </div>
  );
}
