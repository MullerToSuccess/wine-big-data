<template>
  <div class="header">
    <div class="header-top">
      <span class="header-title">
        <img class="img-logo" src="@/assets/wine-logo.png" />
      </span>
      <div class="nav-table">
        <a
          @click="goTo(item.path)"
          class="nav-item"
          v-for="(item, index) in navs"
          :key="index"
        >{{ item.name }}</a>
      </div>
      <div class="login-status">
        <a @click="goLogin">企业登录</a>
        <span>|</span>
        <a @click="goSign">企业注册</a>
      </div>
    </div>

    <swiper class="header-swiper" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <!-- slides -->
      <swiper-slide>
        <img src="../assets/wine-top.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/wine-top.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/wine-top.png" alt />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/wine-top.png" alt />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
      },
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
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    this.swiper.slideTo(0, 1000, false);
  },
  methods: {
    goTo(path) {
      this.$router.push(path);
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
  height: 500px;
}
.header-top {
  display: flex;
  align-content: center;
  width: 100%;
  margin: auto;
}
.header-title {
  font-size: 40px;
  font-weight: bold;
  height: 50px;
  width: 15%;
  display: inline-block;
  text-align: left;
  img {
    width: 200px;
    height: 50px;
  }
}
.login-status {
  width: 15%;
  height: 50px;
  line-height: 50px;
  text-align: right;
  padding-right: 20px;
  a:hover {
    color: #ccc;
  }
}
.nav-table {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
  height: 30px;
  line-height: 30px;
  .nav-item {
    // width: 10%;
    margin-left: 10px;
    font-size: 12px;
    width: 80px;
    height: 40px;
    line-height: 40px;
    // background: #c8c8c8;
  }
  a:hover {
    color: red;
  }
}
.header-swiper{
  img{
    width: 100%
  }
}
</style>
