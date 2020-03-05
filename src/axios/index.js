/**
 * 封装axios接口
 */
import { createHashHistory } from 'history'
import { apiBefore } from "../utils/Config";
import axios from 'axios';
import { message } from "antd";

const baseURL = apiBefore;
const method = ["post", "put", "delete"];
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 发送请求需要做的things

    if (method.includes(config.method)) {
        //config.data = qs.stringify(config.data);
    }
    // token参数
    let User = JSON.parse(localStorage.getItem("User")) || {};
    if (User.token) {
        config.headers["X-Authorization"] = "Bearer " + User.token;
    }
    return config;
}, function (error) {
    // 发送请求error
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 请求返回数据
    if (response.data && response.data.serror) {
      // 错误
      message.error(response.data.serror.title);
      return Promise.reject(response.data);
    }
    return response.data;
  },
  function (error) {
    // 请求error
    console.log(error.response.status);
    if(error.response.status === 403){
      message.warning("登录过期，请重新登录");
      createHashHistory().push("/login");
    }else{
      message.error(`数据异常，异常码${error.response.status}`)
    }
    return Promise.reject(error.response);
  });

const HttpServer = (opts, data) => {

  let Public = { };//公共参数
  let httpDefaultOpts = { //http默认配置
    method: opts.method,
    baseURL,
    url: opts.url,
    timeout: 40000,
    params: Object.assign(Public, data),
    data: JSON.stringify(Object.assign(Public, data)),
    headers: opts.method === 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  if(opts.upload){
      httpDefaultOpts.headers['Content-Type'] = 'multipart/form-data';
      httpDefaultOpts.data = data;
  }
  if (opts.method === 'get') {
      delete httpDefaultOpts.data;
  } else {
      delete httpDefaultOpts.params;
  }
  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
          resolve(res);
      }
    ).catch(
      (response) => {
          reject(response);
      }
    )

  })
  return promise;
}
export default HttpServer;