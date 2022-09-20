/**
 * title: 设置柱状图背景色
 * desc: 设置柱状图背景色
 */

import { ColumnChart, ColumnChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: ColumnChartProps = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle' // 'top', 'bottom', 'middle'
    },
    interactions: [{ type: 'active-region', enable: false }],
    columnBackground: {
      style: {
        fill: 'rgba(0,0,0,0.1)'
      }
    }
  };
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
