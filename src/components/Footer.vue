<template>
  <div class="footer">
    <div class="footer-top">
      <div class="footer-left">
        <div>
          <div>主办单位</div>
          <div class="content">酒业大数据中心</div>
        </div>
        <div>
          <div>指导单位：</div>
          <div class="content">国家信息中心</div>
        </div>
        <div>
          <div>技术支持</div>
          <div class="content">成都数之联科技有限公司</div>
        </div>

        <!-- <div style="margin-bottom: 10px; font-size: 20px;text-align: left">网站 | 关于我们</div>
        <span>主办单位：酒业大数据中心 | 指导单位： 国家信息中心 | 技术支持：成都数之联科技有限公司</span>
        <div>
          <span>网站标识码：bm04000009 京ICP备05052393号-5</span>
          <span>京公网安备 11010202007696号</span>
        </div>-->
      </div>
      <div class="footer-right">
        <div style="margin-bottom: 10px;text-align: left">
          <i class="el-icon-phone"></i>028-87554326
        </div>
        <div style="margin-bottom: 10px;text-align: left">
          <i class="el-icon-s-home"></i>shuzhilian@unionbigdata.com
        </div>
        <div style="margin-bottom: 10px;text-align: left">
          <i class="el-icon-message"></i>
          四川省成都市高新区吉泰五路88号香年广场T3栋5楼
        </div>
      </div>
    </div>
    <div class="line"></div>
    <div class="bottom-tip">网站标识码：bm04000009 京ICP备05052393号-5 京公网安备 11010202007696号</div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.footer {
  /* position: fixed; */
  bottom: 0;
  width: 1920px;
  height: 287px;
  background: rgba(69, 60, 60, 1);
  color: #fff;
  font-size: 14px;
  width: 100%;
  .footer-top {
    width: 80%;
    margin: auto;
    height: 200px;
    display: flex;
    align-content: center;
    align-items: center;
    .footer-left {
      width: 60%;
      padding: 30px;
      text-align: right;
      display: flex;
      div {
        width: 80%;
        margin-top: 10px;
        .content {
          color: #c8c8c8;
        }
      }
    }
    .footer-right {
      width: 40%;
      i {
        margin-right: 10px;
      }
      .img-logo {
        width: 80px;
        height: 80px;
      }
    }
  }
  .line {
    width: 1197px;
    height: 1px;
    background: rgba(255, 255, 255, 1);
    opacity: 0.2;
    margin: auto;
  }
  .bottom-tip {
    width: 644px;
    height: 17px;
    font-size: 14px;
    font-family: MicrosoftYaHei;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
    margin: 20px auto;
  }
}
</style>
