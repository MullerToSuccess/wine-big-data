<template>
  <div id="accusation">
    <div class="banner"></div>
    <div class="content">
      <div class="accusation-content">
        <div class="image-content content1"></div>
        <span class="title">消费者举报</span>
      </div>
      <div class="accusation-content">
        <div class="image-content content2"></div>
        <span class="title">酒企申诉</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Accusation",
  data() {
    return {};
  }
};
</script>
<style lang='scss' scoped>
#accusation {
  .banner {
    width: 100%;
    height: 400px;
    background: url("../assets/images/accusation-bg.png");
  }
  .content {
    width: 70%;
    margin: auto;
    height: 500px;
    display: flex;
    align-content: center;
    align-items: center;
    .accusation-content {
      width: 578px;
      height: 327px;
      border: 1px solid #ccc;
      margin: 20px auto;
      .image-content {
        height: 287px;
        background-size: 100% 100%;
      }
      .content1{
        background: url("../assets/images/accusation-1.png");
      }
      .content2{
        background: url("../assets/images/accusation-2.png");
      }
      .title {
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        color: rgba(22, 22, 22, 1);
      }
    }
    .accusation-content:hover{
        cursor: pointer;
    }
  }
}
</style>
