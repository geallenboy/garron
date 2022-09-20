/**
 * title: 条形图设置坐标转换
 * desc: 条形图设置坐标转换
 */

import { BarChart, BarChartProps } from '@garron/rchart';
import React, { useState } from 'react';

export default () => {
  const [data] = useState([
    { year: '1951 年', value: 38 },
    { year: '1952 年', value: 52 },
    { year: '1956 年', value: 61 },
    { year: '1957 年', value: 145 },
    { year: '1958 年', value: 48 }
  ]);
  const config: BarChartProps = {
    data,
    xField: 'value',
    yField: 'year',
    seriesField: 'year',
    legend: {
      position: 'top-left'
    },
    coordinate: [{ type: 'reflectX' }, { type: 'reflectY' }]
  };
  return (
    <>
      <BarChart {...config} />
    </>
  );
};
