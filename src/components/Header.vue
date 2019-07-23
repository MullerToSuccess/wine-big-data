<template>
  <div class="header">
    <div class="header-top">
      <div class="header-title">
        <img class="img-logo" src="@/assets/images/logo.png" />
      </div>
      <div class="login-status">
        <a @click="goLogin">登录</a>
        <span style="color:#ccc">|</span>
        <a @click="goSign">注册</a>
      </div>
    </div>
    <div class="nav-table">
      <a
        :class="{'nav-item': true, activeNav: item.name == activeNav}"
        @click="goTo(item)"
        v-for="(item, index) in navs"
        :key="index"
      >{{ item.name }}</a>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeNav: "诚信体系概述",
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
  // computed: {
  //   swiper() {
  //     return this.$refs.mySwiper.swiper;
  //   }
  // },
  mounted() {
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 1000, false);
  },
  methods: {
    goTo(item) {
      this.$router.push(item.path);
      this.activeNav = item.name;
    },
    goLogin() {
      this.$router.push("/login");
    },
    goSign() {
      this.$router.push("/sign");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.header {
  width: 100%;
  // height: 500px;
}
.header-top {
  display: flex;
  align-content: center;
  width: 70%;
  margin: auto;
}
.header-title {
  text-align: left;
  width: 40%;
  height: 50px;
  line-height: 50px;
  font-size: 30px;
  font-family: "FZZHJW--GB1-0";
  font-weight: bold;
  color: rgba(230, 32, 32, 1);
  // img {
  //   width: 200px;
  //   height: 50px;
  // }
}
.login-status {
  width: 40%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  // padding-right: 200px;
  a {
    width: 29px;
    height: 12px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 22px;
  }
  a:hover {
    color: #ccc;
  }
}
.activeNav {
  color: rgba(230, 32, 32, 1) !important;
  font-weight: bold;
  text-decoration: underline;
  // transform: scale(1);
  // content: "";
  // position: absolute;
  // left: 0;
  // bottom: -10px;
  // height: 2px;
  // width: 100%;
  // background: rgba(230, 32, 32, 1);
}
.nav-table {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  height: 30px;
  line-height: 30px;
  margin-top: 20px;
  width: 70%;
  margin: 10px auto;
  .nav-item {
    width: 101px;
    height: 16px;
    margin-left: 10px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    line-height: 22px;
  }
  a {
    position: relative;
    text-decoration: none;
    font-size: 20px;
    color: #333;
  }
  a:hover {
    font-size: 16px;
    color: rgba(230, 32, 32, 1);
  }
  a::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 3px;
    width: 100%;
    background: rgba(230, 32, 32, 1);
    transform: scale(0);
    transition: all 0.3s;
    font-size: 16px;
  }
  a:hover::before {
    font-weight: bold;
    color: rgba(230, 32, 32, 1);
    text-decoration: underline;
    transform: scale(1);
  }
  // a:visited {
  //   content: "";
  //   position: absolute;
  //   left: 0;
  //   bottom: -10px;
  //   height: 2px;
  //   width: 100%;
  //   background: rgba(230, 32, 32, 1);
  // }
}
.header-swiper {
  img {
    width: 1920px;
    height: 640px;
  }
}
.line {
  width: 1920px;
  height: 1px;
  background: rgba(0, 0, 0, 1);
  opacity: 0.1;
}
</style>
