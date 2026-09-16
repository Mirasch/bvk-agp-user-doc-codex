/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'index',
    'getting-started',
    'login-und-sicherheit',
    {
      type: 'category',
      label: 'Benutzerhandbuch',
      collapsed: false,
      link: {type: 'doc', id: 'benutzerhandbuch/benutzer-index'},
      items: [
        'benutzerhandbuch/rollen-und-berechtigungen',
        'benutzerhandbuch/formulare-und-arbeitsablaeufe',
        'benutzerhandbuch/datei-upload-und-download',
        'benutzerhandbuch/tipps-und-hinweise',
      ],
    },
    {
      type: 'category',
      label: 'Benutzer verwalten',
      collapsed: true,
      link: {type: 'doc', id: 'adminhandbuch/admin-index'},
      items: [
        'adminhandbuch/benutzerverwaltung',
        'adminhandbuch/rollen-und-berechtigungen',
        'adminhandbuch/sicherheit-und-best-practices',
      ],
    },
    'faq',
    'adminhandbuch/support-und-kontakt',
    {
      type: 'category',
      label: 'Release Notes',
      collapsed: true,
      link: {type: 'doc', id: 'release/release-index'},
      items: ['release/release-notes-2026-1', 'release/release-notes-2026-3'],
    },
  ],
};

module.exports = sidebars;
