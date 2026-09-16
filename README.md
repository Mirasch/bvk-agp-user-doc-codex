# BVK Arbeitgeberportal – Benutzerhandbuch

Öffentliche Dokumentation für Arbeitgeber, HR, Lohnadministration, Treuhänder und betriebliche User-Administratoren. Die Website selbst benötigt keine Anmeldung. Die Anleitungen zum Portal-Login beschreiben die Anmeldung im **Arbeitgeberportal**.

## Entwicklung

Docusaurus **3.9.1**, React **19**, JavaScript/JSX, Markdown/MDX und CSS Modules. Node.js **22** (siehe `.nvmrc`) und npm verwenden; `package-lock.json` ist die verbindliche Abhängigkeitsdatei.

```bash
npm ci
npm run start -- --no-open
```

Lokale Adresse: <http://localhost:3000/bvk_arbeitgeberportal_doku/>.

## Prüfen und Vorschau

```bash
npm run validate
npm run serve -- --host 127.0.0.1 --port 3000 --no-open
```

`validate` führt den Produktionsbuild mit strenger Link- und Ankerprüfung aus und prüft anschliessend alle generierten HTML-Seiten auf lokale Links, Assets, den URL-Präfix, Bild-Alternativattribute und eindeutige Hauptüberschriften auf Start- und Dokumentationsseiten.

Einzeln: `npm run build` und danach `npm run check:build`. Generierte Dateien liegen in `build/` und `.docusaurus/` und werden nicht eingecheckt. Mit `npm run clear` lassen sich Docusaurus-Caches entfernen. Es gibt keinen separaten Lint- oder Unit-Test-Runner. Der GitHub-Workflow `.github/workflows/validate.yml` führt dieselbe Validierung bei Pull Requests und Änderungen an `main` aus.

Für visuelle Änderungen zusätzlich Startseite, Dokumentationsseite mit Bild, Rollentabelle, Blog und Navigation bei Desktop-, Tablet- und Mobilbreite prüfen. Hell/Dunkel, Tastaturfokus, mobile Navigation und horizontales Scrollen der Tabelle berücksichtigen.

## Struktur

- `docs/`: Schnellstart, Portal-Login, Benutzerhandbuch, betriebliche Benutzerverwaltung, FAQ und Release Notes.
- `docs/img/`: bestehende Portal-Screenshots; relative Markdown-Bildpfade verwenden.
- `blog/`: Beiträge unter `/aktuelles`, gemeinsame Autoren und Tags.
- `src/pages/index.js`: öffentliche Startseite mit direkten Aufgabeneinstiegen.
- `src/components/DocCard/`: wiederverwendbare Einstiegskarte.
- `src/theme/MDXComponents/index.js`: tastaturbedienbare, horizontal scrollbar dargestellte Tabellen.
- `src/css/custom.css`: globale BVK-Designvariablen und Docusaurus-Anpassungen.
- `static/`: unverändert ausgelieferte Dateien wie BVK-Logo und Favicon.
- `sidebars.js`: gemeinsame, aufgabenorientierte Dokumentationsnavigation.
- `docusaurus.config.js`: Metadaten, URL-Präfix, Navigation, Footer und Build-Regeln.
- `AGENTS.md`: verbindlicher Arbeitskontext für zukünftige Agent-Sitzungen.

`docs/adminhandbuch/` behandelt **User-Administratoren beim Arbeitgeber**. Der Ordnername und die bestehenden URLs bleiben aus Kompatibilitätsgründen erhalten. Er enthält keine interne BVK-Systemadministration. `/docs/release-notes` bleibt als bisheriger Einstieg erhalten und verweist auf `/docs/release/`.

## Inhalte pflegen

Bestehende Dokument-IDs und URLs erhalten. Neue Seiten mit `id`, `title` und `description` anlegen und in `sidebars.js` eintragen. Innerhalb von Markdown auf Quelldateien verlinken, zum Beispiel `[Schnellstart](../getting-started.md)`. In React Docusaurus `Link` verwenden. Den Deployment-Präfix niemals in Inhalte schreiben; Docusaurus ergänzt ihn.

Deutsch mit Schweizer Rechtschreibung und bestehenden Portalbegriffen verwenden. Fachliche Regeln, Fristen, Rollen und Kontaktangaben nur mit einer bestätigten Quelle ändern. Die Release-Notizen Januar und März enthalten ausdrücklich gekennzeichnete Beispiele; vor echten Release-Mitteilungen fachlich prüfen. Auch bestehende allgemeine Blogaussagen und Screenshots sollten vor einer Veröffentlichung fachlich auf Aktualität geprüft werden.

## Deployment

Die bestehende GitHub-Pages-Konfiguration bleibt erhalten:

- URL: `https://Mirasch.github.io/bvk_arbeitgeberportal_doku/`
- Repository: `Mirasch/bvk_arbeitgeberportal_doku`
- Statische Ausgabe: `build/`

Nur bei einem ausdrücklich beauftragten Deployment und mit passendem GitHub-Zugriff:

```bash
USE_SSH=true npm run deploy
```

Alternativ `GIT_USER=<GitHub-Benutzername> npm run deploy`. Diese Docusaurus-Befehle veröffentlichen auf dem Deployment-Branch. Der Prüfworkflow veröffentlicht nichts. Ein neuer Hosting-Anbieter oder ein anderer Repositoryname erfordert eine bewusste Anpassung von `url`, `baseUrl`, `organizationName` und `projectName`; der lokale Ordnername allein ist kein Grund dafür.

## BVK-Referenz

`../bvk-agp-admin-doc-codex` ist ausschliesslich eine **schreibgeschützte Referenz** für Gestaltung und technische Konventionen. Keine Änderungen, Installationen, Builds oder generierten Dateien dort. Geeignete Muster lokal übernehmen; keine Laufzeit-Abhängigkeit zum Geschwisterprojekt. Seine Authentifizierung, Login-Seite, APIs, Middleware und internen Inhalte gehören nicht in diese öffentliche Dokumentation.
