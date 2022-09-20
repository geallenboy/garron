import axios, { AxiosRequestConfig } from 'axios';
import jsonp from 'jsonp';
import qs from 'qs';

const TIME_OUT_VALUE = 5000;

const instance = axios.create({
  method: 'POST',
  responseType: 'json',
  timeout: TIME_OUT_VALUE,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

instance.interceptors.request.use(
  async (config) => {
    console.log('请求信息-->', config);
    return config;
  },
  (error) => {
    console.log('请求信息错误-->', error.message);
    return { status: 500, content: null, loading: false, error: true, text: '请求信息错误' };
  }
);

instance.interceptors.response.use(
  (res) => {
    console.log('返回成功信息-->', res);
    if (res.status == 200) {
      return { ...res.data, loading: false, error: false, text: '返回成功' };
    } else {
      return { ...res.data, loading: false, error: false, text: '返回成功' };
    }
  },
  (error) => {
    console.log('返回失败信息-->', error);
    if (error.message.startsWith('Network')) {
      return { status: 500, content: null, loading: false, error: true, text: '网络超时' };
    } else {
      return { status: 500, content: null, loading: false, error: true, text: '请求失败' };
    }
  }
);

export function param(data: { [x: string]: any }, encode = true) {
  let url = '';
  for (const k in data) {
    const value = data[k] !== undefined ? data[k] : '';
    url += '&' + k + '=';
    url += encode ? encodeURIComponent(value) : value;
  }
  return url ? url.substring(1) : '';
}

export { AxiosRequestConfig };

/**
 * ajax同域请求
 * @param {object} config 请求参数集合
 */
export const ajaxInSameDomain = (config: AxiosRequestConfig<any>): any => {
  config.data = qs.stringify(config.data);
  return new Promise((resolve) => {
    instance
      .request(config)
      .then(
        (res) => {
          console.log('返回数据信息---->', res);
          if (res.status === 200 && res.data && res.data.status === 200) {
            resolve({ ...res, loading: false, error: false, text: '接口返回成功' });
          } else {
            resolve({ ...res, loading: false, error: true });
          }
        },
        (err) => {
          console.log('error----->', err);
          resolve({
            status: 500,
            content: null,
            loading: false,
            error: true,
            text: '接口返回失败'
          });
        }
      )
      .catch((err) => {
        console.log('catch----->', err);
        resolve({ status: 500, content: null, loading: false, error: true, text: '代码异常' });
      });
  });
};

/**
 * ajax跨域请求
 *
 * callback 名称是在参数也就是 ?后面里指定的用这个
 * useBaseUrl 指定请求头随环境切换 默认true
 * @param {object} config 请求参数集合
 * callbackParam  定制callback  param
 */
export const ajaxCrossDomain = (config: {
  data: any;
  encode: boolean | undefined;
  url: string;
  callbackFunName: string | undefined;
}) => {
  if (!config.data) {
    config.data = {};
  }
  if (config.encode === undefined) {
    config.encode = true;
  }
  config.url += '?' + param(config.data, config.encode);

  return new Promise((resolve, reject) => {
    try {
      jsonp(
        config.url,
        {
          param: config.callbackFunName ? config.callbackFunName : 'jsonpCallback',
          timeout: TIME_OUT_VALUE
        },
        (err, data) => {
          console.log('ajaxCrossDomain', err, data);
          if (err) {
            console.log('error----->', err.message);
            reject(data);
          } else {
            console.log('获取成功信息---->', data);
            resolve(data);
          }
        }
      );
    } catch (err) {
      console.log('error----->', err.message);
      reject(err);
    }
  });
};
