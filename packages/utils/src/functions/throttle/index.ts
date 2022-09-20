/**
 * @description 函数节流
 * @param {*} fn 需要做节流处理的函数
 * @param {*} delay 延迟时间 默认500ms
 * @return {*}  {Function} 返回节流后的函数
 */
export const throttle: any = (fn: any, delay = 500) => {
  let _time: any = null;
  return function (...args: any[]) {
    const context = this;
    if (!_time) {
      _time = setTimeout(() => {
        fn.call(context, ...args);
        _time = null;
      }, delay);
    }
  };
};

export default throttle;
