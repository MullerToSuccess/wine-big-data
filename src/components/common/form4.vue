<template>
  <div class="form form4">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/declare')">诚信自主申报</span> >
      <span @click="goRouter('/declare/form')">管理数据填报</span>
    </div>
    <div class="container">
      <div class="title">管理数据填报</div>
      <div class="form1">
        <div class="sub-title">
          <div class="tip-gap"></div>基本信息
        </div>
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
              label="公司名称"
              :rules="[
      { required: true, message: '请输入公司名称', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.phone"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="法人代表"
              :rules="[
      { required: true, message: '请输入法人代表', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="企业联系人"
              :rules="[
      { required: true, message: '请输入企业联系人', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="联系方式"
              :rules="[
      { required: true, message: '请输入联系方式', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item
              prop="password"
              label="三位一体证件"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="password"
              label="统一社会信用代码"
              :rules="[
      { required: true, message: '请输入统一社会信用代码', trigger: 'blur' }
    ]"
            >
              <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form2">
        <div class="sub-title">
          <div class="tip-gap"></div>管理信息
        </div>
        <div class="content">
          <el-form
            :model="loginForm"
            ref="loginForm"
            label-width="150px"
            class="demo-dynamic"
            style="text-align: center"
          >
            <el-form-item
              prop="password"
              label="人力资源管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="password"
              label="生产质量管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="password"
              label="供应链管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="password"
              label="品牌建设管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                :auto-upload="false"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
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
  name: "form4",
  data() {
    return {
      loginForm: {
        phone: "",
        password: ""
      },
      imageUrl: ""
    };
  },
  methods: {
    goRouter(path) {
      this.$router.push(path);
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

