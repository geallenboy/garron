import { DependencyList, useRef } from 'react';
import depsAreSame from '../utils/depsAreSame';

/**
 *
 * @param fn
 * @param deps
 * @returns
 */
const useCreation = <T>(fn: () => T, deps: DependencyList) => {
  const { current } = useRef({
    deps, //存储上一次的依赖数组
    obj: undefined as undefined | T, // 工厂函数生产的目标值
    initialized: false // 是否已经初始化
  });
  if (current.initialized === false || !depsAreSame(current.deps, deps)) {
    current.deps = deps;
    current.obj = fn();
    current.initialized = true;
  }

  return current.obj as T;
};

export default useCreation;
