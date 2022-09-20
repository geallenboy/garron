/**
 * title: 散点
 * desc: 散点图颜色和形状映射
 */

import { uniq } from '@antv/util';
import { ScatterChart, ScatterChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/rc7SYiIq8Z/scatter-color-shape.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  const config: ScatterChartProps = {
    data,
    xField: 'x',
    yField: 'y',
    colorField: 'city',
    shapeField: 'area',
    sizeField: 'value',
    size: [4, 8],
    color: ({ city }) => {
      const colors10 = [
        '#5B8FF9',
        '#5AD8A6',
        '#5D7092',
        '#F6BD16',
        '#6F5EF9',
        '#6DC8EC',
        '#945FB9',
        '#FF9845',
        '#1E9493',
        '#FF99C3'
      ];
      // custom colorMapping function
      const idx = data.map((d: any) => d.city).indexOf(city);
      return colors10[idx + 1];
    },
    shape: ({ area }) => {
      const shapes = ['circle', 'square', 'triangle', 'hexagon', 'diamond', 'bowtie'];
      const idx = uniq(data.map((d: any) => d.area)).indexOf(area);
      return shapes[idx] || 'circle';
    },
    yAxis: {
      nice: true,
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
