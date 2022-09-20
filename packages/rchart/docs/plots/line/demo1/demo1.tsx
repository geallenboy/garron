/**
 * title: 基础折线图
 * desc: 基础折线图
 */

import { LineChart, LineChartProps } from '@garron/rchart';
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
  const config: LineChartProps = {
    data,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      tickCount: 5
    }
  };
  return (
    <>
      <LineChart {...config} />
    </>
  );
};
