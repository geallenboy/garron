/**
 * title: 基础用法
 * desc: useState和useLatest 定时对比
 *
 */

import { useLatest } from '@garron/rhooks';
import React, { useEffect, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const latestCountRef = useLatest(count);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(latestCountRef.current + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount2(count2 + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <button
        onClick={() => {
          setCount(latestCountRef.current + 1);
        }}
      >
        useLatest获取值
      </button>
      <p>count: {count}</p>
      <button
        onClick={() => {
          setCount2(count2 + 1);
        }}
      >
        useState获取值
      </button>
      <p>count2: {count2}</p>
    </>
  );
};
