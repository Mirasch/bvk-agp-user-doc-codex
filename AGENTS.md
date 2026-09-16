# Agent Instructions – BVK Arbeitgeberportal Benutzerhandbuch

## Zweck und Zielgruppe

Dieses Repository enthält die öffentliche Benutzerdokumentation des BVK Arbeitgeberportals. Zielgruppe sind Arbeitgeber, HR-Mitarbeitende, Lohnadministratoren, Treuhänder und weitere Portalbenutzer. Die betriebliche Rolle **User-Administrator** gehört ausdrücklich zu dieser Zielgruppe; sie ist nicht mit internen BVK-Administratoren zu verwechseln.

Die Website bleibt öffentlich: keine Authentifizierung, Login-Seite, Zugriffsschutz, Sessions, Auth-Abhängigkeiten oder Login-Umgebungsvariablen hinzufügen. `docs/login-und-sicherheit.md` erklärt den Login **im Arbeitgeberportal** und muss erhalten bleiben.

## Repository-Grenzen

- Vor jedem Schreiben den Arbeitsordner und mit `git status --short` den Ausgangszustand prüfen. Nur in `bvk-agp-user-doc-codex` arbeiten; bestehende Änderungen respektieren.
- `../bvk-agp-admin-doc-codex` ist ein **strikt schreibgeschütztes Geschwister-/Referenzprojekt**. Es darf für Design, Architektur, Komponenten, Konventionen und Konfigurationsmuster gelesen werden.
- Dort niemals Dateien bearbeiten, erstellen, löschen, umbenennen oder formatieren; keine Installation, Builds, Caches, Migrationen, Git-Änderungen oder vermeintlichen kleinen Korrekturen. Referenzzustand bei Nutzung vorher/nachher mit `git --no-optional-locks status --short` prüfen.
- Vor einem neuen visuellen Muster nach einer passenden Umsetzung in der Admin-Dokumentation suchen. Geeignete Teile lokal anpassen. Keine Imports, Symlinks, Paket- oder Laufzeit-Abhängigkeiten zum Geschwisterprojekt.
- Authentifizierung, Login, Logout, Middleware, APIs, Umgebungsvariablen und interne Dokumentation des Admin-Projekts niemals übernehmen.
- Änderungen begrenzen; keine breiten Versionsupdates ohne konkreten Nutzen. Keine automatischen Commits, Pushes oder Deployments ohne entsprechenden Auftrag. Für gemeinsam entwickelte Änderungen Feature-Branches/PRs bevorzugen; vor einem Commit validieren.

## Tatsächlicher Stack

Docusaurus 3.9.1, React 19, Markdown/MDX 3, JavaScript/JSX, CSS und CSS Modules; Prism für Codeblöcke. Keine eigene TypeScript-Anwendung, kein Backend und keine Datenbank. Node.js 22 über `.nvmrc`; npm und `package-lock.json` verwenden. Docusaurus-Pakete bei begründeten Updates gemeinsam auf dieselbe Version bringen.

## Wichtige Dateien

- `docs/`: Inhalte mit Frontmatter; `getting-started.md`, `login-und-sicherheit.md`, `faq.md` und `index.md` als Einstiege.
- `docs/benutzerhandbuch/`: Formulare, Dateien, Rollen, Profil und Mitteilungen.
- `docs/adminhandbuch/`: betriebliche Benutzerverwaltung; bestehende Pfade und IDs erhalten.
- `docs/release/`: Release-Übersicht und vorhandene Beispiele; `docs/release-notes.md` erhält den alten Einstiegslink.
- `docs/img/`: Portal-Screenshots, relativ aus Markdown eingebunden.
- `blog/`: echte vorhandene Arbeitgeberbeiträge, Autoren und Tags; Route `/aktuelles`.
- `src/pages/index.js` und `index.module.css`: Startseite.
- `src/components/DocCard/`: React-Einstiegskarten mit CSS Module.
- `src/theme/MDXComponents/index.js`: kleine Erweiterung der Docusaurus-Standardkomponenten für scrollbar bedienbare Tabellen.
- `src/css/custom.css`: globale BVK-Tokens, Hell/Dunkel, Navigation, Footer und Dokumentationsstile.
- `static/`: direkt ausgelieferte öffentliche Assets und `.nojekyll`.
- `sidebars.js`: eine gemeinsame Navigation mit verlinkten Kategorieübersichten.
- `docusaurus.config.js`: Metadaten, GitHub Pages, Navbar/Footer, Docs/Blog und strenge Linkprüfung.
- `scripts/check-build.mjs`: Prüfung der statischen Ausgabe ohne Netzwerk.
- `.github/workflows/validate.yml`: CI-Prüfung, kein automatisches Deployment.

## Inhalt und Sprache

