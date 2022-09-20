/**
 * title: 四分之一圆
 * desc: 四分之一圆
 */

import { PieChart, PieChartProps } from '@garron/rchart';
import React from 'react';

export default () => {
  const data = [
    {
      type: '分类一',
      value: 27
    },
    {
      type: '分类二',
      value: 25
    },
    {
      type: '分类三',
      value: 18
    },
    {
      type: '分类四',
      value: 15
    },
    {
      type: '分类五',
      value: 10
    },
    {
      type: '其他',
      value: 5
    }
  ];
  const config: PieChartProps = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    // 设置圆弧起始角度
    startAngle: Math.PI,
    endAngle: Math.PI * 1.5,
    label: {
      type: 'inner',
      offset: '-8%',
      content: '{name}',
      style: {
        fontSize: 18
      }
    },
    interactions: [
      {
        type: 'element-active'
      }
    ],
    pieStyle: {
      lineWidth: 0
    }
  };
  return (
    <>
      <PieChart {...config} />
    </>
  );
};
