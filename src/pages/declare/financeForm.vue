<template>
  <div class="form form3">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/Declare')">诚信自主申报</span> >
      <span @click="goRouter('/Declare/FinanceForm')">财务数据填报</span>
    </div>
    <div class="container">
      <div class="title">财务数据填报</div>
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
                :action="apiUpload"
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
          <div class="tip-gap"></div>财务信息
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
              prop="form2.year"
              label="年度"
              :rules="[
      { required: true, message: '请输入年度', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.year"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.mainBussiness"
              label="主营业务"
              :rules="[
      { required: true, message: '请输入主营业务', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.mainBussiness"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.profitData"
              label="盈利数据"
              :rules="[
      { required: true, message: '请输入盈利数据', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.profitData"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.isDebit"
              label="是否有债务"
              :rules="[
      { required: true, message: '请输入是否有债务', trigger: 'blur' }
    ]"
            >
              <el-radio-group v-model="myForm.form2.isDebit">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item
              prop="form2.debitDetail"
              label="债务明细"
              :rules="[
      { required: true, message: '请输入债务明细', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.debitDetail"></el-input>
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
import constant from "@/utils/constant";
import declare from "@/pages/declare/axios/index";
import { mapGetters } from "vuex";
export default {
  name: "FinanceForm", // 财务数据表单
  data() {
    return {
      loginForm: {
        phone: "",
        password: "",
        isHave: false
      },
      imageUrl: "",
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
        /* 财务信息 */
        form2: {
          year: 0, // 年度
          mainBussiness: "", //主营业务
          profitData: "", //盈利数据
          isDebit: false, // 是否有债务
          debitDetail: ""
        }
      }
    };
  },
  computed: {
    ...mapGetters({
      declareInfo: "declare/declareInfo",
      apiUpload: "common/apiUpload",
      currentEnv: "common/currentEnv"
    })
  },
  mounted() {
    this._initForm();
  },
  methods: {
    _initForm() {
      // 基本信息
      this.myForm.form1.companyName = this.declareInfo.financeInfo.companyName;
      this.myForm.form1.lawPerson = this.declareInfo.financeInfo.legalPerson;
      this.myForm.form1.contactPerson = this.declareInfo.financeInfo.contacts;
      this.myForm.form1.contactPhone = this.declareInfo.financeInfo.contactInfo;
      this.myForm.form1.imageUrl = this.declareInfo.financeInfo.certificates;
      this.myForm.form1.socialCode = this.declareInfo.financeInfo.socialCreditCode;

      this.myForm.form2.year = this.declareInfo.financeInfo.financeYear;
      this.myForm.form2.mainBussiness = this.declareInfo.financeInfo.mainBusiness;
      this.myForm.form2.profitData = this.declareInfo.financeInfo.earnings;
      this.myForm.form2.isDebit = this.declareInfo.financeInfo.debtFlg;
      this.myForm.form2.debitDetail = this.declareInfo.financeInfo.debtDetail;
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
        debtDetail: this.myForm.form2.debitDetail,
        debtFlg: this.myForm.form2.isDebit,
        earnings: this.myForm.form2.profitData,
        financeYear: this.myForm.form2.year,
        legalPerson: this.myForm.form1.lawPerson,
        mainBusiness: this.myForm.form2.mainBussiness,
        socialCreditCode: this.myForm.form1.socialCode
      };
      if(this.declareInfo.financeInfo){
        params = Object.assign({}, params, {id: this.declareInfo.financeInfo.id})
      }
      if (params.id) {
        declare.updateFinanceInfo(params).then(res => {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.goRouter("/Declare");
        });
      } else {
        declare.saveFinanceInfo(params).then(res => {
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
    /* 图片大小限制 */
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
    // height: 1286px;
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
      //   height: 422px;

      .left {
        width: 100%;
      }
    }
  }
}
</style>

