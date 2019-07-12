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
          <span class="welcome-tip">欢迎注册</span>
        </span>
        <div class="login-status">
          <span class="welcome-tip">已有账号？</span>
          <a @click="goLogin">请登录</a>
        </div>
      </div>
    </div>
    <div class="signForm">
      <el-form
        :model="signForm"
        ref="signForm"
        label-width="100px"
        class="demo-dynamic"
        style="text-align: center"
      >
        <el-form-item
          prop="name"
          label="真实姓名"
          :rules="[
      { required: true, message: '请输入真实姓名', trigger: 'blur' }
    ]"
        >
          <el-input v-model="signForm.phone"></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="手机号"
          :rules="[
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ]"
        >
          <el-input v-model="signForm.identifyCode"></el-input>
        </el-form-item>
        <el-form-item
          class="sendMessage"
          prop="identifyCode"
          label="验证码"
          :rules="[
      { required: true, message: '请输入验证码', trigger: 'blur' }
    ]"
        >
          <el-input style="width: 183px" v-model="signForm.phone"></el-input>
          <el-button @click="loadingMessage = false" :loading="loadingMessage">发送验证码</el-button>
        </el-form-item>
        <el-form-item
          prop="password"
          label="密码"
          :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' }
    ]"
        >
          <el-input v-model="signForm.password"></el-input>
        </el-form-item>
        <el-form-item
          prop="surePassword"
          label="确认密码"
          :rules="[
      { required: true, message: '请输入确认密码', trigger: 'blur' }
    ]"
        >
          <el-input v-model="signForm.surePassword"></el-input>
        </el-form-item>
        <el-form-item
          prop="image"
          label="三位一体证件照"
          :rules="[
      { required: true, message: '请输入确认密码', trigger: 'blur' }
    ]"
        >
          <el-input v-model="signForm.image"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">立即注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sign",
  data() {
    return {
      loadingMessage: false,
      signForm: {
        name: "",
        phone: "",
        password: "",
        identifyCode: "",
        surePassword: "",
        image: ""
      }
    };
  },
  methods: {
    login() {},
    signIn() {},
    goLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 100%;
}
.signForm {
  //   width: 50%;
  width: 400px;
  text-align: center;
  margin: auto;
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
</style>
