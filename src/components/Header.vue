<template>
  <div class="header">
    <div class="header-top">
      <span class="header-title">
        <img
          class="img-logo"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        酒业大数据平台
      </span>
      <div class="login-status">
        <span>企业登录</span>

        <span>企业注册</span>
      </div>
    </div>
    <div class="nav-table">
      <div
        @click="goTo(item.path)"
        class="nav-item"
        v-for="(item, index) in navs"
        :key="index"
      >{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      navs: [
        {
          name: "诚信体系概述",
          path: "/systemSurvey"
        },
        {
          name: "诚信发展指数",
          path: "/developExponent"
        },
        {
          name: "监管监督公式",
          path: "/supervision"
        },
        {
          name: "诚信示范榜单",
          path: "/example"
        },
        {
          name: "酒企诚信查询",
          path: "/search"
        },
        {
          name: "诚信自主申报",
          path: "/declare"
        },
        {
          name: "诚信申述举报",
          path: "/accusation"
        },
        {
          name: "诚信舆情热点",
          path: "/hotSpot"
        },
        {
          name: "诚信知识科普",
          path: "/science"
        },
        {
          name: "平台服务支持",
          path: "/support"
        }
      ]
    };
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header {
  // background: #cccccc;
  width: 100%;
  height: 200px;
  .img-logo {
    width: 40px;
    height: 40px;
  }
}
.header-top {
  display: flex;
  align-content: center;
}
.header-title {
  font-size: 20px;
  font-weight: bold;
  height: 50px;
  width: 50%;
  display: inline-block;
  text-align: left;
}
.login-status {
  width: 50%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 20px;
}
.nav-table {
  background: #cccccc;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  height: 100px;
  .nav-item {
    width: 20%;
    height: 40px;
    line-height: 40px;
    background: #c8c8c8;
  }
}
</style>
