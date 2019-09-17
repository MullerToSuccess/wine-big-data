'use strict'
import axios from "axios"
import qs from 'qs'

const baseUrl = "http://172.27.7.79:3333" //
// const baseUrl = "http://" + window.document.location.host;

axios.interceptors.request.use(
  config => {
    // config.headers["Content-Type"] = "application/json;charset=UTF-8"
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
axios.defaults.timeout = 15000
axios.interceptors.response.use(
  data => {
    return data
  },  
  error => {
    if (error.response) {
      return Promise.resolve(error.response)
    } else {
      let response = { status: -404, statusText: "请检查网络或稍后重试" }
      return Promise.resolve(response)
    }
  }
)
// 异常格式化
function formatResponse(response) {
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304)) {
    return response.data
  }
  // 异常状态下，保持格式统一 
  checkStatus(response) // 数据校验
  return {
    status: response.status,
    msg: response.statusText,
    data: response.data
  }
}
// 检测状态：
function checkStatus(data) {
  if(data.data.code == 401){
    window.location.hash = "#/login"
    Promise.reject(data.data.message)
    Vue.prototype.$message({
      message: data.data.message,
      type: "warning"
    })
  }
}

export default {
  get(url, params, options) {
    let send = {
      method: "get",
      url: baseUrl + url,
      params,
      headers: {}
    }
    // token
    let token = localStorage.getItem("token") || ""
    if (token) {
      options.auth
        ? // ? (options["headers"]["authorization"] = token)
          (options["headers"]["token"] = token)
        : (options["headers"]["token"] = token)
      Object.assign(send.headers, options.headers)
    }
    return axios(send).then(res => {
      return formatResponse(res)
    })
  },
  post(url, data, options) {
    let send = {
      method: "post",
      url: baseUrl + url,
      data: options.dataType === 'json' ? JSON.stringify(data) : qs.stringify(data),
      headers: {"Content-Type": 'application/json;charset=UTF-8'}
      // headers: {}
    }
    // token
    let token = localStorage.getItem("token")
      ? localStorage.getItem("token")
      : ""
    if (token) {
      options.auth
        ? (options["headers"]["token"] = token)
        : (options["headers"]["token"] = token)
      Object.assign(send.headers, options.headers)
    }
    return axios(send).then(res => {
      return formatResponse(res)
    },
    err => {
    })
  }
}
