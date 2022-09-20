/**
 * title: 二氧化碳排放量来源
 * desc: 二氧化碳排放量来源
 */

import { LineChart, LineChartProps } from '@garron/rchart';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/nHVKXA8ClI/multiple-measures-line-data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  const seriesKey = 'series';
  const valueKey = 'value';
  function processData(data, yFields, meta) {
    const result: any[] = [];
    data.forEach((d: any) => {
      yFields.forEach((yField: any) => {
        const name = meta?.[yField]?.alias || yField;
        result.push({ ...d, [seriesKey]: name, [valueKey]: d[yField] });
      });
    });
    return result;
  }
  const meta = {
    date: {
      alias: '销售日期'
    },
    price: {
      alias: '单价'
    },
    discount_price: {
      alias: '折扣单价'
    }
  };
  const config: LineChartProps = {
    data: processData(data, ['price', 'discount_price'], meta),
    padding: 'auto',
    xField: 'date',
    yField: valueKey,
    seriesField: seriesKey,
    appendPadding: [0, 8, 0, 0]
  };
  return (
    <>
      <LineChart {...config} />
    </>
  );
};
