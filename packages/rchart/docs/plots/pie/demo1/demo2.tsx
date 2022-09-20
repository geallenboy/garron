/**
 * title: 饼图-外部图形标签
 * desc: 饼图-外部图形标签
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
    radius: 0.8,
    label: {
      type: 'outer'
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  };
  return (
    <>
      <PieChart {...config} />
    </>
  );
};
