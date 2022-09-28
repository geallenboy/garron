/**
 * title:  确保实例不会被重复创建
 * desc:  点击 "Rerender" 按钮，触发组件的更新，但 Foo 的实例会保持不变
 *
 */

import { useCreation } from '@garron/rhooks';
import React, { useState } from 'react';

class Foo {
  constructor() {
    this.data = Math.random();
  }
  data: number;
}

export default () => {
  const foo = useCreation(() => new Foo(), []);
  const [, setFlag] = useState({});

  return (
    <>
      <p>{foo.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({});
        }}
      >
        Rerender
      </button>
    </>
  );
};
