"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isType = exports.getType = exports.deepClone = exports.clone = void 0;

// 类型检测
const isType = (value, type) => {
  const {
    toString
  } = {};
  return toString.call(value) === `[object ${type}]`;
};

exports.isType = isType;

const getType = n => {
  return Object.prototype.toString.call(n).slice(8, -1);
};
/**
 * 深克隆
 * @param source 要深克隆的目标对象
 */


exports.getType = getType;

const deepClone = source => {
  if (!source || typeof source !== 'object') {
    return source;
  }

  let target;

  if (Array.isArray(source)) {
    target = source.map(item => deepClone(item));
  } else {
    target = {};
    Object.keys(source).forEach(key => {
      return target[key] = deepClone(source[key]);
    });
  }

  return target;
};

exports.deepClone = deepClone;

const clone = source => {
  if (!source) {
    return source;
  }

  const target = {}; // eslint-disable-next-line guard-for-in

  for (const k in source) {
    target[k] = source[k];
  }

  return target;
};

exports.clone = clone;