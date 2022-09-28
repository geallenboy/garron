import type { DependencyList } from 'react';

//通过 === 按顺序对依赖数组逐项对比，并且只会对比第一层，所以如果依赖是个对象或者数组，想要更新必须要改变引用地址
export default function depsAreSame(oldDeps: DependencyList, deps: DependencyList): boolean {
  if (oldDeps === deps) return true;
  for (let i = 0; i < oldDeps.length; i++) {
    // 判断两个值是否是同一个值
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }
  return true;
}
