/**
 * title: 能量关系桑基图
 * desc: 能量关系桑基图
 */

import { SankeyChart, SankeyChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/fa3414cc-75ed-47b4-8306-f2ffe8c40127.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const config: SankeyChartProps = {
    data,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    color: ['red', 'green', 'yellow'],
    edgeStyle: {
      fill: '#ccc',
      fillOpacity: 0.4
    }
  };
  return (
    <>
      <SankeyChart {...config} />
    </>
  );
};
