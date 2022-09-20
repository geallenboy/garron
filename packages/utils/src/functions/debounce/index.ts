/**
 * @description 函数防抖
 * @param fn
 * @param delay 延迟时间 默认500ms
 * @return  {Function} 返回防抖后的函数
 */
export const debounce: any = (fn: any, delay = 500) => {
  let timeout: any = null;
  return function (...args: any[]) {
    const context = this;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      fn.apply(context, args);
    }, delay);
  };
};
export default debounce;
