/**
 * title: 带联动区域的百分比柱状图
 * desc: 带联动区域的百分比柱状图
 */

import { G2 } from '@antv/g2plot';
import { ColumnChart, ColumnChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const config: ColumnChartProps = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    isStack: true,
    meta: {
      value: {
        min: 0,
        max: 1
      }
    },
    label: {
      position: 'middle',
      content: (item) => {
        return `${(item.value * 100).toFixed(2)}%`;
      },
      style: {
        fill: '#fff'
      }
    },
    tooltip: false,
    interactions: [{ type: 'element-highlight-by-color' }, { type: 'element-link' }]
  };
  G2.registerInteraction('element-link', {
    start: [{ trigger: 'interval:mouseenter', action: 'element-link-by-color:link' }],
    end: [{ trigger: 'interval:mouseleave', action: 'element-link-by-color:unlink' }]
  });
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
