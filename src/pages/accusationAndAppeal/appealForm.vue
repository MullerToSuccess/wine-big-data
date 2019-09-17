<template>
  <div class="form form5">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/AccusationAndAppeal')">诚信申诉举报</span> >
      <span @click="goRouter('/AccusationAndAppeal/Appeal')">酒企申诉</span> >
      <span>申请申诉</span>
    </div>
    <div class="container">
      <div class="title">申诉申请</div>
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
                <img v-if="myForm.form1.imageUrl" :src="myForm.form1.imageUrl" class="avatar" />
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
          <div class="tip-gap"></div>申诉信息
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
              prop="form2.accusationType"
              label="申诉类型"
              :rules="[
      { required: true, message: '请输入申诉类型', trigger: 'blur' }
    ]"
            >
              <el-select v-model="myForm.form2.accusationType" placeholder="请选择">
                <el-option
                  v-for="item in optionTypes"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item
              prop="form2.accusationContent"
              label="申诉内容"
              :rules="[
      { required: true, message: '请输入申诉内容', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.accusationContent"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.accusationFiles"
              label="申诉材料"
              :rules="[
      { required: true, message: '', trigger: 'blur' }
    ]"
            >
              <el-upload
                class="upload-demo"
                ref="upload"
                :action="apiUpload"
                name="headImg"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="myForm.form2.accusationFiles"
                :auto-upload="false"
                :on-change="change"
              >
                <el-button slot="trigger" size="small" type="primary">上传文档</el-button>
              </el-upload>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="btn-group">
        <el-button type="info">取消</el-button>
        <el-button type="success" @click="submit()">提交</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import accusation from "./axios/index";
import constant from "../../utils/constant";
import { mapGetters } from "vuex";
export default {
  name: "appealForm",
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
        /* 申诉信息 */
        form2: {
          accusationType: 0, //申诉类型
          accusationContent: "", //申诉内容
          accusationFiles: [] // 申诉材料
        }
      },
      optionTypes: [
        {
          value: "类型1",
          label: "类型1"
        }
      ]
    };
  },
  mounted() {
    this._initForm();
  },
  computed: {
    ...mapGetters({
      apiUpload: "common/apiUpload"
    })
  },
  methods: {
    goRouter(path) {
      this.$router.push(path);
    },
    _initForm() {
      // 基本信息
      this.myForm.form1.companyName = this.$route.params.companyName;
      this.myForm.form1.lawPerson = this.$route.params.legalPerson;
      this.myForm.form1.contactPerson = this.$route.params.contacts;
      this.myForm.form1.contactPhone = this.$route.params.contactInfo;
      this.myForm.form1.imageUrl = this.$route.params.certificates;
      this.myForm.form1.socialCode = this.$route.params.socialCreditCode;

      this.myForm.form2.accusationType = this.$route.params.explainType;
      this.myForm.form2.accusationContent = this.$route.params.explainContent;
      this.myForm.form2.accusationFiles = this.$route.params.explainFile;
    },
    submit() {
      this.$refs['myForm1'].validate(valid => {
        if (!valid) {
          return false;
        }
      });
      let params = {
        id: this.$route.params.id ? this.$route.params.id : null,
        certificates: this.myForm.form1.imageUrl,
        companyName: this.myForm.form1.companyName,
        contactInfo: this.myForm.form1.contactPhone,
        contacts: this.myForm.form1.contactPerson,
        socialCreditCode: this.myForm.form1.socialCode,
        legalPerson: this.myForm.form1.lawPerson,

        explainType: this.myForm.form2.accusationType,
        explainContent: this.myForm.form2.accusationContent,
        // explainFile : this.myForm.form2.accusationFiles,
        explainFile: "this.myForm.form2.accusationFiles"
      };
      // if (params.id) {
      //   declare.updatePrizeInfo(params).then(res => {
      //     this.goRouter("/declare");
      //   });
      // } else {
      accusation.saveSincerityExplain(params).then(res => {
        this.$message({
          message: "提交成功",
          type: "success"
        });
        this.goRouter("/AccusationAndAppeal/Appeal");
      });
      // }
    },

    /* 头像上传 */
    handleAvatarSuccess(res, file) {
      this.myForm.form1.imageUrl = constant.ImgUrl + res.data;
    },
    /* 图片大小限制 */
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
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    change(file, fileList) {
      this.myForm.form2.accusationFiles = fileList;
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
    height: 1106px;
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

