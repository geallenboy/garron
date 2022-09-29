'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _util = require('@antv/util');

var _react = _interopRequireWildcard(require('react'));

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

const syncRef = (source, target) => {
  if (typeof target === 'function') {
    target(source.current);
  } else if (target) {
    target.current = source.current;
  }
};

const BaseChart = (props, ref) => {
  const { chart: Chart, style, className, chartRef: chart, onReady, ...restProps } = props;
  const chartRef = (0, _react.useRef)(null);
  const configRef = (0, _react.useRef)();
  const containerRef = (0, _react.useRef)(null);
  const isFirstRenderRef = (0, _react.useRef)(true);
  const dataRef = (0, _react.useRef)([]);
  (0, _react.useImperativeHandle)(ref, () => containerRef.current);
  (0, _react.useEffect)(() => {
    const { current: container } = containerRef;

    if (container) {
      const { data, ...config } = restProps;
      configRef.current = (0, _util.clone)(config);
      const normalizedData = data || [];
      dataRef.current = normalizedData;
      const mergedConfig = { ...config, data: normalizedData };
      chartRef.current = new Chart(container, mergedConfig);
      chartRef.current.render();
    }

    syncRef(chartRef, chart);

    if (chartRef.current) {
      onReady === null || onReady === void 0 ? void 0 : onReady(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
        syncRef(chartRef, chart);
      }
    };
  }, []);
  (0, _react.useEffect)(() => {
    const { current: chart } = chartRef;

    if (chart) {
      if (!isFirstRenderRef.current) {
        const { data, ...config } = restProps;
        const normalizedData = data || [];

        if (!(0, _util.isEqual)(config, configRef.current) || (0, _util.isEmpty)(dataRef.current)) {
          configRef.current = (0, _util.clone)(config);
          const mergedConfig = { ...config, data: normalizedData };
          chart.update(mergedConfig);
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
  return /*#__PURE__*/ _react.default.createElement('div', {
    style: style,
    className: className,
    ref: containerRef
  });
};

var _default = /*#__PURE__*/ (0, _react.forwardRef)(BaseChart);

exports.default = _default;
