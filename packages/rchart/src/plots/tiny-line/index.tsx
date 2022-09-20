import { TinyLine, TinyLineOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type TinyLineChartProps = Omit<BaseChartProps<TinyLineOptions>, 'chart' | 'data'> &
  TinyLineOptions;

const TinyLineChart = forwardRef<HTMLDivElement | null, TinyLineChartProps>((props, ref) => {
  return <BaseChart chart={TinyLine} ref={ref} {...props} />;
});

export default TinyLineChart;
