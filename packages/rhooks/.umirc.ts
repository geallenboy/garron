import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'hooks',
  favicon: './images/logo.svg',
  logo: './images/logo.svg',
  resolve: {
    includes: ['docs', 'src']
  },
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
    '/general': [
      {
        title: '常用hook',
        children: ['/general/useLatest', '/general/useMount', '/general/useUnMount']
      }
    ],
    '/business': [
      {
        title: '菜单hooks',
        children: ['/business/useMenu']
      }
    ]
  },
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: '通用Hooks',
      path: '/general'
    },
    {
      title: '业务Hooks',
      path: '/business'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/geallenboy/garron'
    }
  ]
});
