<template>
  <div class="bussinessDetail">
    <div class="routerTip">
      当前位置：
      <span @click="goRouter('/SystemSurvey')">首页</span> >
      <span @click="goRouter('/dynamics')">建设动态</span> >
      <span @click="goRouter('/')">部委诚信新闻</span>
    </div>
    <div class="content">
      <div class="base">
        <!-- <img src="@/assets/images/boss.png" alt /> -->
          <div style="display: flex;width:300px;margin: 10px auto;align-items:center">
            <span class="companyName">宜宾五粮液股份有限公司</span>
            <span class="status">存续</span>
          </div>

          <span class="name-item">
            <img src="@/assets/images/phone-small.png" />
            统一社会信用代码:91350200MA31U6548L
          </span>
          <span class="name-item">
            <img src="@/assets/images/people-small.png" />
            法定代表人:刘中国
          </span>
          <span class="name-item">
            <img src="@/assets/images/address-small.png" />
            地址:四川省宜宾市翠屏区岷江西路150号
          </span>
      </div>
      <div class="more">
        
        <div class="more-item">
          <div class="title">工商信息</div>
          <industryInfo style="width: 90%;margin:auto" />
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
import industryInfo from '../common/industryInfo';
export default {
  name: "bussinessDetail",
  data() {
    return {};
  },
  components:{
    industryInfo
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

