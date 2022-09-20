/**
 * title: 自定义柱状图颜色
 * desc: 自定义柱状图颜色
 */

import { ColumnChart, ColumnChartProps } from '@garron/rchart';
import React, { useState } from 'react';

export default () => {
  const [data] = useState([
    { type: '1-3秒', value: 0.16 },
    { type: '4-10秒', value: 0.125 },
    { type: '11-30秒', value: 0.24 },
    { type: '31-60秒', value: 0.19 },
    { type: '1-3分', value: 0.22 },
    { type: '3-10分', value: 0.05 },
    { type: '10-30分', value: 0.01 },
    { type: '30+分', value: 0.015 }
  ]);
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const config: ColumnChartProps = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      content: (originData: any): any => {
        const val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false
      }
    }
  };
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
