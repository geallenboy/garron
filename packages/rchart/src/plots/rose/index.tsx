import { Rose, RoseOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type RoseChartProps = Omit<BaseChartProps<RoseOptions>, 'chart' | 'data'> & RoseOptions;

const RoseChart = forwardRef<HTMLDivElement | null, RoseChartProps>((props, ref) => {
  return <BaseChart chart={Rose} ref={ref} {...props} />;
});
export default RoseChart;
