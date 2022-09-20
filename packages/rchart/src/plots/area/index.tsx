import { Area, AreaOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';
import BaseChart, { BaseChartProps } from '../base';

export type AreaChartProps = Omit<BaseChartProps<AreaOptions>, 'chart' | 'data'> & AreaOptions;

const AreaChart = forwardRef<HTMLDivElement | null, AreaChartProps>((props, ref) => {
  return <BaseChart chart={Area} ref={ref} {...props} />;
});

export default AreaChart;
