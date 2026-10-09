import Link from "next/link";

export default function FullWebsitePreviewPage() {
  return (
    <main className="website-preview-page">
      <header className="website-preview-heading">
        <p className="eyebrow dark">KIELSPACE WEBSITE</p>
        <h1>Vollständiger Kundenwebsite-Entwurf</h1>
        <p>
          Geschützter Entwicklungsstand des vollständigen Onepagers. Die
          Vorschau läuft isoliert innerhalb des Projektbereichs, damit Design,
          responsive Verhalten und Interaktionen dem letzten statischen Stand
          entsprechen.
        </p>
      </header>
      <section className="website-status-bar" aria-label="Website-Status">
        <dl>
          <div>
            <dt>Kundenwebsite</dt>
            <dd>Vollständiger Entwicklungsstand</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Geschützter Pre-Launch</dd>
          </div>
          <div>
            <dt>Ziel</dt>
            <dd>Spätere Vermarktungs- und Buchungsplattform</dd>
          </div>
        </dl>
        <nav aria-label="Website-Vorschauaktionen">
          <a href="/projekt/website/view" target="_blank" rel="noreferrer">
            Website vollständig ansehen
          </a>
          <Link href="/projekt">Zur Projektübersicht</Link>
        </nav>
      </section>
      <div className="website-preview-frame">
        <iframe
          src="/projekt/website/view"
          title="Vollständiger KIELSPACE-Webseitenentwurf"
        />
      </div>
    </main>
  );
}
