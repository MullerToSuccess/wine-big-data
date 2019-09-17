<template>
  <div class="newsDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/SystemSurvey')">首页</span> >
      <span @click="goRouter('/dynamics')">建设动态</span> >
      <span @click="goRouter('/')">部委诚信新闻</span>
    </div>
    <div class="content">
      <div class="content-top">
        <div class="title">国家市场监督管理总局成立</div>
        <div class="date">
          <img src="@/assets/images/from.png" alt />
          北京晨报 2018/03/26
        </div>
      </div>
      <div class="content-text">
        <!-- 近日，国家发改委等多部委印发《绿色高效制冷行动方案》（以下简称《方案》），要求三年内空调能效提高30%，同时将严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。
        根据《方案》，我国是全球最大的制冷产品生产、消费和出口国，制冷产业年产值达8000亿元，吸纳就业超过300万人，家用空调产量全球占比超过80%，电冰箱占比超过60%。我国制冷用电量占全社会用电量15%以上，年均增速近20%，大中城市空调用电负荷约占夏季高峰负荷的60%，主要制冷产品节能空间达30%-50%。
        家电行业分析师梁振鹏表示，目前我国还处于能源紧张阶段，整体而言，发电量不能满足全部用电需求，而我国现有的制冷产品，与日本、欧洲等发达国家相比，能效比都比较低，制冷效率也低。《方案》提出，目标到2022年，家用空调、多联机等制冷产品的市场能效水平提升30%以上，绿色高效制冷产品市场占有率提高20%，实现年节电约1000亿千瓦时。到2030年，大型公共建筑制冷能效提升30%，制冷总体能效水平提升25%以上，绿色高效制冷产品市场占有率提高。
        值得注意的是，本次《方案》提出，严厉打击产品能效虚标、认证检测作假、虚假宣传等行为，增大制冷产品抽查力度。完善监督抽查结果公布制度，将抽查检查结果和行政处罚信息纳入国家企业信用信息公示系统和全国信用信息共享平台，实行联合惩戒。强化质量责任追究机制，严格问责追责，不符合强制性能效标准的产品由生产企业限期召回，责令情节严重的企业停产整顿。加大对制冷产品回收处理的监管，规范废旧制冷产品和制冷剂的回收、拆解和再利用。鼓励消费者监督、第三方监督、企业互查等社会监督，规范市场行为，加大消费者合法权益的保护力度。
        梁振鹏表示，为了寻求暴利，目前不少空调企业都存在能效虚标的问题，有一些产品为了卖更高价钱，能源等级明明只达到三级，但虚标为一级。所以，这次的《方案》就在强化监督管理，这一点对空调市场非常重要。 -->
        3月21日下午，新组建的国家市场监督管理总局正式成立。今年64岁的原国家工商行政管理总局党组书记、局长张茅任国家市场监督管理总局局长、党组副书记。63岁的原国家食品药品监督管理总局党组书记、局长毕井泉任国家市场监督管理总局党组书记、副局长。

近日，中共中央印发了《深化党和国家机构改革方案》，深化国务院机构改革部分提出组建国家市场监督管理总局。

国家市场监督管理总局的主要职责是，负责市场综合监督管理，统一登记市场主体并建立信息公示和共享机制，组织市场监管综合执法工作，承担反垄断统一执法，规范和维护市场秩序，组织实施质量强国战略，负责工业产品质量安全、食品安全、特种设备安全监管，统一管理计量标准、检验检测、认证认可工作等。

《方案》同时提出，组建国家药品监督管理局，由国家市场监督管理总局管理，主要职责是负责药品、化妆品、医疗器械的注册并实施监督管理。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "newsDetail",
  data() {
    return {};
  },
  methods: {
    goRouter(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped lang='scss'>
.newsDetail {
  // height: 500px;
  width: 100%;
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
    span:hover{
      cursor: pointer;
    }
  }
  .content {
    width: 1200px;
    height: 495px;
    margin: 10px auto;
    margin-bottom: 20px;
    border: 1px solid rgba(229, 229, 229, 1);
    .content-top {
      height: 90px;
      text-align: center;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
      .title {
        margin: 10px;
        font-size: 20px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        line-height: 48px;
      }
      .date {
        margin: auto;
        width: 151px;
        height: 12px;
        font-size: 12px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 21px;
        opacity: 0.5;
        display: flex;
        align-items: center;
        img {
          margin-right: 5px;
        }
      }
    }
    .content-text {
      width: 1161px;
      height: 350px;
      font-size: 14px;
      font-family: "MicrosoftYaHeiLight";
      font-weight: 300;
      color: rgba(0, 0, 0, 1);
      line-height: 21px;
      opacity: 0.8;
      text-align: left;
      line-height: 28px;
      margin: auto;
      margin-top: 14px;
      text-indent: 25px;
    }
  }
}
</style>
