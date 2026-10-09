# KIELSPACE Website

Next.js-Vorschauseite für KIELSPACE mit öffentlicher, standortneutraler
Projektvorschau und serverseitig geschütztem Projektbereich.

## Lokal starten

1. `.env.example` als `.env.local` kopieren.
2. Sichere Werte für `PROJECT_ACCESS_PASSWORD` und
   `PROJECT_SESSION_SECRET` setzen.
3. `npm install`
4. `npm run dev`

Die npm-Skripte rufen die lokalen Node-Einstiegspunkte direkt auf. Dadurch
funktionieren sie auch in Windows-Workspaces mit einem `&` im Pfad.

## Routen

- `/` – öffentliche Vorschauseite
- `/projekt/login` – Login für den geschützten Projektbereich
- `/projekt` – Projektübersicht
- `/projekt/markt` – Projekt und Markt
- `/projekt/betriebskonzept` – Self Storage und Betriebskonzept
- `/projekt/projektstand` – Projektstand und Umsetzung

## Umgebungsvariablen

- `PROJECT_ACCESS_PASSWORD` – gemeinsames Passwort für Phase 1
- `PROJECT_SESSION_SECRET` – mindestens 32 Zeichen für signierte Sessions
- `LEAD_WEBHOOK_URL` – optionaler serverseitiger Endpunkt für Interessenten
- `LEAD_WEBHOOK_TOKEN` – optionales Bearer-Token für den Lead-Endpunkt

Ohne konfigurierten Lead-Endpunkt weist das Formular transparent darauf hin,
dass die digitale Registrierung noch vorbereitet wird. Es werden keine Daten
still verworfen.

## Sicherheit und Veröffentlichung

- Projekt-Sessions werden serverseitig geprüft.
- Das Session-Cookie ist `httpOnly`, `sameSite=strict` und in Produktion
  `secure`.
- Alle Projekt-Routen liefern `noindex`-Header und private
  Cache-Control-Header.
- Projektseiten werden dynamisch gerendert und sind nicht in der Sitemap.
- Es erfolgt kein Production-Deploy und keine DNS-Änderung ohne Freigabe.
