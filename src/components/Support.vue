<template>
  <div id="support">
    <div class="banner"></div>
    <div class="content">
      <div class="support-content">
        <img src="../assets/images/support-1.png" alt />
        <div class="title">酒店诚信大数据接入</div>
      </div>
      <div class="support-content otherback">
        <img src="../assets/images/support-2.png" alt />
        <div class="title">更多平台服务咨询</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Support",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
#support {
  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/support-bg.png");
  }
  .content {
    width: 1000px;
    // height: 500px;
    margin: auto;
    display: flex;
    align-content: center;
    align-items: center;
    text-align: center;
    .support-content {
      width: 590px;
      height: 288px;
      border: 1px solid #ccc;
      border-radius: 10px;
      margin: 40px 10px;
      line-height: 180px;
      background: rgba(47, 97, 155, 1);
      border: 1px solid rgba(224, 224, 224, 1);
      display: flex;
      align-content: center;
      align-items: center;
      // margin: auto;
      .title {
        font-size: 30px;
        width: 299px;
        font-family: "MicrosoftYaHei-Bold";
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
      }
      img {
        width: 75px;
        height: 75px;
        box-shadow: 0px 6px 5px 0px rgba(68, 127, 52, 0.15);
        margin-left: 64px;
      }
    }
    .otherback {
      background: rgba(94, 145, 80, 1);
      border: 1px solid rgba(224, 224, 224, 1);
    }
  }
}
</style>
