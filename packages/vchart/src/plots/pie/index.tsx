import { Pie, PieOptions } from '@antv/g2plot';
import { App, defineComponent } from 'vue';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type PieChartProps = Writeable<
  Omit<BaseChartProps<PieOptions>, 'chart' | 'data'> & PieOptions
>;

export const PieChart = defineComponent<PieChartProps>({
  name: 'PieChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Pie} {...props} {...ctx.attrs} />;
  }
});

PieChart.install = (app: App) => {
  app.component(PieChart.name, PieChart);
};
