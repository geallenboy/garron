/**
 * title: 渐变色面积图
 * desc: 渐变色面积图
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
      range: [0, 1],
      tickCount: 5
    },
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff'
      };
    }
  };
  return (
    <>
      <AreaChart {...config} />
    </>
  );
};
