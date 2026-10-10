"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/projekt", label: "Übersicht" },
  { href: "/projekt/markt", label: "Projekt & Markt" },
  { href: "/projekt/betriebskonzept", label: "Betriebskonzept" },
  { href: "/projekt/projektstand", label: "Projektstand" },
  { href: "/projekt/website", label: "Website" },
] as const;

export function ProjectNavigation() {
  const pathname = usePathname();

  return (
    <nav aria-label="Projektnavigation">
      {navigation.map((item) => {
        const isActive =
          item.href === "/projekt"
            ? pathname === item.href
            : pathname.startsWith(item.href);

        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={isActive ? "active" : undefined}
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
