module.exports = {
    title: 'FabOS',
    description: 'open, distributed, real-time capable and secure operating system for production',
    base: '/fabos-docs/',
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
                  title: 'Getting Started',
                  collapsable: false,
                  children: [
                    'getting-started/',
                    'getting-started/overview',
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