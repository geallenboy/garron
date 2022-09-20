/**
 * title: 基础用法
 * desc: 字符串首字母大写
 */

import { strFistUpperCase } from '@garron/utils';
import React, { useState } from 'react';

export default () => {
  const [str, setStr] = useState<string>('geallen');
  const toggleClick = () => {
    setStr(strFistUpperCase(str));
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
