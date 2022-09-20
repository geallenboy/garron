/**
 * title: 散点
 * desc: 散点图颜色映射
 */

import { ScatterChart, ScatterChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/aao6XnO5pW/IMDB.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const config: ScatterChartProps = {
    appendPadding: 10,
    data,
    xField: 'Revenue (Millions)',
    yField: 'Rating',
    shape: 'circle',
    colorField: 'Genre',
    size: 4,
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa'
        }
      }
    },
    xAxis: {
      min: -100,
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
    }
  };
  return (
    <>
      <ScatterChart {...config} />
    </>
  );
};
