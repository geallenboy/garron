/**
 * 数组中获取随机数
 * @param arr
 * @returns
 */
export const sample = (arr: number[]): number => {
  return arr[Math.floor(Math.random() * arr.length)];
};
