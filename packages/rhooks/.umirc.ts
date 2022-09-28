import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rhooks',
  favicon: './images/logo.svg',
  logo: './images/logo.svg',
  resolve: {
    includes: ['docs']
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
    '/hooks': [
      {
        title: '常用hook',
        children: [
          '/hooks/useLatest',
          '/hooks/useMount',
          '/hooks/useUnmount',
          '/hooks/useMemoizedFn'
        ]
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
      path: '/hooks'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/geallenboy/garron'
    }
  ]
});
