/**
 * title: 带中位线标注的基础面积图
 * desc: 带中位线标注的基础面积图
 */

import { AreaChart, AreaChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: AreaChartProps = {
    data,
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'text',
        position: ['min', 'median'],
        content: '中位数',
        offsetY: -4,
        style: {
          textBaseline: 'bottom'
        }
      },
      {
        type: 'line',
        start: ['min', 'median'],
        end: ['max', 'median'],
        style: {
          stroke: 'red',
          lineDash: [2, 2]
        }
      }
    ]
  };
  return (
    <>
      <AreaChart {...config} />
    </>
  );
};
