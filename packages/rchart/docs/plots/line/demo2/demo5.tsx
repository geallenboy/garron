/**
 * title: 指定折线颜色
 * desc: 指定折线颜色
 */

import { LineChart, LineChartProps } from '@garron/rchart';
import React, { useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  const config: LineChartProps = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
      }
    },
    color: ['#1979C9', '#D62A0D', '#FAA219']
  };
  const onClick = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
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
