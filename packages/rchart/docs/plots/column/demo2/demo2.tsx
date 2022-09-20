/**
 * title: 自定义联通区域样式柱状图
 * desc: 自定义联通区域样式柱状图
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
    connectedArea: {
      style: (oldStyle) => {
        return { fill: 'rgba(0,0,0,0.25)', stroke: oldStyle.fill, lineWidth: 0.5 };
      }
    }
  };
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
