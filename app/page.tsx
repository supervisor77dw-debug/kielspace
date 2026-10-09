import Image from "next/image";
import Link from "next/link";

import { Brand } from "@/components/brand";
import { InterestForm } from "@/components/public/interest-form";
import { SocialLinks } from "@/components/public/social-links";

const previewSections = [
  {
    number: "01",
    title: "Einfach lagern",
    copy: "Ob Umzug, zusätzlicher Platzbedarf oder vorübergehende Einlagerung: KIELSPACE soll flexible Lagerlösungen für private und gewerbliche Anforderungen bieten.",
  },
  {
    number: "02",
    title: "Digital organisiert",
    copy: "Von der Anfrage bis zur Verwaltung wird KIELSPACE konsequent digital entwickelt. Buchung, Vertrag, Zahlung und Zugang sollen weitgehend automatisiert erfolgen.",
  },
  {
    number: "03",
    title: "Projekt in Vorbereitung",
    copy: "Die technische und organisatorische Planung ist weit fortgeschritten. Interessierte können sich bereits heute unverbindlich vormerken lassen.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <header className="public-header">
        <Brand />
        <a className="header-cta" href="#interesse">
          Informieren lassen
        </a>
      </header>

      <main>
        <section className="public-hero">
          <Image
            className="hero-image"
            src="/images/kielspace-storage-corridor.png"
            alt="Visualisierung eines modernen Self-Storage-Lagergangs"
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="eyebrow">SELF STORAGE KIEL · IN VORBEREITUNG</p>
            <h1>
              Mehr Raum.
              <br />
              <span>Einfach digital.</span>
            </h1>
            <p className="hero-copy">
              In Kiel entsteht ein modernes Self-Storage-Angebot mit flexiblen
              Lagergrößen, digitaler Buchung und komfortablem Zugang. Der
              Projektstart wird derzeit vorbereitet.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#interesse">
                Frühzeitig informieren lassen
              </a>
              <Link className="button button-secondary" href="/projekt">
                Projektzugang
              </Link>
            </div>
          </div>
          <p className="visual-label">Konzeptvisualisierung</p>
        </section>

        <div className="trust-line" aria-label="KIELSPACE Merkmale">
          <span>Digital buchbar</span>
          <span>Flexible Größen</span>
          <span>Sicherer Zugang</span>
          <span>Kiel</span>
        </div>

        <section className="preview-intro section-shell">
          <div>
            <p className="eyebrow dark">KIELSPACE</p>
            <h2>Self Storage für ein modernes Kiel.</h2>
          </div>
          <p>
            KIELSPACE wird als komfortables und digital organisiertes
            Lagerangebot im Kieler Stadtgebiet entwickelt.
          </p>
        </section>

        <section className="preview-grid section-shell" aria-label="Konzept">
          {previewSections.map((section) => (
            <article key={section.number}>
              <span>{section.number}</span>
              <h3>{section.title}</h3>
              <p>{section.copy}</p>
            </article>
          ))}
        </section>

        <section className="interest-section" id="interesse">
          <div className="interest-heading">
            <p className="eyebrow">INTERESSE VORMERKEN</p>
            <h2>Frühzeitig informiert sein.</h2>
            <p>
              Teile uns unverbindlich mit, welcher Lagerbedarf für dich
              interessant sein könnte. Es entsteht keine Reservierung oder
              Buchungsverpflichtung.
            </p>
          </div>
          <InterestForm />
        </section>
      </main>

      <footer className="public-footer">
        <Brand />
        <p>
          KIELSPACE · Self Storage Kiel
          <br />
          <small>Projekt in Vorbereitung.</small>
        </p>
        <SocialLinks />
        <nav aria-label="Rechtliche Informationen">
          <span>Impressum folgt</span>
          <span>Datenschutz folgt</span>
        </nav>
      </footer>
    </>
  );
}
