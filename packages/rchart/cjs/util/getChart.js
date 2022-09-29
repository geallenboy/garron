"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChart = void 0;

var _util = require("@antv/util");

/**
 * 获取或者绑定图表实例
 */
const getChart = (chartRef, chart) => {
  if (!chartRef) {
    return;
  }

  if ((0, _util.isFunction)(chartRef)) {
    chartRef(chart);
  } else {
    chartRef.current = chart;
  }
};

exports.getChart = getChart;