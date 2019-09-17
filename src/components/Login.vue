<template>
  <div class="login">
    <div class="loginForm">
      <div class="left" style="width: 500px;height:570px">
        <img class="img-logo" src="@/assets/images/login-left.png" />
      </div>
      <div class="right" style="width: 500px;height:565px">
        <img style="margin: 90px auto" class="img-logo" src="@/assets/images/login-right.png" />
        <el-form
          :model="loginForm"
          ref="loginForm"
          label-width="100px"
          class="demo-dynamic"
          style="text-align: center;margin: auto; width:350px"
        >
          <el-form-item
            prop="username"
            label
            :rules="[
      { required: true, message: '请输入用户名称', trigger: 'blur' }
    ]"
          >
            <el-input placeholder="请输入用户名称" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            label
            :rules="[
      { required: true, message: '请输入登录密码', trigger: 'blur' }
    ]"
          >
            <el-input type="password" placeholder="请输入登录密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <div style="height: 30px;">
            <span
              :class="{'remeber': remeberStatus, 'check-remeber': true}"
              @click="remeberStatus = !remeberStatus"
            ></span>
            <span class="remeber-tip">记住密码</span>
            <span class="sign-tip" @click="goSign()">立即注册</span>
          </div>
          <el-form-item>
            <div class="login-btn" @click="login">登录</div>
            <!-- <el-button type="primary" @click="login">立即登录</el-button> -->
          </el-form-item>
        </el-form>
        <div class="version-tip">版本号V1.1</div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "@/axios/api.js";
import qs from "qs";
import crypto from 'crypto-js';
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      remeberStatus: false // 记住密码
    };
  },
  methods: {
    login() {
      if (!this.loginForm.username || !this.loginForm.password) {
        this.$message({
          message: "用户名密码不能为空",
          type: "warning"
        });
        return;
      }
      if (this.remeberStatus) {
        this.setCookie(this.loginForm.username, this.loginForm.password, 7);
      } else {
        this.clearCookie();
      }
      return;
      common.login(this.loginForm).then(res => {
        //存储用户信息
        if (res.data.code == "401") {
          return;
        }
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("nickname", res.data.nickname);
        localStorage.setItem("password", res.data.password);
        localStorage.setItem("headImgUrl", res.data.headImgUrl);
        localStorage.setItem("loginStatus", true);
        this.$message({
          message: "登录成功",
          type: "success"
        });
        if (this.remeberStatus) {
          this.setCookie(this.loginForm.username, this.loginForm.password, 7);
        } else {
          this.clearCookie();
        }

        this.$router.push("/systemSurvey"); // 首页跳转
      });
    },
    signin() {},
    goSign() {
      this.$router.push("/sign");
    },
    // 设置密码
    setCookie(username, password, days) {
      let text = crypto.AES.encrypt(password, "password");
      let saveDays = new Date();
      saveDays.setTime(saveDays.getTime() + 24 * 60 * 60 * 1000 * days);

      window.document.cookie =
        "username" +
        "=" +
        username +
        ";path=/;saveDays=" +
        saveDays.toGMTString();
      window.document.cookie =
        "password" + "=" + text + ";path=/;saveDays=" + saveDays.toGMTString();
    },
    getCookie() {
      if(document.cookie.length > 0){
        let arr = document.cookie.split('; ')
        arr.map((v, index) => {
          let arr2 = v.split('=')
          if(arr2 == 'username'){
            this.loginForm.username = arr2[1]
          }else{
            let bytes = crypto.AES.decrypt(arr2[1].toString(), 'password')
            let text = bytes.toString(crypto.enc.Utf8)
            this.loginForm.password = text
          }
        })
      }
    },
    clearCookie() {
      this.setCookie("", "", 0); //账号密码置空，天数置0
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  // height: 100%;
  background: url("../assets/images/login-bg.png");
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.header {
  // background: #cccccc;
  width: 100%;
  height: 200px;
  .img-logo {
    width: 40px;
    height: 40px;
  }
}
.header-top {
  display: flex;
  align-content: center;
}
.login-status {
  width: 30%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 20px;
}
.header-title {
  margin-left: 100px;
  font-size: 40px;
  font-weight: bold;
  height: 50px;
  width: 50%;
  display: inline-block;
  text-align: left;
}
.welcome-tip {
  color: #ccc;
}
.loginForm {
  // width: 50%;
  width: 400px;
  text-align: center;

  margin: auto;
  margin-top: 225px;
  width: 1057px;
  height: 711px;
  display: flex;
  // border: 1px solid #ccc;
  // background: rgba(216, 48, 29, 0.53);

  .right {
    background: rgba(246, 246, 246, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    // border-radius: 8px 0px 0px 0px;
  }
}
.login-btn {
  width: 350px;
  height: 50px;
  background: rgba(211, 52, 40, 1);
  line-height: 50px;
  font-size: 16px;
  font-family: "MicrosoftYaHei-Bold";
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.login-btn {
  cursor: pointer;
}
.version-tip {
  width: 71px;
  height: 13px;
  font-size: 14px;
  font-family: "STHeitiSC-Light";
  font-weight: 300;
  color: rgba(100, 81, 80, 1);
  line-height: 26px;
  opacity: 0.3;
  margin: auto;
  margin-top: 64px;
}
.check-remeber {
  // display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid #ccc;
  margin-right: 10px;
  float: left;
  margin-top: 4px;
}
.remeber {
  background: url("../assets/images/check-status.png");
  background-size: 100% 100%;
}
.remeber-tip {
  width: 61px;
  height: 14px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(100, 81, 80, 1);
  line-height: 26px;
  opacity: 0.5;
  float: left;
}
.sign-tip {
  width: 61px;
  height: 12px;
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(211, 52, 40, 1);
  line-height: 26px;
  float: right;
  cursor: pointer;
}
</style>
