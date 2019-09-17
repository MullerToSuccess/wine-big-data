<template>
  <!-- 诚信自主申报----资质填报 -->
  <div class="form">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/Declare')">诚信自主申报</span> >
      <span @click="goRouter('/Declare/QualificationForm')">资质填报</span>
    </div>
    <div class="container">
      <div class="title">资质填报</div>
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
                name="headImg"
                :action="apiUpload"
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
          <div class="tip-gap"></div>资质信息
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
              prop="form2.operateYear"
              label="经营年限"
              :rules="[
      { required: true, message: '请输入经营年限', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.operateYear"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.personStruct"
              label="人员构成"
              :rules="[
      { required: true, message: '请输入人员构成', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.personStruct"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.flowFiles"
              label="制作流程"
              :rules="[
      { required: true, message: '请输入制作流程', trigger: 'blur' }
    ]"
            >
              <!-- 上传文件-流程 -->
              <el-upload
                class="upload-demo"
                ref="upload"
                :action="apiUpload"
                name="headImg"
                :on-preview="handlePreview"
                :on-success="uploadSuccess"
                :on-remove="handleRemove"
                :file-list="myForm.form2.flowFiles"
              >
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
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
import declare from "@/pages/declare/axios/index";
import common from "@/axios/api";
import constant from "../../utils/constant";
import { constants } from "fs";
import { mapGetters} from "vuex";
export default {
  name: "form",
  data() {
    return {
      myForm: {
        /* 工商信息 */
        form1: {
          companyName: "",
          lawPerson: "",
          contactPerson: "",
          contactPhone: "",
          imageUrl: "",
          socialCode: ""
        },
        /* 资质信息 */
        form2: {
          operateYear: '1', //经营年限
          personStruct: "", //人员构成
          flowFiles: [] //制作流程文件
        }
      }
    };
  },
  mounted() {
    this._initForm();
  },
  computed: {
    ...mapGetters({
      declareInfo: "declare/declareInfo",
      apiUpload: "common/apiUpload",
      currentEnv: "common/currentEnv"
    })
  },
  methods: {
    _initForm() {
      this.myForm.form1.companyName = this.declareInfo.qualificationInfo.companyName;
      this.myForm.form1.lawPerson = this.declareInfo.qualificationInfo.legalPerson;
      this.myForm.form1.contactPerson = this.declareInfo.qualificationInfo.contacts;
      this.myForm.form1.contactPhone = this.declareInfo.qualificationInfo.contactInfo;
      this.myForm.form1.imageUrl = this.declareInfo.qualificationInfo.certificates;
      this.myForm.form1.socialCode = this.declareInfo.qualificationInfo.socialCreditCode;
      this.myForm.form2.operateYear = this.declareInfo.qualificationInfo.manageYears;
      this.myForm.form2.personStruct = this.declareInfo.qualificationInfo.staffStructure;
      this.myForm.form2.flowFiles = JSON.parse(
        this.declareInfo.qualificationInfo.processFile
      );
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
        legalPerson: this.myForm.form1.lawPerson,
        manageYears: this.myForm.form2.operateYear,
        processFile: JSON.stringify(this.myForm.form2.flowFiles), // 处理过程
        socialCreditCode: this.myForm.form1.socialCreditCode,
        staffStructure: this.myForm.form2.personStruct
      };
      if(this.declareInfo.qualificationInfo){
        params =  Object.assign({},params,{id: this.declareInfo.qualificationInfo.id})
      }
      console.log(2222222222, params)
      if (params.id) {
        //更新
        declare.updateQualificationInfo(params).then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.goRouter("/Declare");
        });
      } else {
        //新增
        declare.saveQualificationInfo(params).then(res => {
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
      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!');
      // }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isLt2M;
    },
    handleRemove(file, fileList) {
      this.myForm.form2.flowFiles = fileList;
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadSuccess(res, file, fileList) {
      this.myForm.form2.flowFiles = fileList;
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
  .btn-group {
    margin-bottom: 20px;
  }
}
</style>

