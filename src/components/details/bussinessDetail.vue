<template>
  <div class="bussinessDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/SystemSurvey')">首页</span> >
      <span @click="goRouter('/dynamics')">建设动态</span> >
      <span @click="goRouter('/')">部委诚信新闻</span>
    </div>
    <div class="content">

    </div>
  </div>
</template>

<script>
export default {
  name: "bussinessDetail",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.bussinessDetail {
    width: 80%;
    margin: auto;
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
}
</style>

