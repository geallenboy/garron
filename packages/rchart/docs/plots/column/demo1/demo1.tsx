/**
 * title: 基础面积图
 * desc: 基础面积图
 */

import { ColumnChart, ColumnChartProps } from '@garron/rchart';
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
  const config: ColumnChartProps = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle', // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: '#FFFFFF',
        opacity: 0.6
      }
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    },
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
      <ColumnChart {...config} />
    </>
  );
};
