/**
 * title: 折线趋势填充
 * desc: 折线趋势填充
 */

import { LineChart, LineChartProps } from '@garron/rchart';
import React, { useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  const config: LineChartProps = {
    data,
    xField: 'year',
    yField: 'gdp',
    seriesField: 'name',
    yAxis: {
      label: {
        formatter: (v) => `${(v / 10e8).toFixed(1)} B`
      }
    },
    legend: {
      position: 'top'
    },
    smooth: true,
    // 配置折线趋势填充
    area: {
      style: {
        fillOpacity: 0.15
      }
    },
    animation: {
      appear: {
        animation: 'wave-in',
        duration: 3000
      }
    }
  };
  const onClick = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/e00d52f4-2fa6-47ee-a0d7-105dd95bde20.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  };
  return (
    <>
      <button onClick={onClick}>点击</button>
      <LineChart {...config} />
    </>
  );
};
