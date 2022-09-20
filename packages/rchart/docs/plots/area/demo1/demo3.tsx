/**
 * title: 带缩略轴面积图
 * desc: 带缩略轴面积图
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
    xAxis: {
      tickCount: 5
    },
    animation: false,
    slider: {
      start: 0.1,
      end: 0.9,
      trendCfg: {
        isArea: true
      }
    }
  };
  return (
    <>
      <AreaChart {...config} />
    </>
  );
};
