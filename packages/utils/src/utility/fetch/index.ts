/**
 * fetch请求的封装
 * @param url
 * @param setting
 * @returns
 */
export const myFetch = function (url: string, setting: any) {
  const opts = {
    // 设置参数的初始值
    method: (setting.method || 'GET').toUpperCase(), // 请求方式
    headers: setting.headers || { 'Content-Type': 'application/json' }, // 请求头设置
    credentials: setting.credentials || true, // 设置cookie是否一起发送
    body: setting.body || {},
    mode: setting.mode || 'no-cors', // 可以设置 cors, no-cors, same-origin
    redirect: setting.redirect || 'follow', // follow, error, manual
    cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)
  };
  const dataType = setting.dataType || 'json'; // 解析方式
  const data = setting.data || ''; // 参数
  const paramsFormat = function (obj: any) {
    // 参数格式
    let str = '';
    for (const i in obj) {
      str += `${i}=${obj[i]}&`;
    }
    return str.split('').slice(0, -1).join('');
  };

  if (opts.method === 'GET') {
    url = url + (data ? `?${paramsFormat(data)}` : '');
  } else {
    setting.body = data || {};
  }
  console.log(opts, 2222);
  return new Promise((resolve, reject) => {
    fetch(url, opts)
      .then(async (res: any) => {
        const data =
          dataType === 'text'
            ? await res.text()
            : dataType === 'blob'
            ? await res.blob()
            : await res.json();
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};
export default myFetch;
