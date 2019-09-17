<template>
  <!-- 基本信息 -->
  <div class="content">
    <el-form
      :model="baseForm"
      ref="baseForm"
      label-width="100px"
      class="demo-dynamic"
      style="text-align: center"
    >
      <el-form-item
        prop="companyName"
        label="公司名称"
        :rules="[
      { required: true, message: '请输入公司名称', trigger: 'blur' }
    ]"
      >
        <el-input v-model="baseForm.companyName"></el-input>
      </el-form-item>
      <el-form-item
        prop="form1.lawPerson"
        label="法人代表"
        :rules="[
      { required: true, message: '请输入法人代表', trigger: 'blur' }
    ]"
      >
        <el-input v-model="baseForm.lawPerson"></el-input>
      </el-form-item>
      <el-form-item
        prop="form1.contactPerson"
        label="企业联系人"
        :rules="[
      { required: true, message: '请输入企业联系人', trigger: 'blur' }
    ]"
      >
        <el-input v-model="baseForm.contactPerson"></el-input>
      </el-form-item>
      <el-form-item
        prop="form1.contactPhone"
        label="联系方式"
        :rules="[
      { required: true, message: '请输入联系方式', trigger: 'blur' }
    ]"
      >
        <el-input v-model="baseForm.contactPhone"></el-input>
      </el-form-item>
      <el-form-item
        prop="form1.imageUrl"
        label="三位一体证件"
        :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
      >
        <!-- 上传头像 -->
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="baseForm.imageUrl" :src="baseForm.imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item
        prop="form1.socialCode"
        label="统一社会信用代码"
        :rules="[
      { required: true, message: '请输入统一社会信用代码', trigger: 'blur' }
    ]"
      >
        <el-input v-model="baseFormsocialCode"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: "baseForm", // 基本信息
  data() {
    return {
    };
  },
  props:{
    baseForm: Object
  },
  methods: {
    /* 头像上传 */
    handleAvatarSuccess(res, file) {
      this.$emit('changeImage', constant.ImgUrl + res.data)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
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

