module.exports = {
  title: 'Yugawa',
  tagline: 'Hi, I\'m Jeremy. Nice to meet you!',
  url: 'https://yugawa.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'jeremyhager', // Usually your GitHub org/user name.
  projectName: 'yugawa-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yugawa',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'https://jeremyhager.github.io/posts', label: 'Blog', position: 'left'},
	      {to: 'https://jeremyhager.github.io/about', label:'About Me', position:'right'},
        {
          href: 'https://github.com/jeremyhager/yugawa-website',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Internal.Virtnet Overview',
              to: '/',
            },
            {
              label: 'Linux Sysadmin Guide',
              to: '/nixadmin-guide/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jeremy Hager. Built with Docusaurus.`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // algolia: {
    //   apiKey: '3fa5d79fce9c1cbfb74356f8c12edbc8',
    //   indexName: 'yugawa-website',
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'internal-virtnet-overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/jeremyhager/yugawa-website/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jeremyhager/yugawa-website/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
