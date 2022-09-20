/**
 * title: 基础用法
 * desc: url参数转对象
 */

import { queryString } from '@garron/utils';
import React, { useState } from 'react';

export default () => {
  const _url = 'http://localhost:8000/?name=geallen&age=29&sex=男';
  const [str, setStr] = useState<any>();
  const toggleClick = () => {
    setStr(queryString(_url));
  };
  return (
    <div>
      <p>{_url}</p>

      <button type="button" onClick={toggleClick}>
        点击
      </button>
      <p>
        {str?.name}
        {str?.age}
        {str?.sex}
      </p>
    </div>
  );
};
