import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'edao',
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
    '/utils': [
      {
        title: 'Array(数组)',
        children: ['/arrays/chunk', '/arrays/sample']
      },
      {
        title: 'functions(函数)',
        children: ['/functions/debounce', '/functions/throttle']
      },
      {
        title: 'objects(对象)',
        children: []
      },
      {
        title: 'utility(工具)',
        children: ['/utility/fetch']
      },
      {
        title: 'string(字符串)',
        children: ['/string']
      }
    ]
  },
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: 'Utils',
      path: '/utils'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/geallenboy/garron'
    }
  ]
});
