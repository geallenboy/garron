"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactContentLoader = _interopRequireDefault(require("react-content-loader"));

const ChartLoading = _ref => {
  let {
    loadingTemplate
  } = _ref;

  const renderLoading = () => {
    if (loadingTemplate) {
      return loadingTemplate;
    }

    return /*#__PURE__*/_react.default.createElement(_reactContentLoader.default, {
      viewBox: "0 0 400 180",
      width: 200,
      height: 90,
      speed: 1
    }, /*#__PURE__*/_react.default.createElement("rect", {
      x: "20",
      y: "5",
      rx: "0",
      ry: "0",
      width: "1",
      height: "170"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "20",
      y: "175",
      rx: "0",
      ry: "0",
      width: "360",
      height: "1"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "40",
      y: "75",
      rx: "0",
      ry: "0",
      width: "35",
      height: "100"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "80",
      y: "125",
      rx: "0",
      ry: "0",
      width: "35",
      height: "50"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "120",
      y: "105",
      rx: "0",
      ry: "0",
      width: "35",
      height: "70"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "160",
      y: "35",
      rx: "0",
      ry: "0",
      width: "35",
      height: "140"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "200",
      y: "55",
      rx: "0",
      ry: "0",
      width: "35",
      height: "120"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "240",
      y: "15",
      rx: "0",
      ry: "0",
      width: "35",
      height: "160"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "280",
      y: "135",
      rx: "0",
      ry: "0",
      width: "35",
      height: "40"
    }), /*#__PURE__*/_react.default.createElement("rect", {
      x: "320",
      y: "85",
      rx: "0",
      ry: "0",
      width: "35",
      height: "90"
    }));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      left: 0,
      top: 0,
      zIndex: 99,
      backgroundColor: '#fff'
    }
  }, renderLoading());
};

var _default = ChartLoading;
exports.default = _default;