/**
 * title: 基础用法
 * desc: 生成唯一的id
 */

import { getId } from '@garron/utils';
import React, { useState } from 'react';

export default () => {
  const [str, setStr] = useState<string>('');
  const toggleClick = () => {
    setStr(getId());
  };

  return (
    <div>
      <p>{str}</p>
      <button type="button" onClick={toggleClick}>
        点击
      </button>
    </div>
  );
};
