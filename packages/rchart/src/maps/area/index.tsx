import { Area, AreaOptions } from '@antv/l7plot';
import React, { forwardRef, useEffect, useImperativeHandle } from 'react';
import ErrorBoundary from '../../errorBoundary';
import { ContainerConfig, PlotRef } from '../../types';
import { getChart } from '../../util';
import ChartLoading from '../../util/createLoading';
import useL7Plot, { L7PlotConfig } from '../useL7Plot';

export interface AreaMapConfig extends L7PlotConfig<AreaOptions, Area>, ContainerConfig {
  chartRef?: PlotRef<Area>;
}

const AreaMap = forwardRef((props: AreaMapConfig, ref) => {
  const {
    chartRef,
    containerStyle = {
      height: 'inherit'
    },
    className,
    loading,
    loadingTemplate,
    errorTemplate,
    ...config
  } = props;
  const { plotRef, containerRef } = useL7Plot<AreaOptions, Area>(Area as any, config);

  useEffect(() => {
    getChart(chartRef, plotRef.current as any);
  }, [plotRef.current]);

  useImperativeHandle(ref, () => ({
    getChart: () => plotRef.current
  }));
  console.log(containerRef, 888);
  return (
    <ErrorBoundary errorTemplate={errorTemplate}>
      {loading && <ChartLoading loadingTemplate={loadingTemplate} />}
      <div className={className} style={containerStyle} ref={containerRef} />
    </ErrorBoundary>
  );
});

export default AreaMap;
