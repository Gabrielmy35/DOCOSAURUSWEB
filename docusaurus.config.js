// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OLA',
  tagline: 'MANUAL DE USO DE ELEMENTOS',
  favicon: 'img/favicon.ico',

  url: 'https://925659047.facturalo.co',
  baseUrl: '/Docusaurus/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/tu-usuario/tu-repo/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/tu-usuario/tu-repo/edit/main/',
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
      // Configuración corregida de colorMode
      colorMode: {
        defaultMode: 'light',
        respectPrefersColorScheme: true,
      },

      // Configuración del Navbar
      navbar: {
        title: ' ',
        hideOnScroll: true,
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          width: 30,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
           
          },
          {
            to: '/blog', 
            label: 'Blog',
            position: 'left',
            
          },
          {
            href: 'https://github.com/Gabrielmy35?tab=repositories',
            position: 'right',
            className: 'navbar-icon-github',
          },
        ],
      },

      // Configuración del Footer
      footer: {
        style: 'dark',
        logo: {
          alt: 'Logo',
          src: 'img/logo.png',
          href: '/',
          width: 40,
        },
        links: [
          {
            title: 'Recursos',
            items: [
              { label: 'Tutoria', to: '/docs/intro' },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              { label: 'Foro', href: 'https://foro.tudominio.com' },
              { label: 'Discord', href: 'https://discord.gg/tu-invitacion' }
            ],
          },
          {
            title: 'Más',
            items: [
              { label: 'Blog', to: '/blog' },
              { 
                label: 'GitHub',
                href: 'https://github.com/Gabrielmy35',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Tu Empresa, Inc.`,
      },

      // Configuración de Prism (sintaxis de código)
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['bash', 'json', 'java', 'python', 'csharp'],
      },

      // Configuración corregida del sidebar docs
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
    stylesheets: [
      {
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        type: 'text/css',
      },
    ],
};


module.exports = config;