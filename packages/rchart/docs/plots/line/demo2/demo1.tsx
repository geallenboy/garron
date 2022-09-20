/**
 * title: 二氧化碳排放量来源
 * desc: 二氧化碳排放量来源
 */

import { LineChart, LineChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: LineChartProps = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'category',
    xAxis: {
      type: 'time'
    },
    yAxis: {
      label: {
        // 数值格式化为千分位
        formatter: (v: string) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`)
      }
    }
  };
  return (
    <>
      <LineChart {...config} />
    </>
  );
};
