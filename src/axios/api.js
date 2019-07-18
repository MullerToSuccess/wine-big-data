import axios from "./axios"

/* 公用接口： 登录等 */
let apis = {
  login: "/login", // 登录
  sign: "/sign", // 注册

  
}

let common = {}

common.login = async params => {
  return await axios.post(apis.login, params, { auth: false })
}

common.sign = async params => {
  return await axios.post(apis.sign, params, { auth: false })
}
export default common
