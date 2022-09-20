## 安装

```bash
npm install @garron/rchart
```

## 使用

```js
import { LineChart } from '@garron/rchart';
```

## Examples

```tsx
import React, { useCallback } from 'react';
import { LineChart, ColumnChart, PieChart, BarChart } from '@garron/rchart';

const config = {
  height: 350,
  autoFit: true,
  xField: 'year',
  yField: 'value',
  smooth: true,
  meta: {
    value: {
      max: 15
    }
  },
  data: [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 11 }
  ]
};

const pieConfig = {
  height: 350,
  autoFit: true,
  padding: 'auto',
  radius: 1,
  data: [
    {
      type: 'A',
      value: 27
    },
    {
      type: 'B',
      value: 25
    },
    {
      type: 'C',
      value: 18
    },
    {
      type: 'D',
      value: 15
    },
    {
      type: 'E',
      value: 10
    },
    {
      type: 'Others',
      value: 5
    }
  ],
  angleField: 'value',
  colorField: 'type',
  label: {
    visible: true,
    type: 'inner'
  },
  legend: {
    visible: false
  }
};

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}
    >
      <LineChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32
        }}
        {...config}
      />
      <ColumnChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32
        }}
        {...config}
      />
      <BarChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32
        }}
        {...config}
        xField="value"
        yField="year"
      />
      <PieChart
        style={{
          width: '48%',
          minWidth: 350,
          marginTop: 32
        }}
        {...pieConfig}
      />
    </div>
  )
}

```
