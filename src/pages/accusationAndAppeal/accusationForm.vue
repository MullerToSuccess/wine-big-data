<template>
  <div class="form accusationForm">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/AccusationAndAppeal')">诚信自主申报</span> >
      <span @click="goRouter('/AccusationAndAppeal/Accusation')">消费者举报</span>
    </div>
    <div class="container">
      <div class="title">消费者举报</div>
      <div class="form1">
        <div class="sub-title" style="margin-top:31px;margin-bottom: 50px;">
          <div class="tip-gap"></div>基本信息
        </div>
        <div class="content">
          <el-form
            :model="myForm"
            ref="myForm1"
            label-width="100px"
            class="demo-dynamic"
            style="text-align: center;display: flex;flex-wrap: wrap;"
          >
            <el-form-item
              prop="form1.name"
              label="真实姓名"
              :rules="[
      { required: true, message: '请输入真实姓名', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.name"></el-input>
            </el-form-item>
            <el-form-item
              prop="form1.phone"
              label="手机号"
              :rules="[
      { required: true, message: '请输入手机号', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.phone"></el-input>
            </el-form-item>
            <el-form-item
              prop="form1.email"
              label="电子邮箱"
              :rules="[
      { required: true, message: '请输入电子邮箱', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form1.email"></el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="form2">
        <div class="sub-title" style="margin-top:86px">
          <div class="tip-gap"></div>举报内容
        </div>
        <div class="content">
          <el-form
            :model="myForm"
            ref="myForm2"
            label-width="100px"
            class="demo-dynamic"
            style="text-align: center;display: flex;flex-wrap: wrap;"
          >
            <el-form-item
              prop="form2.accusationCompany"
              label="举报对象"
              :rules="[
      { required: true, message: '请输入举报对象', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.accusationCompany"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.accusationQuestion"
              label="举报问题"
              :rules="[
      { required: true, message: '请输入举报问题', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.accusationQuestion"></el-input>
            </el-form-item>
            <el-form-item
              prop="form2.accusationDemand"
              label="举报要求"
              :rules="[
      { required: true, message: '请输入举报要求', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.accusationDemand"></el-input>
            </el-form-item>
            <el-form-item
              style="width: 84%"
              prop="form2.accusationContent"
              label="举报详情"
              :rules="[
      { required: true, message: '请输入举报详情', trigger: 'blur' }
    ]"
            >
              <el-input :rows="8" type="textarea" v-model="myForm.form2.accusationContent"></el-input>
            </el-form-item>
            <!-- <el-form-item
              prop="form2.accusationCompany"
              label="验证码"
              :rules="[
      { required: true, message: '请输入举报对象', trigger: 'blur' }
    ]"
            >
              <el-input v-model="myForm.form2.accusationCompany"></el-input>
            </el-form-item>-->
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
export default {
  name: "AccusationForm",
  data() {
    return {
      myForm: {
        /* 基本信息 */
        form1: {
          name: "",
          phone: "",
          email: ""
        },
        /* 举报内容 */
        form2: {
          accusationCompany: "", // 举报对象
          accusationQuestion: "", // 举报问题
          accusationDemand: "", // 举报要求
          accusationContent: "" // 举报详情
        }
      },
      loginForm: {
        phone: "",
        password: ""
      },
      imageUrl: "",
      value: ""
    };
  },
  mounted() {
    this._initForm();
  },
  methods: {
    goRouter(path) {
      this.$router.push(path);
    },
    _initForm() {
      console.log(this.$route.params);
      this.myForm.form1.email = this.$route.params.email;
      this.myForm.form1.phone = this.$route.params.phone;
      this.myForm.form1.name = this.$route.params.realName;
      this.myForm.form2.accusationCompany = this.$route.params.reportTarget;
      this.myForm.form2.accusationQuestion = this.$route.params.reportContent;
      this.myForm.form2.accusationDemand = this.$route.params.reportRequest;
      this.myForm.form2.accusationContent = this.$route.params.reportDetail;
    },
    /* 提交 */
    submit() {
      console.log(666666666)
      this.$refs['myForm1'].validate(valid => {
        if (!valid) {
          return false;
        }
      });
      let params = {
        email: this.myForm.form1.email,
        phone: this.myForm.form1.phone,
        realName: this.myForm.form1.name,
        reportContent: this.myForm.form2.accusationQuestion, // 举报问题
        reportDetail: this.myForm.form2.accusationContent, // 举报详情
        reportRequest: this.myForm.form2.accusationDemand, // 举报要求
        reportTarget: this.myForm.form2.accusationCompany // 举报对象
      };
      accusation.saveSincerityReport(params).then(res => {
        this.$message({
          message: "提交成功",
          type: "success"
        });
        this.goRouter("/AccusationAndAppeal/Accusation");
      });
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
      margin-left: 30px;
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

