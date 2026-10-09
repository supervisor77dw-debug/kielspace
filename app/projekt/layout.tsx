import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projektzugang",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    noimageindex: true,
    nosnippet: true,
  },
};

export const dynamic = "force-dynamic";

export default function ProjectRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
