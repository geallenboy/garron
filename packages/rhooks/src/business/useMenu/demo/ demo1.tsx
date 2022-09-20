/**
 * title: 基础用法
 * desc: 在组件首次渲染时，执行方法。
 */

import { useMount } from '@garron/rhooks';
import React, { useState } from 'react';

export default () => {
  const [toggle, setToggle] = useState(false);
  const onClick = () => {
    setToggle(!toggle);
  };
  useMount(() => {
    console.log('useMount');
  });
  return (
    <>
      <button type="button" onClick={onClick}>
        {toggle ? 'unmount' : 'mount'}
      </button>
    </>
  );
};
