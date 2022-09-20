/**
 * title: 带缩略轴柱状图
 * desc: 带缩略轴柱状图
 */

import { ColumnChart, ColumnChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: ColumnChartProps = {
    data,
    xField: '城市',
    yField: '销售额',
    xAxis: {
      label: {
        autoRotate: false
      }
    },
    slider: {
      start: 0.1,
      end: 0.2
    }
  };
  return (
    <>
      <ColumnChart {...config} />
    </>
  );
};
