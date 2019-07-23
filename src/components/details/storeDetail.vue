<template>
  <div class="storeDetail">
    <div class="routerTip">
      当前位置:
      <span @click="goRouter('/Example')">诚信示范榜单</span> >
      <span @click="goRouter('/Example')">诚信示范企业家</span> >
      <span @click="goRouter('/storeDetail')">诚信示范门店详情</span>
    </div>
    <div class="content">
      <div class="base">
        <!-- <img src="@/assets/images/boss.png" alt /> -->
        <div style="display: flex;width:400px;margin: 10px auto;align-items:center">
          <span class="companyName">宜宾五粮液股份有限公司</span>
          <span>
            <img
              style="
            width: 108px;
            height: 19px;
            margin-left: 10px;
          "
              src="../../assets/images/title-2.png"
              alt
            />
          </span>
        </div>

        <span class="name-item">
          <img src="@/assets/images/phone-small.png" />
          门店类型:--
        </span>
        <span class="name-item">
          <img src="@/assets/images/address-small.png" />
          地址:四川省宜宾市翠屏区岷江西路150号
        </span>
        <span class="name-item">
          <img src="@/assets/images/address-small.png" />
          证书编号：CXP-2018-00548
        </span>
      </div>
      <div class="more">
        <div class="more-item">
          <div class="title">
            <div class="tip-gap"></div>门店简介
            <div class="tip-gap" style="margin-left:7px"></div>
          </div>
          <div class="item-content">
            <span>新昌县南明街道玉清茶庄，是一家产供销一体化的专业茶庄，主要生产经营高山无公害大佛龙井，与上海，广东，江苏，山东，安徽，内蒙古，宁夏等多地客户建立了长期的友好合作关系。</span>
            <span>玉清茶庄坚持诚信为本，全程实行标准化生产，严格按照无公害要求操作，增施有机肥，加强病虫害防治，减少化肥和农药的使用，有利于促进农村生态环境的改善。近年来，社会对玉清茶庄的诚信状况反映良好，从未出现安全生产事故、食品安全事故、消费者权益纠纷等情况。</span>
          </div>
        </div>
        <div class="more-item">
          <div class="title">
            <div class="tip-gap"></div>诚信证书
            <div class="tip-gap" style="margin-left:7px"></div>
          </div>
          <div class="item-content">
            <span>证书编号： 201807600103051</span>
            <span>颁发日期： 2018年05月29日</span>
            <span>有效期至：2021年05月28日</span>
            <span>发证单位（协会）：中国酒业大数据协会</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "storeDetail",
  data() {
    return {};
  },
  methods:{
    goRouter(path){
      this.$router.push(path)
    }
  }
};
</script>
<style lang="scss" scoped>
.storeDetail {
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
  .content {
    width: 70%;
    // height: 727px;
    margin: 100px auto;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    .base {
      height: 200px;
      width: 50%;
      margin: auto;
      // border-bottom: 1px solid rgba(229, 229, 229, 1);
      text-align: center;
      line-height: 40px;
      img {
        margin-top: -62.5px;
      }
      .item-name {
        font-size: 19px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
      }
      .item-content {
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(0, 0, 0, 0.6);
        line-height: 28px;
      }
      .companyName {
        font-size: 20px;
        font-weight: bold;
      }

      .status {
        background: #fff;
        padding: 2px;
        margin-left: 10px;
        // background: greenyellow;
        width: 44px;
        height: 19px;
        border: 1px solid rgba(0, 0, 0, 1);
        width: 24px;
        font-size: 12px;
        font-family: "MicrosoftYaHeiLight";
        font-weight: 300;
        color: rgba(22, 22, 22, 1);
        line-height: 24px;
      }

      span {
        display: block;
        height: 30px;
      }
    }
    .more {
      .item-content {
        height: 100px;

        // .more-item {
        //   margin-top: 10px;
        span {
          display: block;
          font-family: "MicrosoftYaHei";
          font-weight: 400;
          color: rgba(22, 22, 22, 0.5);
          line-height: 40px;
          height: 20px;
        }
      }
      //   }
    }
  }
}
</style>

