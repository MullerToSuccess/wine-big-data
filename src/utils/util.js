/* 手机校验 */
const checkPhone = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("手机号不能为空"))
  } else {
    const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
    console.log(reg.test(value))
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error("请输入正确的手机号"))
    }
  }
}
/* 密码校验 */
const checkPassword = (rule, value, callback) => {
    if(!value){
        return callback(new Error("密码不能为空"))
    }else{
        const reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if(reg.test(value)){
            callback()
        } else{
            return callback(new Error('请输入正确的密码格式'))
        }
    }
}
/* 确认密码校验 */
const checkSurePassword = (value1, value2, callback) => {
    console.log(111111,value1)
    console.log(2222222, value2)
}
/* 邮箱校验 */
const checkEmail = (rule, value, callback) => {
  if(!value){
    return callback(new Error('邮箱不能为空'))
  }else{
    const reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
        if(reg.test(value)){
            callback()
        } else{
            return callback(new Error('请输入正确的邮箱格式'))
        }
  }
}
export default {
  checkPhone,
  checkPassword,
  checkSurePassword,
  checkEmail
}
