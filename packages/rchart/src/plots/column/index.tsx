import { Column, ColumnOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type ColumnChartProps = Omit<BaseChartProps<ColumnOptions>, 'chart' | 'data'> &
  ColumnOptions;

const ColumnChart = forwardRef<HTMLDivElement | null, ColumnChartProps>((props, ref) => {
  return <BaseChart chart={Column} ref={ref} {...props} />;
});

export default ColumnChart;
