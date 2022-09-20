/**
 * title: 基础面积图
 * desc: 基础面积图
 */

import { AreaChart, AreaChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: AreaChartProps = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1]
    }
  };
  return (
    <>
      <AreaChart {...config} />
    </>
  );
};
