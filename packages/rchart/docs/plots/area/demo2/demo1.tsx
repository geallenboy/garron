/**
 * title: 基础面积图
 * desc: 基础面积图
 */

import { AreaChart, AreaChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: AreaChartProps = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country'
  };
  return (
    <>
      <AreaChart {...config} />
    </>
  );
};
