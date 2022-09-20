import dasyjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
dasyjs.extend(weekOfYear);

export const showTime = (data: string, dataM: string) => {
  switch (dataM) {
    case 'day':
      return `${dasyjs(data).format('YYYY年MM月DD日')} ${whatDay(data)}`;
    case 'week': {
      const newS: string = data.split(' ')[0];
      return `${dasyjs(newS).startOf('week').format('YYYY')}年 第${dasyjs(newS).week()}周`;
    }
    case 'month':
      return `${dasyjs(data).format('YYYY年MM月')}`;
    case 'dsy':
      return `${dasyjs().format('YYYY年MM月DD日 HH:mm:ss')}`;
    default:
      return `${data}`;
  }
};

// const zero = (wh: number) => {
//   return wh < 10 ? '0' + wh : wh;
// };

export const whatDay = (data: string) => {
  const str = dasyjs(data).day();
  if (str === 0) {
    return '星期日';
  } else if (str === 1) {
    return '星期一';
  } else if (str === 2) {
    return '星期二';
  } else if (str === 3) {
    return '星期三';
  } else if (str === 4) {
    return '星期四';
  } else if (str === 5) {
    return '星期五';
  } else if (str === 6) {
    return '星期六';
  }
};
