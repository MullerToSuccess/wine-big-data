<template>
  <div class="login">
    <div class="header">
      <div class="header-top">
        <span class="header-title">
          <img
            class="img-logo"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          酒业大数据平台 |
          <span class="welcome-tip">欢迎登录</span>
        </span>
        <div class="login-status">
          <span class="welcome-tip">还没有注册？</span>
          <a @click="goSign">立即注册</a>
        </div>
      </div>
    </div>

    <div class="loginForm">
      <el-form
        :model="loginForm"
        ref="loginForm"
        label-width="100px"
        class="demo-dynamic"
        style="text-align: center"
      >
        <el-form-item
          prop="phone"
          label="手机号"
          :rules="[
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ]"
        >
          <el-input v-model="loginForm.phone"></el-input>
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]"
        >
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import common from "@/axios/api.js";
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      common.login(this.loginForm).then(res => {
        console.log(5555555555, res);
        this.$router.push("/systemSurvey"); // 首页跳转
      });
    },
    signin() {},
    goSign() {
      this.$router.push("/sign");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  width: 100%;
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
}
</style>
