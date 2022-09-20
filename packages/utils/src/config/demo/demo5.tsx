/**
 * title: 基础用法
 * desc: 手机号码,座机,身份证,邮政编码
 */

import { checkStr, debounce } from '@garron/utils';
import React, { useState } from 'react';

export default () => {
  const [tp, setTp] = useState<string>('phone');
  const [str, setStr] = useState<string>('');
  const [con, setCon] = useState<boolean>(false);
  const toggleClick = () => {
    setCon(checkStr(str, tp));
  };
  const onChangeClick = (e: any) => {
    setStr(e.target.value);
  };
  const onSelectClick = (val) => {
    setTp(val.target.value);
  };

  return (
    <div>
      <input onChange={(e) => debounce(onChangeClick(e), 1000)} value={str} />
      <select onChange={onSelectClick}>
        <option key="1" value={'phone'}>
          手机号码
        </option>
        <option key="2" value={'tel'}>
          座机
        </option>
        <option key="3" value={'card'}>
          身份证
        </option>
        <option key="4" value={'pwd'}>
          密码
        </option>
        <option key="5" value={'postal'}>
          邮政编码
        </option>
        <option key="6" value={'QQ'}>
          QQ
        </option>
        <option key="7" value={'email'}>
          email
        </option>
        <option key="8" value={'money'}>
          金额
        </option>
        <option key="9" value={'IP'}>
          IP
        </option>
      </select>
      <button type="button" onClick={toggleClick}>
        点击
      </button>
      <p>{con ? '成功' : '失败'}</p>
    </div>
  );
};
