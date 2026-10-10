import { logout } from "@/app/projekt/(protected)/actions";
import { Brand } from "@/components/brand";
import { ProjectNavigation } from "@/components/project/project-navigation";

export function ProjectHeader({
  accessLabel,
}: {
  accessLabel: string | null;
}) {
  return (
    <header className="project-header">
      <Brand href="/projekt" />
      <ProjectNavigation />
      <div className="project-account">
        {accessLabel ? <span>Zugang: {accessLabel}</span> : null}
        <form action={logout}>
          <button>Abmelden</button>
        </form>
      </div>
    </header>
  );
}
