import { useEffect } from 'react';
import { isFunction } from '../utils';

const useMount = (fn: () => void) => {
  if (!isFunction(fn)) {
    console.error(`useMount: 参数必须是方法, 目前是 "${typeof fn}".`);
  }
  useEffect(() => {
    fn?.();
  }, []);
};

export default useMount;
