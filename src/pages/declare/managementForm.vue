<template>
  <div class="form managementForm">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/Declare')">诚信自主申报</span> >
      <span @click="goRouter('/Declare/ManagementForm')">管理数据填报</span>
    </div>
    <div class="container">
      <div class="title">管理数据填报</div>
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
      <!-- 管理信息 -->
      <div class="form2 other-form">
        <div class="sub-title">
          <div class="tip-gap"></div>管理信息
        </div>
        <div class="content">
          <el-form
            :model="myForm"
            ref="myForm2"
            label-width="150px"
            class="demo-dynamic"
            style="text-align: center"
          >
            <el-form-item
              prop="form2.humanResource"
              label="人力资源管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                :action='apiUpload'
                name="headImg"
                :on-preview="handlePreview"
                :on-remove="handleRemove1"
                :file-list="myForm.form2.humanResource"
                :on-success="uploadSuccess1"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="form2.quality"
              label="生产质量管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                :action='apiUpload'
                name="headImg"
                auto-upload
                :on-preview="handlePreview"
                :on-remove="handleRemove2"
                :on-success="uploadSuccess2"
                :file-list="myForm.form2.quality"
                :on-change="change2"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="form2.supply"
              label="供应链管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                :action='apiUpload'
                name="headImg"
                :on-preview="handlePreview"
                :on-remove="handleRemove3"
                :file-list="myForm.form2.supply"
                :on-success="uploadSuccess3"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item
              prop="form2.brand"
              label="品牌建设管理"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                :action='apiUpload'
                name="headImg"
                :on-preview="handlePreview"
                :on-remove="handleRemove4"
                :file-list="myForm.form2.brand"
                :on-success="uploadSuccess4"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
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
  name: "ManagementForm",
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
        /* 管理信息 */
        form2: {
          humanResource:[], // 人力资源文档
          quality: [], // 生产质量管理
          supply: [], // 供应链
          brand: [] // 品牌建设
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
      // 基本信息
      this.myForm.form1.companyName = this.declareInfo.managementInfo.companyName;
      this.myForm.form1.lawPerson = this.declareInfo.managementInfo.legalPerson;
      this.myForm.form1.contactPerson = this.declareInfo.managementInfo.contacts;
      this.myForm.form1.contactPhone = this.declareInfo.managementInfo.contactInfo;
      this.myForm.form1.imageUrl = this.declareInfo.managementInfo.certificates;
      this.myForm.form1.socialCode = this.declareInfo.managementInfo.socialCreditCode;

      this.myForm.form2.humanResource = JSON.parse(this.declareInfo.managementInfo.hrFile);
      this.myForm.form2.quality = JSON.parse(this.declareInfo.managementInfo.productionQualityFile);
      this.myForm.form2.supply = JSON.parse(this.declareInfo.managementInfo.supplyChainFile);
      this.myForm.form2.brand = JSON.parse(this.declareInfo.managementInfo.brandBulidFile);
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
        socialCreditCode: this.myForm.form1.socialCode,
        brandBulidFile: JSON.stringify(this.myForm.form2.brand),
        hrFile: JSON.stringify(this.myForm.form2.humanResource),
        productionQualityFile: JSON.stringify(this.myForm.form2.quality),
        supplyChainFile: JSON.stringify(this.myForm.form2.supply)
      };
      if(this.declareInfo.managementInfo){
        params = Object.assign({}, params, {id: this.declareInfo.managementInfo.id})
      }
      if (params.id) {
        declare.updateManagementInfo(params).then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.goRouter("/Declare");
        });
      } else {
        declare.saveManagementInfo(params).then(res => {
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
    handlePreview(file){
    },
    /* 文件添加上传 */
    uploadSuccess1(res, file, fileList){
      this.myForm.form2.humanResource = fileList;
    },
    handleRemove1(file, fileList){
      this.myForm.form2.humanResource = fileList;
    },
    /* 文件添加上传 */
    uploadSuccess2(res, file, fileList){
      this.myForm.form2.quality = fileList;
    },
    handleRemove2(file, fileList){
      this.myForm.form2.quality = fileList;
    },
    /* 文件添加上传 */
    uploadSuccess3(res, file, fileList){
      this.myForm.form2.supply = fileList;
    },
    handleRemove3(file, fileList){
      this.myForm.form2.supply = fileList;
    },
    /* 文件添加上传 */
    uploadSuccess4(res, file, fileList){
      this.myForm.form2.brand = fileList;
    },
    handleRemove4(file, fileList){
      this.myForm.form2.brand = fileList;
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

