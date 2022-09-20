import { DualAxes, DualAxesOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type DualAxesChartProps = Omit<BaseChartProps<DualAxesOptions>, 'chart' | 'data'> &
  DualAxesOptions;

const DualAxesChart = forwardRef<HTMLDivElement | null, DualAxesChartProps>((props, ref) => {
  return <BaseChart chart={DualAxes} ref={ref} {...props} />;
});

export default DualAxesChart;
