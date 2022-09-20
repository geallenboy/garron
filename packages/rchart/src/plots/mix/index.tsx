import { Mix, MixOptions } from '@antv/g2plot';
import React, { forwardRef } from 'react';

import BaseChart, { BaseChartProps } from '../base';

export type MixChartProps = Omit<BaseChartProps<MixOptions>, 'chart' | 'data'> & MixOptions;

const MixChart = forwardRef<HTMLDivElement | null, MixChartProps>((props, ref) => {
  return <BaseChart chart={Mix} ref={ref} {...props} />;
});

export default MixChart;
