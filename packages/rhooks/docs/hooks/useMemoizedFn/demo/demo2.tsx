/**
 * title: useMemoizedFn 函数地址不会变化，可以用于性能优化
 * desc: 示例中 `memoizedFn` 是不会变化的，`callbackFn` 在 count 变化时变化。
 */

import { useMemoizedFn } from '@garron/rhooks';
import React, { useCallback, useRef, useState } from 'react';

// some expensive component with React.memo
const ExpensiveTree = React.memo<{ [key: string]: any }>(({ showCount }: any) => {
  const renderCountRef = useRef(0);
  renderCountRef.current += 1;

  return (
    <div>
      <p>Render Count: {renderCountRef.current}</p>
      <button type="button" onClick={showCount}>
        showParentCount
      </button>
    </div>
  );
});

export default () => {
  const [count, setCount] = useState(0);

  const callbackFn = useCallback(() => {
    alert(`Current count is ${count}`);
  }, [count]);

  const memoizedFn = useMemoizedFn(() => {
    alert(`Current count is ${count}`);
  });

  return (
    <>
      <p>count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        Add Count
      </button>

      <p>单击该按钮查看子组件渲染的数量</p>

      <div style={{ marginTop: 32 }}>
        <h3>带有useCallback函数的组件:</h3>
        {/* 使用回调函数，ExpensiveTree组件将在状态改变时重新渲染 */}
        <ExpensiveTree showCount={callbackFn} />
      </div>

      <div style={{ marginTop: 32 }}>
        <h3>带有useMemoizedFn函数的组件:</h3>
        {/* 使用memoized函数，ExpensiveTree组件只渲染一次 */}
        <ExpensiveTree showCount={memoizedFn} />
      </div>
    </>
  );
};
