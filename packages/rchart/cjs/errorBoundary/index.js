'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require('@babel/runtime/helpers/defineProperty'));

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

class ErrorBoundary extends _react.default.Component {
  constructor() {
    super(...arguments);
    (0, _defineProperty2.default)(this, 'state', {
      hasError: false
    });
    (0, _defineProperty2.default)(this, 'renderError', (e) => {
      const { errorTemplate } = this.props;

      switch (e) {
        default:
          // fallback
          return errorTemplate && typeof errorTemplate === 'function'
            ? errorTemplate(e)
            : /*#__PURE__*/ _react.default.createElement(
                'h5',
                null,
                '\u7EC4\u4EF6\u51FA\u9519\u4E86\uFF0C\u8BF7\u6838\u67E5\u540E\u91CD\u8BD5\uFF1A ',
                e.message
              );
      }
    });
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (state.children !== nextProps.children) {
      return {
        children: nextProps.children,
        hasError: false,
        error: undefined
      };
    }

    return null;
  }

  render() {
    if (this.state.hasError) {
      return this.renderError(this.state.error);
    }

    return /*#__PURE__*/ _react.default.createElement(_react.Fragment, null, this.props.children);
  }
}

var _default = ErrorBoundary;
exports.default = _default;
