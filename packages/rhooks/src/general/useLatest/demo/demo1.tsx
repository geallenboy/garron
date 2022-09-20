/**
 * title: 基础用法
 * desc: useLatest 返回的永远是最新值
 *
 */

import { useLatest } from '@garron/rhooks';
import React, { useEffect, useState } from 'react';

export default () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const latestCountRef = useLatest(count);

  useEffect(() => {
    setCount(latestCountRef.current + 1);
    console.log('count:' + count, latestCountRef.current);
    setCount2(count2 + 1);
    console.log('count2:' + count2);
  }, []);

  const onClick = () => {
    setCount(latestCountRef.current + 1);
    console.log('count:' + count, latestCountRef.current);
  };
  const onClick2 = () => {
    setCount2(count2 + 1);
    console.log('count2:' + count2);
  };
  return (
    <>
      <button onClick={onClick}>useLatest获取值</button>
      <p>count: {count}</p>
      <button onClick={onClick2}>useState获取值</button>
      <p>count2: {count2}</p>
    </>
  );
};
