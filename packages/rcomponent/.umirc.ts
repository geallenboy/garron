import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'react业务组件',
  favicon: './images/logo.svg',
  logo: './images/logo.svg',
  mode: 'site',
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index'
      }
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide'
      }
    ],
    '/components': [
      {
        title: 'Array(数组)',
        path: ''
      }
    ]
  },
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: '业务组件',
      path: '/components'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/geallenboy/garron'
    }
  ]
});
