<template>
  <div class="bossDetail">
    <div class="routerTip">
      当前位置:
      <span @click="goRouter('/Example')">诚信示范榜单</span> >
      <span @click="goRouter('/Example')">诚信示范企业家</span> >
      <span @click="goRouter('/detail/bossDetail')">诚信示范企业家详情</span>
    </div>
    <div class="content">
      <div class="base">
        <img src="@/assets/images/boss-2.jpg" style="width:126px;height:126px; border-radius:50%" />
        <div>
          <span class="item-name">李曙光</span>
          <span>/ 董事长</span>
          <img style="
            width: 108px;
            height: 19px;
            margin-left: 10px;
          " src="../../assets/images/title-3.png" alt="">
        </div>
        <div class="item-content">
          <span>宜宾五粮液股份有限公司</span>
          <span style="margin-left: 20px;">证书编号：CXP-2018-00548</span>
        </div>
      </div>
      <div class="more">
        <div class="more-item">
          <div class="title" ><div class="tip-gap" style="margin-top: 40px"></div>基本履历<div class="tip-gap" style="margin-left:7px"></div></div>
          <div class="item-content">
            <span>1992年7月任省经贸委办公室秘书科科长</span>
            <span>1994年5月任省经贸委办公室副主任</span>
            <span>2008年11月任省经委办公室主任、党组办主任</span>
            <span>2017年3月，五粮液集团有限公司党委书记、董事长，五粮液股份有限公司党委书记</span>
          </div>
        </div>
        <div class="more-item">
          <div class="title">
            <div class="tip-gap" style="margin-top: 40px"></div>诚信事迹<div class="tip-gap" style="margin-left:7px"></div>
          </div>
          <div class="item-content" style="height: 50px">
            <span>3月15日宜宾五粮液股份有限公司举办3.15打假宣传活动</span>
          </div>
        </div>
        <div class="more-item">
          <div class="title">
            <div class="tip-gap" style="margin-top: 40px"></div>诚信证书<div class="tip-gap" style="margin-left:7px"></div>
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
  name: "bossDetail",
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
.bossDetail {
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
    width: 60%;
    height: 727px;
    margin: 100px auto;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    .base {
      height: 200px;
      border-bottom: 1px solid rgba(229, 229, 229, 1);
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

