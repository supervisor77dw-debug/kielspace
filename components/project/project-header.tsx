import Link from "next/link";

import { logout } from "@/app/projekt/(protected)/actions";
import { Brand } from "@/components/brand";

const navigation = [
  { href: "/projekt", label: "Übersicht" },
  { href: "/projekt/markt", label: "Projekt & Markt" },
  { href: "/projekt/betriebskonzept", label: "Betriebskonzept" },
  { href: "/projekt/projektstand", label: "Projektstand" },
] as const;

export function ProjectHeader() {
  return (
    <header className="project-header">
      <Brand href="/projekt" />
      <nav aria-label="Projektnavigation">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <form action={logout}>
        <button>Abmelden</button>
      </form>
    </header>
  );
}
