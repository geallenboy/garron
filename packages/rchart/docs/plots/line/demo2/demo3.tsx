/**
 * title: 多折线动画
 * desc: 多折线动画
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
        formatter: (v: number) => `${(v / 10e8).toFixed(1)} B`
      }
    },
    legend: {
      position: 'top'
    },
    smooth: true,
    // @TODO 后续会换一种动画方式
    animation: {
      appear: {
        animation: 'path-in',
        duration: 5000
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
