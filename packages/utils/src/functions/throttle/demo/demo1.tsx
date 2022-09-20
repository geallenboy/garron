/**
 * title: 基础用法
 * desc: 多次点击按钮等待1秒之后在触发。
 */

import { throttle } from '@garron/utils';
import React, { useState } from 'react';

export default () => {
  const [count, setCount] = useState<number>(0);
  const toggleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button type="button" onClick={throttle(toggleClick, 1000)}>
        Toggle
      </button>
    </div>
  );
};
