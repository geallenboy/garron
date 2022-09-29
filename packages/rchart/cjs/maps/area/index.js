'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _l7plot = require('@antv/l7plot');

var _react = _interopRequireWildcard(require('react'));

var _errorBoundary = _interopRequireDefault(require('../../errorBoundary'));

var _util = require('../../util');

var _createLoading = _interopRequireDefault(require('../../util/createLoading'));

var _useL7Plot = _interopRequireDefault(require('../useL7Plot'));

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

const AreaMap = /*#__PURE__*/ (0, _react.forwardRef)((props, ref) => {
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
  const { plotRef, containerRef } = (0, _useL7Plot.default)(_l7plot.Area, config);
  (0, _react.useEffect)(() => {
    (0, _util.getChart)(chartRef, plotRef.current);
  }, [plotRef.current]);
  (0, _react.useImperativeHandle)(ref, () => ({
    getChart: () => plotRef.current
  }));
  console.log(containerRef, 888);
  return /*#__PURE__*/ _react.default.createElement(
    _errorBoundary.default,
    {
      errorTemplate: errorTemplate
    },
    loading &&
      /*#__PURE__*/ _react.default.createElement(_createLoading.default, {
        loadingTemplate: loadingTemplate
      }),
    /*#__PURE__*/ _react.default.createElement('div', {
      className: className,
      style: containerStyle,
      ref: containerRef
    })
  );
});
var _default = AreaMap;
exports.default = _default;
