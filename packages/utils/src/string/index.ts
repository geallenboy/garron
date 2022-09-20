import numeral from 'numeral';

/**
 * 字符串首字母大写
 * @param str
 * @returns
 */
export const strFistUpperCase = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * 手机号中间四位变成*
 * @param tel
 * @returns
 */
export const telFormat = (tel: string): string => {
  return tel.substring(0, 3) + '****' + tel.substring(7);
};
/**
 * @description 生成唯一的id
 * @returns
 */
export const getId: any = () => {
  const rule = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxx';
  return rule.replace(/[xy]/g, function (rep) {
    const num: number = (16 * Math.random()) | 0;
    return (rep === 'x' ? num : 3 && num | 8).toString(16);
  });
};

/**
 * @description   url参数转对象
 * @param  {String} url
 * @return {Object}
 */
export const queryString: any = (url: string) => {
  const str: string = url || window.location.href;
  const search: string = str.split('?')[1];
  const obj: any = {};
  const reg = /([^?&=]+)=([^?&=]*)/g;
  search.replace(reg, (rs, $1, $2) => {
    const name: string = decodeURIComponent($1);
    const val = String(decodeURIComponent($2));
    obj[name] = val;
    return rs;
  });
  return obj;
};

/**
 * 常用正则验证
 * @param str
 * @param type
 * @returns boolean
 */
export const checkStr = (str: string, type: string) => {
  switch (type) {
    case 'phone': // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
    case 'tel': // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
    case 'card': // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
    case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str);
    case 'postal': // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str);
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str);
    case 'email': // 邮箱
      return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(str);
    case 'money': // 金额(小数点2位)
      return /^\d*(?:.\d{0,2})?$/.test(str);
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str);
    case 'date': // 日期时间
      return (
        /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
      );
    case 'number': // 数字
      return /^[0-9]$/.test(str);
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str);
    case 'chinese': // 中文
      return /^[\u4E00-\u9FA5]+$/.test(str);
    case 'lower': // 小写
      return /^[a-z]+$/.test(str);
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str);
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
    default:
      return true;
  }
};

/**
 * 数据格式化
 * type:
 * 1.整数加千位分隔符
 * 2.保留两位小数千位分隔符
 * 3.百分比千位分隔符保留两位小数
 * 4.百分比千位分隔符
 * value: 参数值
 * return string
 */
export const formatNumber = (type: number, value: string | number): string | number => {
  switch (type) {
    case 1:
      return value === '' ? '-' : numeral(value).format('0,0');
    case 2:
      return value === '' ? '-' : numeral(value).format('0,0.00');
    case 3:
      return value === '' ? '-' : numeral(value).format('0,0%');
    case 4:
      return value === '' ? '-' : numeral(value).format('0,0.00%');
    default:
      return value === '' ? '-' : value;
  }
};

//去除前面符号
export const clqz = (str: string) => {
  return str.replace(/-/, '');
};

//字符串截取
export const handString = (str: string, len: number) => {
  len = len ? len : 20; //初始化长度
  if (str.length > len) {
    str = str.substring(0, len) + '...';
  }
  return str;
};
