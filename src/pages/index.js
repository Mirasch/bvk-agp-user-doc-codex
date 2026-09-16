import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import DocCard from '@site/src/components/DocCard';
import styles from './index.module.css';

const sections = [
  {
    title: 'Benutzerhandbuch',
    description: 'Für HR, Lohnadministration und Treuhänder: Formulare bearbeiten, Dateien austauschen und das eigene Profil verwalten.',
    to: '/docs/benutzerhandbuch/',
    cta: 'Benutzerhandbuch öffnen',
  },
  {
    title: 'Benutzer verwalten',
    description: 'Für User-Administratoren in Ihrem Betrieb: Benutzerkonten verwalten und Rollen sowie Berechtigungen zuweisen.',
    to: '/docs/adminhandbuch/',
    cta: 'Anleitungen für User-Administratoren',
  },
  {
    title: 'Häufige Fragen',
    description: 'Antworten zur Anmeldung, zum Sicherheitscode und zu typischen Fragen bei der täglichen Arbeit im Portal.',
    to: '/docs/faq',
    cta: 'Antworten finden',
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.meshLayer} aria-hidden="true" />
      <div className={styles.gridLayer} aria-hidden="true" />
      <div className={styles.heroBackdrop} aria-hidden="true">BVK</div>
      <div className="container">
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.eyebrow}>BVK Arbeitgeberportal · Benutzerhandbuch</p>
            <Heading as="h1" className={styles.heroTitle}>Ihr Weg durch das Arbeitgeberportal</Heading>
            <p className={styles.heroSubtitle}>
              Anleitungen für Arbeitgeber, HR, Lohnadministration und Treuhänder.
              Finden Sie die passenden Schritte für Ihre Arbeit im Portal.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/docs/getting-started">Zum Schnellstart</Link>
              <Link className="button button--secondary button--lg" to="/docs/benutzerhandbuch/">Handbuch öffnen</Link>
            </div>
          </div>
          <nav className={styles.quickAccess} aria-labelledby="quick-access-title">
            <Heading as="h2" className={styles.quickAccessTitle}><span id="quick-access-title">Was möchten Sie tun?</span></Heading>
            <ul>
              <li><Link to="/docs/benutzerhandbuch/formulare-und-arbeitsablaeufe">Formulare bearbeiten <span aria-hidden="true">→</span></Link></li>
              <li><Link to="/docs/benutzerhandbuch/datei-upload-und-download">Dateien hoch- und herunterladen <span aria-hidden="true">→</span></Link></li>
              <li><Link to="/docs/adminhandbuch/benutzerverwaltung">Benutzer verwalten <span aria-hidden="true">→</span></Link></li>
              <li><Link to="/docs/benutzerhandbuch/tipps-und-hinweise">Profil und Mitteilungen <span aria-hidden="true">→</span></Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Benutzerhandbuch" description="Anleitungen zum BVK Arbeitgeberportal für Arbeitgeber, HR, Lohnadministration, Treuhänder und betriebliche User-Administratoren.">
      <main>
        <Hero />
        <section className={styles.section} aria-labelledby="sections-title">
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2"><span id="sections-title">Schnell zum richtigen Bereich</span></Heading>
              <p>Wählen Sie den Bereich, der zu Ihrer Rolle oder Ihrem Anliegen passt.</p>
            </div>
            <div className={styles.cards}>{sections.map((section) => <DocCard key={section.to} {...section} />)}</div>
          </div>
        </section>
        <section className={styles.helpSection} aria-labelledby="help-title">
          <div className="container">
            <div className={styles.helpBox}>
              <div>
                <Heading as="h2"><span id="help-title">Hilfe bei Anmeldung und Zugriff</span></Heading>
                <p>Informationen zum Portal-Login, zum Sicherheitscode und zu häufigen Anmeldeproblemen.</p>
              </div>
              <Link className="button button--secondary button--lg" to="/docs/login-und-sicherheit">Zu Login &amp; Sicherheit</Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
