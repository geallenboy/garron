import { debounce } from './functions/debounce';
import { throttle } from './functions/throttle';
import {
  checkStr,
  formatNumber,
  getId,
  handString,
  queryString,
  strFistUpperCase,
  telFormat
} from './string';
import { myFetch } from './utility/fetch';
import { ajaxCrossDomain, ajaxInSameDomain, AxiosRequestConfig } from './utility/passport';

export type { AxiosRequestConfig };
export {
  debounce,
  throttle,
  strFistUpperCase,
  telFormat,
  myFetch,
  queryString,
  getId,
  checkStr,
  formatNumber,
  ajaxInSameDomain,
  ajaxCrossDomain,
  handString
};
