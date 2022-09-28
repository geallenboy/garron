/**
 * title: 可拖拽节点桑基图
 * desc: 可拖拽节点桑基图
 */

import { SankeyChart, SankeyChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/nokcOpy6fF/draggable-sankey.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const sankeyData: any = [];
  const keys = ['Survived', 'Sex', 'Age', 'Class'];
  data.forEach((d: any) => {
    keys.reduce((a, b) => {
      if (a && b) {
        sankeyData.push({
          source: d[a],
          target: d[b],
          value: d.value,
          path: `${d[keys[0]]} -> ${d[keys[1]]} -> ${d[keys[2]]} -> ${d[keys[3]]}`
        });
      }

      return b;
    });
  });
  const config: SankeyChartProps = {
    data: sankeyData,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    nodeWidthRatio: 0.01,
    nodePaddingRatio: 0.03,
    nodeDraggable: true,
    rawFields: ['path'],
    tooltip: {
      fields: ['path', 'value'],
      formatter: ({ path, value }) => {
        return {
          name: path,
          value: value
        };
      }
    }
  };
  return <SankeyChart {...config} />;
};
