<template>
  <div class="sign">
    <div class="header">
      <div class="header-top">
        <div class="header-title" style="margin-left: 340px;">
          <img src="@/assets/images/logo.png" />
          <span class="welcome-tip" style="font-size:20px;">| 欢迎注册</span>
        </div>
        <div class="login-status">
          <span class="welcome-tip">已有账号？</span>
          <a @click="goLogin">请登录</a>
        </div>
      </div>
    </div>
    <div class="signForm" v-show="!status">
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
          <el-input style="width: 329px" v-model="signForm.name"></el-input>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="邮箱注册"
          :rules="[
      {required: true,  validator: util.checkEmail, trigger: 'blur'}
    ]"
        >
          <el-input style="width: 329px" v-model="signForm.phone"></el-input>
        </el-form-item>
        <!-- 邮箱验证 -->
        <el-form-item
          class="sendMessage"
          prop="identifyCode"
          label="验证码"
          :rules="[
      { required: true, message: '请输入验证码', trigger: 'blur' }
    ]"
        >
          <el-input style="width: 183px" v-model="signForm.identifyCode"></el-input>
          <el-button @click="getSmsCode" :loading="loadingMessage">获取验证码</el-button>
        </el-form-item>
        <el-form-item
          style="margin-bottom: 10px;"
          prop="password"
          label="密码"
          :rules="[
      { required: true, validator: util.checkPassword, trigger: 'blur'}
    ]"
        >
          <el-input type="password" style="width: 329px" v-model="signForm.password"></el-input>
        </el-form-item>
        <div class="password-tip">（6-16位字母或数字，区分大小写）</div>
        <el-form-item
          prop="surePassword"
          label="确认密码"
          :rules="[
      { required: true, validator: checkSurePassword, trigger: 'blur'}
    ]"
        >
          <el-input type="password" style="width: 329px" v-model="signForm.surePassword"></el-input>
        </el-form-item>
        <el-form-item
        style="text-align: left"
          prop="isCompanyUser"
          label="是否企业用户"
          :rules="[
      { required: true, trigger: 'blur'}
    ]"
        >
        <el-radio v-model="signForm.isCompanyUser" label="1">是</el-radio>
  <el-radio v-model="signForm.isCompanyUser" label="0">否</el-radio>
        </el-form-item>
        <el-form-item
        v-if="signForm.isCompanyUser === '1'"
          class="upload"
          prop="image"
          label="三位一体证件照"
          :rules="[
      { required: true, message: '请输入确认密码', trigger: 'blur' }
    ]"
        >
          <el-upload
            class="avatar-uploader"
            :action="apiUpload"
            name="headImg"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <!-- 头像 -->
            <img v-if="signForm.image" :src="signForm.image" class="avatar" />
            <div v-else>
              <div class="add-head-image">添加</div>
              <div class="add-tip">仅支持png / jpg / jpeg格式，图片大小不超过2M</div>
            </div>
          </el-upload>
        </el-form-item>
        <div style="margin-left:100px;margin-bottom:10px">
          <span
            :class="{'check-status': checkStatus}"
            @click="checkStatus = !checkStatus"
            style="display:inline-block;width:16px;height:16px;border:1px solid #ccc; margin-right:10px"
          ></span>
          <span class="read-tip1" style=";">我已阅读并同意</span>
          <span class="read-tip2">《企业用户注册协议》</span>
        </div>
        <el-form-item>
          <div class="sign-btn" @click="signIn">立即注册</div>
        </el-form-item>
      </el-form>
    </div>
    <div class="sign-after" v-show="status">
      <img style="margin-bottom:50px" src="@/assets/images/after-sign.png" alt />
      <div style="margin-left: 20px;">
        <div class="tip1">恭喜注册成功！</div>
        <div class="tip2">{{ countNum }}s后将自动关闭页面，若未关闭请点击下方按钮返回</div>
        <div class="btn" @click="goLogin">返回首页</div>
      </div>
    </div>
  </div>
</template>

