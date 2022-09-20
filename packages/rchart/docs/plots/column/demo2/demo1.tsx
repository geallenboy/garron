/**
 * title: 堆叠柱状图
 * desc: 堆叠柱状图
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
      position: 'middle', // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        { type: 'interval-adjust-position' },
        // 数据标签防遮挡
        { type: 'interval-hide-overlap' },
        // 数据标签文颜色自动调整
        { type: 'adjust-color' }
      ]
    }
  };
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
