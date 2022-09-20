import { Sankey, SankeyOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type SankeyChartProps = Omit<BaseChartProps<SankeyOptions>, 'chart' | 'data'> &
  SankeyOptions;

const SankeyChart = forwardRef<HTMLDivElement | null, SankeyChartProps>((props, ref) => {
  return <BaseChart chart={Sankey} ref={ref} {...props} />;
});

export default SankeyChart;
