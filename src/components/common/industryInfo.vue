<template>
  <div class="industryInfo">
    <div>
      <span class="cell-small">
        <span class="title">统一社会信用代码</span>
        <span class="text">91511500MA62A0WM8P</span>
      </span>
      <span class="cell-small">
        <span class="title">登记状态</span>
        <span class="text">存续</span>
      </span>
    </div>
    <div>
      <span class="cell-small">
        <span class="title">法定代表人</span>
        <span class="text">刘中国对外投资任职</span>
      </span>
      <span class="cell-small">
        <span class="title">成立日期</span>
        <span class="text">1998/4/21</span>
      </span>
    </div>
    <div>
      <span class="cell-small">
        <span class="title">企业类型</span>
        <span class="text">股份有限公司（上市、国有控股）</span>
      </span>
      <span class="cell-small">
        <span class="title">核准日期</span>
        <span class="text">2018/7/5</span>
      </span>
    </div>
    <div>
      <span class="cell-small">
        <span class="title">注册资本</span>
        <span class="text">388160.800500万人民币</span>
      </span>
      <span class="cell-small">
        <span class="title">营业期限自</span>
        <span class="text">1998/4/21</span>
      </span>
    </div>
    <div>
      <span class="cell-small">
        <span class="title">登记机关</span>
        <span class="text">宜宾市工商行政管理局</span>
      </span>
      <span class="cell-small">
        <span class="title">营业期限自</span>
        <span class="text">1998/4/21</span>
      </span>
    </div>
    <div class="cell-big">
      <span class="title">企业地址</span>
      <span class="text">四川省宜宾市翠屏区岷江西路150号</span>
    </div>
    <div class="cell-big" style="height: 100px;">
      <span class="title">经营范围</span>
      <span class="text">
        主营：酒类产品及相关辅助产品（瓶盖、商标、标识及包装制品）的生产经营;兼营：饮料、药品、水果种植、农业种
        植、进出口业务、物业管理、投资管理(不得从事非法集资、吸收公众资金等金融活动)。(依法须经批准的...
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "industryInfo",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.industryInfo {
  width: 936px;
  // height: 500px;
  border: 1px solid #ccc;
  div {
    // height: 35px;
    border-bottom: 1px solid #ccc;
  }
  .cell-small {
    text-align: left;
    height: 30px;
    width: 468px;
    .title {
      width: 155px;
      background: #ccc;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: rgba(246, 246, 246, 1);
      //   border: 1px solid rgba(229, 229, 229, 1);
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(22, 22, 22, 1);
    }
    .text {
      width: 305px;
      //   background: red;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(22, 22, 22, 1);
    }
  }
  .cell-big {
    height: 30px;
    width: 936px;
    text-align: left;
    .title {
      width: 158px;
      background: #ccc;
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: rgba(246, 246, 246, 1);
      //   border: 1px solid rgba(229, 229, 229, 1);
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(22, 22, 22, 1);
    }
    .text {
      width: 700px;
      //   background: red;
      display: inline-block;
      height: 60px;
      line-height: 30px;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(22, 22, 22, 1);
    }
  }
}
</style>

