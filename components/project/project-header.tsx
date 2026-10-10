import { logout } from "@/app/projekt/(protected)/actions";
import { Brand } from "@/components/brand";
import { ProjectNavigation } from "@/components/project/project-navigation";

export function ProjectHeader() {
  return (
    <header className="project-header">
      <Brand href="/projekt" />
      <ProjectNavigation />
      <form action={logout}>
        <button>Abmelden</button>
      </form>
    </header>
  );
}
