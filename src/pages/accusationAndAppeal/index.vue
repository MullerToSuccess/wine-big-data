<template>
  <div id="accusation">
    <div class="banner"></div>
    <div class="content">
      <div class="accusation-content" @click="goAccusation">
        <div class="image-content content1"></div>
        <span class="title">消费者举报</span>
      </div>
      <div class="accusation-content" @click="goAppeal">
        <div class="image-content content2"></div>
        <span class="title">酒企申诉</span>
      </div>
    </div>
    <el-dialog
      class="m-dialog"
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <span v-if="userType === '1'">该用户不是酒企用户，无访问权限！</span>
      <span v-if="userType === '2'">此功能需要登录后操作！</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="goLogin">去登陆</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "AccusationAndAppeal",
  data() {
    return {
      dialogVisible: false,
      userType: localStorage.getItem("userType"), // 0: 酒企用户 1： 普通用户 2： 游客
    };
  },
  methods: {
    goAccusation() {
      // let userType = localStorage.getItem("userType");
      if (this.userType == 0) {
        // this.dialogVisible = true;
        // return false;
      } else if (this.userType == 1) {
        this.dialogVisible = false;
      } else {
        this.dialogVisible = true;
        return false;
      }
      this.$router.push({ name: "Accusation" });
    },
    goAppeal() {
      // 判断用户类型
      if (this.userType == 0) {
        // this.dialogVisible = true;
        // return false;
      } else if (this.userType == 1) {
        this.dialogVisible = true;
        return false;
      } else {
        this.dialogVisible = true;
        return false;
      }
      this.$router.push({ name: "Appeal" });
    },
    handleClose() {
      this.dialogVisible = false;
    },
    goLogin() {
      this.dialogVisible = false;
      this.$router.push("/login");
    }
  }
};
</script>
<style lang='scss' scoped>
#accusation {
  // overflow-y: hidden;
  .banner {
    width: 100%;
    height: 400px;
    background: url("../../assets/images/accusation-bg.png");
  }
  .content {
    width: 1200px;
    margin: 40px auto;
    // height: 500px;
    display: flex;
    align-content: center;
    align-items: center;
    .accusation-content {
      width: 578px;
      height: 346px;
      border: 1px solid #ccc;
      margin: 10px auto;
      .image-content {
        height: 287px;
        background-size: 100% 100%;
      }
      .content1 {
        background: url("../../assets/images/accusation-1.png");
      }
      .content2 {
        background: url("../../assets/images/accusation-2.png");
      }
      .title {
        height: 40px;
        line-height: 60px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(22, 22, 22, 1);
      }
    }
    .accusation-content:hover {
      cursor: pointer;
    }
  }
}
</style>
