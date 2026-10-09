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
      <div className="website-preview-frame">
        <iframe
          src="/projekt/website/view"
          title="Vollständiger KIELSPACE-Webseitenentwurf"
        />
      </div>
    </main>
  );
}
