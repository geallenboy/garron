/**
 * title: 借助图形标注展示总计 label
 * desc: 借助图形标注展示总计 label
 */

import { each, groupBy } from '@antv/util';
import { ColumnChart, ColumnChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const arrs: any = [];
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((res) => res.json())
      .then((json) => {
        each(groupBy(json, 'year'), (values, k) => {
          const value = values.reduce((a: any, b: { value: any }) => a + b.value, 0);
          arrs.push({
            type: 'text',
            position: [k, value],
            content: `${value}`,
            style: { textAlign: 'center', fontSize: 14, fill: 'rgba(0,0,0,0.85)' },
            offsetY: -10
          });
        });
        setAnnotations(arrs);
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
    },
    // 使用 annotation （图形标注）来展示：总数的 label
    annotations
  };
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
