// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BVK Arbeitgeberportal',
  tagline: 'Benutzerhandbuch und Online-Dokumentation',
  favicon: 'img/favicon_bvk.ico',
  // Preserve the existing GitHub Pages destination and public URL prefix.
  url: 'https://Mirasch.github.io',
  baseUrl: '/bvk_arbeitgeberportal_doku/',
  organizationName: 'Mirasch',
  projectName: 'bvk_arbeitgeberportal_doku',
  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},
  i18n: {defaultLocale: 'de', locales: ['de']},
  presets: [
    ['classic', /** @type {import('@docusaurus/preset-classic').Options} */ ({
      docs: {sidebarPath: './sidebars.js', routeBasePath: 'docs'},
      blog: {
        routeBasePath: 'aktuelles',
        blogTitle: 'Aktuelles',
        blogDescription: 'News, Hinweise und interessante Themen für Arbeitgeber',
        postsPerPage: 10,
        blogSidebarTitle: 'Aktuelle Beiträge',
        blogSidebarCount: 10,
        showReadingTime: true,
        onInlineTags: 'throw',
        onInlineAuthors: 'throw',
        onUntruncatedBlogPosts: 'throw',
      },
      theme: {customCss: './src/css/custom.css'},
    })],
  ],
  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/bvk_logo.png',
    navbar: {
      logo: {alt: 'BVK – zur Startseite', src: 'img/bvk_logo.png'},
      items: [
        {to: '/docs/getting-started', label: 'Schnellstart', position: 'left'},
        {to: '/docs/benutzerhandbuch/', label: 'Benutzerhandbuch', position: 'left'},
        {to: '/docs/adminhandbuch/', label: 'Benutzerverwaltung', position: 'left'},
        {to: '/docs/faq', label: 'FAQ', position: 'left'},
        {to: '/aktuelles', label: 'Aktuelles', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Dokumentation',
          items: [
            {label: 'Schnellstart', to: '/docs/getting-started'},
            {label: 'Benutzerhandbuch', to: '/docs/benutzerhandbuch/'},
            {label: 'User-Administratoren', to: '/docs/adminhandbuch/'},
          ],
        },
        {
          title: 'Hilfe & Neuerungen',
          items: [
            {label: 'Login & Sicherheit', to: '/docs/login-und-sicherheit'},
            {label: 'Häufige Fragen', to: '/docs/faq'},
            {label: 'Release Notes', to: '/docs/release/'},
            {label: 'Aktuelles', to: '/aktuelles'},
          ],
        },
        {
          title: 'Kontakt',
          items: [
            {label: 'Support', to: '/docs/adminhandbuch/support-und-kontakt'},
            {label: 'BVK Website', href: 'https://www.bvk.ch'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} BVK. Alle Rechte vorbehalten.`,
    },
    colorMode: {defaultMode: 'light', disableSwitch: false, respectPrefersColorScheme: true},
    docs: {sidebar: {hideable: true}},
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  }),
};

export default config;
