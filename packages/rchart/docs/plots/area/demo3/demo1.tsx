/**
 * title: 基础面积图
 * desc: 基础面积图
 */

import { AreaChart, AreaChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: AreaChartProps = {
    data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    color: ['#82d1de', '#cb302d', '#e3ca8c'],
    areaStyle: {
      fillOpacity: 0.7
    },
    appendPadding: 10,
    isPercent: true,
    yAxis: {
      label: {
        formatter: (value) => {
          return value * 100;
        }
      }
    }
  };
  return (
    <>
      <AreaChart {...config} />
    </>
  );
};
