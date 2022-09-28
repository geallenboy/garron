import { defineConfig } from 'dumi';
export default defineConfig({
  title: 'react图表',
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
    '/plots': [
      {
        title: '折线图',
        children: [
          '/plots/line/api',
          '/plots/line/base1',
          '/plots/line/base2',
          '/plots/line/base3',
          '/plots/line/base4'
        ]
      },
      {
        title: '面积图',
        children: ['/plots/area/api', '/plots/area/base1', '/plots/area/base2', '/plots/area/base3']
      },
      {
        title: '柱状图',
        children: [
          '/plots/column/api',
          '/plots/column/base1',
          '/plots/column/base2',
          '/plots/column/base3'
        ]
      },
      {
        title: '条形图',
        children: [
          '/plots/bar/api',
          '/plots/bar/base1',
          '/plots/bar/base2',
          '/plots/bar/base3',
          '/plots/bar/base4'
        ]
      },
      {
        title: '饼图',
        children: ['/plots/pie/api', '/plots/pie/base1', '/plots/pie/base2']
      },
      {
        title: '散点图',
        children: ['/plots/scatter/api', '/plots/scatter/base1', '/plots/scatter/base2']
      },
      {
        title: '玫瑰图',
        children: ['/plots/rose/api', '/plots/rose/base1']
      },
      {
        title: '关系图',
        children: ['/plots/relation/api', '/plots/relation/base1', '/plots/relation/base2']
      }
    ],
    '/maps': [
      {
        title: '区域地图',
        children: ['/maps/area/api', '/maps/area/base1']
      }
    ]
  },
  navs: [
    {
      title: '指南',
      path: '/guide'
    },
    {
      title: '图表',
      path: '/plots'
    },
    {
      title: '地图',
      path: '/maps'
    },
    {
      title: 'GitHub',
      path: 'https://github.com/geallenboy/garron'
    }
  ]
});
