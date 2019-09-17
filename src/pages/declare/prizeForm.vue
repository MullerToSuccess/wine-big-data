<template>
  <div class="form">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/Declare')">诚信自主申报</span> >
      <span @click="goRouter('/Declare/PrizeForm')">奖励填报</span>
    </div>
    <div class="container">
      <div class="title">奖励填报</div>
      <div class="form1">
        <div class="sub-title">
          <div class="tip-gap"></div>工商信息
        </div>
        <div class="content">
          <el-form
            :model="myForm"
            ref="myForm1"
            label-width="100px"
            class="demo-dynamic"
            style="text-align: center"
          >
            <el-form-item
              prop="form1.companyName"
              label="公司名称"
              :rules="[
      { required: true, message: '请输入公司名称', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.companyName"></el-input>
            </el-form-item>
            <el-form-item
              prop="form1.lawPerson"
              label="法人代表"
              :rules="[
      { required: true, message: '请输入法人代表', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.lawPerson"></el-input>
            </el-form-item>
            <el-form-item
              prop="form1.contactPerson"
              label="企业联系人"
              :rules="[
      { required: true, message: '请输入企业联系人', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.contactPerson"></el-input>
            </el-form-item>
            <el-form-item
              prop="form1.contactPhone"
              label="联系方式"
              :rules="[
      { required: true, message: '请输入联系方式', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.contactPhone"></el-input>
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
                :action='apiUpload'
                name="headImg"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
              >
                <img v-if="myForm.form1.imageUrl" :src="currentEnv + myForm.form1.imageUrl" class="avatar" />
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
              <el-input v-model="myForm.form1.socialCode"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form2 other-form">
        <div class="sub-title">
          <div class="tip-gap"></div>奖励信息
        </div>
        <div class="content">
          <el-form
            :model="myForm"
            ref="myForm2"
            label-width="100px"
            class="demo-dynamic"
            style="text-align: center"
          >
            <el-form-item
              prop="form2.partContent"
              label="参与活动"
              :rules="[
      { required: true, message: '请输入参与活动', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.partContent"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.time"
              label="得奖时间"
              :rules="[
      { required: true, message: '请输入得奖时间', trigger: 'blur' }
    ]"
            >
              <el-date-picker v-model="myForm.form2.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
            </el-form-item>
            <el-form-item
              prop="form2.prizeContent"
              label="奖励内容"
              :rules="[
      { required: true, message: '请输入奖励内容', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.prizeContent"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.certificates"
              label="荣誉证书"
              :rules="[
      { required: true, message: '请输入荣誉证书', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                :action='apiUpload'
                name="headImg"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="myForm.form2.certificates"
                :on-success="uploadSuccess"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="info" @click="goRouter('/Declare')">取消</el-button>
        <el-button type="success" @click="submit()">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import constant from "../../utils/constant";
import declare from "@/pages/declare/axios/index";
import { mapGetters } from "vuex";
export default {
  name: "PrizeForm",
  data() {
    return {
      loginForm: {
        phone: "",
        password: ""
      },
      myForm: {
        /* 基本信息 */
        form1: {
          companyName: "",
          lawPerson: "",
          contactPerson: "",
          contactPhone: "",
          imageUrl: "",
          socialCode: ""
        },
        /* 奖励信息 */
        form2: {
          partContent: "",
          time: "",
          prizeContent: "",
          certificates: [] // 获奖证书
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      declareInfo: "declare/declareInfo",
      apiUpload: 'common/apiUpload',
      currentEnv: "common/currentEnv"
    })
  },
  mounted() {
    this._initForm();
  },
  methods: {
    _initForm() {
      this.myForm.form1.companyName = this.declareInfo.prizeInfo.companyName;
      this.myForm.form1.lawPerson = this.declareInfo.prizeInfo.legalPerson;
      this.myForm.form1.contactPerson = this.declareInfo.prizeInfo.contacts;
      this.myForm.form1.contactPhone = this.declareInfo.prizeInfo.contactInfo;
      this.myForm.form1.imageUrl = this.declareInfo.prizeInfo.certificates;
      this.myForm.form1.socialCode = this.declareInfo.prizeInfo.socialCreditCode;

      this.myForm.form2.partContent = this.declareInfo.prizeInfo.prizeItem;
      this.myForm.form2.time = this.declareInfo.prizeInfo.prizeDate;
      this.myForm.form2.prizeContent = this.declareInfo.prizeInfo.prizeContent;
      this.myForm.form2.certificates = JSON.parse(this.declareInfo.prizeInfo.honorFile);
    },
    goRouter(path) {
      this.$router.push(path);
    },
    /* 提交表格 */
    submit() {
      let params = {
        certificates: this.myForm.form1.imageUrl,
        companyName: this.myForm.form1.companyName,
        contactInfo: this.myForm.form1.contactPhone,
        contacts: this.myForm.form1.contactPerson,
        honorFile: JSON.stringify(this.myForm.form2.certificates), // 获奖证书
        legalPerson: this.myForm.form1.lawPerson,
        prizeContent: this.myForm.form2.partContent,
        prizeDate: this.myForm.form2.time,
        prizeItem: this.myForm.form2.prizeContent,
        socialCreditCode: this.myForm.form1.socialCode
      };
      if(this.declareInfo.prizeInfo){
        params = Object.assign({}, params, {id: this.declareInfo.prizeInfo.id})
      }
      if (params.id) {
        declare.updatePrizeInfo(params).then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.goRouter("/Declare");
        });
      } else {
        declare.savePrizeInfo(params).then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.goRouter("/Declare");
        });
      }
    },
    /* 头像上传 */
    handleAvatarSuccess(res, file) {
      this.myForm.form1.imageUrl = res.data;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadSuccess(res, file, fileList){
      console.log('list', fileList)
      this.myForm.form2.certificates = fileList
    },
    handleRemove(file, fileList){
      this.myForm.form2.certificates = fileList
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
      // height: 422px;

      .left {
        width: 100%;
      }
    }
  }
}
</style>

