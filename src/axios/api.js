import axios from "./axios"

/* 公用接口： 登录等 */
let apis = {
  login: "/login", // 登录
  sign: "/register/saveUser", // 注册
  getSmsCode: '/register/getSmsCode', // 获取手机验证码
  getEmailCode: '/register/getEmailCode', // 用户注册
  uploadHeadImg: "/register/uploadHeadImg", // 上传头像
}

let common = {}

common.login = async params => {
  return await axios.post(apis.login, params, { auth: false, dataType: 'json', headers: { "Content-Type": "application/json" } })
}

common.sign = async params => {
  return await axios.post(apis.sign, params, { auth: false, dataType: 'json', headers: { "Content-Type": "application/json" } })
}

// 获取手机验证码
common.getSmsCode = async params => {
  return await axios.get(apis.getSmsCode, params, { auth: false, dataType: 'json', headers: { "Content-Type": "application/json" } })
}

// 获取邮箱验证码
common.getEmailCode = async params => {
  return await axios.get(apis.getEmailCode, params, { auth: false, dataType: 'json', headers: { "Content-Type": "application/json" } })
}

// 上传图片（文件）
common.uploadHeadImg = async params => {
  return await axios.get(apis.uploadHeadImg, params, { auth: false, dataType: 'json', headers: { "Content-Type": "application/json" } })
}

export default common
