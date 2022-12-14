/**
 * title: 散点
 * desc: 散点图图形标签
 */

import { ScatterChart, ScatterChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const config: ScatterChartProps = {
    appendPadding: 30,
    data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    colorField: 'Result',
    size: 5,
    shape: 'circle',
    pointStyle: {
      fillOpacity: 1
    },
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa'
        }
      }
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: '#eee'
          }
        }
      },
      line: {
        style: {
          stroke: '#aaa'
        }
      }
    },
    label: {}
  };
  return (
    <>
      <ScatterChart {...config} />
    </>
  );
};
