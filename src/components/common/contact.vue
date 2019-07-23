<template>
  <div class="contact">
    <div class="routerTip">
      <span @click="goRouter('/industryInfo')">宜宾五粮液股份有限公司 / 关联图谱</span>
      <span @click="goback" style="color:rgba(230,32,32,1);margin-left: 20px;">返回</span>
    </div>
    <div class="tab-panel">
      <div :class="{tab: true, activeTab: activeTab == 1}" @click="changeTab(1)">
        <span>圈层分布</span>
      </div>
      <div :class="{tab: true, activeTab: activeTab == 2}" @click="changeTab(2)">
        <span>关键链路</span>
      </div>
      <div :class="{tab: true, activeTab: activeTab == 3}" @click="changeTab(3)">
        <span>地域分布</span>
      </div>
      <div :class="{tab: true, activeTab: activeTab == 4}" @click="changeTab(4)">
        <span>分析统计</span>
      </div>
    </div>
    <div class="content">
      <img src="../../assets/images/contact-1.png" alt v-show="activeTab == 1" />
      <img src="../../assets/images/contact-2.png" alt v-show="activeTab == 2" />
      <img src="../../assets/images/contact-3.png" alt v-show="activeTab == 3" />
      <img src="../../assets/images/contact-4.png" alt v-show="activeTab == 4" />
    </div>
  </div>
</template>
<script>
export default {
  name: "contact",
  data() {
    return {
      activeTab: 1
    };
  },
  methods: {
    changeTab(index) {
      this.activeTab = index;
    },
    goback() {
      this.$router.push({ name: "integrityDetail" });
    },
    goRouter(path){
      this.$router.push(path)
    }
  }
};
</script>
<style lang="scss" scoped>
.contact {
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
  .tab-panel {
    display: flex;
    width: 90%;
    margin: auto;
    padding-left: 350px;
    .tab {
      width: 160px;
      height: 45px;
      background: rgba(145, 143, 143, 0.1);
      line-height: 45px;
      span {
        font-size: 16px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
        //   color: rgba(0, 0, 0, 1);
      }
    }
    .tab:hover {
      cursor: pointer;
    }
  }
  .activeTab {
    background: rgba(227, 36, 42, 1) !important;
    // span {
    color: rgba(255, 255, 255, 1) !important;
    // }
  }
  .content {
      width: 1201px;
      height: 726px;
    margin: auto;
    margin-bottom: 20px;
    border: 1px solid rgba(229,229,229,1);
    img{
        // background-size: 100% 100%;
        width: 1201px;
        height: 726px;
    }
  }
}
</style>
