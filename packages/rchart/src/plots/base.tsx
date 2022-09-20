import { Plot as BasePlot } from '@antv/g2plot';
import { clone, isEmpty, isEqual } from '@antv/util';
import React, {
  forwardRef,
  HTMLAttributes,
  MutableRefObject,
  ReactElement,
  Ref,
  RefAttributes,
  RefCallback,
  useEffect,
  useImperativeHandle,
  useRef
} from 'react';

interface Options {
  [x: string]: any;
}
type PickedAttrs = 'className' | 'style';
type ChartConfig = Omit<Options, 'data'>;
export interface Plot<C extends Options> {
  new (container: HTMLElement, config: C): BasePlot<C>;
}

const syncRef = <C extends Options>(
  source: MutableRefObject<BasePlot<C> | null>,
  target?: RefCallback<BasePlot<C> | null> | MutableRefObject<BasePlot<C> | null>
) => {
  if (typeof target === 'function') {
    target(source.current);
  } else if (target) {
    target.current = source.current;
  }
};

export interface BaseChartProps<C extends Options>
  extends Pick<HTMLAttributes<HTMLDivElement>, PickedAttrs> {
  chart: Plot<C>;
  chartRef?: RefCallback<BasePlot<C> | null> | MutableRefObject<BasePlot<C> | null>;
  data?: Record<string, any> | Record<string, any>[];
  onReady?: (plot: BasePlot<C>) => void;
}

const BaseChart = <C extends Options>(
  props: BaseChartProps<C>,
  ref?: Ref<HTMLDivElement | null>
) => {
  const { chart: Chart, style, className, chartRef: chart, onReady, ...restProps } = props;
  const chartRef = useRef<BasePlot<C> | null>(null);
  const configRef = useRef<ChartConfig>();
  const containerRef = useRef<HTMLDivElement>(null);
  const isFirstRenderRef = useRef<boolean>(true);
  const dataRef = useRef<Record<string, any>[]>([]);
  useImperativeHandle(ref, () => containerRef.current);
  useEffect(() => {
    const { current: container } = containerRef;
    if (container) {
      const { data, ...config } = restProps as Options;
      configRef.current = clone(config);
      const normalizedData = data || [];
      dataRef.current = normalizedData;
      const mergedConfig: any = {
        ...config,
        data: normalizedData
      };
      chartRef.current = new Chart(container, mergedConfig);
      chartRef.current.render();
    }
    syncRef(chartRef, chart);
    if (chartRef.current) {
      onReady?.(chartRef.current);
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
        syncRef(chartRef, chart);
      }
    };
  }, []);

  useEffect(() => {
    const { current: chart } = chartRef;
    if (chart) {
      if (!isFirstRenderRef.current) {
        const { data, ...config } = restProps as Options;
        const normalizedData = data || [];
        if (!isEqual(config, configRef.current) || isEmpty(dataRef.current)) {
          configRef.current = clone(config);
          const mergedConfig = {
            ...config,
            data: normalizedData
          };
          chart.update(mergedConfig as any);
          chart.render();
        } else {
          chart.changeData(normalizedData);
        }
        dataRef.current = normalizedData;
      } else {
        isFirstRenderRef.current = false;
      }
    }
  }, [restProps]);
  return <div style={style} className={className} ref={containerRef} />;
};

export default forwardRef(BaseChart) as <C extends Options>(
  p: BaseChartProps<C> & RefAttributes<HTMLDivElement | null>
) => ReactElement;
