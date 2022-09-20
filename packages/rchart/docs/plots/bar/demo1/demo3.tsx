/**
 * title: 自定义条形图颜色
 * desc: 自定义条形图颜色
 */

import { BarChart, BarChartProps } from '@garron/rchart';
import React, { useState } from 'react';

export default () => {
  const [data] = useState([
    {
      type: '家具家电',
      sales: 38
    },
    {
      type: '粮油副食',
      sales: 52
    },
    {
      type: '生鲜水果',
      sales: 61
    },
    {
      type: '美容洗护',
      sales: 145
    },
    {
      type: '母婴用品',
      sales: 48
    },
    {
      type: '进口食品',
      sales: 38
    },
    {
      type: '食品饮料',
      sales: 38
    },
    {
      type: '家庭清洁',
      sales: 38
    }
  ]);
  const config: BarChartProps = {
    data,
    xField: 'sales',
    yField: 'type',
    seriesField: 'type',
    color: ({ type }) => {
      return type === '美容洗护' ? '#FAAD14' : '#5B8FF9';
    },
    legend: false,
    meta: {
      type: {
        alias: '类别'
      },
      sales: {
        alias: '销售额'
      }
    }
  };

  return (
    <>
      <BarChart {...config} />
    </>
  );
};
