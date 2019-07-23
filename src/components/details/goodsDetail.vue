<template>
  <div class="goodsDetail">
    <div class="routerTip">
      当前位置:
      <span @click="goRouter('/Example')">诚信示范榜单</span> >
      <span @click="goRouter('/Example')">诚信示范企业家</span> >
      <span @click="goRouter('/detail/goodsDetail')">诚信示范酒品详情</span>
    </div>
    <div class="content">
      <div class="base">
        <img src="@/assets/images/wine-info.png" alt />
        <div class="item-content item-title">
          <div
            style="font-size:20px;
font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(22,22,22,1);"
          >
            52度五粮国宾酒精品500ml
            <img src="../../assets/images/title-1.png" alt />
          </div>
          <span>
            <img src="@/assets/images/good-1.png" />
            香型：酱香型
          </span>
          <span>
            <img src="@/assets/images/good-2.png" />
            所属企业：宜宾五粮液股份有限公司
          </span>
          <span>
            <img src="@/assets/images/good-3.png" />
            证书编号：CXP-2018-00548
          </span>
        </div>
      </div>
      <div class="more">
        <div class="more-item">
          <div class="title">
            <div class="tip-gap" style="margin-top: 10px;"></div>基本信息
            <div class="tip-gap" style="margin-left:7px"></div>
          </div>
          <div class="item-content">
            <span>产品名称：52度五粮国宾酒精品500ml</span>
            <span>容量：500ml</span>
            <span>香型：酱香型</span>
            <span>等级：优级</span>

            <span>省份：四川</span>
            <span>价格区间：1000~2000元</span>
            <span>年度销量：6666</span>
            <span>所属企业：宜宾五粮液股份有限公司</span>
          </div>
        </div>
        <div class="more-item" style="height: 120px;">
          <div class="title">
            <div class="tip-gap"></div>诚信事迹
            <div class="tip-gap" style="margin-left:7px"></div>
          </div>
          <div class="item-content">
            <span>追溯建设情况、产品打假进展、优秀售后服务事迹</span>
          </div>
        </div>
        <div class="more-item" style="height: 160px;">
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
  name: "goodsDetail",
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
.goodsDetail {
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
    span:hover {
      cursor: pointer;
    }
  }
  .content {
    width: 1201px;
    // height: 727px;
        margin-left: 348px;
        margin-bottom: 20px;
    // margin: 100px auto;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    .base {
      height: 200px;
      //   border-bottom: 1px solid rgba(229, 229, 229, 1);
      text-align: center;
      line-height: 40px;
      display: flex;
      //   position: absolute;
      align-content: center;
      align-items: center;
      width: 100%;
      margin: 10px 25%;
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
    }
    .more {
      border-top: 1px solid rgba(229, 229, 229, 1);
      .item-content {
        height: 250px;

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
    .item-title {
      padding-left: 20px;
      span {
        display: block;
        text-align: left;
      }
    }
  }
}
</style>