- Deutsch, Schweizer Rechtschreibung (`gemäss`, `Massnahmen`, `ss` statt `ß`) und echte Umlaute verwenden. Vorhandene Portalbegriffe erhalten: `User-Administrator`, `Lohnadministrator`, `HR-Verantwortlicher`, `Vertragsverantwortlicher`, `Formulare`, `Entwürfe`, `Abgesendete Formulare`, `Listen & Dateien`, `Mein Profil`, `Mitteilungen`.
- Aus Arbeitgeber-/Benutzersicht schreiben: verständlich ohne technisches Vorwissen, knapp, aufgabenorientiert und hilfreich. In Anleitungen die bestehende Sie-Ansprache verwenden.
- Fachliche Regeln, Rollenrechte, Fristen, Kontaktangaben und bestehendes Wissen erhalten. Fragwürdige Aussagen ohne Bestätigung nicht durch Vermutungen ersetzen. Beispiele als Beispiele kennzeichnen; keine neuen Geschäftsregeln erfinden.
- Keine internen Implementierungsdetails, TYPO3-/DataStore-Anleitungen oder Jira-Verweise aus der Referenz ergänzen.
- Kurze Einleitungen, nummerierte Schritte für Abläufe, Tabellen für Vergleiche und native Admonitions (`:::info[Titel]`, `:::warning[Titel]`) verwenden. Mit `##` unter dem durch Frontmatter erzeugten H1 beginnen; Überschriftenebenen nicht überspringen.
- Screenshots behalten, aussagekräftige Alternativtexte und relative Bildpfade verwenden. Neue Screenshots müssen für öffentliche Dokumentation geeignet sein und dürfen keine echten persönlichen Daten zeigen.
- Release-Beispiele nicht als bestätigte Änderungen darstellen. Vorhandene Blogaussagen nur fachlich belegt ändern. Bei neuen Artikeln `authors`, zentral definierte `tags` und `<!-- truncate -->` pflegen.

## Entwicklung und Design

- Docusaurus-native Lösungen bevorzugen. Keine unnötigen Architektur-, Zustands- oder Tooling-Schichten.
- Neue Dokumente mit `id`, `title`, `description` erstellen. IDs/Slugs bestehender Seiten erhalten; `sidebars.js` bewusst und aufgabenorientiert ergänzen. Bei Kategorien `link: {type: 'doc', id: ...}` verwenden, ohne die Übersichtsseite nochmals als Kind einzutragen.
- Dateinamen für Inhalte in `kebab-case`, React-Komponenten in `PascalCase`; funktionale Komponenten und `@theme/Heading` verwenden. Wiederverwendbare Karten in `DocCard` pflegen.
- Globale Designvariablen nur in `src/css/custom.css`; lokale Layouts in CSS Modules. BVK-Blau `#004a99`, helle Flächen, abgerundete Karten und der zurückhaltende Grid-/Mesh-Hintergrund verbinden die Geschwisterseiten. Dunkelmodus mit semantischen Tokens gestalten, keine fest dunklen Textfarben auf dunklen Flächen.
- Keine Theme-Komponenten vollständig kopieren, wenn eine kleine Erweiterung genügt. Standard-MDX-Komponenten beim Erweitern erhalten.
- Interne Markdown-Links auf `.md`/`.mdx`-Quelldateien setzen; React-Links mit `@docusaurus/Link`. Für statische React-Bilder `useBaseUrl` verwenden. Niemals `/bvk-agp-user-doc-codex/` in Inhalt oder React hardcodieren. Externe Links mit aussagekräftigem Text und vollständiger URL schreiben.
- Tabellen horizontal scrollbar und per Tastatur bedienbar halten; Bilder responsiv und ohne Verzerrung. Semantische Überschriften, sichtbarer Fokus, verständliche Linktexte und ausreichender Kontrast sind Pflicht. Reduzierte Bewegung respektieren; dekorative Animation ist nicht erforderlich.
- Layout bei 1440, 768 und 375 Pixeln sowie bei langen Überschriften prüfen. Den Docusaurus-Navigationswechsel bei 996 Pixeln berücksichtigen. Keine horizontale Seitenausdehnung; nur breite Tabellen/Codeblöcke separat scrollen.
- Starter-Beispiele und alte Konfigurationskopien nicht wieder einführen. Keine generierten Dateien, lokalen Secrets, `.env`, `node_modules`, `build` oder `.docusaurus` einchecken.

## Befehle und Validierung

Nur in diesem Repository ausführen:

```bash
npm ci
npm run start -- --no-open
npm run build
npm run check:build
npm run validate
npm run serve -- --host 127.0.0.1 --port 3000 --no-open
npm run clear
```

`check:build` benötigt einen aktuellen Build; `validate` baut zuerst. Der Build muss bei defekten internen Links, Ankern, Markdown-Links, undefinierten Blog-Tags/Autoren oder fehlenden Zusammenfassungsmarkern fehlschlagen. Diese Prüfungen nicht zur Umgehung eines Fehlers abschalten.

Kein separater Lint- oder Unit-Test-Runner ist eingerichtet; keine erfundenen `lint`-/`test`-Befehle dokumentieren. Build und statische Validierung sind die automatischen Prüfungen. Änderungen an Layout/Navigation zusätzlich im Browser prüfen: Startseite, direkte Dokumentations-URLs, Bilder, Rollentabelle, Blog, mobile Navigation, Tastatur und Hell/Dunkel. Nur tatsächlich ausgeführte Prüfungen als bestanden melden.

## Deployment

Bestehendes Ziel: `https://Mirasch.github.io/bvk-agp-user-doc-codex/`, Repository `Mirasch/bvk-agp-user-doc-codex`. Statische Ausgabe `build/`. Den lokalen Ordnernamen nicht mit dem Deployment-Repository verwechseln.

Das vorhandene `npm run deploy` veröffentlicht über Docusaurus auf GitHub Pages: `USE_SSH=true npm run deploy` oder `GIT_USER=<GitHub-Benutzername> npm run deploy`. Nur bei ausdrücklichem Veröffentlichungsauftrag ausführen. Keine Vercel-Konfiguration oder Authentifizierung aus dem Admin-Projekt übernehmen. Ohne Auftrag weder produktive Hosting-Einstellungen noch Git-Remote ändern.
