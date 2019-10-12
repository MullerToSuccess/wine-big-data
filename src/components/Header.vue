<template>
  <div class="header" @click="hoverStatus = false">
    <div class="header-top">
      <div class="header-title">
        <img class="img-logo" src="@/assets/images/logo.png" @click="goHome" />
      </div>
      <div class="login-status" v-if="!loginStatus">
        <a @click="goLogin">登录</a>
        <span style="color:#ccc">|</span>
        <a @click="goSign">注册</a>
      </div>
      <div class="login-status" v-else>
        <a>{{userName}}</a>
        <a @click.stop="processHover">
          <img class="head-image" :src="headImgUrl" :onerror="userType == 0 ? defaultImg1 : userType == 1 ? defaultImg2 : defaultImg3" />
        </a>
      </div>
      <div class="modal">
        <div :class="{'click-hover': true, 'visible': hoverStatus}">
          <span v-show="userType == 0 || userType == 1" @click="changePassword">修改密码</span>
          <span v-show="userType == 0 || userType == 1" @click="logout">退出登录</span>
          <span v-show="userType == 2" @click="goLogin">去登录</span>
          <span v-show="userType == 2" @click="goSign">去注册</span>
        </div>
      </div>
    </div>
    <div class="nav-table">
      <a
        :class="{'nav-item': true, activeNav: item.name == currentNav}"
        @click="goTo(item)"
        v-for="(item, index) in navs"
        :key="index"
      >{{ item.name }}</a>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      userType: localStorage.getItem('userType'),
      defaultImg1: 'this.src="' + require("@/assets/images/default-user1.png") +'";this.onerror=null',
      defaultImg2: 'this.src="' + require("@/assets/images/default-user2.png") +'";this.onerror=null',
      defaultImg3: 'this.src="' + require("@/assets/images/default-user3.png") +'";this.onerror=null',
      hoverStatus: false, // 隐藏操作栏
      loginStatus: localStorage.getItem("loginStatus"), // 登录状态
      headImgUrl: localStorage.getItem("headImgUrl"), // 用户头像
      userName: localStorage.getItem("username"), // 用户名
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
          name: "监管监督公示",
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
          path: "/AccusationAndAppeal"
        },
        {
          name: "诚信舆情热点",
          path: "/hotSpot"
        },
        {
          name: "诚信知识科普",
          path: "/Science"
        },
        {
          name: "平台服务支持",
          path: "/support"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      currentNav: "common/currentNav"
    })
  },
  mounted() {
    // console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(0, 1000, false);
  },
  methods: {
    ...mapMutations({
      setCurrentNav: "common/setCurrentNav"
    }),
    goTo(item) {
      this.$router.push(item.path);
      this.activeNav = item.name;
      this.setCurrentNav(item.name); // 设置路由
    },
    goLogin() {
      this.$router.push("/login");
    },
    goSign() {
      this.$router.push("/sign");
    },
    goHome() {
      this.$router.push("/systemSurvey");
    },
    logout() {
      //登出接口
      // 清缓存
      localStorage.setItem("userType", 2);
      localStorage.setItem("token", '');
      localStorage.setItem("username", '游客');
      localStorage.setItem("nickname", '游客');
      localStorage.setItem("password", '');
      localStorage.setItem("headImgUrl", '');
      localStorage.setItem("loginStatus", false);
      this.$router.push("/login");
    },
    processHover() {
      this.hoverStatus = !this.hoverStatus;
    },
    changePassword() {}
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
  // width: 70%;
  // margin: auto;
  width: 1200px;
  margin: 10px auto;
}
.header-title {
  text-align: left;
  width: 50%;
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
.head-image {
  width: 25px;
  height: 25px;
}
.login-status {
  width: 500px;
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
  // width: 70%;
  // margin: 10px auto;
  width: 1200px;
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
.click-hover {
  z-index: 1000;
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  top: 61px;
  right: 447px;
  font-size: 14px;
  background: url("../assets/images/hover-bg.png");
  background-size: 100% 100%;
  width: 70px;
  height: 74px;
  span {
    display: block;
    cursor: pointer;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    margin-top: 5px;
  }
  span:hover {
    color: #e62020;
  }
}
.visible {
  display: block;
}
</style>
