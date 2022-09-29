"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepCloneMapConfig = void 0;

var _util = require("../util");

/**
 * 深克隆配置项
 * @param config 要深克隆的配置
 */
const deepCloneMapConfig = config => {
  const {
    source,
    ...restConfig
  } = config;
  const target = { ...(0, _util.deepClone)(restConfig),
    source: { ...source
    }
  };
  return target;
};

exports.deepCloneMapConfig = deepCloneMapConfig;