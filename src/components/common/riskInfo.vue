<template>
  <div class="riskInfo">
    <div class="routerTip">
      <span @click="goRouter('/industryInfo')">宜宾五粮液股份有限公司 / 风险扫描</span>
      <span @click="goback" style="color:rgba(230,32,32,1);margin-left: 20px;">返回</span>
    </div>
    <div class="tab-panel">
      <div :class="{tab: true, activeTab: activeTab == 1}" @click="changeTab(1)">
        <span>风险指数</span>
      </div>
      <div :class="{tab: true, activeTab: activeTab == 2}" @click="changeTab(2)">
        <span>风险监控</span>
      </div>
    </div>
    <div class="content">
      <div v-show="activeTab == 1">
        <div class="title">
          <div class="tip-gap" style="margin-left:0;margin-top:30px"></div>风险指数
        </div>
        <div class="sub-title">基于工商风险，行政风险，司法风险，失信人风险，经营风险5个维度，根据算法模型得出风险指数（0到100），数值越大，表示风险越大。</div>
        <img src="../../assets/images/riskInfo-1.png" style="margin-top:40px;margin-bottom:40px" />
        <div class="title">
          <div class="tip-gap"></div>历史趋势
          <span class="sub-title2">近12个月</span>
        </div>
        <div class="sub-title"></div>
        <img src="../../assets/images/riskInfo-2.png" />
      </div>
      <div v-show="activeTab == 2">
        <div class="title">
          <div class="tip-gap" style="margin-left:0;margin-top:30px"></div>风险事件
        </div>
        <div class="sub-title"></div>
        <img style="margin-left: 10px" src="../../assets/images/riskInfo-3.png" />
        <div class="title">
          <div class="tip-gap"></div>风险明细
        </div>
        <div class="sub-title"></div>
        <img style="margin-left: 10px" src="../../assets/images/riskInfo-4.png" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "riskInfo",
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
    }
  }
};
</script>
<style lang="scss" scoped>
.riskInfo {
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
    width: 1201px;
    // margin: 30px auto;
    // padding: 0 20%;
    margin-left: 350px;
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
      margin:auto;
      margin-bottom: 20px;
    border: 1px solid rgba(229, 229, 229, 1);
    .title {
      width: 100%;
      margin: 10px auto;
      margin-left: 20px;
      text-align: left;
    }
    .sub-title {
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(54, 54, 54, 0.8);
    }
    .sub-title2 {
      font-size: 14px;
      font-family: "MicrosoftYaHei";
      font-weight: 400;
      color: rgba(22, 22, 22, 1);
      opacity: 0.5;
    }
  }
}
</style>

