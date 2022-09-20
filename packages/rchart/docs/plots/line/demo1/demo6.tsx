/**
 * title: 自定义折线图 marker 与交互
 * desc: 自定义折线图 marker 与交互
 */

import { LineChart, LineChartProps } from '@garron/rchart';
import React from 'react';
const data = [
  {
    year: '1991',
    value: 3
  },
  {
    year: '1992',
    value: 4
  },
  {
    year: '1993',
    value: 3.5
  },
  {
    year: '1994',
    value: 5
  },
  {
    year: '1995',
    value: 4.9
  },
  {
    year: '1996',
    value: 6
  },
  {
    year: '1997',
    value: 7
  },
  {
    year: '1998',
    value: 9
  },
  {
    year: '1999',
    value: 13
  }
];
export default () => {
  const config: LineChartProps = {
    data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'custom-point',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2
      }
    },
    tooltip: {
      showMarkers: false
    },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red'
        }
      }
    },
    interactions: [
      {
        type: 'custom-marker-interaction'
      }
    ]
  };
  return (
    <>
      <LineChart {...config} />
    </>
  );
};
