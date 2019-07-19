<template>
  <div class="bossDetail">
    <div class="content">
      <div class="base">
        <img src="@/assets/images/boss.png" alt />
        <div>
          <span class="item-name">尹雪涛</span>
          <span>/ 副总裁</span>
        </div>
        <div class="item-content">
          <span>宜宾五粮液股份有限公司</span>
          <span style="margin-left: 20px;">证书编号：CXP-2018-00548</span>
        </div>
      </div>
      <div class="more">
        <div class="more-item">
          <div class="title">基本履历</div>
          <div class="item-content">
            <span>1989年 毕业于上海水产大学，获得学士学位</span>
            <span>1983-1993 上海鱼品厂，获得上海市科技进步三等奖</span>
            <span>1999-2008 锦江国际股份有限公司，获得工程师职称；</span>
            <span>2008-至今 上海恩波露食品有限公司；</span>
          </div>
        </div>
        <div class="more-item">
          <div class="title">诚信事迹</div>
          <div class="item-content">
            <span>3月15日宜宾五粮液股份有限公司举办3.15打假宣传活动</span>
          </div>
        </div>
        <div class="more-item">
          <div class="title">诚信证书</div>
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
  }
};
</script>
<style lang="scss" scoped>
.bossDetail {
  width: 100%;
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

