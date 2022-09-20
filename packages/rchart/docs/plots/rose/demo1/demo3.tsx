/**
 * title: 分组玫瑰图
 * desc: 分组玫瑰图
 */

import { RoseChart, RoseChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/XcLAPaQeeP/rose-data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: RoseChartProps = {
    data,
    xField: 'type',
    yField: 'value',
    isGroup: true,
    // 当 isGroup 为 true 时，该值为必填
    seriesField: 'user',
    radius: 0.9,
    label: {
      offset: -15
    },
    interactions: [
      {
        type: 'element-active'
      }
    ]
  };
  return (
    <>
      <RoseChart {...config} />
    </>
  );
};
