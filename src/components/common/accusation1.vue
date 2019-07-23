<template>
  <div class="form accusation1">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/accusation')">诚信自主申报</span> >
      <span @click="goRouter('/accusation/accusation1')">消费者举报</span>
    </div>
    <div class="container">
      <div class="title">消费者举报</div>
      <div class="form1">
        <div class="sub-title"><div class="tip-gap"></div>基本信息</div>
        <div class="content">
          <el-form
            :model="loginForm"
            ref="loginForm"
            label-width="100px"
            class="demo-dynamic"
            style="text-align: center"
          >
            <el-form-item
              prop="phone"
              label="真实姓名"
              :rules="[
      { required: true, message: '请输入真实姓名', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.phone"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="手机号"
              :rules="[
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="电子邮箱"
              :rules="[
      { required: true, message: '请输入电子邮箱', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form2">
        <div class="sub-title"><div class="tip-gap"></div>举报内容</div>
        <div class="content">
          <el-form
            :model="loginForm"
            ref="loginForm"
            label-width="100px"
            class="demo-dynamic"
            style="text-align: center"
          >
            <el-form-item
              prop="phone"
              label="举报对象"
              :rules="[
      { required: true, message: '请输入举报对象', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.phone"></el-input>
            </el-form-item>
            <el-form-item
              prop="phone"
              label="举报问题"
              :rules="[
      { required: true, message: '请输入举报问题', trigger: 'blur' }
    ]"
            >
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              prop="phone"
              label="举报要求"
              :rules="[
      { required: true, message: '请输入举报要求', trigger: 'blur' }
    ]"
            >
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              prop="password"
              label="举报详情"
              :rules="[
      { required: true, message: '请输入举报详情', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="loginForm.password"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="info">取消</el-button>
        <el-button type="success">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "accusation1",
  data() {
    return {
      loginForm: {
        phone: "",
        password: ""
      },
      imageUrl: "",
      options: [
        {
          value: "选项1",
          label: "问题1"
        },
      ],
      value: ""
    };
  },
  methods:{
      goRouter(path){
      this.$router.push(path)
    }
  }
};
</script>
<style lang="scss" scoped>
.form {
  .routerTip {
    height: 50px;
    width: 1200px;
    text-align: left;
    margin: auto;
    line-height: 50px;
    span {
      height: 14px;
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(0, 0, 0, 1);
      line-height: 48px;
    }
    span:hover {
      cursor: pointer;
    }
  }
  .container {
    width: 1201px;
    height: 1286px;
    margin: 10px auto;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    .title {
      height: 60px;
      background: rgba(246, 246, 246, 1);
      line-height: 60px;
      font-size: 20px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(22, 22, 22, 1);
    }
    .sub-title {
      width: 900px;
      margin: 20px auto;
      text-align: left;
    }
    .content {
      height: 422px;

      .left {
        width: 100%;
      }
    }
  }
}
</style>

