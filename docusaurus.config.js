// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'VOID - The Duskwalkers',
  tagline: 'Enter into the VOID',
  favicon: 'img/favicon.ico',

  // --- VERCEL CONFIGURATION ---
  url: 'https://royal-rage-wiki.vercel.app', // Your Vercel URL
  baseUrl: '/',

  // --- CRITICAL FIX FOR DEPLOYMENT ---
  // This tells Docusaurus: "If you find a broken link, don't crash. Just warn me."
  onBrokenLinks: 'warn', 
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: undefined, // Removed the "Edit this page" link since this is a private doctrine
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark', // Forces Dark Mode by default
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'ROYAL RAGE',
        logo: {
          alt: 'Royal Rage Logo',
          src: 'img/logo.svg',
          style: {display: 'none'}, 
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The Codex',
          },
          {to: '/valor', label: 'Hall of Valor', position: 'left'},
          {to: '/command', label: 'Chain of Command', position: 'left'},
          {
            href: 'https://discord.gg/YOUR_CODE', 
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Intel',
            items: [
              // Updated to likely match your actual file names
              { label: 'The Codex', to: '/docs' }, 
              { label: 'Hall of Valor', to: '/valor' },
              { label: 'Chain of Command', to: '/command' },
            ],
          },
          {
            title: 'Alliance',
            items: [
              // { label: 'Enlist Now', to: '/enlist' }, // Commented out until you build this page
              { label: 'Discord', href: 'https://discord.gg/YOUR_CODE' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Royal Rage. Built for War.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
