module.exports = {
    title: 'FabOS',
    description: 'open, distributed, real-time capable and secure operating system for production',
    base: '/',
    themeConfig: {
          repo: 'FabOS-AI',
          logo: '/img/logo.svg',
          editLinks: false,
          docsDir: '',
          editLinkText: '',
          lastUpdated: false,
          nav: [
              { text: 'Home', link: '/' },
          ],

          sidebar: {
              '/docs/': [
                {
                  title: 'Overview',
                  collapsable: false,
                  children: [
                    'overview/',
                    'overview/vision',
                    'overview/reference-architecture',
                    'overview/faq',
                    'overview/contact',
                  ],
                },
                {
                  title: 'Components',
                  collapsable: false,
                  children: [
                    'components/',
                  ],
                },
                {
                  title: 'Development',
                  collapsable: false,
                  children: [
                    'development/documentation',
                  ],
                },
              ]
          },
      },
      plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        '@dovyp/vuepress-plugin-clipboard-copy',
      ],
}