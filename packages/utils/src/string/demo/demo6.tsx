/**
 * title: 基础用法
 * desc: 数字转换
 */

import { formatNumber } from '@garron/utils';
import React, { useState } from 'react';

export default () => {
  const [str, setStr] = useState<number>(123456789);
  const [str2, setStr2] = useState<number>(123456789);
  const [str3, setStr3] = useState<number>(0.89);
  const [str4, setStr4] = useState<number>(0.87899);
  return (
    <>
      <div>
        <label>科学记数法：</label>
        <input value={str} />
        <button type="button" onClick={() => setStr(formatNumber(1, str))}>
          转化
        </button>
        <button type="button" onClick={() => setStr(123456789)}>
          还原
        </button>
      </div>
      <div>
        <label>科学记数法保留两位小数：</label>
        <input value={str2} />
        <button type="button" onClick={() => setStr2(formatNumber(2, str2))}>
          转化
        </button>
        <button type="button" onClick={() => setStr2(123456789)}>
          还原
        </button>
      </div>
      <div>
        <label>百分比：</label>
        <input value={str3} />
        <button type="button" onClick={() => setStr3(formatNumber(3, str3))}>
          转化
        </button>
        <button type="button" onClick={() => setStr3(0.89)}>
          还原
        </button>
      </div>
      <div>
        <label>百分比保留两位小数：</label>
        <input value={str4} />
        <button type="button" onClick={() => setStr4(formatNumber(4, str4))}>
          转化
        </button>
        <button type="button" onClick={() => setStr4(0.87899)}>
          还原
        </button>
      </div>
    </>
  );
};
