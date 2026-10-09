import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kielspace.de"),
  title: {
    default: "KIELSPACE | Self Storage Kiel",
    template: "%s | KIELSPACE",
  },
  description:
    "KIELSPACE entwickelt ein modernes, digital organisiertes Self-Storage-Angebot im Kieler Stadtgebiet.",
  openGraph: {
    title: "KIELSPACE | Self Storage Kiel",
    description:
      "Mehr Raum. Einfach digital. Ein modernes Self-Storage-Angebot für Kiel ist in Vorbereitung.",
    type: "website",
    locale: "de_DE",
    siteName: "KIELSPACE",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
