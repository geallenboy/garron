/**
 * title: 基础条形图
 * desc: 基础条形图
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
    }
  };
  return (
    <>
      <BarChart {...config} />
    </>
  );
};
