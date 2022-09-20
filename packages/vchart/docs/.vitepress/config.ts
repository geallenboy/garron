import markdownPlugin from "vitepress-demo-editor/markdownPlugin";

export default {
  base: '/',
  lang: 'zh-CN',
  themeConfig: {
    logo: './logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: '图表', link: '/plots/area/' },
      { text: 'Github', link: 'https://github.com/geallenboy/garron' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'guide',
          items: [{ text: 'guide', link: '/guide/' }]
        }
      ],
      '/plots/': [
        {
          text: 'plots',
          items: [
            { text: 'area', link: '/plots/area/' },
            { text: 'bar', link: '/plots/bar/' }
          ]
        }
      ]
    }
  },
  markdown: {
    config: (md) => {
      md.use(markdownPlugin);
    }
  }
};
