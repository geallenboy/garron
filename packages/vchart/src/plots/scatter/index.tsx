import { Scatter, ScatterOptions } from '@antv/g2plot';
import { App, defineComponent } from 'vue';
import BaseChart, { BaseChartProps } from '../base';
import { Writeable } from '../types';

export type ScatterChartProps = Writeable<
  Omit<BaseChartProps<ScatterOptions>, 'chart' | 'data'> & ScatterOptions
>;

export const ScatterChart = defineComponent<ScatterChartProps>({
  name: 'ScatterChart',
  setup: (props, ctx) => {
    return () => <BaseChart chart={Scatter} {...props} {...ctx.attrs} />;
  }
});

ScatterChart.install = (app: App) => {
  app.component(ScatterChart.name, ScatterChart);
};
