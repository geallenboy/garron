/**
 * title: 阶梯折线图
 * desc: 阶梯折线图
 */

import { LineChart, LineChartProps } from '@garron/rchart';
import React, { useState } from 'react';

export default () => {
  const [data] = useState([
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
    { year: '1999', value: 8 }
  ]);

  const config: LineChartProps = {
    data,
    xField: 'year',
    yField: 'value',
    stepType: 'vh'
  };
  return (
    <>
      <LineChart {...config} />
    </>
  );
};