<script>
import common from "../axios/api";
import constant from "../utils/constant";
import { setTimeout, setInterval } from "timers";
import { mapGetters } from "vuex";
export default {
  name: "Sign",
  data() {
    return {
      loadingMessage: false,
      status: false, // 注册状态
      checkStatus: false,
      countNum: 5, // 计数跳转登录
      signForm: {
        name: '',
        phone: '',
        email: '', 
        password: '',
        identifyCode: '',
        surePassword: '',
        image: '',
        isCompanyUser: '1', //是否是企业用户
      }
    };
  },
  watch: {
    checkStatus: function(newVal) {
      console.log(newVal);
    },
    countNum: function(newCount) {
      if (newCount < 1) {
        this.goLogin();
      }
    }
  },
  computed: {
    ...mapGetters({
      apiUpload: "common/apiUpload",
      currentEnv: "common/currentEnv"
    })
  },
  mounted() {},
  methods: {
    count() {
      setInterval(() => {
        this.countNum -= 1;
      }, 1000);
    },
    /* 确认密码校验 */
    checkSurePassword(rule, value, callback) {
      if (value === '') {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.signForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    },
    signIn() {
      let params = {
        headImgUrl: this.signForm.image,
        password: this.signForm.password,
        phone: this.signForm.phone,
        telephone: this.signForm.phone,
        username: this.signForm.name,
        isCompanyUser: this.signForm.isCompanyUser
      };
      if (!this.checkStatus) {
        this.$message.error("请先阅读同意用户注册协议！");
        return;
      }
      console.log(params)
      // common.sign(params).then(res => {
      //   this.status = true; // 注册成功
      //   this.count();
      // });
    },
    goLogin() {
      this.$router.push("/login");
    },
    /* 头像上传 */
    handleAvatarSuccess(res, file) {
      // this.signForm.image = URL.createObjectURL(file.raw);
      this.signForm.image = constant.ImgUrl + res.data;
    },
    /* 图片大小限制 */
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    /* 短信验证码 */
    getSmsCode() {
      common
        .getSmsCode({
          phone: this.signForm.phone
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style scoped lang="scss">
.sign {
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
  // width: 1904px;
  height: 141px;
  line-height: 141px;
  background: rgba(149, 149, 149, 0.1);
}
.login-status {
  width: 30%;
  // height: 50px;
  // line-height: 50px;
  text-align: right;
  padding-right: 360px;
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
  // color: #ccc;
  font-family: "MicrosoftYaHeiLight";
  font-weight: 300;
  color: rgba(22, 22, 22, 0.56);
}
.sign-btn {
  width: 329px;
  height: 40px;
  background: rgba(237, 49, 30, 1);
  border: 4px solid rgba(237, 49, 30, 1);
  border-radius: 4px;
  font-size: 14px;
  font-family: "MicrosoftYaHeiLight";
  font-weight: 300;
  color: rgba(255, 255, 255, 1);
}
.sign-btn:hover {
  cursor: pointer;
}
.sign-after {
  width: 500px;
  margin: 100px auto;
  display: flex;
  align-content: center;
  align-items: center;
  text-align: center;
  .tip1 {
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    color: rgba(39, 39, 39, 1);
  }
  .tip2 {
    font-size: 14px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    color: rgba(39, 39, 39, 0.5);
  }
  .btn {
    margin: 10px auto;
    width: 118px;
    height: 40px;
    background: rgba(237, 49, 30, 1);
    border: 4px solid rgba(237, 49, 30, 1);
    border-radius: 4px;
    line-height: 40px;
    // font-size: 14px;
    font-family: "MicrosoftYaHeiLight";
    font-weight: 300;
    color: rgba(255, 255, 255, 1);
  }
  .btn:hover {
    cursor: pointer;
  }
}
.check-status {
  background: url("../assets/images/check-status.png");
}
.sign {
  .avatar-uploader {
    width: 100%;
    height: 100%;

    img {
      width: 50%;
      height: 100%;
    }
  }
}
.add-head-image {
  width: 57px;
  margin: auto;
  margin-top: 50px;
  height: 27px;
  background: rgba(211, 52, 40, 0.3);
  border: 1px solid rgba(237, 49, 30, 1);
  border-radius: 14px;
  line-height: 27px;
  font-family: MicrosoftYaHeiLight;
  font-weight: 300;
  color: rgba(237, 49, 30, 1);
}
.add-tip {
  font-size: 12px;
  font-family: MicrosoftYaHeiLight;
  font-weight: 300;
  color: rgba(151, 151, 151, 1);
}
.password-tip {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  margin-bottom: 12px;
  margin-left: 10px;
  color: rgba(100, 81, 80, 0.5);
}
.read-tip1 {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(130, 130, 130, 1);
}
.read-tip2 {
  font-size: 14px;
  font-family: MicrosoftYaHei;
  font-weight: 400;
  color: rgba(28, 197, 60, 1);
}
</style>
